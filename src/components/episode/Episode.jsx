import React from "react";

function Episode ({id, name, air_date, episode}) {
    
    return (
        <div>{episode}. {name}, {air_date}</div>
    )
}

export default Episode;