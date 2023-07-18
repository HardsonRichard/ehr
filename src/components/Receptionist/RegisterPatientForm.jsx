import React from "react";
import ReactDOM from "react-dom";
// import Web3 from "web3";
// import contractAbi from "./contractAbi"; // Replace with the actual ABI of your smart contract

// const web3 = new Web3(window.ethereum);
// const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with the actual address of your smart contract
// const contract = new web3.eth.Contract(contractAbi, contractAddress);



const RegisterPatientForm = ({ isVisible,setVisible }) => {
//   const storePatientInformation = async (patientData) => {
//     try {
//       // const accounts = await web3.eth.requestAccounts();
//       const accounts= 0;
//       const contract = contract;
//       const currentAccount = accounts[0];
  
//       await contract.methods
//         .registerPatient(
//           patientData.firstName,
//           patientData.middleName,
//           patientData.lastName,
//           patientData.dob,
//           patientData.gender,
//           patientData.nationality,
//           patientData.education,
//           patientData.tribe,
//           patientData.maritalStatus,
//           patientData.region,
//           patientData.residence
//         )
//         .send({ from: currentAccount });
  
//       // Patient information stored successfully
//       console.log("Patient information stored in the smart contract.");
//     } catch (error) {
//       console.error("Error storing patient information:", error);
//     }
//   };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // Gather the patient data from form inputs
  //   const patientData = {
  //     firstName: e.target["first-name"].value,
  //     middleName: e.target["middle-name"].value,
  //     lastName: e.target["last-name"].value,
  //     dob: e.target["dob"].value,
  //     gender: e.target["gender"].value,
  //     nationality: e.target["nationality"].value,
  //     education: e.target["education"].value,
  //     tribe: e.target["tribe"].value,
  //     maritalStatus: e.target["marital-status"].value,
  //     region: e.target["region"].value,
  //     residence: e.target["residence"].value,
  //   };
  
  //   // Call the storePatientInformation function
  //   storePatientInformation(patientData);
  // };
  
  if (!isVisible) return null;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex justify-center">
      <div className="bg-black opacity-80 z-[1000] absolute inset-0 "></div>
      <div className="z-[2000] fixed top-16 w-[2/3*100vw] ">
        <form action="" className="bg-slate-100 rounded-md p-4 " >
          <span className="flex justify-center text-lg font-medium">Patient Information</span>
          <div className="grid grid-cols-3 gap-8 mt-6 px-4">
            <div className="flex flex-col">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="First Name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="middle-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Middle name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="middle-name"
                  id="middle-name"
                  autoComplete="additional-name"
                  placeholder="Middle Name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Last name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="dob"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of Birth
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="mt-2">
                <select
                  name="gender"
                  id="gender"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="nationality"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nationality
              </label>
              <div className="mt-2">
                <select
                  name="nationality"
                  id="nationality"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                >
                  <option value="">Select</option>
                  <option value="tanzanian">Tanzanian</option>
                  <option value="kenyan">Kenyan</option>
                  <option value="ugandan">Ugandan</option>
                  {/* Add more options for different nationalities */}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="education"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Educational Status
              </label>
              <div className="mt-2">
                <select
                  name="education"
                  id="education"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                >
                  <option value="">Select</option>
                  <option value="primary">Primary Level</option>
                  <option value="ordinary">Ordinary Level</option>
                  <option value="advanced">Advanced Level</option>
                  <option value="undergraduate">Undergraduate Level</option>
                  <option value="postgraduate">Postgraduate Level</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="tribe"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tribe
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="tribe"
                  id="tribe"
                  placeholder="Tribe"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="marital-status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Marital Status
              </label>
              <div className="mt-2">
                <select
                  name="marital-status"
                  id="marital-status"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                >
                  <option value="">Select</option>
                  <option value="S">Single</option>
                  <option value="M">Married</option>
                  <option value="T">Divorced</option>
                  <option value="D">Legally Separated</option>
                  <option value="W">Widowed</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Region
              </label>
              <div className="mt-2">
                <select
                  name="region"
                  id="region"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                >
                  <option value="">Select</option>
                  <option value="arusha">Arusha</option>
                  <option value="dar-es-salaam">Dar es Salaam</option>
                  <option value="dodoma">Dodoma</option>
                  {/* Add more options for different regions */}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="residence"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Residence
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="residence"
                  id="residence"
                  placeholder="Residence"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center border-t border-t-gray-300 gap-4 mt-12 mx-4 p-4">
            <button className="flex justify-center items-center px-3 py-2 rounded-md shadow-sm" onClick={() => setVisible(false)}>
              <span className="text-base text-blue-700 hover:text-neutral-700 font-semibold">CANCEL</span>
            </button>
            <button className="bg-blue-700 flex justify-center items-center px-3 py-2 rounded-md shadow-sm hover:bg-blue-500 hover:shadow-md">
              <span className="text-base text-white font-semibold">SUBMIT</span>
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default RegisterPatientForm;
