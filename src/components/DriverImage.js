import React, { useEffect, useState } from 'react';
import TeamService from '../services/TeamService';

const image_url = 'http://localhost:5126/images';

const DriverImage = ({ team }) => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      const driverData = await TeamService.getDriversByTeam(team);
      setDrivers(driverData);
    };

    fetchDrivers();
  }, [team]);

  console.log(drivers);

  return (
    <div>
      {drivers.map((driver) => (
        <div key={driver.id}>
          <img
            className="w-60 h-32"
            src={`${image_url}/${driver.imageName}`}
            alt={`Driver ${driver.id}`}
          />
          <p>{driver.name}</p>
          {/* Add other driver details you want to display */}
        </div>
      ))}
    </div>
  );
};

export default DriverImage;