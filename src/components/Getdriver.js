import React, { useState } from 'react';

const GetDriver = ({ onGetDriver }) => {
    const [driverId, setDriverId] = useState("");

    const handleGetDriver = () => {
        onGetDriver(driverId);
        setDriverId("");
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Driver Id"
                value={driverId}
                onChange={(e) => setDriverId(e.target.value)}
                className="w-full p-2 border-gray-300 rounded"
            />
            <button
                onClick={handleGetDriver}
                className="w-full bg-blue-500 text-white hover:bg-blue-700 font-bold p-2 rounded"
            >
                GetDriver
            </button>
        </div>
    );
}

export default GetDriver;
