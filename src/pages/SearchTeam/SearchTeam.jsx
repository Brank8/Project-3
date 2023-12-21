import React, { useState, useEffect } from "react";
import TeamResult from "../../components/TeamResult/TeamResult";

function SearchTeam() {
  const [teams, setTeams] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");
  const [searchCompleted, setSearchCompleted] = useState(false);

  useEffect(() => {
    const fetchTeams = async () => {
      const url = "https://free-nba.p.rapidapi.com/teams?page=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setTeams(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeams();
  }, []);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    setWarningMessage("");
    setSearchCompleted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.length < 1) {
      setWarningMessage("Please type at least 1 letter.");
      setFilteredTeams([]);
      setSearchCompleted(false);
    } else {
      const filtered = teams.filter((team) =>
        team.full_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTeams(filtered);
      setWarningMessage("");
      setSearchCompleted(true);
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setFilteredTeams([]);
    setWarningMessage("");
    setSearchCompleted(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/nbalogos.webp')" }}
    >
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 max-w-lg mx-auto z-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center bg-white p-5 py-2 border-4 border-green-500 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <div className="h-6">
            {warningMessage && (
              <div className="text-red-500">{warningMessage}</div>
            )}
            {searchCompleted && filteredTeams.length === 0 && (
              <div className="text-red-500">No results found.</div>
            )}
          </div>
          <input
            type="text"
            placeholder="Type team here..."
            value={searchQuery}
            onChange={handleChange}
            className="px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent mb-3 w-full transition duration-300 ease-in-out"
          />
          <div className="flex justify-center space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition ease-in-out duration-300"
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 bg-gray-500 text-white font-bold rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition ease-in-out duration-300"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <div className="pt-60 pb-14">
        <div className="divParent flex flex-wrap justify-center gap-2 mx-auto">
          {filteredTeams.map((team) => (
            <div className="divChild" key={team.id}>
              <TeamResult team={team} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchTeam;
