import React from "react";

function EpisodeInfo({ id, name, air_date, episode }) {

    return (
        <div className="episode__description"> 
            <p>Name: {name}</p>
            <p>Episode: {episode}</p>
            <p>Air Date: {air_date}</p>
        </div>
    )
}

export default EpisodeInfo;