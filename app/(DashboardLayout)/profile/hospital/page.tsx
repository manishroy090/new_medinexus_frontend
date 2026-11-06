"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import { CiHospital1 } from "react-icons/ci";
import { PiHospitalDuotone, PiHeartbeat, PiFirstAidKit, PiTestTube, PiAmbulance } from "react-icons/pi";

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


  // FEATURES
  const facilities = [
    {
      title: "Advanced ICU Unit",
      icon: PiHeartbeat,
      iconColor: "text-rose-500",
      iconBg: "bg-rose-50",
    },
    {
      title: "Modular Operation Theatres",
      icon: PiFirstAidKit,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
    },
    {
      title: "Digital Lab & Diagnostics",
      icon: PiTestTube,
      iconColor: "text-violet-500",
      iconBg: "bg-violet-50",
    },
    {
      title: "Ambulance Service",
      icon: PiAmbulance,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
    },
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
          <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl p-4 sm:p-6 shadow-sm gap-4 sm:gap-5">

            <img src={hospital.coverImage} alt={hospital.name}
              className="w-full h-48 sm:w-36 sm:h-36 shrink-0 bg-white rounded-2xl shadow-lg border border-white object-cover"/>

            <div className="min-w-0 w-full sm:px-2">
              <h2 className="flex gap-2 items-center text-xl font-semibold mb-3">
                <CiHospital1 className="text-3xl shrink-0" />
                About Hospital
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {hospital.name} is a modern healthcare institution located in {hospital.address}, 
                offering advanced medical services, emergency care, and specialized treatments with highly 
                experienced doctors.
              </p>
            </div>
          </div>

           
            {/* SPECIALTIES */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm min-w-0">
              <h2 className="text-lg font-semibold mb-4">Specialties</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {hospital.specialties.map((item, i) => (
                  <div key={i} className="min-w-0 flex flex-col justify-center items-center gap-2 px-2 sm:px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-100">
                    <img src={hospital.SpecialImages?.[i]} alt={item} className="w-12 h-12 sm:w-15 sm:h-15 object-cover rounded-lg"/>

                    <p className="text-xs sm:text-sm font-medium text-emerald-800 text-center break-words">
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
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold mb-3">Contact Information</h3>
                <h3 className="font-semibold mb-3 text-emerald-600 px-2 py-1 bg-emerald-100 rounded-full text-[15px]">Verified</h3>
              </div>


              <div className="flex flex-col space-y-5">
                <a href={`tel:${hospital.phone}`} target="_blank" className="flex flex-col hover:bg-gray-100 rounded-lg p-2">
                  <p className="text-[15px] justify-left flex ml-7 text-gray-600"> Phone Number</p>
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-blue-600 text-xl" />
                    <p className="text-[16px] font-semibold text-gray-600">{hospital.phone}</p>
                  </div>
                </a>   
                
                <a href={`mailto:${hospital.email}`} target="_blank" className="flex flex-col hover:bg-gray-100 rounded-lg p-2">
                  <p className="text-[15px] justify-left flex ml-7 text-gray-600"> Email</p>
                  <div className="flex items-center space-x-2">
                    <MdEmail className="text-yellow-500 text-xl" />
                    <p className="text-[16px] font-semibold text-gray-600"> {hospital.email}</p>
                  </div>
                </a>

                {/* ADDRESS */}
                <a href={`https://maps.google.com/?q=${encodeURIComponent(hospital.address)}`} target="_blank" className="flex flex-col hover:bg-gray-100 rounded-lg p-2">
                  <p className="text-[15px] justify-left flex ml-7 text-gray-600"> Address</p>
                  <div className="flex items-center space-x-2">
                    <FaLocationDot className="text-red-600 text-xl" />
                    <p className="text-[16px] font-semibold text-gray-600">
                      {hospital.address}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* FACILITIES */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <PiHospitalDuotone className="text-2xl text-emerald-600" />

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Facilities
                    </h3>
                    <p className="text-xs text-gray-400">
                      Hospital services & infrastructure
                    </p>
                  </div>
                </div>
              </div>

              {/* FACILITIES LIST */}
              <div className="space-y-1">
                {facilities.map((facility, index) => {
                  const Icon = facility.icon;

                  return (
                    <div key={index}
                      className="flex items-center gap-3 p-2.5 border border-transparent rounded-xl hover:bg-emerald-50/50 hover:border-emerald-100 transition-all duration-200">
                      
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${facility.iconBg}`}>
                        <Icon className={`text-xl ${facility.iconColor}`}/>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-800">
                          {facility.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
