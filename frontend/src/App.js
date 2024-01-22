import "./App.css";
import React from "react";
import HomePage from "./HomePage"; // Adjust the path if your HomePage component is in a different directory
import Navigation from './Navigation'; // Adjust the path as needed
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NCAA from "./NCAA";
import NBA from "./NBA";
import PlayerItem from "./helper/PlayerItem";
import PlayerComparison from "./PlayerComparison";
import Players from "./Players";
import Predictors from "./Predictors"; // Import from react-router-dom v6

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/navigation" element={<Navigation />} />
                <Route path="/NCAA" element={<NCAA/>} />
                <Route path="/NBA" element={<NBA/>} />
                <Route path="/PlayerItem" element={<PlayerItem/>} />
                <Route path="/PlayerComparison" element={<PlayerComparison/>}/>
                <Route path="/Players" element={<Players/>}/>
                <Route path="/Predictors" element={<Predictors/>}/>
                {/* Define other routes here */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
