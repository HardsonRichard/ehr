import React, { useState } from "react";

const ViewOrderedTest = () => {
  const orderedTests = [
    {
      id: 1,
      patientName: "John Doe",
      testType: "Blood Test",
      status: "Pending",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      testType: "Urine Test",
      status: "Completed",
    },
    {
      id: 3,
      patientName: "Mike Johnson",
      testType: "X-Ray",
      status: "Pending",
    },
  ];

  const [selectedTestId, setSelectedTestId] = useState(null);
  const [result, setResult] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleAddResult = (testId) => {
    setSelectedTestId(testId);
  };

  const handleOverlayClose = () => {
    setSelectedTestId(null);
    setResult("");
    setFeedback("");
  };

  const handleResultChange = (event) => {
    setResult(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform necessary actions with the result and feedback data
    console.log("Test ID:", selectedTestId);
    console.log("Result:", result);
    console.log("Feedback:", feedback);
    // Reset form values and close overlay
    setResult("");
    setFeedback("");
    setSelectedTestId(null);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold mb-4">View Ordered Tests</h1>
      <table className="w-full max-w-xl border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Patient Name</th>
            <th className="py-2 px-4 border-b">Test Type</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {orderedTests.map((test) => (
            <tr key={test.id}>
              <td className="py-2 px-4 border-b">{test.patientName}</td>
              <td className="py-2 px-4 border-b">{test.testType}</td>
              <td className="py-2 px-4 border-b">{test.status}</td>
              <td className="py-2 px-4 border-b">
                {test.status === "Pending" ? (
                  <button
                    className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-1 px-2 rounded"
                    onClick={() => handleAddResult(test.id)}
                  >
                    Add Result
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Overlay */}
      {selectedTestId && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white w-80 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Add Result</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Result:</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  value={result}
                  onChange={handleResultChange}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-semibold">Feedback:</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows="4"
                  value={feedback}
                  onChange={handleFeedbackChange}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-gray-500 font-semibold mr-4"
                  onClick={handleOverlayClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewOrderedTest;
