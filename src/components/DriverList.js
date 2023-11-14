import DriverItem from "./DriverItem";
import { useState } from "react";
import UpdateDriver from "./UpdateDriver";
import DriverService from "../services/DriverService";

const DriverList = ({ drivers, setDrivers }) => {
    const [updatedDriverId, setUpdatedDriverId] = useState({});
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);

    const handleDeleteDriver = async (id) => {
        try {
            await DriverService.deleteDriver(id);
            const driversAfterDelete = drivers.filter((driver) => driver.id !== id);
            setDrivers(driversAfterDelete);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleUpdateForm = (driver) => {
        setIsUpdateVisible(!isUpdateVisible);
        setUpdatedDriverId(driver.id);
    };

    const handleUpdateDriver = async (updatedDriver) => {
        try {
            const driversAfterUpdate = drivers.map((driver) =>
                driver.id === updatedDriver.id ? updatedDriver : driver
            );
            setDrivers(driversAfterUpdate);
            setIsUpdateVisible(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
        <h1 className="text-white text-xl mb-4">Drivers</h1>
            <div className="grid grid-cols-3  p-4">
            {drivers.map((driver) => (
                <div key={driver.id}>
                    <DriverItem driver={driver}></DriverItem>
                    <button
                        className= " bg-red-500 hover:bg-red-700 text-white font-bold rounded px-4 py-2"
                        onClick={() => handleDeleteDriver(driver.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-4 py-2"
                        onClick={() => toggleUpdateForm(driver)}
                    >
                        Update
                    </button>
                    {isUpdateVisible && updatedDriverId === driver.id && (
                        <UpdateDriver driver={driver} onUpdateDriver={handleUpdateDriver} />
                    )}
                </div>
            ))}
            {!drivers.length && <p className="text-red-500 text-lg mt-2">No driver found</p>}
        
        </div>
        </div>
    );
};

export default DriverList;
