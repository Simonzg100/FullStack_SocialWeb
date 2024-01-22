import axios from "axios";
import { rootURL } from "../config/config";

export const allPlayers = async (teamName) => {
  try {
    const response = await axios.get(`${rootURL}/allPlayers`, {
      params: { teamName }, // Make sure the param name matches the backend expectation
    });
    if (response.status !== 200) {
      throw new Error(response.data.message || `Error fetching all players`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching all players:", error.message);
    return { error: error.message };
  }
};

export const allTeams = async () => {
  try {
    const response = await axios.get(`${rootURL}/allTeams`);

    if (response.status !== 200) {
      throw new Error(response.data.message || "Error fetching all teams");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching teams:", error.message);
    return { error: error.message };
  }
};

export const ncaaTeams = async () => {
  try {
    const response = await axios.get(`${rootURL}/ncaa/allTeams`);
    if (response.status !== 200) {
      throw new Error(response.data.message || "Error fetching all teams");
    }
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching teams:", error.message);
    return { error: error.message };
  }
};

export const ncaaPlayers = async (teamName) => {
  try {
    const response = await axios.get(`${rootURL}/ncaa/allPlayers`, {
      params: { teamName }, // Make sure the param name matches the backend expectation
    });
    if (response.status !== 200) {
      throw new Error(response.data.message || `Error fetching all players`);
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching all players:", error.message);
    return { error: error.message };
  }
};

export const PlayersByTeamName = async (teamName, isNBA) => {
  try {
    const response = await axios.get(`${rootURL}/playersByTeamName`, {
      params: { teamName, isNBA: isNBA ? "1" : "0" },
    });
    if (response.status !== 200) {
      throw new Error(
        response.data.message || "Error fetching players by team name"
      );
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching players by team name:", error.message);
    return { error: error.message };
  }
};

export const fetchTeamData = async (teamName) => {
  try {
    const response = await axios.get(`${rootURL}/teamData`, {
      params: { teamName },
    });
    if (response.status !== 200) {
      throw new Error(response.data.message || "Error fetching team data");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching team data:", error.message);
    return { error: error.message };
  }
};

// Fetch top five skills for a player
export const topFive = async (teamName, seasonName, firstName, lastName) => {
  try {
    const response = await axios.get(`${rootURL}/playerTopFive`, {
      params: { teamName, seasonName, firstName, lastName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top five skills:", error);
    return { error: error.message };
  }
};

export const teamTopFive = async (teamName, seasonName) => {
  try {
    const response = await axios.get(`${rootURL}/teamTopFive`, {
      params: { teamName, seasonName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top five skills:", error);
    return { error: error.message };
  }
};

// Fetch player info
export const playerInfo = async (teamName, firstName, lastName) => {
  try {
    const response = await axios.get(`${rootURL}/playerInfo`, {
      params: { teamName, firstName, lastName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching player info:", error);
    return { error: error.message };
  }
};

// Fetch all players info
export const allPlayersInfo = async (
  teamName,
  seasonName,
  leagueName,
  schoolName
) => {
  try {
    const response = await axios.get(`${rootURL}/allPlayersInfo`, {
      params: { teamName, seasonName, leagueName, schoolName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching all players info:", error);
    return { error: error.message };
  }
};

// Fetch average skills for a player
export const getAvgSkills = async (
  teamName,
  seasonName,
  firstName,
  lastName
) => {
  try {
    const response = await axios.get(`${rootURL}/playerAvgSkills`, {
      params: { teamName, seasonName, firstName, lastName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching average skills:", error);
    return { error: error.message };
  }
};

export const getTeamAvgSkills = async (teamName, seasonName) => {
  try {
    const response = await axios.get(`${rootURL}/teamAvgSkills`, {
      params: { teamName, seasonName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching average skills:", error);
    return { error: error.message };
  }
};

export const ncaaplayeravgskills = async (teamName, firstName, lastName) => {
  try {
    const response = await axios.get(`${rootURL}/ncaa/playerAvgSkills`, {
      params: { teamName, firstName, lastName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching average skills:", error);
    return { error: error.message };
  }
};

export const ncaaTopFive = async (teamName) => {
  try {
    const response = await axios.get(`${rootURL}/ncaa/topFive`, {
      params: { teamName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top five skills:", error);
    return { error: error.message };
  }
};

export const ncaaAllPlayers = async (teamName) => {
  try {
    const response = await axios.get(`${rootURL}/ncaa/allPlayers`, {
      params: { teamName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top five skills:", error);
    return { error: error.message };
  }
};

export const ncaaPlayerInfo = async (teamName) => {
  try {
    const response = await axios.get(`${rootURL}/ncaa/allPlayers`, {
      params: { teamName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top five skills:", error);
    return { error: error.message };
  }
};

export const ncaaPlayerTopFive = async (teamName, firstName, lastName) => {
  try {
    const response = await axios.get(`${rootURL}/ncaa/ncaaPlayerTopFive`, {
      params: { teamName, firstName, lastName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching top five skills:", error);
    return { error: error.message };
  }
};
