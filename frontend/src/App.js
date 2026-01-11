import { useState } from "react";
import AudioRecorder from "./AudioRecorder";
import Report from "./Report";

function App() {
  const [report, setReport] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          🎙 Speech Analyzer
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Improve your communication skills with AI feedback
        </p>

        <div className="mt-8">
          <AudioRecorder setReport={setReport} />
        </div>

        {report && (
          <div className="mt-8">
            <Report report={report} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
