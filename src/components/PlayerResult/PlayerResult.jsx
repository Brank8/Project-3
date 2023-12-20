function PlayerResult({ player }) {
    return (
        <div className="p-2 bg-blue-900 rounded-md shadow-md">
            <div className="text-center">
                <h1 className="bg-blue-500 text-white p-2 rounded-t-md">
                    {player.first_name && `${player.first_name} `}
                    {player.last_name && `${player.last_name} `}
                    {player.position && `(${player.position}) `}
                    {player.height_feet && `${player.height_feet}'`}
                    {player.height_inches && `${player.height_inches}" `}
                    {player.weight_pounds && `${player.weight_pounds}lbs`}
                </h1>
                <h1 className="bg-blue-400 text-white p-2 rounded-b-md">
                    {player.team && player.team.full_name && `${player.team.full_name}`}
                </h1>
            </div>
        </div>
    );
}

export default PlayerResult;