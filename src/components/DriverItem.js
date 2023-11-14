const image_url = "http://localhost:5126/images";

const DriverItem = ({ driver }) => {
    return (
        <div className="driverbackground flex text-center bg-white shadow-md rounded-lg h-60">
            <div>

            <p class="text-xl font-serif font-bold">{driver.name}</p>
            <p class="text-sm font-bold text-yellow-400 font-mono"> {driver.team}</p>
            </div>
            <div class="place-self-end"> {driver.imageName && (
                <img src={`${image_url}/${driver.imageName}`} alt={`Driver ${driver.id}`} />
            )}
            </div>
        </div>
    );
};

export default DriverItem;
