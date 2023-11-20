import axios from "axios";

const RaceService = (() => {
    const race_url = "http://localhost:5126/api/races";

    const getAllRaces = async () => {
        try {
            const response = await axios.get(race_url);
            return response.data;
        } catch (error) {
            console.error("Error fetching races", error);
            return [];
        }
    };

    return {
        getAllRaces
    }
})();

export default RaceService;