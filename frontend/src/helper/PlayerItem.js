import React from "react";
import "./PlayerItem.css"; // Make sure to create this CSS file and define the styles
import nbaIconPath from "../image/NBA_icon.png"; // Update the path to where your images are located
import playerImagePath from "../playImageSample/Jason_Tatum.png"; // Update the path accordingly

const PlayerItem = ({ player, iconPath }) => {
  // Construct the path to the image
  // const imagePath = require("../playImageSample/Jason_Tatum.png").default;

  return (
    <div className="player-container">
      <div className="player-header">
        <img src={iconPath} alt="Sport Icon" className="sport-icon" />
        <div className="player-name-container">
          <h1 className="player-name">{player.First_Name}</h1>
          <h1 className="player-name">{player.Last_Name}</h1>
        </div>
        {/* <h6 className="player-name">{player.Height}</h6>
                <h6 className="player-name">{player.Weight}</h6> */}
        <h6 className="player-name">{player.Jersey_Number}</h6>
      </div>
      <div className="playerItem-image-container">
        <img
          src={player.pic_url}
          alt={player.name}
          className="playerItem-image"
        />
      </div>
    </div>
  );
};

export default PlayerItem;
