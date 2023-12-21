function PlayerResult({ player }) {
  return (
    <div className="w-60 h-42 bg-blue-900 rounded-md shadow-md overflow-hidden">
      <div className="text-center">
        <h1 className="bg-blue-500 border-4 border-blue-400 border-b-0 text-white p-2 rounded-t-md text-sm">
          {player.first_name && `${player.first_name} `}
          {player.last_name && `${player.last_name} `}
          {player.position && `(${player.position}) `}
          {player.height_feet && `${player.height_feet}'`}
          {player.height_inches && `${player.height_inches}" `}
          {player.weight_pounds && ` ${player.weight_pounds}lbs`}
        </h1>
        <h1 className="bg-blue-400 border-4 border-blue-400 border-t-0 text-white p-2 rounded-b-md text-sm truncate">
          {player.team && player.team.full_name && `${player.team.full_name}`}
        </h1>
      </div>
    </div>
  );
}

export default PlayerResult;
