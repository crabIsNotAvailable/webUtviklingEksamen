import React, { useState } from 'react';

const GetTeam = ({ onGetTeam }) => {
    const [teamId, setTeamId] = useState("");

    const handleGetTeam = () => {
        onGetTeam(teamId);
        setTeamId("");
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Team Id"
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                className="w-full p-2 border-gray-300 rounded"
            />
            <button
                onClick={handleGetTeam}
                className="w-full bg-blue-500 text-white hover:bg-blue-700 font-bold p-2 rounded"
            >
                GetTeam
            </button>
        </div>
    );
}

export default GetTeam;