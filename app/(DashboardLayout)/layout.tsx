
"use client";

import { useEffect, useState } from "react";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
// import { getMe } from "../services/Auth";
import { useDispatch } from "react-redux";
// import { setAuthUser } from "../store/features/Hoshpital/AuthSlice";
import AIBotUI from "../components/dashboard/AIBotUI";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const dispatch = useDispatch();

  // Sidebar state
  
  // useEffect(() => {
    //   const getAuth = async () => {
      //     try {
        //       const { data } = await getMe();
        //       dispatch(setAuthUser(data?.user));
        //     } catch (err) {
          //       console.error("Auth fetch failed:", err);
          //     }
          //   };
          
          //   getAuth();
          // }, [dispatch]);
          
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <aside className={`fixed left-0 top-0 z-40 hidden xl:block h-screen transition-all duration-300 ${isSidebarOpen ? "w-72" : "w-20"}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className={`h-screen flex flex-col overflow-hidden transition-all duration-300 ${isSidebarOpen ? "xl:ml-72" : "xl:ml-20"}`}>

        {/* ================= HEADER ================= */}
        <header className="shrink-0 bg-white border-b z-30">
          <Header />
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1 min-w-0 w-full overflow-y-auto p-6">
          {children}
          <AIBotUI />
        </main>

      </div>
    </div>
  );
}
