import React from "react";

const PlayerInfo = (props) => {

    return (
        <div className="player-div">
        <br></br>
            <div className="player-header">
                <h4 className="player-name">
                    {props.player.info.fName + " " + props.player.info.lName}
                </h4>
                <p className="player-detail">
                    {'Team: ' + props.player.info.team}
                </p>
                <p className="player-detail">
                    {'Height: ' + props.player.info.height_feet + "'" + props.player.info.height_inches + '"'}
                </p>
                <p className="player-detail">
                    {'Weight: ' + props.player.info.weight_pounds + " lbs"}
                </p>
                <p className="player-detail">
                    {"Position: " + props.player.info.position}
                </p>
            </div>            
        </div>
    );
}

export default PlayerInfo;