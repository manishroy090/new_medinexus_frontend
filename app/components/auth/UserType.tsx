"use client";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/dashboard/dotPagination";
import { useState } from "react";
import { Irole } from "@/interface/roles";
import roles from "@/data/roles";

export const UserType = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [data, setData] = useState<Irole[]>(roles);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full min-h-screen px-4 sm:px-6 lg:px-10 py-4">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center w-full lg:w-[45%] min-h-[480px] sm:min-h-[550px] lg:h-[calc(90vh-60px)] lg:min-h-[600px] mt-2 lg:mt-28 px-5 sm:px-8 pt-8 sm:pt-10 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 rounded-3xl lg:rounded-full overflow-hidden">
          <h3 className="text-white px-4 sm:px-6 py-2 mb-6 sm:mb-8 mt-2 sm:mt-4 text-center border border-white rounded-full font-semibold shadow-lg text-xs sm:text-sm md:text-base tracking-widest bg-gradient-to-r from-emerald-300 to-green-300">
            Healthcare Management System
          </h3>

          <div className="flex flex-col items-center lg:items-start font-bold text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Better care starts with
            </h1>

            <h1 className=" text-3xl sm:text-4xl bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-transparent tracking-tight pt-3 pb-1.5 ">
              the right team.
            </h1>
          </div>

          <div
            className="relative w-full flex-1 min-h-[220px] sm:min-h-[280px] mt-6 bg-[length:101%_101%] bg-bottom bg-no-repeat"
            style={{ backgroundImage: "url('/hrm_image/userRolebg.svg')" }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:flex-1 lg:min-w-0 max-w-4xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col text-center mb-8 sm:mb-10 mt-4 sm:mt-6 lg:mt-1 px-3 sm:px-6 py-4 sm:py-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-700">
              Who are you?
            </h1>

            <p className="text-sm sm:text-base font-semibold text-purple-500 mt-2 tracking-wide">
              Choose your role to continue to the system
            </p>
          </div>

          {/* ROLE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {data.map((roles: Irole) => (
              <Link
                key={roles.id}
                href={roles.href}
                title={roles.title}
                className="group relative border border-gray-200 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden bg-emerald-200 hover:bg-green-300">
                  <Image
                    src={roles.image}
                    alt={roles.title}
                    layout="fill"
                    className="p-4 sm:p-5 object-cover rounded-3xl transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="text-sm sm:text-base text-center font-bold bg-yellow-200 px-2 py-3 text-green-600 tracking-wide transition-all duration-300 group-hover:bg-yellow-400">
                  <span>{roles.title}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="w-full flex justify-center items-center mt-6 mb-6">
            <Pagination
              data={roles as unknown as number[]}
              limit={4}
              currentPage={currentPage}
              setData={setData}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};
