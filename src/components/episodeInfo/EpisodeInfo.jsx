import React from "react";

function EpisodeInfo({ name, air_date, episode }) {

    return (
        <div className="episode__description"> 
            <div className="title">Информация об эпизоде</div>
            <p>Name: {name}</p>
            <p>Episode: {episode}</p>
            <p>Air Date: {air_date}</p>
        </div>
    )
}

export default EpisodeInfo;