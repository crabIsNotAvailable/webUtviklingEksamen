import TeamItem from "./TeamItem";
import { useState } from "react";
import TeamService from "../services/TeamService";
import DriverService from "../services/DriverService";

const TeamList = ({ teams, setTeams }) => {
  const handleDeleteTeam = async (id) => {
      try {
          await TeamService.deleteTeam(id);
          const teamsAfterDelete = teams.filter((team) => team.id !== id);
          setTeams(teamsAfterDelete);
      } catch (error) {
          console.log(error);
      }
  };


  return (
      <div>
      <h1 className="text-white text-xl mb-4">Teams</h1>
          <div className="grid grid-cols-2 gap-4">
          {teams.map((team,) => (
              <div key={team.id}>
                  <TeamItem team={team}></TeamItem>
                  <button
                      className= " bg-red-500 hover:bg-red-700 text-white font-bold rounded px-4 py-2"
                      onClick={() => handleDeleteTeam(team.id)}
                  >
                      Delete
                  </button>
                  {/* <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 py-2"
                      onClick={() => toggleUpdateForm(Team)}
                  >
                      Update
                  </button>
                  {isUpdateVisible && updatedTeamId === Team.id && (
                      <UpdateTeam Team={Team} onUpdateTeam={handleUpdateTeam} />
                  )} */}
              </div>
          ))}
          {!teams.length && <p className="text-red-500 text-lg mt-2">No team found</p>}
      
      </div>
      </div>
  );
};

export default TeamList;
