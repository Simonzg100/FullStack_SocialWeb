import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay for the popup to appear
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`popup ${isVisible ? "show" : ""}`}>
      <div className="popup-content">
        {/* Add your content here */}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
