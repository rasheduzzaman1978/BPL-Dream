import React from 'react';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setToggle,
  setAvailableBalance
}) => {

  // ✅ remove player
  const handleRemove = (player) => {
    const updated = selectedPlayers.filter(
      p => p.player_id !== player.player_id
    );

    setSelectedPlayers(updated);

    // ✅ balance ফেরত
    setAvailableBalance(prev => prev + player.price);

    // ✅ toast show করো
  toast.error(`${player.player_name} removed!`);

  };

  return (
    <div className='max-w-6xl mx-auto mt-6 p-4'>

      {/* 🔥 Empty State */}
      {selectedPlayers.length === 0 ? (
  <>
    <div className="flex flex-col items-center justify-center mt-16">
  <h3 className="text-gray-400 text-lg md:text-2xl font-semibold">
    🚫 No Players Selected Yet
  </h3>
  <p className="text-gray-500 mt-2">
    Go to Available tab to select players
  </p>
</div>
  </>
) : (
  <>
    <div className="space-y-4">
      {
        selectedPlayers.map(player => (
          <div
            key={player.player_id}
            className="flex justify-between items-center border rounded-xl p-3 shadow-sm"
          >
            {/* Left side */}
            <div className="flex items-center gap-3">
              <img
                src={player.player_image}
                alt={player.player_name}
                className="w-16 md:w-24 h-12 md:h-20 rounded-md object-cover object-top"
              />

              <div>
                <img src={player.flag} alt="flag" className='w-6 h-4 object-cover' /><h3 className="font-semibold">
                  {player.player_name}
                </h3>
                <p className="text-sm text-gray-500">
                  {player.batting_style}
                </p>
              </div>
            </div>

            {/* Delete Button */}
            <button
  onClick={() => handleRemove(player)}
  className="p-2 rounded-full hover:bg-red-100 text-red-500 hover:text-red-700 transition"
>
  <MdDelete size={20} />
</button>
          </div>
        ))
      }
    </div>

    {/* ✅ Button এখন শুধু তখনই দেখাবে যখন player আছে */}
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