import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  selectedPlayers,
  setSelectedPlayers
}) => {

  const playerData = use(playersPromise);

  return (
    <div className="navbar max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        playerData.map(player => (
          <PlayerCard
            key={player.player_id}   
            player={player}
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