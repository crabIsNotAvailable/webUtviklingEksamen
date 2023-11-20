import React, { useState, useEffect } from 'react';
import RaceService from '../services/RaceService';
import RaceList from '../components/RaceList';

const RacesPage = () => {
    const [races, setRaces] = useState([]);
    const [allRaces, setAllRaces] = useState([]);

    const getAllRaces = async () => {
        const response = await RaceService.getAllRaces();
        setRaces(response);
        setAllRaces(response);
    }

    useEffect(() => {
        getAllRaces();
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <div className=" mt-8">
                <RaceList races={races} setRaces={setRaces} />
            </div>
        </div>
    );
};

export default RacesPage;