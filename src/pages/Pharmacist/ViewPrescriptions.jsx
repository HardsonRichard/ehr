import React, { useState } from "react";

const ViewPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      patientName: "John Doe",
      medication: "Medication 1",
      dosage: "10mg",
      frequency: "Twice daily",
      status: "Pending",
      given: false,
    },
    {
      id: 2,
      patientName: "Jane Smith",
      medication: "Medication 2",
      dosage: "5mg",
      frequency: "Once daily",
      status: "Completed",
      given: true,
    },
    {
      id: 3,
      patientName: "Mike Johnson",
      medication: "Medication 3",
      dosage: "20mg",
      frequency: "Three times daily",
      status: "Pending",
      given: false,
    },
  ]);

  const handleMedicationConfirmation = (id) => {
    setPrescriptions((prevPrescriptions) =>
      prevPrescriptions.map((prescription) =>
        prescription.id === id ? { ...prescription, given: true } : prescription
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">View Prescriptions</h2>

      <table className="w-full border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Patient Name</th>
            <th className="py-2 px-4 border-b">Medication</th>
            <th className="py-2 px-4 border-b">Dosage</th>
            <th className="py-2 px-4 border-b">Frequency</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription.id}>
              <td className="py-2 px-4 border-b">{prescription.patientName}</td>
              <td className="py-2 px-4 border-b">{prescription.medication}</td>
              <td className="py-2 px-4 border-b">{prescription.dosage}</td>
              <td className="py-2 px-4 border-b">{prescription.frequency}</td>
              <td className="py-2 px-4 border-b">{prescription.status}</td>
              <td className="py-2 px-4 border-b">
                {!prescription.given && prescription.status === "Pending" ? (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleMedicationConfirmation(prescription.id)}
                  >
                    Confirm
                  </button>
                ) : (
                  <span className="text-green-500 font-semibold">Given</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPrescriptions;

