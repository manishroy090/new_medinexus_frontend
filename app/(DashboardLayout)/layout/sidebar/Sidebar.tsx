
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children, useState } from "react";
import Image from "next/image";
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
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import FullLogo from "../shared/logo/FullLogo";
import path from "path";

// ================= SIDEBAR PROPS =================
interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menu = [
  // ================= HOME =================
  {
    name: "Home",
    icon: <HomeIcon />,
    path: "/",
  },

  // ================= ROLES =================
  {
    name: "Roles",
    icon: <ManageAccountsIcon />,
    path: "/roles",
  },

  // ================= USERS =================
  {
    name: "Users",
    icon: <PeopleIcon />,
    path: "/users",
    disabled: true,
  },

  // ================= DOCTORS =================
  {
    name: "Doctors",
    icon: <LocalHospitalIcon />,
    path: "/doctors",
  },

  // ================= PATIENTS =================
  {
    name: "Patients",
    icon: <PeopleIcon />,
    path: "/patients",
  },

  // ================= APPOINTMENTS =================
  {
    name: "Appointments",
    icon: <CalendarMonthIcon />,
    submenu: true,
    children: [
      { name: "Appointments", path: "/appointments/list", disabled: false },
      {
        name: "Appointment Request",
        path: "/appointments/appointmentRequest",
        disabled: false,
      },
    ],
  },

  // ================= LABORATORY =================
  {
    name: "Laboratory",
    icon: <ScienceIcon />,
    submenu: true,
    children: [
      {
        name: "Lab Dashboard",
        path: "/laboratory",
        disabled: false,
      },
      {
        name: "Lab Reports",
        path: "/laboratory/lab_reports",
        disabled: false,
      },
      {
        name: "Test Requests",
        path: "/laboratory/test_requests",
        disabled: false,
      },
      {
        name: "Sample Collection",
        path: "/laboratory/sample_collection",
        disabled: false,
      },
    ],
  },

  // ================= PHARMACY =================
  {
    name: "Pharmacy",
    icon: <MedicationIcon />,
    submenu: true,
    children: [
      { name: "Pharmacy Dashboard", path: "/pharmacy", disabled: false },
      {
        name: "Medicine Inventory",
        path: "/pharmacy/medicines",
        disabled: false,
      },
      { name: "Stock Adjust", path: "/pharmacy/stockAdjust", disabled: false },
      { name: "Expiry Alert", path: "/pharmacy/expiryAlert", disabled: false },
      {
        name: "Purchase Order",
        path: "/pharmacy/purchaseOrder",
        disabled: false,
      },
      {
        name: "Prescriptions",
        path: "/pharmacy/prescriptions",
        disabled: false,
      },
      {
        name: "Transfer Order",
        path: "/pharmacy/transferOrder",
        disabled: false,
      },
      { name: "Suppliers", path: "/pharmacy/suppliers", disabled: false },
      {
        name: "Order History",
        path: "/pharmacy/orderHistory",
        disabled: false,
      },
      {
        name: "Sales & Billing",
        path: "/pharmacy/salesbilling",
        disabled: false,
      },
    ],
  },

  // ================= NURSES =================
  {
    name: "Nurses",
    icon: <VaccinesIcon />,
    submenu: true,
    children: [
      { name: "Nurse Dashboard", path: "/nurses", disabled: false },
      { name: "Live Queue", path: "/nurses/queuelist", disabled: false },
      { name: "Heart Rate", path: "/nurses/heartrate", disabled: false },
      {
        name: "Blood Pressure",
        path: "/nurses/bloodPressure",
        disabled: false,
      },
      { name: "Oxygen Level", path: "/nurses/oxygenlevel", disabled: false },
      {
        name: "Critical Alert",
        path: "/nurses/criticalalert",
        disabled: false,
      },
      {
        name: "Patient Monitoring",
        path: "/nurses/patientMonitor",
        disabled: false,
      },
      {
        name: "Ward Management",
        path: "/nurses/wardManagement",
        disabled: false,
      },
      { name: "Duty Schedule", path: "/nurses/dutySchedule", disabled: false },
    ],
  },

  // ================= ACCOUNTS =================
  {
    name: "Accounts",
    icon: <AccountBalanceWalletIcon />,
    submenu: true,
    children: [
      { name: "Invoices" },
      { name: "Billing" },
      { name: "Expenses" },
      { name: "Insurance Claims" },
    ],
  },

  // ================= SETTINGS =================
  {
    name: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
    disabled: false,
    submenu: true,
    children: [
      {
        name: "Profile Setting",
        path: "/pharmacy/profileSetting",
        disabled: false,
      },
      {
        name: "Change Password",
        path: "/pharmacy/changePassword",
        disabled: false,
      },
      {
        name: "Prescription Preferebces",
        path: "/pharmacy/prescription",
        disabled: false,
      },
      {
        name: "Inventory Preferences",
        path: "/pharmacy/inventory",
        disabled: false,
      },
      { name: "Printer Setting", path: "/pharmacy/printer", disabled: false },
      { name: "Notification", path: "/pharmacy/notification", disabled: false },
      { name: "Security", path: "/pharmacy/security", disabled: false },
    ],
  },
];

