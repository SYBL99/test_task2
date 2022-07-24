import React, { useState, useEffect } from "react";
import Episode from "../episode/Episode.jsx";
import GetInfo from "../../API/PostService.js";
import EpisodeList from "../episodesList/EpisodeList.jsx";

function EpisodeSeason() {
    const [episodes, setEpisodes] = useState([])
    const [episodesBySeason, setEpisodesBySeason] = useState([])
    const [showForScroll, setShowForScroll] = useState([])

    async function getAllEpisodes() {
        const API = new GetInfo;
        const response = await API.getEpisodes();
        setEpisodes(response)
    }

    function infiniteScroll() {
        window.addEventListener("scroll", function () {
            const block = document.getElementById('infinite-scroll');
            const contentHeight = block.offsetHeight; 
            const yOffset = window.pageYOffset;
            const window_height = window.innerHeight;
            const y = yOffset + window_height;
            // если пользователь достиг конца
            if (y >= contentHeight && showForScroll.length<5) {
                setShowForScroll([...showForScroll, episodesBySeason[showForScroll.length]])
            }
        });
    }

    function filterBySeason() {
        let takeAll = []
        for (let i = 1; i < 6; i++) {
            const buff = episodes.filter(element => { if (element.episode[2] == i) return true })
            takeAll = [...takeAll, buff]
        }
        setEpisodesBySeason(takeAll)
        console.log("take all[0]", takeAll)
        console.log("show", showForScroll)
        setShowForScroll([takeAll[0], takeAll[1]])
    }

    useEffect(() => { getAllEpisodes() }, [])
    useEffect(() => { filterBySeason() }, [episodes])
    infiniteScroll()
    return (
        <>  
            {showForScroll.map((item, index) => <EpisodeList episodes={item} season={index + 1} key={index}/>)}
        </>

    )
}

export default EpisodeSeason;


