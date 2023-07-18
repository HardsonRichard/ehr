import React, { useState } from "react";
import { FcKindle } from "react-icons/fc"; 
import RegisterPatientForm from "../../components/Receptionist/RegisterPatientForm"

const RegisterPatient = () => {
    const [visible, setVisible] = useState(false);
  return (
<div>
<button className="flex flex-col justify-center items-center gap-1">
        <FcKindle size={120} fill="gray" onClick={()=> setVisible(true)}/>
        <span className="text-sm font-semibold text-gray-500">REGISTER PATIENT</span>
    </button>
    <RegisterPatientForm isVisible={visible} setVisible={setVisible}/>
</div>
  );
};

export default RegisterPatient;
