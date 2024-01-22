const express = require("express");
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
// nba api
app.get("/allPlayers", routes.allPlayers);
app.get("/allTeams", routes.allTeams);
app.get("/playersTopFiveSkills", routes.teamTopFive);
app.get("/playerInfo", routes.playerInfo);
app.get("/allPlayersInfo", routes.allPlayersInfo);
app.get("/playersByTeamName", routes.getPlayersByTeamName);
app.get("/playerAvgSkills", routes.playerAvgSkills);
app.get("/playerTopFive", routes.playerTopFive);
app.get("/teamAvgSkills", routes.teamAvgSkills);
app.get("/teamTopFive", routes.teamTopFive);
// ncaa api
app.get("/ncaa/allPlayers", routes.ncaaAllPlayers);
app.get("/ncaa/topFive", routes.ncaaTopFive);
app.get("/ncaa/playerAvgSkills", routes.ncaaPlayerAvgSkills);
app.get("/ncaa/allTeams", routes.ncaaAllTeams);
app.get("/ncaa/playerInfo", routes.ncaaPlayerInfo);
app.get("/ncaa/teamAvgSkills", routes.ncaaTeamAvgSkills);
app.get("/ncaa/ncaaPlayerTopFive", routes.ncaaPlayerTopFive);

app.listen(config.server_port, () => {
  console.log(
    `Server running at http://${config.server_host}:${config.server_port}/`
  );
});

module.exports = app;
