import React, { useState, useEffect } from 'react';
import TeamList from '../components/TeamList';
import AddTeam from '../components/AddTeam';
import GetTeam from '../components/GetTeam';
import TeamService from '../services/TeamService';

const TeamPage =() => {
  const [teams, setTeams] = useState([]);
  const [allTeams, setAllTeams] = useState([]);

  const getAllTeams = async () => {
    const response = await TeamService.getAllTeams();
    setTeams(response);
    setAllTeams(response);
  };

  const addTeam = (newTeam) => {
    setTeams([...teams, newTeam]);
  }

  const getTeamById = async (teamId) => {
    const foundTeam = allTeams.find((team) => team.id === parseInt(teamId));
    if (foundTeam != null) {
      setTeams([foundTeam]);
    } else {
      setTeams([]);
    }
  };

  const resetTeams = async () => {
    await getAllTeams();
  }

  useEffect(() => {
    getAllTeams();
  }, []);
  return (
    <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <AddTeam onAddTeam={addTeam} />
            </div>
            <div className="grid grid-rows-[1fr auto] h-full">
                <div className="row-span-1">
                    <GetTeam onGetTeam={getTeamById} />
                </div>
                <div className="row-span-1 flex flex-col-reverse">
                    <button
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        onClick={resetTeams}
                    >
                        Reset Teams
                    </button>
                </div>
            </div>
        </div>

        <div className=" mt-8">
            <TeamList teams={teams} setTeams={setTeams} />
        </div>
    </div>
  );
};

export default TeamPage;