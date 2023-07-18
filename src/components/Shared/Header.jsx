import React, { useState, useEffect } from "react";
import { HiUserCircle } from "react-icons/hi";
import Web3 from "web3";

const Header = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await provider.eth.getAccounts();
        setWeb3(provider);
        setAccounts(accounts);
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      console.error("Metamask not detected. Please install Metamask.");
    }
  };

  return (
    <div className="flex justify-end items-center border-b border-gray-200 shadow-sm pr-4 w-full h-16 gap-4 top-0 z-[80] sticky">
      <button
        className="bg-indigo-600 px-2 py-1 rounded-md shadow-sm hover:shadow-md"
        onClick={connectWallet}
        disabled={isConnected}
      >
        <span className="text-base text-indigo-200">
          {isConnected ? "Connected" : "Connect Wallet"}
        </span>
      </button>
      <HiUserCircle size={40} className="text-indigo-500" />
    </div>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";
// import { HiUserCircle } from "react-icons/hi";
// import Web3 from "web3";

// const Header = () => {
//   const [web3, setWeb3] = useState(null);
//   const [accounts, setAccounts] = useState([]);
//   const [isConnected, setIsConnected] = useState(false);
//   const [userType, setUserType] = useState(""); // Added state for user type

//   useEffect(() => {
//     connectWallet();
//   }, []);

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const provider = new Web3(window.ethereum);
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         const accounts = await provider.eth.getAccounts();
//         setWeb3(provider);
//         setAccounts(accounts);
//         setIsConnected(true);
//       } catch (error) {
//         console.error("Error connecting to wallet:", error);
//       }
//     } else {
//       console.error("Metamask not detected. Please install Metamask.");
//     }
//   };

//   const handleUserTypeChange = (event) => {
//     setUserType(event.target.value);
//   };

//   return (
//     <div className="flex justify-between items-center border-b border-gray-200 shadow-sm px-4 w-full h-16 gap-4 top-0 z-[80] sticky">
//       {/* Dropdown menu */}
//       <select
//         className="bg-white border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
//         value={userType}
//         onChange={handleUserTypeChange}
//         disabled={isConnected}
//       >
//         <option value="">Select User Type</option>
//         <option value="receptionist">Receptionist</option>
//         <option value="doctor">Doctor</option>
//         <option value="labtech">Lab Technician</option>
//         <option value="pharmacist">Pharmacist</option>
//         <option value="admin">Admin</option>
//       </select>
//       <div className="flex justify-end ">
//         <button
//           className="bg-indigo-600 px-2 py-1 rounded-md shadow-sm hover:shadow-md"
//           onClick={connectWallet}
//           disabled={isConnected}
//         >
//           <span className="text-base text-indigo-200">
//             {isConnected ? "Connected" : "Connect Wallet"}
//           </span>
//         </button>
//         <HiUserCircle size={40} className="text-indigo-500" />
//       </div>
//     </div>
//   );
// };

// export default Header;
