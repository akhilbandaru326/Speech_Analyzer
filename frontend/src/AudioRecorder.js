import { useState, useRef } from "react";
import api from "./api";

export default function AudioRecorder({ setReport }) {
  const [listening, setListening] = useState(false);
  const transcriptRef = useRef("");
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;

    recognition.onresult = (event) => {
      const last = event.results[event.results.length - 1];
      transcriptRef.current += " " + last[0].transcript;
    };

    recognition.start();
    recognitionRef.current = recognition;
    setListening(true);
  };

  const stopListening = async () => {
    recognitionRef.current.stop();
    setListening(false);

    const res = await api.post("/audio/analyze-text", {
      text: transcriptRef.current,
    });

    setReport(res.data);
    transcriptRef.current = "";
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={listening ? stopListening : startListening}
        className={`px-6 py-3 rounded-xl text-white font-semibold transition
        ${
          listening
            ? "bg-red-500 hover:bg-red-600"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {listening ? "Stop & Analyze" : "Start Speaking"}
      </button>
    </div>
  );
}
