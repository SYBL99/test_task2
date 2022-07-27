import React from "react";

function CharaterCard({gender, image, name, status, species, location}) {

    return (
        <div className="character__card">
            <img className="character__card-img" alt="character img" src={`${image}`}></img>
            <div className="character__card-sideblock">
                <p>Name: {name}</p>
                <p>Gender: {gender}</p>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                <p onClick={()=>{}}>location: {location.name}</p>
            </div>
        </div>
    )
}

export default CharaterCard;