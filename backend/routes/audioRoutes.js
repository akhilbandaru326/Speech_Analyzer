const express = require("express");
const { analyzeText } = require("../controllers/audioController");

const router = express.Router();

router.post("/analyze-text", analyzeText);

module.exports = router;
