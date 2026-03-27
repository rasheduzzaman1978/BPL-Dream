// React
import React from "react";

// Toast notification
import { toast } from "react-toastify";

// Icons
import { MdDelete } from "react-icons/md";

// Assets
import userImg from "../../assets/userImg.png";


// ==============================
// SelectedPlayers Component
// ==============================
const SelectedPlayers = ({
  selectedPlayers,        // selected players list
  setSelectedPlayers,     // update selected players
  setToggle,              // toggle back to available players
  setAvailableBalance     // balance update
}) => {

  // ==============================
  // Remove player function
  // ==============================
  const handleRemove = (player) => {

    // ❌ Remove player from list
    const updatedPlayers = selectedPlayers.filter(
      (p) => p.player_id !== player.player_id
    );

    // ✅ Update state
    setSelectedPlayers(updatedPlayers);

    // ✅ Refund balance
    setAvailableBalance((prev) => prev + player.price);

    // ✅ Show toast message
    toast.error(`${player.player_name} removed!`);
  };


  return (
    <div className="max-w-6xl mx-auto mt-6 p-4">

      {/* ================= EMPTY STATE ================= */}
      {selectedPlayers.length === 0 ? (

        <div className="flex flex-col items-center justify-center mt-16">
          <h3 className="text-gray-400 text-lg md:text-2xl font-semibold">
            🚫 No Players Selected Yet
          </h3>
          <p className="text-gray-500 mt-2">
            Go to Available tab to select players
          </p>
        </div>

      ) : (

        <>
          {/* ================= PLAYER LIST ================= */}
          <div className="space-y-4">
            {selectedPlayers.map((player) => (

              <div
                key={player.player_id}
                className="flex justify-between items-center border rounded-xl p-3 shadow-sm"
              >

                {/* ===== Left Side (Image + Info) ===== */}
                <div className="flex items-center gap-3">

                  {/* Player Image */}
                  <img
                    src={player.player_image}
                    alt={player.player_name}
                    className="w-16 md:w-24 h-12 md:h-20 rounded-md object-cover object-top"
                  />

                  {/* Player Info */}
                  <div>
                    <img
                      src={player.flag}
                      alt="flag"
                      className="w-6 h-4 object-cover"
                    />

                    <div className="flex items-center gap-2 mt-1">
                      <img
                        className="w-6 h-6"
                        src={userImg}
                        alt="user"
                      />

                      <h2 className="font-semibold">
                        {player.player_name}
                      </h2>
                    </div>

                    <p className="text-sm text-gray-500">
                      {player.batting_style}
                    </p>
                  </div>
                </div>

                {/* ===== Delete Button ===== */}
                <button
                  onClick={() => handleRemove(player)}
                  className="p-2 rounded-full hover:bg-red-100 text-red-500 hover:text-red-700 transition"
                >
                  <MdDelete size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* ================= ADD MORE BUTTON ================= */}
          <div className="mt-6">
            <button
              onClick={() => setToggle(true)}
              className="bg-lime-400 px-4 py-2 rounded-lg font-semibold border border-black"
            >
              Add More Player
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedPlayers;