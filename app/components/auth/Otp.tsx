"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Slider from "react-slick";


export const Otp = () => {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value ;

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const value = e.currentTarget.value ;
    if (e.key === "Backspace" && !value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      <div className="flex items-center  h-screen w-full gap-10">

        <div className="w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 h-full flex items-center justify-center">
          <div className="w-[80%]">
            <Slider {...settings}>
              {[
                "xx.png",
                "otp.png",
              ].map((img, i) => (
                <div key={i} className="flex flex-col items-center">
                  <img
                    src={`/vector/${img}`}
                    className="w-[90%] mx-auto drop-shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 border border-gray-300 rounded-md px-10 py-8 shadow-lg shadow-gray-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-gray-400 transition duration-300">
          <h2 className="font-bold text-4xl">Authentication Code</h2>
          <p className="text-gray-600 text-xl">Please enter the 6-digit code sent to your registered device.</p>

          <div className="w-[400px] rounded-md px-6 py-7">
            <form className="flex items-center justify-center gap-5">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                  key={index}
                  ref={(el) => {inputs.current[index] = el}}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="text-lg w-10 h-10 border-2 border-gray-400 text-center text-gray-700 outline-none rounded-md shadow-sm bg-gray-100 focus:border-blue-500"
                />
              ))}
            </form>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
