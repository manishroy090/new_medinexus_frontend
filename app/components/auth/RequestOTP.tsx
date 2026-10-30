"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMailUnreadSharp } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const RequestOTP = () => {
  const [emailAddress, setemailAddress] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [otp, setOtp] = useState("");

  const api = async () => {
    try {
      const response = await axios.post("/", {
        emailAddress: emailAddress,
        otp: otp,
      });

      // if OTP is sent successfully,
      alert("OTP sent successfully");

      // catch error if any error occurs during the API call.
    } catch (error) {
      alert("Error during OTP verification");
    }
  };

  // Function to handle Send OTP button
  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/otp", {
        emailAddress: emailAddress,
      });

      alert("OTP sent successfully");
    } catch (error) {
      alert("Error sending OTP");
    }
  };

  // Function to verify OTP
  const verifyOtp = () => {
    // if OTP entered by the user is same as the OTP generated, give a alert message to the user.
    if (otp == userOtp) {
      alert("OTP Verified");
    } else {
      alert("OTP Not Verified");
    }
  };



  // Auto forward while typing
const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> , index: number): void => {
    const digit = e.target.value.replace(/\D/g, "").slice(-1);

    const otpArray = userOtp.split("");
    otpArray[index] = digit;

    setUserOtp(otpArray.join(""));

    // Move to the next input
    if (digit && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number):void => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <div className="flex ml-25">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center h-[calc(90vh-60px)] w-[45%] mt-15 ml-10 pt-10 bg-gradient-to-br from-yellow-400 via-yellow-400 to-cyan-500 rounded-full">
          <h3 className="text-white px-6 py-3 mb-12 mt-6 text-center border border-white rounded-lg font-semibold shadow-lg text-base tracking-widest bg-gradient-to-r from-yellow-400 to-green-500">
            Securely open your account
          </h3>

          <div
            className="mt-8 min-h-0 w-full flex-1 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hrm_image/emailverification.svg')",
            }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center w-1/2 relative right-10">
          <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/60 sm:p-10">
            {/* OTP Verification Form */}
            <div className="w-full">
              <div className="flex items-center mb-">
                <div className=" bg-emerald-50 text-emerald-600 h-14 w-14 mb-5 flex items-center justify-center rounded-2xl">
                  <IoMailUnreadSharp className="w-7 h-auto rounded-xl" />
                </div>

                <h2 className="text-[24px] font-bold text-gray-800 pb-5 ml-2 tracking-tight">
                  Check your Email Address
                </h2>
              </div>

              <p className="text-gray-500 text-sm mb-3">
                Enter the 6-digit verification code sent to your authorized
                email address
              </p>

              <form className="w-full">
                <label className="text-sm font-semibold text-gray-700">
                  Verification code
                </label>

                <div className="w-full flex items-center justify-between gap-3 mt-2">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      type="text"
                      ref={(el) => {inputs.current[index] = el}}
                      inputMode="numeric"
                      maxLength={1}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      value={userOtp[index] || ""}
                      // onChange={(e) => handleUseremailAddress(e)}
                      className="h-12 w-0 min-w-0 flex-1 rounded-xl border-2 border-gray-200 bg-gray-50 text-center t text-xl font-bold text-emerald-600 outline-none transition-all duration-200 hover:border-emerald-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 sm:h-14 sm:rounded-2xl sm:text-2xl"
                    />
                  ))}
                </div>

                <button
                  onClick={verifyOtp}
                  className="w-full flex justify-center bg-yellow-200 rounded-xl mt-7 py-4 font-semibold text-emerald-600 shadow-lg hover:bg-yellow-400 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Verify OTP
                </button>
              </form>

              <p className="mt-7 text-center text-sm text-gray-500">
                <span>Didn't receive the code?</span>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="ml-1 font-semibold text-emerald-600 transition hover:text-emerald-700 hover:underline"
                >
                  Resend code
                </button>
              </p>

              <div className="border-t-2 border-gray-100 my-7" />

              <button
                type="button"
                onClick={handleLogin}
                className="font-medium text-gray-500 flex items-center mx-auto gap-2 transition-colors hover:text-emerald-600"
              >
                <IoIosArrowRoundBack className="text-2xl -mr-2" />
                <span>Back to sign in</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
