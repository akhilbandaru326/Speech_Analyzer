const axios = require("axios");
const Report = require("../models/Report");

exports.analyzeText = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ error: "No text received" });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content:
              "You are a speech coach. Analyze the user's speech and give feedback, strengths, weaknesses, and suggestions."
          },
          {
            role: "user",
            content: text
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",

          // 🔴 THESE TWO HEADERS ARE REQUIRED
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Speech Analyzer Project"
        }
      }
    );

    const aiFeedback = response.data.choices[0].message.content;

    const report = await Report.create({
      transcript: text,
      wordCount: text.split(" ").length,
      fluencyScore: 80,
      suggestions: aiFeedback.split("\n")
    });

    res.json(report);

  } catch (err) {
    console.error(
      "❌ OpenRouter Error:",
      err.response?.data || err.message
    );
    res.status(500).json({ error: "AI analysis failed" });
  }
};
