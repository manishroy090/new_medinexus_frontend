"use client";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/dashboard/dotPagination";
import { useState } from "react";
import { Irole } from "@/interface/roles";
import roles from "@/data/roles";

export const UserType = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [data, setData] = useState<any>(roles);

  return (
    <>
      <div className="flex ml-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center h-[calc(90vh-60px)] w-[45%] mt-30 ml-10 pt-10 bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 rounded-full">
          <h3 className="text-white px-6 mb-8 mt-4 text-center border border-white rounded-full font-semibold shadow-lg text-base tracking-widest bg-gradient-to-r from-emerald-300 to-green-300">
            Healthcare Management System
          </h3>
          <div className="flex flex-col font-bold">
            <h1 className="text-5xl text-white tracking-tight">
              Better care starts with
            </h1>

            <h1 className="text-4xl bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-transparent tracking-tight pt-3 pb-1.5">
              the right team.
            </h1>
          </div>
          <div
            className="relative top-9 w-1000 flex-1 bg-[length:101%_101%] bg-bottom"
            style={{ backgroundImage: "url('/hrm_image/userRolebg.svg')" }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="flex flex-col text-center mb-10 mt-10 px-6 py-5">
            <h1 className="text-5xl font-bold tracking-tight text-gray-700">
              Who are you?
            </h1>

            <p className="text-base font-semibold text-purple-500 mt-2 tracking-wide">
              Choose your role to continue to the system
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {data.map((roles: Irole) => (
              <Link
                key={roles.id}
                href={roles.href}
                title={roles.title}
                className="group relative border border-gray-200 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-74 overflow-hidden">
                  <Image
                    src={roles.image}
                    alt={roles.title}
                    layout="fill"
                    className="p-2"
                  />
                </div>

                <div className="text-base text-center font-bold bg-yellow-200 px-2 py-3 text-green-600 tracking-wide transition-all duration-300 group-hover:bg-yellow-400">
                  <span>{roles.title}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="relative mt-6 flex justify-center pb-2">
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
