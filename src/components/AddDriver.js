import React, { useState } from 'react';
import ImageUploadService from '../services/ImageUploadService.ts';
import DriverService from '../services/DriverService';


const AddDriver = ({ onAddDriver }) => {
    const [image, setImage] = useState(null);
    const [newDriver, setNewDriver] = useState({
        id: 0,
        name: "",
        team: "",
        imageName: "",
    });
    const [imageUploadStatus, setImageUploadStatus] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setNewDriver({ ...newDriver, imageName: file.name });
    };

    const handleAddNewDriver = async () => {
        setImageUploadStatus("Uploading image...");
        try {
            if (image != null) {
                await ImageUploadService.uploadImage(image);
            }
            setImageUploadStatus("Uploading image finished");
        } catch (error) {
            setImageUploadStatus("Upload failed");
        }
        try {
            const response = await DriverService.addDriver(newDriver);
            onAddDriver(newDriver);
            setNewDriver({ id: 0, name: "", team: "", imageName: "" });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="id"
                    className="w-full p-2 border-gray-300 rounded"
                    value={newDriver.id}
                    onChange={(e) => setNewDriver({ ...newDriver, id: e.target.value })}
                ></input>
                <input
                    type="text"
                    placeholder="name"
                    className="w-full p-2 border-gray-300 rounded"
                    value={newDriver.name}
                    onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                ></input>
                <input
                    type="text"
                    placeholder="team"
                    className="w-full p-2 border-gray-300 rounded"
                    value={newDriver.team}
                    onChange={(e) => setNewDriver({ ...newDriver, team: e.target.value })}
                ></input>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border-gray-300 rounded"
                ></input>
                <button
                    onClick={handleAddNewDriver}
                    className="w-full bg-blue-500 text-white hover:bg-blue-700 font-bold p-2 rounded"
                >
                    Add A New Driver
                </button>
            </div>
            {imageUploadStatus && <p>{imageUploadStatus}</p>}
        </div>
    );
};

export default AddDriver;
