# 🎙 Speech Analyzer Web App

A full-stack web application that analyzes a user's speaking skills and provides AI-based feedback.

## 🚀 Features
- Speech-to-text using browser Speech API
- AI-based speech analysis
- Fluency scoring & suggestions
- Analytics charts
- Dark mode UI
- MongoDB data storage

## 🛠 Tech Stack
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB Atlas
- AI: OpenRouter (open-source LLMs)

## 📂 Project Structure
speech-analyzer/
│
├── frontend/                     # React app
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── AudioRecorder.js      # Speech recording / speaking logic
│   │   ├── Report.js             # Report display
│   │   ├── App.js                # Main component
│   │   ├── api.js                # Axios config
│   │   ├── index.js              # React entry point
│   │   └── index.css             # Tailwind / CSS
│   │
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── backend/                      # Node + Express
│   ├── audioController.js        # Logic (speech analysis)
│   ├── audioRoutes.js            # API routes
│   ├── Report.js                 # MongoDB schema
│   ├── db.js                     # MongoDB connection
│   ├── server.js                 # Backend entry file
│   ├── package.json
│   └── .env                      # Environment variables
│
├── .gitignore
└── README.md

## ⚙️ Setup Instructions

### Backend
```bash
cd backend
npm install
node server.js

**### **Frontend****
cd frontend
npm install
npm start

#.env
OPENROUTER_API_KEY=your_key_here
MONGO_URI=your_mongodb_uri
PORT=5000
 
