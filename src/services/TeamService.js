import axios from "axios";
import DriverService from "./DriverService";

const TeamService = (() => {
  const team_url = "http://localhost:5126/api/teams";
  const driver_url = "http://localhost:5126/api/drivers";

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

const getDriverImage = async (teamName) => {
  try {
    const responseTeam = await axios.get(`${team_url}/${teamName}`);
    const responseDriver = await axios.get(`${driver_url}/team/${teamName}`);

    if (responseTeam.data && responseDriver.data) {
      return responseDriver.data;
    } else {
      console.error("Team or driver not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};

const getDriversByTeam = async (teamName) => {
  try {
    // Fetch drivers directly based on the team name
    const responseDrivers = await axios.get(`${driver_url}?team=${teamName}`);
    
    return responseDrivers.data;
  } catch (error) {
    console.error('Error fetching drivers by team', error);
    return [];
  }
};

return {
  addTeam,
  deleteTeam,
  updateTeam,
  getAllTeams,
  getTeamById,
  getDriverImage,
  getDriversByTeam
}
})();

export default TeamService;