function PlayerResult({ player }) {
    return (
        <div>
            <h1>
                {player.first_name && `${player.first_name} `}
                {player.last_name && `${player.last_name} `}
                {player.position && `Position: ${player.position} `}
                {player.height_feet && `${player.height_feet}'`}
                {player.height_inches && `${player.height_inches}" `}
                {player.weight_pounds && `Weight: ${player.weight_pounds} lbs`}
            </h1>
            <h1>
                {player.team && player.team.full_name && `Team: ${player.team.full_name}`}
            </h1>
        </div>
    );
}

export default PlayerResult;