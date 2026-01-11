export default function Report({ report }) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        📊 Speech Report
      </h2>

      <p className="text-gray-700 mb-2">
        <span className="font-medium">Transcript:</span> {report.transcript}
      </p>

      <div className="flex gap-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow w-1/2">
          <p className="text-gray-500 text-sm">Word Count</p>
          <p className="text-2xl font-bold text-indigo-600">
            {report.wordCount}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow w-1/2">
          <p className="text-gray-500 text-sm">Fluency Score</p>
          <p className="text-2xl font-bold text-green-600">
            {report.fluencyScore}/100
          </p>
        </div>
      </div>

      <ul className="mt-4 list-disc list-inside text-gray-700">
        {report.suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
