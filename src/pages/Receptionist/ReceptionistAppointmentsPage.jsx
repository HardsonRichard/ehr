// import React from "react";

// const ReceptionistAppointmentsPage = () => {
//   return (
//     <div className="flex  flex-col justify-center items-center m-4 w-full">
//       <span className="flex flex-row justify-center items-center text-blue-500">
//         RECEPTIONIST APPOINTMENTS MODULE
//       </span>

//     </div>
//   );
// };

// export default ReceptionistAppointmentsPage;

// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
// import ReceptionistAppointmentsContract from "./contracts/ReceptionistAppointments.json";

// const ReceptionistAppointmentsPage = () => {
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     // Initialize Web3 provider
//     const initWeb3 = async () => {
//       if (window.ethereum) {
//         window.web3 = new Web3(window.ethereum);
//         await window.ethereum.enable();
//       } else if (window.web3) {
//         window.web3 = new Web3(window.web3.currentProvider);
//       } else {
//         console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
//       }
//     };

//     // Fetch appointments from smart contract
//     const fetchAppointments = async () => {
//       try {
//         const web3 = window.web3;
//         const networkId = await web3.eth.net.getId();
//         const contractData = ReceptionistAppointmentsContract.networks[networkId];
//         if (contractData) {
//           const contract = new web3.eth.Contract(
//             ReceptionistAppointmentsContract.abi,
//             contractData.address
//           );
//           const fetchedAppointments = await contract.methods.getAppointments().call();
//           setAppointments(fetchedAppointments);
//         } else {
//           console.log("ReceptionistAppointments contract not deployed on the current network.");
//         }
//       } catch (error) {
//         console.log("Error fetching appointments:", error);
//       }
//     };

//     initWeb3();
//     fetchAppointments();
//   }, []);

//   const handleDoctorClick = (doctor) => {
//     setSelectedDoctor(doctor);
//   };

//   const handleAddAppointment = (appointment) => {
//     // Implement logic to add the appointment for the selected doctor
//     console.log("Added appointment:", appointment);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center m-4 w-full">
//       <span className="flex flex-row justify-center items-center text-blue-500">
//         RECEPTIONIST APPOINTMENTS MODULE
//       </span>

//       {/* Display available doctors */}
//       <div className="flex flex-row justify-center items-start mt-8">
//         {appointments.map((doctor) => (
//           <div
//             key={doctor.id}
//             className={`flex flex-col justify-center items-center border rounded-md p-4 m-4 cursor-pointer ${
//               selectedDoctor === doctor ? "bg-blue-200" : "bg-gray-200"
//             }`}
//             onClick={() => handleDoctorClick(doctor)}
//           >
//             <span className="text-lg font-semibold">{doctor.name}</span>
//             <span className="text-gray-500">Appointments: {doctor.appointments.length}</span>
//           </div>
//         ))}
//       </div>

//       {/* Display selected doctor's appointments */}
//       {selectedDoctor && (
//         <div className="flex flex-col justify-center items-center mt-8">
//           <span className="text-lg font-semibold">{selectedDoctor.name}'s Appointments</span>
//           <div className="flex flex-col justify-center items-center mt-4">
//             {selectedDoctor.appointments.map((appointment) => (
//               <div
//                 key={appointment.id}
//                 className="border rounded-md p-2 m-2 bg-gray-200"
//               >
//                 {appointment.time}
//               </div>
//             ))}
//           </div>
//           <button
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
//             onClick={() => handleAddAppointment({ doctor: selectedDoctor, time: "5:00 PM" })}
//           >
//             Add Appointment
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReceptionistAppointmentsPage;

import React, { useState } from "react";

const ReceptionistAppointmentsPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    time: "",
    patient: "",
    status: "",
  });

  // Mock data for available doctors and their appointments
  const availableDoctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      appointments: [
        { id: 1, time: "9:00 AM", patient: "John Smith", status: "Waiting" },
        {
          id: 2,
          time: "10:00 AM",
          patient: "Jane Anderson",
          status: "Waiting",
        },
        {
          id: 3,
          time: "11:00 AM",
          patient: "Michael Johnson",
          status: "Waiting",
        },
      ],
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      appointments: [
        { id: 4, time: "2:00 PM", patient: "Emily Davis", status: "Waiting" },
        { id: 5, time: "3:00 PM", patient: "David Wilson", status: "Waiting" },
        {
          id: 6,
          time: "4:00 PM",
          patient: "Sophia Martinez",
          status: "Waiting",
        },
      ],
    },
  ];

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleAddAppointment = () => {
    setShowOverlay(true);
  };

  const handleOverlayClose = () => {
    setShowOverlay(false);
    setNewAppointment({ time: "", patient: "", status: "" });
  };

  const handleInputChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { time, patient, status } = newAppointment;
    if (time && patient && status) {
      const updatedAppointments = [
        ...selectedDoctor.appointments,
        newAppointment,
      ];
      const updatedDoctor = {
        ...selectedDoctor,
        appointments: updatedAppointments,
      };
      const updatedDoctors = availableDoctors.map((doctor) =>
        doctor.id === selectedDoctor.id ? updatedDoctor : doctor
      );
      setSelectedDoctor(updatedDoctor);
      setShowOverlay(false);
      setNewAppointment({ time: "", patient: "", status: "" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 w-full">
      <span className="flex flex-row justify-start items-center text-blue-500 text-lg font-semibold">
        RECEPTIONIST APPOINTMENTS MODULE
      </span>

      {/* Display available doctors */}
      <div className="flex flex-row flex-wrap justify-start items-start mt-8 w-full">
        {availableDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className={`flex flex-col justify-center items-center border rounded-md p-4 m-4 cursor-pointer ${
              selectedDoctor === doctor ? "bg-blue-200" : "bg-gray-200"
            }`}
            onClick={() => handleDoctorClick(doctor)}
          >
            <span className="text-lg font-semibold">{doctor.name}</span>
            <span className="text-gray-500">
              Appointments: {doctor.appointments.length}
            </span>
          </div>
        ))}
      </div>

      {/* Display selected doctor's appointments */}
      {selectedDoctor && (
        <div className="flex flex-col justify-center items-center mt-8 w-full">
          <span className="text-lg font-semibold">
            {selectedDoctor.name}'s Appointments
          </span>
          <table className="mt-4 border-collapse border-gray-300 w-full">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="border p-2">Time</th>
                <th className="border p-2">Patient</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {selectedDoctor.appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="border p-2">{appointment.time}</td>
                  <td className="border p-2">{appointment.patient}</td>
                  <td className="border p-2">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleAddAppointment}
          >
            Add Appointment
          </button>
        </div>
      )}

      {/* Overlay for adding new appointment */}
      {showOverlay && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Add New Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4">
                <label htmlFor="time" className="text-sm font-bold mb-1">
                  Time:
                </label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={newAppointment.time}
                  onChange={handleInputChange}
                  required
                  className="border rounded-md px-2 py-1"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="patient" className="text-sm font-bold mb-1">
                  Patient:
                </label>
                <input
                  type="text"
                  id="patient"
                  name="patient"
                  value={newAppointment.patient}
                  onChange={handleInputChange}
                  required
                  className="border rounded-md px-2 py-1"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="status" className="text-sm font-bold mb-1">
                  Status:
                </label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={newAppointment.status}
                  onChange={handleInputChange}
                  required
                  className="border rounded-md px-2 py-1"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
                  onClick={handleOverlayClose}
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

export default ReceptionistAppointmentsPage;
