import React, { useEffect, useState } from 'react';
import GameStats from './components/GameStats'
import SeasonStats from './components/SeasonStats'
import PlayerInfo from './components/PlayerInfo';
import Search from './components/Search';
import Header from './components/Header';
import spinner from './components/spinner.gif'

const player_info_url = 'https://www.balldontlie.io/api/v1/players/'
const season_stats_url = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]='
const game_stats_url = 'https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]='


function App() {

  const [id, setId] = useState(115);
  const [player, setPlayer] = useState(null);
  const [statsByGame, setStatsByGame] = useState([]);
  const [statsBySeason, setStatsBySeason] = useState({});

 let handleCallback = (newData) => {
    setId(newData);
  }

  useEffect(() => {
    let mounted = true;

    let player_id = id;
    let info = {};

    let playerInfo_Stats = function (jsonResponse){
      let id = jsonResponse[0].id;
      let firstname = jsonResponse[0].first_name;
      let lastname = jsonResponse[0].last_name;
      let weight = jsonResponse[0].weight_pounds;
      let heightFt = jsonResponse[0].height_feet;
      let heightInches = jsonResponse[0].height_inches;
      let team = jsonResponse[0].team.full_name;
      let pos = jsonResponse[0].position;

      info = {'id': id, "fName": firstname, "lName": lastname, 'height_feet': heightFt, 'height_inches': heightInches, 'weight_pounds': weight, 'team':team, 'position': pos}

      setPlayer({info});
      setStatsByGame(jsonResponse[2].data);
      setStatsBySeason(jsonResponse[1].data[0]);
      };

      Promise.all([
          player_info_url + player_id,
          season_stats_url +  player_id,
          game_stats_url + player_id

      ].map(url => fetch(url)
      .then(response => response.json()) ))
      .then(data => {
          if (mounted){
              playerInfo_Stats(data);
          }
      }).catch(err => console.log(err));
      return () => mounted = false;
  }, [id]);

  if (!player){
    return (
      <div className="spinner-container">
        <img src={spinner} alt="loading..." className="spinner-img" />
      </div>
    );
  }
  else {
  return (
      <>
        <div>
          <div className='site-header'>
            <Header/>
          </div>
          <div>
            <PlayerInfo player={player}/>
          </div>
          <div className='player-div'>
            <Search  parentCallback = {handleCallback}/>
          </div>
          <div className='table-container'>
            <SeasonStats player={player} seasonStats={statsBySeason}/>
          </div>
          <div className='table-container'>
            <GameStats byGameStats={statsByGame} player={player}/>
          </div>
        </div>

      </>
  );
  } 
}

export default App;