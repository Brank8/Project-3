function TeamResult({ team }) {
  return (
    <div>
      <h1 className="text-black p-2">
        {team.full_name} ({team.abbreviation}) {team.conference}
      </h1>
    </div>
  );
}

export default TeamResult;