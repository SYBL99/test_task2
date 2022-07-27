import React, { useState, useEffect } from "react";
import GetInfo from "../../API/PostService.js";
import Location from "../location/Location.jsx";

function Locations() {
    const [locations, setLocations] = useState([])
    async function getAllLocation() {
        const API = new GetInfo
        const response = await API.getAllLocations()
        setLocations(response)
        console.log(response)
    }
    useEffect(()=>{getAllLocation()},[])
    return (
        <>
            {locations.map(element => <Location key={element.id} {...element} />)}
            <div>Локации</div>
        </>

    )
}

export default Locations;


