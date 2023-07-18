// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Help from "./components/Shared/Help";
// import Layout from "./components/Shared/Layout";
// import Settings from "./components/Shared/Settings";
// import ViewAppointments from "./pages/Doctor/ViewAppointments";
// import ViewPatientRecord from "./pages/Doctor/ViewPatientRecord";
// import PatientRegistration from "./pages/Receptionist/PatientRegistration";
// import ReceptionistAppointmentsPage from "./pages/Receptionist/ReceptionistAppointmentsPage";
// import ViewOrderedTest from "./pages/LabTech/ViewOrderedTest";
// import AddTestResults from "./pages/LabTech/AddTestResults";
// import ViewPrescriptions from "./pages/Pharmacist/ViewPrescriptions";
// import Users from "./pages/Admin/Users";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="patientRegistration" element={<PatientRegistration />} />
//           <Route
//             path="receptionistApppointmentsPage"
//             element={<ReceptionistAppointmentsPage />}
//           />
//           <Route path="viewAppointments" element={<ViewAppointments />} />
//           <Route path="viewPatientRecord" element={<ViewPatientRecord />} />
//           <Route path="orderedTests" element={<ViewOrderedTest />} />
//           <Route path="orderedPrescription" element={<ViewPrescriptions />} />
//           <Route path="addTestResults" element={<AddTestResults />} />
//           <Route path="users" element={<Users />} />
//           <Route path="settings" element={<Settings />} />
//           <Route path="helpAndSupport" element={<Help />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Help from './components/Shared/Help';
// import Layout from './components/Shared/Layout';
// import Settings from './components/Shared/Settings';
// import ViewAppointments from './pages/Doctor/ViewAppointments';
// import ViewPatientRecord from './pages/Doctor/ViewPatientRecord';
// import PatientRegistration from './pages/Receptionist/PatientRegistration';
// import ReceptionistAppointmentsPage from './pages/Receptionist/ReceptionistAppointmentsPage';
// import ViewOrderedTest from './pages/LabTech/ViewOrderedTest';
// import AddTestResults from './pages/LabTech/AddTestResults';
// import ViewPrescriptions from './pages/Pharmacist/ViewPrescriptions';
// import Users from './pages/Admin/Users';
// import LoginPage from './pages/LoginPage';

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState('');

//   const handleLogin = (role) => {
//     setLoggedIn(true);
//     setUserRole(role);
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//     setUserRole('');
//   };

//   const ProtectedRoute = ({ element: Component, roles, ...rest }) => {
//     if (!loggedIn) {
//       return <Navigate to="/login" />;
//     }

//     if (!roles.includes(userRole)) {
//       return <Navigate to="/" />;
//     }

//     return <Component />;
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
//         <Route
//           path="/"
//           element={
//             loggedIn ? (
//               <Layout loggedIn={loggedIn} userRole={userRole} onLogout={handleLogout}>
//                 <Route path="patientRegistration" element={<PatientRegistration />} />
//                 <Route
//                   path="receptionistAppointmentsPage"
//                   element={<ReceptionistAppointmentsPage />}
//                 />
//                 <ProtectedRoute
//                   path="viewAppointments"
//                   element={<ViewAppointments />}
//                   roles={['doctor']}
//                 />
//                 <ProtectedRoute
//                   path="viewPatientRecord"
//                   element={<ViewPatientRecord />}
//                   roles={['doctor']}
//                 />
//                 <ProtectedRoute
//                   path="orderedTests"
//                   element={<ViewOrderedTest />}
//                   roles={['lab technician']}
//                 />
//                 <ProtectedRoute
//                   path="orderedPrescription"
//                   element={<ViewPrescriptions />}
//                   roles={['pharmacist']}
//                 />
//                 <ProtectedRoute
//                   path="addTestResults"
//                   element={<AddTestResults />}
//                   roles={['lab technician']}
//                 />
//                 <ProtectedRoute path="users" element={<Users />} roles={['admin']} />
//                 <Route path="settings" element={<Settings />} />
//                 <Route path="helpAndSupport" element={<Help />} />
//               </Layout>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from "./components/Shared/Help";
import Layout from "./components/Shared/Layout";
import Settings from "./components/Shared/Settings";
import ViewAppointments from "./pages/Doctor/ViewAppointments";
import ViewPatientRecord from "./pages/Doctor/ViewPatientRecord";
import PatientRegistration from "./pages/Receptionist/PatientRegistration";
import ReceptionistAppointmentsPage from "./pages/Receptionist/ReceptionistAppointmentsPage";
import ViewOrderedTest from "./pages/LabTech/ViewOrderedTest";
import AddTestResults from "./pages/LabTech/AddTestResults";
import ViewPrescriptions from "./pages/Pharmacist/ViewPrescriptions";
import Users from "./pages/Admin/Users";
import Login from "./pages/login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="patientRegistration" element={<PatientRegistration />} />
          <Route
            path="receptionistApppointmentsPage"
            element={<ReceptionistAppointmentsPage />}
          />
          <Route path="viewAppointments" element={<ViewAppointments />} />
          <Route path="viewPatientRecord" element={<ViewPatientRecord />} />
          <Route path="orderedTests" element={<ViewOrderedTest />} />
          <Route path="orderedPrescription" element={<ViewPrescriptions />} />
          <Route path="addTestResults" element={<AddTestResults />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="helpAndSupport" element={<Help />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

