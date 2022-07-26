import React, { useState, useEffect } from "react";
import Episode from "../episode/Episode.jsx";
import GetInfo from "../../API/PostService.js";
import EpisodeList from "../episodesList/EpisodeList.jsx";
import useInfiniteScroll from "../hooks/UseInfifnteScroll.jsx";
import useSearch from "../hooks/UseSearch.js";
import SearchAndSort from "../searchAndSort/SearchAndSort.jsx"
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


