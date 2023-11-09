import React, { useState } from 'react';
import axios from 'axios';
import ImageUploadService from '../services/ImageUploadService.ts';
import DriverService from '../services/DriverService';

const UpdateDriver = ({ driver, onUpdateDriver }) => {

    const [updatedImage, setUpdatedImage] = useState(null);
    const [updatedDriver, setUpdatedDriver] = useState({
        id: driver.id,
        name: driver.name,
        team: driver.team,
        imageName: driver.imageName,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setUpdatedImage(file);
        setUpdatedDriver({ ...updatedDriver, imageName: file.name });
    };

    const handleUpdateDriver = async () => {
        try {
            if (updatedImage != null) {
                await ImageUploadService.uploadImage(updatedImage);
            }
            const response = await DriverService.updateDriver(updatedDriver);
            onUpdateDriver(updatedDriver); // Call the parent component's callback function to update the driver
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
        <input
            type="text"
            placeholder="id"
            className="w-full p-2 border-gray-300 rounded"
            value={updatedDriver.id}
            onChange={(e) => setUpdatedDriver({ ...updatedDriver, id: e.target.value })}
        ></input>
        <input
            type="text"
            placeholder="name"
            className="w-full p-2 border-gray-300 rounded"
            value={updatedDriver.name}
            onChange={(e) => setUpdatedDriver({ ...updatedDriver, name: e.target.value })}
        ></input>
        <input
            type="text"
            placeholder="team"
            className="w-full p-2 border-gray-300 rounded"
            value={updatedDriver.team}
            onChange={(e) => setUpdatedDriver({ ...updatedDriver, team: e.target.value })}
        ></input>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border-gray-300 rounded"
        ></input>
        <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold rounded px-4 py-2"
            onClick={handleUpdateDriver}
        >
            Save Update
        </button>
        </div>
    );
};

export default UpdateDriver;
