const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  transcript: String,
  wordCount: Number,
  fluencyScore: Number,
  suggestions: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Report", reportSchema);
