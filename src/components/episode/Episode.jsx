import React from "react";

function Episode ({id, name, air_date, episode}) {
    
    return (
        <div className="episode">{episode.slice(-2)}. {name}, {air_date}</div>
    )
}

export default Episode;