const Sidebar = ({isSidebarOpen, setIsSidebarOpen,}: SidebarProps) => {
  const pathname = usePathname();

  // const [collapsed, setCollapsed] = useState(false);

  const [openMenus, setOpenMenus] = useState({
    Laboratory: false,
    Pharmacy: false,
    Nurses: false,
    Accounts: false,
    Setting: false,
  });

  const toggleSubmenu = (menuName: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName as keyof typeof prev],
    }));
  };

  return (
    <div
      className={`h-screen flex flex-col transition-all duration-300 text-white overflow-hidden shadow-2xl border-r border-white/10
        ${isSidebarOpen ? "w-72" : "w-20"}`} style={{ backgroundColor: "#14967f" }}>
      
      {/* ================= LOGO ================= */}
      <div
        className={`flex items-center px-4 py-3 h-[76px] shrink-0 bg-yellow-200 text-black border-b border-black/5 transition-all duration-300
        ${!isSidebarOpen ? "justify-center" : "justify-between"}`}>

        {isSidebarOpen && (
          <div className="text-lg font-bold min-w-0">
            <FullLogo />
          </div>
        )}

        <button onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="p-2 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-black/10 active:scale-95 transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14967f]">
          <MenuIcon />
        </button>
      </div>

      {/* ================= MENU ================= */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 sidebar-scroll font-semibold">
        
        {menu.map((item, i) => {
         
         // ================= SUB MENUS =================
          if (item.submenu) {
            return (
              <div key={i} className="space-y-1">
               
                <button onClick={() => toggleSubmenu(item.name)}
                  className={`w-full flex items-center justify-between font-semibold px-2 py-2.5 rounded-xl hover:bg-white/10 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                  ${!isSidebarOpen ? "justify-center" : "justify-between"}`}>
                  
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 flex items-center font-semibold justify-center rounded-xl group-hover:bg-white/10 group-hover:scale-105 transition-all duration-200 shrink-0">
                      {item.icon}
                    </div>

                    {/* ITEM NAME */}
                    {isSidebarOpen && (
                      <span className="text-[13px] font-medium font-semibold truncate">
                        {item.name}
                      </span>
                    )}
                  </div>

                  {/* DROPDOWN ARROW */}
                  {isSidebarOpen && (
                    <div className="w-7 h-7 flex items-center justify-center rounded-lg group-hover:bg-white/10 transition-all duration-200">
                      {openMenus[item.name as keyof typeof openMenus] ? (
                        <KeyboardArrowDownIcon fontSize="medium" className="font-semibold"/>
                      ) : (
                        <KeyboardArrowRightIcon fontSize="medium" />
                      )}
                    </div>
                  )}
                </button>

                {/* SUB MENU ITEMS */}
                {openMenus[item.name as keyof typeof openMenus] &&
                  isSidebarOpen && (
                    <div className="ml-5 pl-4 border-l border-white/20 space-y-1 py-1">
                      
                      {item.children.map((child, idx) => (
                        <Link key={idx} href={child.disabled ? "#" : child.path ? child.path : "#"}
                          onClick={(e) => {if (child.disabled) e.preventDefault(); }}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[12px] text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 group/child">
                          
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 group-hover/child:bg-white transition-colors duration-200" />
                            <span className="truncate">{child.name}</span>
                          </div>

                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            );
          }

          // ================= NORMAL MENU =================
          const isUnderConstruction = item.path === "/underconstruction";

          const isActive =
            !isUnderConstruction &&
            (pathname === item.path || pathname.startsWith(item.path + "/"));

          return (
            <Link key={i} href={item.disabled ? "#" : item.path ? item.path : "#"}
              onClick={(e) => { if (item.disabled) e.preventDefault(); }}
              className={`flex items-center gap-3 px-2 py-2.5 rounded-xl transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
              ${!isSidebarOpen ? "justify-center" : "justify-between"}
              ${isActive ? "bg-yellow-100 text-[#14967f] font-semibold shadow-md" : "text-white/90 hover:bg-white/10 hover:translate-x-0.5"}`}>
              {isActive && (
                <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#14967f] rounded-r-full" />
              )}

              <div className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200 shrink-0
              ${isActive ? "bg-[#14967f]/10" : "group-hover:bg-white/10 group-hover:scale-105"}`}>
                {item.icon}
              </div>

              {isSidebarOpen && (
                <div className="flex items-center justify-between w-full min-w-0 gap-2">
                  <span className="text-[13px] font-medium truncate font-semibold">
                    {item.name}
                  </span>

                  {item.disabled && (
                    <span className="text-[10px] bg-white/40 px-2 py-0.5 rounded-full shrink-0">
                      Soon
                    </span>
                  )}
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="border-t border-white/10 px-3 pt-3 pb-3 shrink-0">
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-white/10 transition-all duration-200">
          <div className="w-10 h-10 bg-white text-[#14967f] flex items-center justify-center rounded-full font-bold shrink-0 shadow-sm ring-2 ring-white/15">
            A
          </div>

          {isSidebarOpen && (
            <div className="text-sm min-w-0 flex-1">
              <p className="font-semibold text-[13px] truncate">Admin</p>

              <p className="text-[11px] text-white/65 truncate mt-0.5">
                admin@medicare.com
              </p>
            </div>
          )}
        </div>

        <div
          className={`flex items-center gap-2 pt-3 rounded-xl transition-all duration-300 cursor-default flex-col justify-center text-center shrink-0
          ${!isSidebarOpen ? "mt-2" : "mt-3 border-t border-white/10"}`}>
          <div className={`flex items-center justify-center overflow-hidden transition-all duration-300 ${!isSidebarOpen ? "w-10 h-8" : "w-40 h-16"}`}>
            <Image src="/hrm_image/heartrate.svg" alt="Logo" width={0} height={0}
              className="shrink-0 w-full h-100 object-contain" loading="eager"/>
          </div>

          {isSidebarOpen && (
            <div className="flex flex-col items-center gap-2">
              <h2 className="flex items-center justify-center gap-1 text-yellow-200 text-sm font-bold tracking-wide leading-tight">
                <span className="font-extrabold">MediNexus</span>
                <span className="font-semibold">Healthcare</span>
              </h2>

              <div className="flex items-center gap-2">
                <span className="w-5 h-px bg-emerald-300/40" />

                <h3 className="text-emerald-300/90 text-[10px] font-bold uppercase tracking-wider">
                  <span>Better Care</span>
                  <span className="mx-1">•</span>
                  <span>Better Health</span>
                </h3>

                <span className="w-5 h-px bg-emerald-300/40" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
