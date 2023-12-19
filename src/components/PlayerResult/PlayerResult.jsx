function PlayerResult({ player }) {
    return (
        <div>
            <h1>{player.first_name} {player.last_name} {player.position} {player.height_feet}{player.height_inches} {player.weight_pounds}</h1>
            <h1>{player.team.city}</h1>

        </div>
    );
}

export default PlayerResult