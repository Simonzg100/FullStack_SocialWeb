import React from "react";
import "./SearchBox.css";
import nbaLogo from "./image/NBA_icon.png"; // Make sure to have the NBA logo image in your assets
import ncaaLogo from "./image/NCAA_icon.png"; // Make sure to have the NCAA logo image in your assets
import predictorLogo from "./image/predictor.png";
import { useNavigate } from "react-router-dom"; // Import useHistory hook

const SearchBox = () => {
  const navigate = useNavigate(); // This hook gives you the navigate function
  const navigate2 = useNavigate(); // This hook gives you the navigate function

  const handleExploreNBAClick = () => {
    navigate("/NBA"); // Use the 'navigate' method to navigate to the Navigation page
  };

  const handleExploreNCAAClick = () => {
    navigate2("/NCAA"); // Use the 'navigate' method to navigate to the Navigation page
  };

  const handleExplorePClick = () => {
    navigate2("/Predictors"); // Use the 'navigate' method to navigate to the Navigation page
  };
  return (
    <div className="search-box">
      {/*<div className="search-input-container">*/}
      <input type="text" placeholder="Search" className="search-input" />
      {/*</div>*/}
      <div className="button-group">
        <button className="btn nba" onClick={handleExploreNBAClick}>
          <img src={nbaLogo} onClick={handleExploreNBAClick} alt="NBA" />
          NBA
        </button>
        <button className="btn ncaa" onClick={handleExploreNCAAClick}>
          <img src={ncaaLogo} onClick={handleExploreNCAAClick} alt="NCAA" />
          NCAA
        </button>
        <button className="btn predictor" onClick={handleExplorePClick}>
          <img src={predictorLogo} alt="PREDICTOR" />
          PREDICTOR
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
