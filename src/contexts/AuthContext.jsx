import React, { createContext, useContext, useState, useEffect } from "react";
import { loadWeb3, loadBlockchainData } from "../Web3helpers.js";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = React.useState(null);
  const [UserContract, setUserContract] = React.useState(null);
  const navigate = useNavigate();

  const loadAccounts = async () => {
    let { userContract, accounts } = await loadBlockchainData();

    setAccounts(accounts);
    setUserContract(userContract);
  };

  React.useEffect(() => {
    loadWeb3();
  }, []);

  React.useEffect(() => {
    loadAccounts();
  }, []);

  // Simulating user authentication state
  const authenticateUser = async () => {
    try {
      //Check if user is logged in using local storage
      const isAuthenticated = await checkUserAuthentication();

      if (isAuthenticated) {
        // If user is authenticated, set the user object
        const user = await fetchUserData();
        setUser(user);
      } else {
        // If user is not authenticated, set the user object to null
        setUser(null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after authentication check is completed
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  // Example login function
  const login = async (email, password) => {
    if (!loginInput.email || !loginInput.password) {
      alert("please fill all details");

      return;
    }

    try {
      await UserContract.methods
        .login(loginInput.email, loginInput.password, accounts[0])
        .call();

      // Set the user object in the state and persist it if needed
      const user = await UserContract.methods.getUser(accounts[0]);
      setUser(user);
      saveUserToLocalStorage(user);

      alert("Logged in");
      navigate("/");
      window.location.reload();

      // Return any additional data if needed (e.g., access tokens)
      //   return user.accessToken;
    } catch (error) {
      console.error(error);
      alert("Failed to login");
    }
  };

  // Example logout function
  const logout = () => {
    // Perform logout logic here
    // Example: Clear user data from local storage or revoke access tokens
    clearUserFromLocalStorage();
    setUser(null);
  };

  // Example signup function
  const register = async (email, password, name) => {
    if (
      !credentials.username ||
      !credentials.email ||
      !credentials.role ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      alert("please fill all details");
      return;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!credentials.email.match(mailformat)) {
      alert("please enter valid email address");
      return;
    }
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await UserContract.methods
        .register(
          credentials.username,
          credentials.email,
          credentials.password,
          credentials.role
        )
        .send({ from: accounts[0] });

      if (res) {
        try {
          // Set the user object in the state and persist it if needed
          const sender = await UserContract.methods.getUser(accounts[0]).call();
          let USER = {
            userId: sender[0],
            username: sender[1],
            role: sender[4],
          };

          setUser(USER);
          saveUserToLocalStorage(USER);
          const storedUser = getUserFromLocalStorage();
          setRole(storedUser.role);
        } catch (error) {
          console.error(error);
        }
      }

      alert("Registered Successfully");
      navigate("/");
      window.location.reload();

      // Return any additional data if needed
      //   return user.accessToken;
    } catch (error) {
      console.error("Failed to signup:", error);
    }
  };

  // Function to fetch user data from local storage
  const fetchUserData = () => {
    // Retrieve user data from local storage
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      // Parse the user data string to an object
      const userData = JSON.parse(userDataString);
      return userData;
    }

    // If no user data is found in local storage, return null or an empty object
    return null;
  };

  const checkUserAuthentication = async () => {
    // Simulating user authentication check
    const user = getUserFromLocalStorage();
    return !!user;
  };

  // Function to retrieve user from local storage
  const getUserFromLocalStorage = () => {
    // Retrieve user object from local storage
    const userString = localStorage.getItem("user");
    return JSON.parse(userString);
  };

  // Function to save user to local storage
  const saveUserToLocalStorage = (USER) => {
    // Create a copy of the user object
    const userCopy = { ...USER };

    // Remove circular references or any properties causing circular references
    delete userCopy.default;

    // Save the modified user object to local storage
    localStorage.setItem("user", JSON.stringify(userCopy));
  };

  // Function to clear user from local storage
  const clearUserFromLocalStorage = () => {
    // Clear user object from local storage
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        credentials,
        setCredentials,
        setLoginInput,
        loginInput,
        login,
        register,
        logout,
        user,
        role,
        setRole,
        loading,
        accounts,
        UserContract,
        navigate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext