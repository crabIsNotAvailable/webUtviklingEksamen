const image_url = "http://localhost:5126/images";

const DriverItem = ({ driver }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <p> id: {driver.id}</p>
            <p> name: {driver.name}</p>
            <p> team: {driver.team}</p>
            {driver.imageName && (
                <img src={`${image_url}/${driver.imageName}`} alt={`Driver ${driver.id}`} />
            )}
        </div>
    );
};

export default DriverItem;
