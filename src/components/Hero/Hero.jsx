// React
import React from "react";

// Assets
import heroLogo from "../../assets/banner-main.png";


// ==============================
// Hero Component
// ==============================
const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto mt-6 mb-8 md:mb-12 px-4">

      {/* ================= Hero Container ================= */}
      <div className="rounded-2xl bg-gradient-to-r from-black via-gray-900 to-purple-400 p-10 text-center text-white relative overflow-hidden">

        {/* ===== Background Glow Effect ===== */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-transparent to-pink-300/20"></div>

        {/* ================= Content ================= */}
        <div className="relative z-10 flex flex-col items-center">

          {/* ===== Logo / Image ===== */}
          <img
            src={heroLogo}
            alt="hero"
            className="w-24 md:w-32 lg:w-40 mb-4"
          />

          {/* ===== Title ===== */}
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          {/* ===== Subtitle ===== */}
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Beyond Boundaries Beyond Limits
          </p>

          {/* ===== CTA Button ===== */}
          <button className="bg-[#E7FE29] text-black font-semibold px-6 py-2 rounded-xl border border-black hover:scale-105 hover:shadow-lg transition duration-300">
            Claim Free Credit
          </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;