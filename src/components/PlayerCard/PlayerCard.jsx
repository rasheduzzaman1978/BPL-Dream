import React, { useState } from 'react';
import userImg from '../../assets/userImg.png';
import flagImg from '../../assets/flag.png';


const PlayerCard = ({player, setAvailableBalance}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4">
  <figure>
    <img
      src={player.player_image}
      alt={player.player_name} 
      className="w-full h-60 object-cover object-top rounded-xl"
      />
  </figure>
  <div className="mt-4">
    <div className='flex'>
      <img className='w-8 h-8' src={userImg} alt="" /><h2 className="card-title ml-2">{player.player_name}</h2>
    </div>

    <div className='flex justify-between mt-4 border-b border-gray-400'>
      <div className='flex items-center mb-4'>
  <img src={player.flag} alt="flag" className='w-6 h-4 object-cover' />
  <span className='ml-2'>{player.player_country}</span>
</div>
      <button className='btn'>{player.playing_role
}</button>
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
      <p className='font-bold'>Price: {player.price}</p>
      <button disabled={isSelected} onClick={()=> setIsSelected(true)} className="btn"> {isSelected === true ? "Selected" : "Choose Player"}</button>
    </div>
  </div>
</div>
  );
};

export default PlayerCard;