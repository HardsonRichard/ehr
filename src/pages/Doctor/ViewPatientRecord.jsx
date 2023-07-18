// import React, { useState } from "react";
// import { HiDocumentText } from "react-icons/hi";

// const ViewPatientRecord = () => {
//   const [patientId, setPatientId] = useState("");
//   const [searchedRecords, setSearchedRecords] = useState([
//     { id: 1, patientName: "Jane Muhando", date: "2023-07-01" },
//     { id: 2, patientName: "Abdul Swalehe", date: "2023-07-02" },
//     { id: 3, patientName: "Kamali Saidi", date: "2023-07-03" },
//   ]);
//   const [showPdfOverlay, setShowPdfOverlay] = useState(false);
//   const [selectedRecord, setSelectedRecord] = useState(null);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Implement logic to search for patient records based on the patientId
//     // Set the searched records to display in the table
//     setSearchedRecords([
//       { id: 4, patientName: "Emily Davis", date: "2023-07-04" },
//       { id: 5, patientName: "David Wilson", date: "2023-07-05" },
//     ]);
//   };

//   const handlePdfLinkClick = (record) => {
//     setSelectedRecord(record);
//     setShowPdfOverlay(true);
//   };

//   const handlePdfOverlayClose = () => {
//     setShowPdfOverlay(false);
//     setSelectedRecord(null);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center m-4 w-full">
//       <h2 className="text-blue-500">VIEW PATIENT RECORDS</h2>

//       {/* Search Bar */}
//       {/* <form className="mt-8 mb-4" onSubmit={handleSearchSubmit}>
//         <div className="flex items-center mb-2">
//           <label htmlFor="patientId" className="mr-2">
//             Enter Patient ID:
//           </label>
//           <input
//             type="text"
//             id="patientId"
//             value={patientId}
//             onChange={(e) => setPatientId(e.target.value)}
//             className="border rounded-md px-2 py-1"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
//           >
//             Search
//           </button>
//         </div>
//       </form> */}

//       {/* Table of Records */}
//       {searchedRecords.length > 0 && (
//         <div className="w-full mt-4">
//           <table className="border-collapse border-gray-300 w-full">
//             <thead>
//               <tr className="bg-blue-700 text-white">
//                 <th className="border py-2 px-4">Patient Name</th>
//                 <th className="border py-2 px-4">Date</th>
//                 <th className="border py-2 px-4">View PDF</th>
//               </tr>
//             </thead>
//             <tbody>
//               {searchedRecords.map((record) => (
//                 <tr key={record.id}>
//                   <td className="border py-2 px-4">{record.patientName}</td>
//                   <td className="border py-2 px-4">{record.date}</td>
//                   <td className="border py-2 px-4">
//                     <button
//                       className="bg-blue-500 text-white px-2 py-1 rounded-md"
//                       onClick={() => handlePdfLinkClick(record)}
//                     >
//                       <HiDocumentText size={18} fill="gray" className="mr-1" />
//                       View PDF
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* PDF Overlay */}
//       {showPdfOverlay && selectedRecord && (
//         <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
//           <div className="bg-white p-4 rounded-md">
//             <h3 className="text-sm text-blue-600 font-bold mb-2">
//               Patient Record PDF
//             </h3>
//             <p>
//               <span className="font-semibold">Patient Name:</span>{" "}
//               {selectedRecord.patientName}
//               <br />
//               <span className="font-semibold">Date:</span> {selectedRecord.date}
//               <br />
//               <span className="font-semibold">Symptoms:</span> Fever, cough,
//               fatigue
//               <br />
//               <span className="font-semibold">Diagnosis:</span> Influenza
//               <br />
//               <span className="font-semibold">Test:</span> Nasopharyngeal swab
//               <br />
//               <span className="font-semibold">Prescriptions:</span>{" "}
//               Antipyretics, rest, plenty of fluids
//             </p>
//             <div className="flex justify-end">
//               <button
//                 className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4"
//                 onClick={handlePdfOverlayClose}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewPatientRecord;

import React, { useState } from "react";
import { HiDocumentText } from "react-icons/hi";

const ViewPatientRecord = () => {
  const [patientId, setPatientId] = useState("");
  const [searchedRecords, setSearchedRecords] = useState([
    { id: 1, date: "2023-07-01" },
    { id: 2, date: "2023-07-02" },
    { id: 3, date: "2023-07-03" },
  ]);
  const [showPdfOverlay, setShowPdfOverlay] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [patientName, setPatientName] = useState("John Doe");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement logic to search for patient records based on the patientId
    // Set the searched records to display in the table
    setSearchedRecords([
      { id: 4, date: "2023-07-04" },
      { id: 5, date: "2023-07-05" },
    ]);
    // Set the patient name based on the patientId
    setPatientName("Mussa Banzi");
  };

  const handlePdfLinkClick = (record) => {
    setSelectedRecord(record);
    setShowPdfOverlay(true);
  };

  const handlePdfOverlayClose = () => {
    setShowPdfOverlay(false);
    setSelectedRecord(null);
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 w-full">
      <h2 className=" text-lg font-semibold text-blue-500">
        VIEW PATIENT RECORDS
      </h2>

      {/* Search Bar */}
      <form className="mt-8 mb-4" onSubmit={handleSearchSubmit}>
        <div className="flex items-center mb-2">
          <label htmlFor="patientId" className="mr-2">
            Enter Patient ID:
          </label>
          <input
            type="text"
            id="patientId"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="border rounded-md px-2 py-1"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
          >
            Search
          </button>
        </div>
      </form>

      {/* Patient Name */}
      {patientName && (
        <div className="flex justify-start">
          <h3 className="text-sm font-semibold text-blue-700 mt-4">
            {patientName}
          </h3>
        </div>
      )}

      {/* Table of Records */}
      {searchedRecords.length > 0 && (
        <div className="w-full">
          <table className="border-collapse border-gray-300 w-full">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border py-2 px-4">Date</th>
                <th className="border py-2 px-4">View PDF</th>
              </tr>
            </thead>
            <tbody>
              {searchedRecords.map((record) => (
                <tr key={record.id}>
                  <td className="border py-2 px-4">{record.date}</td>
                  <td className="border py-2 px-4">
                    <div className="flex justify-center">
                      {" "}
                      <button
                        className="bg-blue-500 text-white flex gap-1 px-2 py-1 rounded-md"
                        onClick={() => handlePdfLinkClick(record)}
                      >
                        <HiDocumentText size={18} className="mr-1" />
                        View Pdf
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* PDF Overlay */}
      {showPdfOverlay && selectedRecord && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-sm text-blue-600 font-bold mb-2">
              Patient Record PDF
            </h3>
            <p>
              <span className="font-semibold">Patient Name:</span> {patientName}
              <br />
              <span className="font-semibold">Date:</span> {selectedRecord.date}
              <br />
              <span className="font-semibold">Symptoms:</span> Fever, cough,
              fatigue
              <br />
              <span className="font-semibold">Diagnosis:</span> Influenza
              <br />
              <span className="font-semibold">Test:</span> Nasopharyngeal swab
              <br />
              <span className="font-semibold">Prescriptions:</span>{" "}
              Antipyretics, rest, plenty of fluids
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={handlePdfOverlayClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPatientRecord;
