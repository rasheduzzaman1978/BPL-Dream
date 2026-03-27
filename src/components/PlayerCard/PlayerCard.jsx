import React from 'react';
import userImg from '../../assets/userImg.png';
import { ToastContainer, toast } from 'react-toastify';

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  selectedPlayers,
  setSelectedPlayers
}) => {
  
  // const [isSelected, setIsSelected] = useState(false);

  const isSelected = selectedPlayers.some(p => p.player_id === player.player_id);
  

  const handleChoosePlayer = () => {
  // ❌ duplicate check
  if (isSelected) {
    toast.error("Player already selected!");
    return;
  }

  // ❌ max 6 player limit
  if (selectedPlayers.length >= 6) {
    toast.error("You can select maximum 6 players!");
    return;
  }

  // ❌ balance check
  if (availableBalance < player.price) {
    toast.error("Not enough coin to hire a player!");
    return;
  }

  // ✅ add player
  setSelectedPlayers(prev => [...prev, player]);

  // ✅ update balance (correct way)
  setAvailableBalance(prev => prev - player.price);
   // ✅ success toast
  toast.success(`${player.player_name} added successfully!`);
};

  return (
    <div className="card bg-base-100 w-full shadow-sm p-4">
      <figure>
        <img
          src={player.player_image}
          alt={player.player_name}
          className="w-full h-60 object-cover object-top rounded-xl"
        />
      </figure>

      <div className="mt-4">
        <div className='flex'>
          <img className='w-8 h-8' src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>

        <div className='flex justify-between mt-4 border-b border-gray-400'>
          <div className='flex items-center mb-4'>
            <img src={player.flag} alt="flag" className='w-6 h-4 object-cover' />
            <span className='ml-2'>{player.player_country}</span>
          </div>
          <button className='btn'>{player.playing_role}</button>
        </div>

        <div className='flex justify-between font-bold mt-4'>
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>

        <div className='flex justify-between mt-4'>
          <span className='font-bold'>{player.batting_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions mt-2 flex justify-between items-center">
          <p className='font-bold'>Price: $ {player.price}</p>

          <button
            disabled={
              isSelected             }
            onClick={handleChoosePlayer}
            className="btn"
          >
            {isSelected
              ? "Selected"
              : "Choose Player"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default PlayerCard;