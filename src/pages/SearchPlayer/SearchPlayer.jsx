import React, { useState } from "react";
import PlayerResult from "../../components/PlayerResult/PlayerResult";

function SearchPlayer() {
    const [players, setPlayers] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [warningMessage, setWarningMessage] = useState("");
    const [searchCompleted, setSearchCompleted] = useState(false);

    const handleClear = () => {
        setSearchInput("");
        setWarningMessage("");
        setPlayers([]);
        setSearchCompleted(false);
    };

    const fetchPlayers = async () => {
        const url = `https://free-nba.p.rapidapi.com/players?search=${searchInput}`;
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
            setPlayers(result.data);
            setSearchCompleted(true);
        } catch (error) {
            console.error(error);
            setSearchCompleted(true);
        }
    };

    const handleChange = (event) => {
        setSearchInput(event.target.value);
        setWarningMessage("");
        setSearchCompleted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchInput.length >= 3) {
            fetchPlayers();
        } else {
            setWarningMessage("Please type at least 3 letters.");
            setPlayers([]);
            setSearchCompleted(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/nbaplayer.jpg')" }}>
            <div className="flex flex-col items-center py-2 border-red-300 bg-white p-5 rounded-2xl">
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                    <div className="h-6">
                        {warningMessage && <div className="text-red-500">{warningMessage}</div>}
                        {searchCompleted && players.length === 0 && !warningMessage && <div className="text-red-500">No results found.</div>}
                    </div>
                    <input
                        type="text"
                        placeholder="Type player here..."
                        value={searchInput}
                        onChange={handleChange}
                        className="px-4 py-2 border-red-300 rounded focus:outline-none focus:border-blue-500 mb-3"
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
                {players.map(player => <PlayerResult key={player.id} player={player} />)}
            </div>
        </div>
    );
}

export default SearchPlayer;
