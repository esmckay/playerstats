import React from "react";


const GameStats = ({ byGameStats, player }) => {
  const teamIds = {
      1: "ATL",
      2: "BOS",
      3: "BKN",
      4: "CHA",
      5: "CHI",
      6: "CLE",
      7: "DAL",
      8: "DEN",
      9: "DET",
      10: "GSW",
      11: "HOU",
      12: "IND",
      13: "LAC",
      14: "LAL",
      15: "MEM",
      16: "MIA",
      17: "MIL",
      18: "MIN",
      19: "NOP",
      20: "NYK",
      21: "OKC",
      22: "ORL",
      23: "PHI",
      24: "PHX",
      25: "POR",
      26: "SAC",
      27: "SAS",
      28: "TOR",
      29: "UTA",
      30: "WAS",
    };

  const stats = byGameStats.map((byGame) => {
    const date = new Date(byGame.game.date);
    const idPicker = (homeID, playerID, visitorID, teamsIDs) => {
      return playerID === homeID ? teamsIDs[visitorID] : teamsIDs[homeID];
    };

    return (
      <tr key={byGame.id}>
        <td>
          <span className="game-date">{date.toLocaleDateString()} vs </span>
          <span className="team-abbr">
            {idPicker(
              byGame.game.home_team_id,
              byGame.player.team_id,
              byGame.game.visitor_team_id,
              teamIds
            )}
          </span>
        </td>
        <td>{byGame.min}</td>
        <td>{byGame.pts}</td>
        <td>{byGame.ftm}</td>
        <td>{byGame.fta}</td>
        <td>{byGame.fgm}</td>
        <td>{byGame.fga}</td>
        <td>{byGame.fg3m}</td>
        <td>{byGame.fg3a}</td>
        <td>{byGame.oreb}</td>
        <td>{byGame.dreb}</td>
        <td>{byGame.reb}</td>
        <td>{byGame.ast}</td>
        <td>{byGame.blk}</td>
        <td>{byGame.stl}</td>
        <td>{byGame.pf}</td>
        <td>{byGame.turnover}</td>
      </tr>
    );
  });

  return (
    <div>
      <div className="table-title">
          {player.info.fName} {player.info.lName}'s game log
      </div>
      <table>
        <thead>
          <tr>
            <th>VS</th>
            <th>MIN</th>
            <th>PTS</th>
            <th>FTM</th>
            <th>FTA</th>
            <th>FGM</th>
            <th>FGA</th>
            <th>3FGM</th>
            <th>3FGA</th>
            <th>O. REB</th>
            <th>D. REB</th>
            <th>REB</th>
            <th>AST</th>
            <th>BLK</th>
            <th>STL</th>
            <th>PF</th>
            <th>TO</th>
          </tr>
        </thead>
        <tbody>{stats}</tbody>
      </table>
    </div>
    
  );
};

export default GameStats;
