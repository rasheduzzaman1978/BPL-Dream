// Global CSS
import "./App.css";

// Third-party library
import { ToastContainer } from "react-toastify";

// React hooks
import { Suspense, useState } from "react";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectecPlayers/SelectedPlayers";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";


// ==============================
// Fetch players data from JSON
// ==============================
const fetchPlayers = async () => {
  const res = await fetch(`${import.meta.env.BASE_URL}players.json`);
  return res.json();
};


// ==============================
// Main App Component
// ==============================
function App() {

  // Toggle between Available & Selected players
  const [toggle, setToggle] = useState(true);

  // Store selected players
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Store available balance (budget)
  const [availableBalance, setAvailableBalance] = useState(6000000);

  // Fetch players (Promise for Suspense)
  const playersPromise = fetchPlayers();

  return (
    <>
      {/* ================= Toast Notification ================= */}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        theme="colored"
        className="px-2"
        toastClassName="rounded-xl"
      />

      {/* ================= Navbar ================= */}
      <Navbar availableBalance={availableBalance} />

      {/* ================= Hero Section ================= */}
      <Hero />

      {/* ================= Warning Message ================= */}
      <div className="flex justify-center items-center mb-2">
        {selectedPlayers.length >= 6 && (
          <p className="text-red-500 font-semibold mt-2">
            You have already selected 6 players!
          </p>
        )}
      </div>

      {/* ================= Toggle Section ================= */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">

        {/* Title */}
        <h1 className="text-base sm:text-xl md:text-2xl lg:text-[28px] font-bold px-2">
          {toggle
            ? "Available Players"
            : `Selected Players (${selectedPlayers.length}/6)`}
        </h1>

        {/* Toggle Buttons */}
        <div>
          {/* Available Button */}
          <button
            onClick={() => setToggle(true)}
            className={`py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 
              border border-gray-400 rounded-l-2xl text-sm md:text-base font-bold border-r-0
              ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>

          {/* Selected Button */}
          <button
            onClick={() => setToggle(false)}
            className={`py-1 md:py-2 lg:py-3 px-2 sm:px-3 md:px-4 
              border border-gray-400 rounded-r-2xl text-sm md:text-base border-l-0 mr-2
              ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* ================= Players Section ================= */}
      {
        toggle ? (
          // Show Available Players
          <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
            <AvailablePlayers
              playersPromise={playersPromise}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
            />
          </Suspense>
        ) : (
          // Show Selected Players
          <SelectedPlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            setAvailableBalance={setAvailableBalance}
            setToggle={setToggle}
          />
        )
      }

      {/* ================= Footer Section ================= */}
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;