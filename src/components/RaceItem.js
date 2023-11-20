const image_url = "http://localhost:5126/images"

const RaceItem = ({ race }) => {
    return (
        <div className="driverbackground flex text-center bg-white shadow-md rounded-lg h-40 m-8">
            <div class="flex">
                <p class="text-white font-bold text-sm p-8">Location: {race.location}</p>
                <p class="text-white font-bold text-sm p-8">Date: {race.time}</p>
                <p class="text-white font-bold text-sm p-8">Winner: {race.winner}</p>
                <p class="text-white font-bold text-sm p-8">Laps: {race.laps}</p>
                <p class="text-white font-bold text-sm p-8">Race duration{race.duration}</p>
                <div class="place-self-end"> {race.carImage && (
                <img src={`${image_url}/${race.carImage}`} alt={`Car winner from ${race.name}`} />
            )}
            </div>
            </div>
        </div>
    )
}

export default RaceItem;