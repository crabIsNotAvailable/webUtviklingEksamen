import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DriverService from '../services/DriverService';

const UniqueDriverPage = () => {
    const image_url = "http://localhost:5126/images";
    const { id } = useParams();
    const [driver, setDriver] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDriver = async () => {
            try {
                const response = await DriverService.getDriverById(id);
                setDriver(response);
            } catch (error) {
                console.error("Error fetching driver details", error);
            }
        };

        fetchDriver();
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    if (!driver) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto">
            <div>
                    <button
                        onClick={handleBack}
                        className="bg-white-500 hover:bg-white-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-white-800">
                        Back
                    </button>
                </div>
            <div className="container flex flex-col text-center bg-black shadow-md rounded-lg">
                <div>                
                    <h1 className="text-white">{driver.name}</h1> 
                </div>

                <div className="flex justify-between">
                    <div className="flex">
                        <div className="place-self-end">
                        {driver.imageName && (
                            <img
                            src={`${image_url}/${driver.imageName}`}
                            alt={`Driver ${driver.id}`}
                            />
                        )}
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-white">{driver.number}</h2>
                            <h2 className="text-white">Points: {driver.points}</h2>
                            <div className="place-self-end h-24 w-32">
                            {driver.nationalityImage && (
                                <img
                                src={`${image_url}/${driver.nationalityImage}`}
                                alt={`${driver.nationality}`}
                                />
                            )}
                            </div>
                            <h3 className="text-white">
                                {driver.nationality}
                            </h3>
                        </div>
                    </div>
                    <div>
                        <p>
                            <p className="text-white w-[40vw] r-0">{driver.description}</p>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UniqueDriverPage;