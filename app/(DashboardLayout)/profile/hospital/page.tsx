"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { CiHospital1 } from "react-icons/ci";
import { PiHospitalDuotone } from "react-icons/pi";

const Page = () => {
  const hospital = {
    name: "City Care Hospital",
    tagline: "Compassionate Care. Advanced Medicine.",
    address: "Kathmandu, Nepal",
    phone: "+977-1-4123456",
    email: "info@citycarehospital.com",
    rating: 4.6,
    beds: 250,
    doctors: 85,
    icuBeds: 40,
    operationTheatres: 12,
    emergency: "24/7 Emergency Services Available",
    logo: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1b9c?w=200",
    coverImage:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200",
    specialties: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "Surgery",
      "ICU Care",
    ],
    SpecialImages: [
      "/images/profile/heart.jpg",
      "/images/profile/brain.jpg",
      "/images/profile/bone.png",
      "/images/profile/baby.jpg",
      "/images/profile/doctor.jpg",
      "/images/profile/ICU.jpg",
    ],
  };

  const stats = [
    { label: "Doctors", value: hospital.doctors, icon: "/users/doctor.png" },
    { label: "Beds", value: hospital.beds, icon: "/hrm_image/bed.png" },
    { label: "ICU Beds", value: hospital.icuBeds, icon: "/users/ICUbed.png" },
    { label: "OT Rooms", value: hospital.operationTheatres, icon: "/hrm_image/hospital-ward.png"},
    { label: "Nurses", value: hospital.rating, icon: "/hrm_image/nurse.png" },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      
      {/* COVER */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <img src={hospital.coverImage} className="w-full h-full object-cover object-center"/>

        {/* WHITE GRADIENT IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/25 to-white/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-64 md:-mt-80 relative z-10">
        {/* HEADER */}
        <div className="p-6 flex flex-col md:flex-row gap-6 relative items-center min-h-64 md:min-h-80 -ml-5">
          <Image src="/hrm_image/newlogo.svg" alt={`${hospital.name} logo`} width={144} height={144} className="w-32 h-32 md:w-36 md:h-36 bg-white rounded-2xl shadow-lg border border-white object-contain"/>

          <div className="flex-col space-y-2">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              {hospital.name}
            </h1>

            <p className="text-gray-700 font-semibold text-xl">
              {hospital.tagline}
            </p>

            <span className="flex items-center space-x-2">
              <FaLocationDot className="text-red-500 text-xl" />
              <p className="text-sm text-slate-700 font-semibold mt-1">
                {hospital.address}
              </p>
            </span>

            {/* RAITING AND AVAILABILITY */}
            <div className="flex flex-wrap gap-3 mt-3">
              <div className="flex items-center justify-center bg-amber-50 border border-amber-100 text-amber-700 px-3 py-2 rounded-full">
                <span>
                  <FaStar className="text-amber-500 text-lg" />
                </span>
                <span className="px-3 font-semibold text-sm">
                  {hospital.rating}
                </span>
              </div>

              <div className="px-3 py-2 flex items-center space-x-3 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-semibold">Open 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* FACILITIES STATS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-sm text-center flex flex-col  items-center"
            >
              <img src={item.icon} className=" h-20    w-22" />
              <p className="text-lg font-bold text-gray-800 mt-1">
                {item.value}
              </p>
              <p className="text-sm text-gray-500">{item.label}</p>
              <div
                className="h-1 w-10 mx-auto mt-2 rounded-full"
                style={{ backgroundColor: "#14967f" }}
              />
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">
            {/* ABOUT */}
            <div className="flex items-center bg-white rounded-2xl p-6 shadow-sm gap-3">
              
              <img src={hospital.coverImage} className="w-90 h-full md:w-36 md:h-36 bg-white rounded-2xl shadow-lg border border-white object-cover "/>
              <div className="ml-6">
                <h2 className="flex gap-2 items-center text-xl font-semibold mb-4 ">
                  <CiHospital1 className="text-3xl"/> About Hospital
                </h2>
                <p className="text-gray-600 text-sm max-w-[550px]">
                  {hospital.name} is a modern healthcare institution located in
                  {hospital.address}, offering advanced medical services,
                  emergency care, and specialized treatments with highly
                  experienced doctors.
                </p>
              </div>
            </div>

           
            {/* SPECIALTIES */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Specialties</h2>

              <div className="flex gap-4">
                {hospital.specialties.map((item, i) => (
                  <div key={i} className="w-100 flex flex-col justify-center items-center px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100">
                    <img src={hospital.SpecialImages?.[i]} alt={item} className="w-15 h-15 object-cover rounded-lg"/>

                    <p className="text-sm font-medium text-emerald-800">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>


            {/* EMERGENCY */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <h3 className="font-semibold text-emerald-700">Emergency Care</h3>
              <p className="text-sm text-gray-600 mt-1">{hospital.emergency}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* CONTACT */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3">Contact Info</h3>

              <div className="flex flex-col space-y-2">
                <div className="flex  space-x-4 items-center ">
                  <FaPhone className="text-blue-600 text-xl" />
                  <p className="text-sm text-gray-600"> {hospital.phone}</p>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <MdEmail className="text-yellow-500 text-xl" />
                  <p className="text-sm text-gray-600 mt-2">{hospital.email}</p>
                </div>
                <div className="flex  space-x-4 items-center ">
                  <FaLocationDot className="text-red-600 text-xl" />

                  <p className="text-sm text-gray-600 mt-2">
                    {hospital.address}
                  </p>
                </div>
              </div>
            </div>

            {/* QUICK FEATURES */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <PiHospitalDuotone className="text-2xl" /> Facilities
              </h3>

              <div className=" flex flex-col space-y-4 text-sm text-gray-600">
                <div className="flex space-x-6 items-center">
                  <img src={"/hrm_image/stethoscope.png"} className="h-6 w-6" />
                  <span>Advanced ICU Unit</span>
                </div>
                <div className="flex space-x-6 items-center">
                  <img src={"/hrm_image/stethoscope.png"} className="h-6 w-6" />
                  <span>Modular Operation Theatres</span>
                </div>

                <div className="flex space-x-6 items-center">
                  <img src={"/hrm_image/stethoscope.png"} className="h-6 w-6" />
                  <span>24/7 Emergency Room</span>
                </div>
                <div className="flex space-x-6 items-center">
                  <img src={"/hrm_image/stethoscope.png"} className="h-6 w-6" />
                  <span>Digital Lab & Diagnostics</span>
                </div>
                <div className="flex space-x-6 items-center">
                  <img src={"/hrm_image/stethoscope.png"} className="h-6 w-6" />
                  <span>Ambulance Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
