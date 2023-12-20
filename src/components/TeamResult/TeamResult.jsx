function TeamResult({ team }) {
  return (
    <div className="p-2 bg-blue-900 rounded-md shadow-md">
      <h1 className="p-2 bg-blue-500 text-white rounded-md">
        {team.full_name} ({team.abbreviation}) {team.conference}
      </h1>
    </div>
  );
}

export default TeamResult;