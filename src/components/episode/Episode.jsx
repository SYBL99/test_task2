import React from "react";
import { useNavigate } from "react-router-dom";

function Episode ({id, name, air_date, episode}) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/about/${id}`)
    }
    
    return (
        <div onClick={handleClick} className="episode">{episode.slice(-2)}. {name}, {air_date}</div>
    )
}

export default Episode;