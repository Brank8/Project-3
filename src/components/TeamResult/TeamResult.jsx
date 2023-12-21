function TeamResult({ team }) {
  return (
    <div className="w-60 h-22 bg-blue-900 rounded-md shadow-md ">
      <h1 className="p-2 border-4 border-blue-400 bg-blue-500 text-center text-white rounded-md text-sm">
        {team.full_name} ({team.abbreviation}) {team.conference}
      </h1>
    </div>
  );
}

export default TeamResult;
