import React, { useState, useEffect } from 'react';
import DriverList from '../components/DriverList';
import AddDriver from '../components/AddDriver';
import GetDriver from '../components/Getdriver';
import DriverService from '../services/DriverService';

const DriverPage = () => {
    const [drivers, setDrivers] = useState([]);
    const [allDrivers, setAllDrivers] = useState([]);

    const getAllDrivers = async () => {
        const response = await DriverService.getAllDrivers();
        setDrivers(response);
        setAllDrivers(response);
    };

    const addDriver = (newDriver) => {
        setDrivers([...drivers, newDriver]);
    };

    const getDriverById = async (driverId) => {
        const foundDriver = allDrivers.find((driver) => driver.id === parseInt(driverId));
        if (foundDriver != null) {
            setDrivers([foundDriver]);
        } else {
            setDrivers([]);
        }
    };

    const resetDrivers = async () => {
        await getAllDrivers();
    };

    useEffect(() => {
        getAllDrivers();
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4 ">Driver Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <AddDriver onAddDriver={addDriver} />
                </div>
                <div className="grid grid-rows-[1fr auto] h-full">
                    <div className="row-span-1">
                        <GetDriver onGetDriver={getDriverById} />
                    </div>
                    <div className="row-span-1 flex flex-col-reverse">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                            onClick={resetDrivers}
                        >
                            Reset Drivers
                        </button>
                    </div>
                </div>
            </div>

            <div className=" mt-8">
                <DriverList drivers={drivers} setDrivers={setDrivers} />
            </div>
        </div>
    );
};

export default DriverPage;
