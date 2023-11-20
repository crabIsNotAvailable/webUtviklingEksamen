import React, { useEffect, useState } from 'react';
import DriverService from '../services/DriverService';

const image_url = 'http://localhost:5126/images';

const DriverImage = ({ team }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const driverData = await DriverService.getDriversByTeam(team);
        console.log('Driver Data:', driverData);
        setDrivers(driverData);
      } catch (error) {
        console.error(`Error fetching drivers for team "${team}":`, error);
      }
    };
  
    fetchDrivers();
  }, [team]);
  
  console.log('Drivers:', drivers);
  
  // Log the constructed image URLs
  drivers.forEach(driver => {
    console.log('Image URL:', `${image_url}/${driver.imageName}`);
  });

  return (
    <div class="flex justify-between w-full bg-black place-self-center">
       <img class="w-80" src="DriverSilhouette.png" alt="Silhouette of a driver"></img>
       <div class="flex flex-1 justify-center items-end ml-48">
      {drivers.map((driver) => (
        <div class="bg-black " key={driver.id}>
          <p class="text-white">{driver.name}</p>
          <img
            className="w-40"
            src={`${image_url}/${driver.imageName}`}
            alt={`${driver.name}`}
          />
        </div>
      ))}
       </div>
    </div>
  );
};

export default DriverImage;