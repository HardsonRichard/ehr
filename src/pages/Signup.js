import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import UserManagementContract from '../truffle/build/contracts/UserManagementContract.json';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545'); // Use the correct provider URL

const Signup = () => {
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        // Load the contract
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = UserManagementContract.networks[networkId];
        const instance = new web3.eth.Contract(
          UserManagementContract.abi,
          deployedNetwork.address
        );
        setContract(instance);

        // Get the user's address
        const accounts = await web3.eth.getAccounts();
        setUserAddress(accounts[0]);
      } catch (err) {
        console.error(err);
        setError('Failed to load the contract or get user address');
      }
    };

    init();
  }, []);

  const handleSignup = async () => {
    try {
      setLoading(true);
      setError(null);

      // Call the signup function in the contract
      await contract.methods.signup(userName, userEmail, userRole).send({ from: userAddress });

      setUserRole(userRole);
      setLoading(false);

      // Store user role in local storage
      localStorage.setItem('userRole', userRole);
    } catch (err) {
      console.error(err);
      setError('Failed to signup');
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userRole && <p>Signup successful! Your role is {userRole}</p>}
      {!userRole && (
        <div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
          />
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Doctor">Doctor</option>
            <option value="LaboratoryTechnician">Laboratory Technician</option>
            <option value="Pharmacist">Pharmacist</option>
            <option value="Admin">Admin</option>
          </select>
          <button onClick={handleSignup}>Signup</button>
        </div>
      )}
    </div>
  );
};

export default Signup;
