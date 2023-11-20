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
    <div class="flex place-self-end">
      {drivers.map((driver) => (
        <div key={driver.id}>
          <img
            className="w-60 h-32"
            src={`${image_url}/${driver.imageName}`}
            alt={`${driver.name}`}
          />
          <p>{driver.name}</p>
          {/* Add other driver details you want to display */}
        </div>
      ))}
    </div>
  );
};

export default DriverImage;