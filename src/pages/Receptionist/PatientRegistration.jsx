import React from "react";
import { useState } from "react";
import RegisterPatient from "../../components/Receptionist/RegisterPatient";
import UpdatePatient from "../../components/Receptionist/UpdatePatient";
import RegisterCorpse from "../../components/Receptionist/RegisterCorpse";

const buttonClassnames = "bg-green-800 px-4 py-2 rounded-md hover:bg-green-500 active:bg-green-500 shadow-md";
const spanClassnames = "text-xl font-semibold";

const PatientRegistration = () => {
  const [content, setContent] = useState(<UpdatePatient />)
  return (
    <div className="flex  flex-col justify-center items-center m-4 w-full">
      <span className="flex flex-row justify-center items-center text-blue-500">
        PATIENT REGISTRATION MODULE
      </span>
      <div className="flex justify-between gap-8 w-full mt-4">
        <button className={buttonClassnames} onClick={() => setContent(<RegisterPatient />)}>
          <span className={spanClassnames}> REGISTER PATIENT</span>
        </button>
        <button className={buttonClassnames} onClick={() => setContent(<UpdatePatient />)}>
          <span className={spanClassnames}> UPDATE PATIENT</span>
        </button>
        <button className={buttonClassnames} onClick={()=> setContent(<RegisterCorpse />)}>
          <span className={spanClassnames}> REGISTER CORPSE</span>
        </button>
      </div>
      <div className="flex flex-grow mt-24">
        {content}
      </div>
    </div>
  );
};

export default PatientRegistration;
