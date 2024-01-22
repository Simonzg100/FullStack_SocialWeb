import React from "react";
import "./PlayersCard_NCAA.css"; // Your CSS styles for the component
import ncaaIcon from "../image/NCAA_icon.png";
import nbaIcon from "../image/NBA_icon.png";
import defaultNcaaImage from "../playImageSample/Jason_Tatum.png"; // Default NCAA player image
import defaultNbaImage from "../playImageSample/victor-wembanyama.png"; // Default NBA player image

const PlayersCard_NCAA = ({ player, league }) => {
  // Choose the icon based on the player's league
  const leagueIcon = league === "NCAA" ? ncaaIcon : nbaIcon;
  const leagueAltText = player.league === "NCAA" ? "NCAA_icon" : "NBA_icon";
  const defaultImage =
    player.league === "NCAA" ? defaultNcaaImage : defaultNbaImage;

  return (
    <div className="players-card">
      <div className="players-card-header">
        <img src={leagueIcon} alt={leagueAltText} className="league-icon" />
        <span className="players-rating">{player.Jersey_Number}</span>
      </div>
      <div className="players-position">{player.Position}</div>
      <div className="players-image-container">
        {/*/!*<img src={player.image} alt={player.name} className="players-image" />*!///for future use we need to use url links*/}
        {/* If player has a specific image, use it; otherwise, use the default image for the league */}
        <img
          src={player.pic_url || defaultImage}
          alt={player.name}
          className="players-image"
        />
      </div>
      <div className="players-info">
        <h2 className="players-name">{`${player.First_Name} ${player.Last_Name}`}</h2>

        <div className="players-stats">
          {player && (
            <>
              <div>First_Name: {player.First_Name}</div>
              <div>Last_Name: {player.Last_Name}</div>
              <div>Position: {player.Position}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayersCard_NCAA;
