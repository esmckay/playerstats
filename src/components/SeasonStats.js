import React from "react"

const SeasonStats = ({ player, seasonStats }) => {
  if(!seasonStats){
    return (
      <div className="table-container">
      <div className="table-title">
        {player.info.fName} {player.info.lName}'s season averages
      </div>
      <table>
        <thead>
          <tr>
            <th>GP</th>
            <th>MIN</th>
            <th>PTS</th>
            <th>FT%</th>
            <th>FG%</th>
            <th>3FG%</th>
            <th>REB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>PF</th>
            <th>TO</th>
          </tr>
        </thead>
      </table>
      <br></br>
      <h3 className="table-title">
        No stats available for {player.info.fName} {player.info.lName} this season. Try another player.
      </h3>
    </div>
    
  );
  }else{
    return (
      <div className="table-container">
        <div className="table-title">
          {player.info.fName} {player.info.lName}'s season averages
        </div>
        <table>
          <thead>
            <tr>
              <th>GP</th>
              <th>MIN</th>
              <th>PTS</th>
              <th>FT%</th>
              <th>FG%</th>
              <th>3FG%</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>PF</th>
              <th>TO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{seasonStats.games_played}</td>
              <td>{seasonStats.min}</td>
              <td>{seasonStats.pts}</td>
              <td>{String(Math.round(seasonStats.ft_pct * 100))}%</td>
              <td>{String(Math.round(seasonStats.fg_pct * 100))}%</td>
              <td>{String(Math.round(seasonStats.fg3_pct * 100))}%</td>
              <td>{seasonStats.reb}</td>
              <td>{seasonStats.ast}</td>
              <td>{seasonStats.stl}</td>
              <td>{seasonStats.blk}</td>
              <td>{seasonStats.pf}</td>
              <td>{seasonStats.turnover}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    );
  }
  };
  
  export default SeasonStats;