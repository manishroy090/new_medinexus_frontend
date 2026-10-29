"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children, useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import ScienceIcon from "@mui/icons-material/Science";
import MedicationIcon from "@mui/icons-material/Medication";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import FullLogo from "../shared/logo/FullLogo";
import path from "path";

// const menu = [
//   {
//     name: "Home",
//     icon: <HomeIcon />,
//     path: "/",
//   },

//   {
//     name: "Roles",
//     icon: <PeopleIcon />,
//     path: "/roles",
//   },

//   {
//     name: "Users",
//     icon: <PeopleIcon />,
//     path: "/users",
//     disabled: true,
//   },

//   {
//     name: "Doctors",
//     icon: <LocalHospitalIcon />,
//     path: "/doctors",
//   },

//   {
//     name: "Patients",
//     icon: <PeopleIcon />,
//     path: "/patients",
//   },

//   {
//     name: "Appointments",
//     icon: <CalendarMonthIcon />,
//     submenu: true,
//     children: [
//       { name: "Appointments", 
//         path: "/appointments/list", 
//         disabled:false
//       },
//       { name: "Appointment Request", 
//         path: "/appointments/appointmentRequest",
//         disabled:false
//        },
//     ],
//   },

 
//   {
//     name: "Laboratory",
//     icon: <ScienceIcon />,
//     submenu: true,
//     children: [
//       {
//          name: "Lab Dashboard",
//          path: "/laboratory",
//          disabled:false 
//       },
//       { 
//         name: "Lab Reports",
//         path: "/laboratory/lab_reports",
//         disabled:false  
//       },
//       { 
//         name: "Test Requests",
//         path: "/laboratory/test_requests",
//         disabled:false  
//       },
//       { 
//         name: "Sample Collection",
//         path: "/laboratory/sample_collection",
//         disabled:false 
//       },
//     ],
//   },

//   // ================= PHARMACY =================
//   {
//     name: "Pharmacy",
//     icon: <MedicationIcon />,
//     submenu: true,
//     children: [
//       { name: "Pharmacy Dashboard", path:"/pharmacy", disabled:false  },
//       { name: "Medicine Inventory", path:"/pharmacy/medicines", disabled:false  },
//       { name: "Stock Adjust", path:"/pharmacy/stockAdjust", disabled:false  },
//       { name: "Expiry Alert", path:"/pharmacy/expiryAlert", disabled:false  },
//       { name: "Purchase Order", path:"/pharmacy/purchaseOrder", disabled:false  },
//       { name: "Prescriptions", path:"/pharmacy/prescriptions" ,   disabled:false  },
//       { name: "Transfer Order", path:"/pharmacy/transferOrder" ,   disabled:false  },
//       { name: "Suppliers", path:"/pharmacy/suppliers" ,disabled:false  },
//       { name: "Order History", path:"/pharmacy/orderHistory" ,disabled:false  },
//       { name: "Sales & Billing", path:"/pharmacy/salesbilling" ,disabled:false  },
//     ],
//   },

//   // ================= NURSES =================
//   {
//     name: "Nurses",
//     icon: <VaccinesIcon />,
//     submenu: true,
//     children: [
//       { name: "Nurse Dashboard", path:"/nurses", disabled:false  },
//       { name: "Live Queue", path:"/nurses/queuelist", disabled:false},
//       { name: "Heart Rate", path:"/nurses/heartrate", disabled:false},
//       { name: "Blood Pressure", path:"/nurses/bloodPressure", disabled:false},
//       { name: "Oxygen Level", path:"/nurses/oxygenlevel", disabled:false},
//       { name: "Critical Alert", path:"/nurses/criticalalert", disabled:false},
//       { name: "Patient Monitoring", path:"/nurses/patientMonitor", disabled:false},
//       { name: "Ward Management", path:"/nurses/wardManagement", disabled:false},
//       { name: "Duty Schedule", path:"/nurses/dutySchedule", disabled:false},
//     ],
//   },

