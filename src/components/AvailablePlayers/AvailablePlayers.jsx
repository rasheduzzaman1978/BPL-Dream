import React, {use} from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({playersPromise, setAvailableBalance}) => {

  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div className="navbar max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

      {
        playerData.map(player => <PlayerCard setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>
          
        )
      }
      
      

    </div>
  );
};

export default AvailablePlayers;