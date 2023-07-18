import React from "react";
import { Link } from "react-router-dom";
import { FaClinicMedical } from "react-icons/fa";
import { RECEPTIONIST_SIDEBAR_LINKS,DOCTOR_SIDEBAR_LINKS,LABTECH_SIDEBAR_LINKS, PHARMACIST_SIDEBAR_LINKS, ADMIN_SIDEBAR_LINKS, SIDEBAR_BOTTOM_LINKS } from "../../libraries/SidebarLinks";

const linkClasses = "flex text-md font-semibold items-center text-blue-200 font-light hover:bg-blue-500 active:bg-blue-500 rounded-sm gap-2 px-2 py-3 "

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-blue-700 gap-2 md:w-60 lg:w-70 min-h-screen ">
      <div className="flex flex-col justify-center items-center gap-2 p-2">
        <FaClinicMedical size={80} className="text-purple-300" />
        <span className="text-white font-semibold text-base ">BlockHealth</span>
      </div>
      <div className="flex-1 px-1 gap-2">
        {RECEPTIONIST_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex-2 border-t border-t-blue-200 p-1 gap-2">
        {SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

const SidebarLink = ({item}) => {
return (
    <Link to={item.path}>
    <div className={linkClasses}>
      <span className="text-2xl">{item.icon}</span>
      <span>{item.label}</span>
    </div>
  </Link>
);
};

export default Sidebar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaClinicMedical } from "react-icons/fa";
// import {
//   RECEPTIONIST_SIDEBAR_LINKS,
//   DOCTOR_SIDEBAR_LINKS,
//   LABTECH_SIDEBAR_LINKS,
//   PHARMACIST_SIDEBAR_LINKS,
//   ADMIN_SIDEBAR_LINKS,
//   SIDEBAR_BOTTOM_LINKS,
// } from "../../libraries/SidebarLinks";

// const linkClasses =
//   "flex text-md font-semibold items-center text-blue-200 font-light hover:bg-blue-500 active:bg-blue-500 rounded-sm gap-2 px-2 py-3 ";

// const Sidebar = ({ userType }) => {
//   let sidebarLinks = [];

//   // Select sidebar links based on user type
//   switch (userType) {
//     case "receptionist":
//       sidebarLinks = RECEPTIONIST_SIDEBAR_LINKS;
//       break;
//     case "doctor":
//       sidebarLinks = DOCTOR_SIDEBAR_LINKS;
//       break;
//     case "labtech":
//       sidebarLinks = LABTECH_SIDEBAR_LINKS;
//       break;
//     case "pharmacist":
//       sidebarLinks = PHARMACIST_SIDEBAR_LINKS;
//       break;
//     case "admin":
//       sidebarLinks = ADMIN_SIDEBAR_LINKS;
//       break;
//     default:
//       sidebarLinks = [];
//       break;
//   }

//   return (
//     <div className="flex flex-col bg-blue-700 gap-2 md:w-60 lg:w-70 min-h-screen ">
//       <div className="flex flex-col justify-center items-center gap-2 p-2">
//         <FaClinicMedical size={80} className="text-purple-300" />
//         <span className="text-white font-semibold text-base ">BlockHealth</span>
//       </div>
//       <div className="flex-1 px-1 gap-2">
//         {sidebarLinks.map((item) => (
//           <SidebarLink key={item.key} item={item} />
//         ))}
//       </div>
//       <div className="flex-2 border-t border-t-blue-200 p-1 gap-2">
//         {SIDEBAR_BOTTOM_LINKS.map((item) => (
//           <SidebarLink key={item.key} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const SidebarLink = ({ item }) => {
//   return (
//     <Link to={item.path}>
//       <div className={linkClasses}>
//         <span className="text-2xl">{item.icon}</span>
//         <span>{item.label}</span>
//       </div>
//     </Link>
//   );
// };

// export default Sidebar;
