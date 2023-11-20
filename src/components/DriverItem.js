const image_url = "http://localhost:5126/images";

const DriverItem = ({ driver }) => {
    return (
        <div className="driverbackground flex text-center bg-white shadow-md rounded-lg h-60">
            <div>

            <p class="text-xl font-serif font-bold">{driver.name}</p>
            <p class="text-sm font-bold text-yellow-400 font-mono"> {driver.team}</p>
            <h3>Points: {driver.points}</h3>

            </div>
            <div class="place-self-end"> {driver.imageName && (
                <img src={`${image_url}/${driver.imageName}`} alt={`Driver ${driver.id}`} />
            )}
            </div>
            <h2>{driver.number}</h2>
            <div class="place-self-end h-16 w-20"> {driver.nationalityImage && (
                <img src={`${image_url}/${driver.nationalityImage}`} alt={`${driver.nationality}`} />
            )}
            </div>
        </div>
    );
};

export default DriverItem;
