import React, { useState } from "react";
import { FcDatabase } from "react-icons/fc";
import UpdatePatientForm from "./UpdatePatientForm";

const UpdatePatient = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" mt-2">
        <input
          type="search"
          name="search-patient"
          id="search-patient"
          placeholder="Enter patientID"
          required
          className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:p-6 sm:text-sm sm:leading-6"
        />
      </div>
      <button className="flex flex-col justify-center items-center gap-1">
        <FcDatabase size={120} fill="gray" onClick={() => setVisible(true)} />
        <span className="text-sm font-semibold text-gray-500">
          UPDATE PATIENT
        </span>
      </button>
      <UpdatePatientForm isVisible={visible} setVisible={setVisible} />
    </div>
  );
};

export default UpdatePatient;
