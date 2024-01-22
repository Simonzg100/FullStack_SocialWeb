import React from "react";
import "./HomePage.css";
import bgPicture from "./image/bg_picture.png"; // Adjust the path to your image
import titleImage from './image/title_image.png'; // The title image
import SearchBox from './SearchBox'; // Importing the SearchBox component
import { useNavigate } from 'react-router-dom'; // Import useHistory hook

const HomePage = () => {
  const navigate = useNavigate(); // This hook gives you the navigate function
  const handleExploreClick = () => {
    navigate('/navigation'); // Use the 'navigate' method to navigate to the Navigation page
  };

  

  return (
    <div
      className="homepage-container"
      style={{ backgroundImage: `url(${bgPicture})` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <div className="title-search-container">
          <img src={titleImage} alt="Future Superstar Predictor" className="title-image" />
          <SearchBox />
        <button className="explore-button" onClick={handleExploreClick}>Start to explore</button>
      </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="social-icons">
            {/* Insert social media icons here */}
          </div>
          <p>Contact us</p>
          <p>220 S 23rd St, Philadelphia, PA 19104</p>
          <p>
            Copyright © 2023 by Richard, Emre, Zayn, Simon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
