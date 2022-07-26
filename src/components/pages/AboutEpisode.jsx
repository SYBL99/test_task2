import React, { useState, useEffect } from "react";
import Episode from "../episode/Episode.jsx";
import GetInfo from "../../API/PostService.js";
import EpisodeList from "../episodesList/EpisodeList.jsx";
import useInfiniteScroll from "../hooks/UseInfifnteScroll.jsx";
import useSearch from "../hooks/UseSearch.js";
import SearchAndSort from "../SeacrAndSort/SearchAndSort.jsx"

function AboutEpisode() {

    async function geEpisode() {
        const API = GetInfo;
        const response = await API.getEpisodes();
        console.log(response)
    }

    return (
        <div>Здесь о</div>
    )
}

export default AboutEpisode;


