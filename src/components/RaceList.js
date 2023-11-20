import RaceService from "../services/RaceService";
import RaceItem from "./RaceItem";
import { useState } from "react";

const RaceList = ({ races}) => {
    

    return (
        <div>
            <h1>Races 2023</h1>
            <div>
                {races.map((race) => (
                <div key={race.id}>
                    <RaceItem race={race}></RaceItem>
            
                </div>
            ))}
            </div>
        </div>
    );
};

export default RaceList;