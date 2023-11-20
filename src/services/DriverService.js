import axios from "axios";

const DriverService = (() => {
    const driver_url = "http://localhost:5126/api/drivers";

    const addDriver = async (newDriver) => {
        try {
            const response = await axios.post(driver_url, newDriver);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteDriver = async (id) => {
        try {
            await axios.delete(`${driver_url}/${id}`);
        } catch (error) {
            console.error("There was an error deleting the driver:", error);
        }
    };

    const updateDriver = async (updatedDriver) => {
        try {
            const response = await axios.put(`${driver_url}/${updatedDriver.id}`, updatedDriver);
        } catch (error) {
            console.error("There was an error updating the driver:", error);
        }
    };

    const getAllDrivers = async () => {
        try {
            const response = await axios.get(driver_url);
            return response.data;
        } catch (error) {
            console.error("Error fetching driver", error);
            return [];
        }
    };

    const getDriversByTeam = async (team) => {
        try {
            const response = await axios.get(`${driver_url}/byteam/${team}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching driver image for team", team, error);
            return [];
        }
    }

    const getDriverById = async (id) => {
        try {
            const response = await axios.get(`${driver_url}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching driver", error);
            return [];
        }
    };


    return {
        addDriver,
        deleteDriver,
        updateDriver,
        getAllDrivers,
        getDriversByTeam,
        getDriverById,
    };
})();

export default DriverService;
