// React import
import React from "react";

// Assets
import userImg from "../../assets/userImg.png";

// Toast notification
import { toast } from "react-toastify";


// ==============================
// PlayerCard Component
// ==============================
const PlayerCard = ({
  player,                 // single player data
  setAvailableBalance,    // balance update function
  availableBalance,       // current balance
  selectedPlayers,        // selected players list
  setSelectedPlayers      // update selected players
}) => {

  // ==============================
  // Check if player already selected
  // ==============================
  const isSelected = selectedPlayers.some(
    (p) => p.player_id === player.player_id
  );


  // ==============================
  // Handle player selection
  // ==============================
  const handleChoosePlayer = () => {

    // ❌ Duplicate check
    if (isSelected) {
      toast.error("Player already selected!");
      return;
    }

    // ❌ Max 6 players limit
    if (selectedPlayers.length >= 6) {
      toast.error("You can select maximum 6 players!");
      return;
    }

    // ❌ Balance check
    if (availableBalance < player.price) {
      toast.error("Not enough coin to hire a player!");
      return;
    }

    // ✅ Add player to selected list
    setSelectedPlayers((prev) => [...prev, player]);

    // ✅ Deduct balance
    setAvailableBalance((prev) => prev - player.price);

    // ✅ Success message
    toast.success(`${player.player_name} added successfully!`);
  };


  return (
    <div className="card bg-base-100 w-full shadow-sm p-4">

      {/* ================= Player Image ================= */}
      <figure>
        <img
          src={player.player_image}
          alt={player.player_name}
          className="w-full h-60 object-cover object-top rounded-xl"
        />
      </figure>

      <div className="mt-4">

        {/* ================= Player Name ================= */}
        <div className="flex items-center">
          <img className="w-8 h-8" src={userImg} alt="user" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>

        {/* ================= Country & Role ================= */}
        <div className="flex justify-between mt-4 border-b border-gray-400 pb-2">
          <div className="flex items-center">
            <img
              src={player.flag}
              alt="flag"
              className="w-6 h-4 object-cover"
            />
            <span className="ml-2">{player.player_country}</span>
          </div>

          <button className="btn">{player.playing_role}</button>
        </div>

        {/* ================= Rating ================= */}
        <div className="flex justify-between font-bold mt-4">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>

        {/* ================= Batting & Bowling ================= */}
        <div className="flex justify-between mt-4">
          <span className="font-bold">{player.batting_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        {/* ================= Price & Action ================= */}
        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="font-bold">Price: $ {player.price}</p>

          <button
            disabled={isSelected}   // disable if already selected
            onClick={handleChoosePlayer}
            className={`btn ${isSelected ? "bg-gray-300 cursor-not-allowed" : ""}`}
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;