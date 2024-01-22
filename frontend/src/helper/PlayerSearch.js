// PlayerSearch.js
import React from 'react';
import './PlayerSearch.css'; // Import the styles

const PlayerSearch = ({ players, onSelectPlayer }) => {

    // if (!players) return null; // Or some other placeholder content

    return (
        <div className="player-search-container">
            <select className="player-search-select" onChange={(e) => onSelectPlayer(e.target.value)}>
                <option value="">Select a Player</option>
                {players.map((player) => (
                    <option key={player.id} value={player.id}>
                        {player.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PlayerSearch;
