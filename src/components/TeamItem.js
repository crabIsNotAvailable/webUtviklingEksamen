const image_url = "http://localhost:5126/images";

const TeamItem = ({ team }) => {
    return (
        <div className="teambackground flex text-center bg-white shadow-md rounded-lg h-60">
            <div>

            <p class="text-xl font-serif font-bold">{team.name}</p>
            <p class="text-sm font-bold text-yellow-400 font-mono"> {team.team}</p>
            </div>
            <div class="place-self-end"> {team.imageName && (
                <img class="w-8 h-4" src={`${image_url}/${team.imageName}`} alt={`Team ${team.id}`} />
            )}
            </div>
        </div>
    );
};

export default TeamItem;