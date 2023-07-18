import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import UserManagementContract from '../truffle/build/contracts/UserManagementContract.json';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545'); // Use the correct provider URL

const Login = () => {
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState('');
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

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);

      // Call the login function in the contract
      const [name, role] = await contract.methods.login(userEmail).call({ from: userAddress });

      setUserRole(role);

      // Store user role in local storage
      localStorage.setItem('userRole', role);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to login');
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userRole && <p>Welcome, {userEmail}! Your role is {userRole}</p>}
      {!userRole && (
        <div>
          <input
            type="text"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
