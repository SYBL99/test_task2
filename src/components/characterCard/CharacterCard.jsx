import React from "react";
import { useNavigate } from "react-router-dom";

function CharaterCard({id, gender, image, name, status, species, location}) {

    function handleClick() {

    }

    return (
        <div className="character__card">
            <img className="character__card-img" alt="character img" src={`${image}`}></img>
            <div className="character__card-sideblock">
                <p>name: {name}</p>
                <p>gender: {gender}</p>
                <p>status: {status}</p>
                <p>species: {species}</p>
                <p onClick={()=>{}}>location: {location.name}</p>
            </div>
        </div>
    )
}

export default CharaterCard;