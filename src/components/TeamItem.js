import React from 'react';
import DriverImage from './DriverImage';

const image_url = 'http://localhost:5126/images';

const TeamItem = ({ team }) => {
  return (
    <div className="teambackground flex text-center bg-white shadow-md rounded-xl border-2 border-black">
      <DriverImage team={team.name} />
      <div>
        <p className="text-xl font-serif font-bold">{team.name}</p>
        <p className="text-sm font-bold text-yellow-400 font-mono">{team.team}</p>
      </div>
      <div className="w-60 h-32">
        {team.imageName && <img src={`${image_url}/${team.imageName}`} alt={`Team ${team.id}`} />}
      </div>
    </div>
  );
};

export default TeamItem;