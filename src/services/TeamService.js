import axios from "axios";

const TeamService = (() => {
  const team_url = "http://localhost:5126/api/teams";

  const addTeam = async (newTeam) => {
  try {
    const response = await axios.post(team_url, newTeam);
  } catch (error) {
    console.log(error);
  }
};

const deleteTeam = async (id) => {
  try {
    await axios.delete(`${team_url}/${updateTeam.id}`, updateTeam);
  } catch (error) {
    console.error("There was an error updating the team:", error);
  }
};

const updateTeam = async (updateTeam) => {
  try {
    const response = await axios.put(`${team_url}/${updateTeam.id}`, updateTeam);
  } catch (error) {
    console.error("There was an error updating the team:", error)
  }
}

const getAllTeams = async () => {
  try {
    const response = await axios.get(team_url);
    return response.data;
  } catch (error) {
    console.error("Error fetching team", error);
    return [];
  }
};

const getTeamById = async (id) => {
  try {
    const response = await axios.get(`${team_url}/${id}`)
    return response.data
  } catch (error) {
    console.error("Error fetching Team", error);
    return [];
  }
};

return {
  addTeam,
  deleteTeam,
  updateTeam,
  getAllTeams,
  getTeamById
}
})();

export default TeamService;