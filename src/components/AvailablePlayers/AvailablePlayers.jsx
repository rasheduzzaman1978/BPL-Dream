// React import
import React, { use } from "react";

// Child component (each player card)
import PlayerCard from "../PlayerCard/PlayerCard";


// ==============================
// AvailablePlayers Component
// ==============================
const AvailablePlayers = ({
  playersPromise,          // Promise থেকে players data আসবে
  setAvailableBalance,     // balance update করার function
  availableBalance,        // বর্তমান balance
  selectedPlayers,         // already selected players list
  setSelectedPlayers       // selected players update করার function
}) => {

  // ==============================
  // Suspense + use() দিয়ে data resolve করা
  // ==============================
  const playerData = use(playersPromise);

  return (
    <div className="navbar max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {/* ==============================
          Player list render করা
      ============================== */}
      {
        playerData.map((player) => (
          <PlayerCard
            key={player.player_id}   // unique key (important for React)
            player={player}          // single player data

            // Props pass করা হচ্ছে
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ))
      }

    </div>
  );
};

export default AvailablePlayers;