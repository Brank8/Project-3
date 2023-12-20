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
      const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
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
      const filtered = teams.filter(team =>
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
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/nbalogos.webp')" }}>
      <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white p-5 py-2 border-red-300 rounded-2xl max-w-lg mx-auto">
          <div className="h-6">
            {warningMessage && <div className="text-red-500">{warningMessage}</div>}
            {searchCompleted && filteredTeams.length === 0 && <div className="text-red-500">No results found.</div>}
          </div>
          <input
            type="text"
            placeholder="Type team here..."
            value={searchQuery}
            onChange={handleChange}
            className="px-4 py-2 border-red-300 rounded focus:outline-none focus:border-blue-500 mb-3 w-full"
            style={{ border: "4px solid #f56565" }}
          />
          <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
              Search
            </button>
            <button 
              type="button" 
              onClick={handleClear} 
              className="px-4 py-2 ml-2 bg-gray-500 text-white font-bold rounded hover:bg-gray-700"
            >
              Clear
            </button>
          </div>
        </form>
        </div>
        <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredTeams.map(team => (
          <div key={team.id} className="flex-justify-center">
          <TeamResult team={team} />
          </div>
          ))}
          </div>
      </div>
    </div>
    </div>
  );
}

export default SearchTeam;
