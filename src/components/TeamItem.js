import React from 'react';
import DriverImage from './DriverImage';

const image_url = 'http://localhost:5126/images';

const TeamItem = ({ team }) => {
  return (
    <div className="teambackground relative flex flex-col justify-between text-center bg-white shadow-md rounded-xl border-2 border-black gap-2">
        <div className="flex w-full justify-evenly items-center">
          <div className="m-4 flex-1">
            <p className="customFont text-black font-bold">{team.name}</p>
            <h3 className="text-black text-xl">Points: {team.points}</h3> 
          </div>
          <div className="flex justify-center m-4 right-0 flex-1">
           {team.imageName && <img className="w-80" src={`${image_url}/${team.imageName}`} alt={`Team ${team.id}`} />}
          </div>
        </div>
        

        <p className="text-sm text-black font-bold text-yellow-400 font-mono">{team.team}</p>
        <DriverImage team={team.name} />

      

      


      
    </div>
  );
};

export default TeamItem;