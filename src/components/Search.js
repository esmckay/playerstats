import React, { useState } from "react";
import Cards from "./Cards";

function Search(props) {
  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSelect(){
      setSearchResults([]);
  }

  function handleSubmit(e) {
    if(!name){
        return ("Please insert a current players name");
    }else{
    e.preventDefault();

    fetch(`https://www.balldontlie.io/api/v1/players?search=${name}`)
    .then(response => response.json())
    .then(response => {
        let cardArray= [];
        response.data.forEach(player => {
            //This if statement is to filter out non-active players
            if(player.weight_pounds){
                const newCard = {id: player.id, firstname: player.first_name, lastname: player.last_name, team: player.team.full_name, position: player.position};
                cardArray.push(newCard);
            }

        });

        return cardArray
    })
    .then(cardArray => setSearchResults(cardArray))
    .catch(err => console.error(err));

    setName("");
    }
    
  };

  const resultsList = searchResults.map(result => (
      <Cards
        id = {result.id}
        fName = {result.firstname}
        lName = {result.lastname}
        team = {result.team}
        position = {result.position}
        key = {result.id}
        setResults = {props.parentCallback}
        resetResults = {handleSelect}
        />
    )
    );

  return (
    <>
    <div className="search-content">
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    className="search-input"
                    name="text"
                    placeholder="Current Player Name..."
                    autoComplete="off"
                    value={name}
                    onChange={handleChange} />
            </label>
            <label>
                <button type="submit" className="btn submit-btn">
                    Search
                </button>
            </label>
        </form>
    </div>
    <div className="card-results-container">
        <ul>
            {resultsList}
        </ul> 
    </div>

    </>)
}

export default Search;