//   // ================= ACCOUNTS =================
//   {
//     name: "Accounts",
//     icon: <AccountBalanceWalletIcon />,
//     submenu: true,
//     children: [
//       { name: "Invoices" },
//       { name: "Billing" },
//       { name: "Expenses" },
//       { name: "Insurance Claims" },
//     ],
//   },

//   {
//     name: "Settings",
//     icon: <SettingsIcon />,
//     path: "/settings",
//     disabled: false,
//     submenu: true,
//     children: [
//       { name: "Profile Setting", path:"/pharmacy/profileSetting" ,disabled:false },
//       { name: "Change Password", path:"/pharmacy/changePassword" ,disabled:false },
//       { name: "Prescription Preferebces", path:"/pharmacy/prescription" ,disabled:false },
//       { name: "Inventory Preferences", path:"/pharmacy/inventory" ,disabled:false },
//       { name: "Printer Setting", path:"/pharmacy/printer" ,disabled:false },
//       { name: "Notification", path:"/pharmacy/notification" ,disabled:false },
//       { name: "Security", path:"/pharmacy/security" ,disabled:false },
//     ]
//   },
// ];

const Sidebar = () => {
  // const pathname = usePathname();

  // const [collapsed, setCollapsed] = useState(false);

  // const [openMenus, setOpenMenus] = useState({
  //   Laboratory: false,
  //   Pharmacy: false,
  //   Nurses: false,
  //   Accounts: false,
  //   Setting: false,
  // });

  // const toggleSubmenu = (menuName: string) => {
  //   setOpenMenus((prev) => ({
  //     ...prev,
  //     [menuName]: !prev[menuName as keyof typeof prev],
  //   }));
  // };

  // return (
  //   <div
  //     className={`
  //       h-screen
  //       flex
  //       flex-col
  //       transition-all
  //       duration-300
  //       text-white
  //       overflow-hidden
  //       shadow-2xl
  //       ${collapsed ? "w-20" : "w-72"}
  //     `}
  //     style={{ backgroundColor: "#14967f" }}
  //   >
  //     {/* ================= LOGO ================= */}
  //     <div className="flex items-center justify-between px-4 py-4 bg-yellow-200 text-black shrink-0 border-b border-black/5">
  //       {!collapsed && (
  //         <div className="text-lg font-bold">
  //           <FullLogo />
  //         </div>
  //       )}

  //       <button
  //         onClick={() => setCollapsed(!collapsed)}
  //         className="p-2 rounded-lg hover:bg-black/10 transition"
  //       >
  //         <MenuIcon />
  //       </button>
  //     </div>

  //     {/* ================= MENU ================= */}
  //     <div
  //       className="
  //         flex-1
  //         overflow-y-auto
  //         px-3
  //         py-4
  //         space-y-1
  //         sidebar-scroll
  //       "
  //     >
  //       {menu.map((item, i) => {
  //         // ================= SUB MENUS =================
  //         if (item.submenu) {
  //           return (
  //             <div key={i} className="space-y-1">
  //               {/* MENU BUTTON */}
  //               <button
  //                 onClick={() => toggleSubmenu(item.name)}
  //                 className="
  //                   w-full
  //                   flex
  //                   items-center
  //                   justify-between
  //                   px-3
  //                   py-2.5
  //                   rounded-xl
  //                   hover:bg-white/10
  //                   transition
  //                   group
  //                 "
  //               >
  //                 <div className="flex items-center gap-3 min-w-0">
  //                   <div className="w-9 h-9 flex items-center justify-center rounded-lg group-hover:bg-white/10 transition">
  //                     {item.icon}
  //                   </div>

  //                   {!collapsed && (
  //                     <span className="text-sm font-medium truncate">
  //                       {item.name}
  //                     </span>
  //                   )}
  //                 </div>

  //                 {!collapsed && (
  //                   <div className="flex items-center gap-2">
  //                     {/* <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">
  //                       Soon
  //                     </span> */}

  //                     {openMenus[item.name as keyof typeof openMenus] ? (
  //                       <KeyboardArrowDownIcon fontSize="small" />
  //                     ) : (
  //                       <KeyboardArrowRightIcon fontSize="small" />
  //                     )}
  //                   </div>
  //                 )}
  //               </button>

  //               {/* SUB MENU ITEMS */}
  //               {openMenus[item.name as keyof typeof openMenus] &&
  //                 !collapsed && (
  //                   <div className="ml-5 pl-4 border-l border-white/10 space-y-1">
  //                     {item.children.map((child, idx) => (
  //                       <button
  //                         key={idx}
  //                         className="
  //                         w-full
  //                         text-left
  //                         px-3
  //                         py-2
  //                         rounded-lg
  //                         text-sm
  //                         text-white/80
  //                         hover:bg-white/10
  //                         hover:text-white
  //                         transition
  //                         flex
  //                         items-center
  //                         justify-between
  //                       "
  //                       >
  //                         <Link
  //                           href={
  //                             child.disabled ? "#" : child.path ? child.path : "#"
  //                           }
  //                           onClick={(e) => {
  //                             if (child.disabled) e.preventDefault();
  //                           }}
  //                         >
  //                           <span>{child.name}</span>
  //                         </Link>

  //                         {/* <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">
  //                         Upcoming
  //                       </span> */}
  //                       </button>
  //                     ))}
  //                   </div>
  //                 )}
  //             </div>
  //           );
  //         }

  //         // ================= NORMAL MENU =================
  //         const isUnderConstruction = item.path === "/underconstruction";

  //         const isActive =
  //           !isUnderConstruction &&
  //           (pathname === item.path || pathname.startsWith(item.path + "/"));

  //         return (
  //           <Link
  //             key={i}
  //             href={item.disabled ? "#" : item.path ? item.path : "#"}
  //             onClick={(e) => {
  //               if (item.disabled) e.preventDefault();
  //             }}
  //             className={`
  //               flex
  //               items-center
  //               gap-3
  //               px-3
  //               py-2.5
  //               rounded-xl
  //               transition-all
  //               relative
  //               group
  //               ${
  //                 isActive
  //                   ? "bg-yellow-100 text-[#14967f] font-semibold shadow-md"
  //                   : "text-white/90 hover:bg-white/10"
  //               }
  //             `}
  //           >
  //             {/* ACTIVE INDICATOR */}
  //             {isActive && (
  //               <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#14967f] rounded-r-full" />
  //             )}

  //             {/* ICON */}
  //             <div
  //               className={`
  //                 w-9
  //                 h-9
  //                 flex
  //                 items-center
  //                 justify-center
  //                 rounded-lg
  //                 transition
  //                 ${isActive ? "bg-[#14967f]/10" : "group-hover:bg-white/10"}
  //               `}
  //             >
  //               {item.icon}
  //             </div>

  //             {/* LABEL */}
  //             {!collapsed && (
  //               <div className="flex items-center justify-between w-full min-w-0">
  //                 <span className="text-sm truncate">{item.name}</span>

  //                 {item.disabled && (
  //                   <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">
  //                     Soon
  //                   </span>
  //                 )}
  //               </div>
  //             )}
  //           </Link>
  //         );
  //       })}
  //     </div>

  //     {/* ================= FOOTER ================= */}
  //     <div className="border-t border-white/10 p-3 shrink-0">
  //       <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 transition cursor-pointer">
  //         <div className="w-10 h-10 bg-white text-[#14967f] flex items-center justify-center rounded-full font-bold shrink-0">
  //           A
  //         </div>

  //         {!collapsed && (
  //           <div className="text-sm min-w-0">
  //             <p className="font-medium truncate">Admin</p>

  //             <p className="text-xs text-white/70 truncate">
  //               admin@medicare.com
  //             </p>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Sidebar;