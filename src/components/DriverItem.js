import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DriverPage from "../pages/DriverPage";

const image_url = "http://localhost:5126/images";

const DriverItem = ({ driver }) => {
    return (
        <li>
            <Link to={`/driver/${driver.id}`}>
                <div className="driverbackground flex text-center bg-white shadow-md rounded-lg h-60">
                    <div>
                        <p className="text-xl font-serif font-bold">{driver.name}</p>
                        <p className="text-sm font-bold text-yellow-400 font-mono">{driver.team}</p>
                        <h3>Points: {driver.points}</h3>
                    </div>
                    <div className="place-self-end">
                        {driver.imageName && (
                            <img src={`${image_url}/${driver.imageName}`} alt={`Driver ${driver.id}`} />
                        )}
                    </div>
                    <h2>{driver.number}</h2>
                    <div className="place-self-end h-16 w-20">
                        {driver.nationalityImage && (
                            <img src={`${image_url}/${driver.nationalityImage}`} alt={`${driver.nationality}`} />
                        )}
                    </div>
                </div>
            </Link>
        </li>
    );
};


export { DriverItem };

