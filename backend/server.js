require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ ENABLE DB
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/audio", require("./routes/audioRoutes"));

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
