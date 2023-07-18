import React, { useState } from "react";

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Kiparu Saidi",
      time: "9:00 AM",
      diagnosis: "",
      test: "",
      prescriptions: "",
    },
    {
      id: 2,
      patientName: "Janeth Chiduo",
      time: "10:00 AM",
      diagnosis: "",
      test: "",
      prescriptions: "",
    },
    // Add more appointment data here
  ]);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showConsultOverlay, setShowConsultOverlay] = useState(false);

  const handleConsultClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowConsultOverlay(true);
  };

  const handleCancelClick = (appointmentId) => {
    setAppointments((prevAppointments) =>
      prevAppointments.filter((appointment) => appointment.id !== appointmentId)
    );
  };

  const handleConsultOverlayClose = () => {
    setShowConsultOverlay(false);
    setSelectedAppointment(null);
  };

  const handleConsultFormSubmit = (e) => {
    e.preventDefault();
    // Implement logic to update the appointment data with the consult details
    // Update the selectedAppointment with the form data
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === selectedAppointment.id
        ? { ...appointment, ...selectedAppointment, consulted: true }
        : appointment
    );
    setAppointments(updatedAppointments);
    console.log("Submitted consult form:", selectedAppointment);
    setShowConsultOverlay(false);
    setSelectedAppointment(null);
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 w-full">
      <span className="flex flex-row justify-center items-center text-blue-500">
        VIEW APPOINTMENTS MODULE
      </span>
      {/* Appointments Table */}
      <div className="w-full mt-8">
        <table className="border border-gray-300 w-full">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-2 px-4 text-left">Patient Name</th>
              <th className="py-2 px-4 text-left">Time</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="py-2 px-4 text-left">
                  {appointment.patientName}
                </td>
                <td className="py-2 px-4 text-left">{appointment.time}</td>
                <td className="py-2 px-4 text-center">
                  {appointment.consulted ? (
                    <span className="text-green-500 font-bold">Consulted</span>
                  ) : (
                    <>
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                        onClick={() => handleConsultClick(appointment)}
                      >
                        Consult
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                        onClick={() => handleCancelClick(appointment.id)}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Consult Overlay */}

      {showConsultOverlay && selectedAppointment && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75 z-50">
          <div
            className="bg-white p-4 rounded-md z-[1000]"
            style={{ minWidth: 1100 }}
          >
            <h3 className="text-sm text-blue-600 font-bold mb-2">
              Add patient record
            </h3>
            <form onSubmit={handleConsultFormSubmit}>
              <div className="mb-4">
                <label htmlFor="symptoms" className="block mb-1">
                  Symptoms:
                </label>
                <textarea
                  id="symptoms"
                  className="border rounded-md px-2 py-1 w-full h-20 resize-none"
                  value={selectedAppointment.symptoms}
                  onChange={(e) =>
                    setSelectedAppointment({
                      ...selectedAppointment,
                      symptoms: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="diagnosis" className="block mb-1">
                  Diagnosis:
                </label>
                <textarea
                  id="diagnosis"
                  className="border rounded-md px-2 py-1 w-full h-20 resize-none"
                  value={selectedAppointment.diagnosis}
                  onChange={(e) =>
                    setSelectedAppointment({
                      ...selectedAppointment,
                      diagnosis: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="test" className="block mb-1">
                  Test:
                </label>
                <textarea
                  id="test"
                  className="border rounded-md px-2 py-1 w-full h-20 resize-none"
                  value={selectedAppointment.test}
                  onChange={(e) =>
                    setSelectedAppointment({
                      ...selectedAppointment,
                      test: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label htmlFor="prescriptions" className="block mb-1">
                  Prescriptions:
                </label>
                <textarea
                  id="prescriptions"
                  className="border rounded-md px-2 py-1 w-full h-20 resize-none"
                  value={selectedAppointment.prescriptions}
                  onChange={(e) =>
                    setSelectedAppointment({
                      ...selectedAppointment,
                      prescriptions: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={handleConsultOverlayClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
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

export default ViewAppointments;
