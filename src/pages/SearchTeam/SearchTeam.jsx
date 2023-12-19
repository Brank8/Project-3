import React, { useState, useEffect } from "react";
import TeamResult from "../../components/TeamResult/TeamResult";

function SearchTeam() {

    
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/nbalogos.webp')" }}
    >
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Type team here..."
          className="px-4 py-2 border-red-300 rounded focus:outline-none focus:border-blue-500"
          style={{ border: "4px solid #f56565" }}
        />
        <button className="px-4 py-2 mt-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchTeam;
