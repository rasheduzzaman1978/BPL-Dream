import { useState } from "react";
import { toast } from "react-toastify";

const Subscribe = () => {

  const [email, setEmail] = useState("");

  // ==============================
  // Email validation function
  // ==============================
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.com$/.test(email);
  };

  // ==============================
  // Handle subscribe
  // ==============================
  const handleSubscribe = () => {

    // ❌ Empty check
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    // ❌ Invalid email format
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // ✅ Success
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <div className="max-w-6xl mx-auto -mb-32 md:-mb-40 lg:-mb-52 relative z-10 px-4 mt-20">

      <div className="p-3 md:p-6 rounded-2xl bg-gradient-to-r from-white/40 via-white/20 to-white/40 backdrop-blur-md">

        <div className="bg-gradient-to-r from-[#ffffff] to-[#fdf1d6] rounded-2xl py-10 md:py-20 lg:py-28 text-center">

          <h2 className="text-xl md:text-2xl lg:text-[32px] font-bold mb-2">
            Subscribe to our Newsletter
          </h2>

          <p className="md:text-lg lg:text-xl text-gray-600 mx-2 mb-6">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-3">

            {/* Email Input */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
              // Enter press করলে submit:
              onKeyDown={(e) => {
              if (e.key === "Enter") handleSubscribe();
              }}

              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-300 w-70 md:w-80 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Subscribe Button */}
            <button
              onClick={handleSubscribe}
              className="btn bg-gradient-to-r from-[#f9d17d] to-[#fb9c87] px-6 py-2 rounded-lg font-bold"
            >
              Subscribe
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;