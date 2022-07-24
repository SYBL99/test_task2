import React, { useState, useEffect } from "react";
import Episode from "../episode/Episode.jsx";
import GetInfo from "../../API/PostService.js";
import EpisodeList from "../episodesList/EpisodeList.jsx";

function EpisodeSeason() {
    const [episodes, setEpisodes] = useState([])
    const [episodesBySeason, setEpisodesBySeason] = useState([])
    async function getAllEpisodes() {
        const API = new GetInfo;
        const response = await API.getEpisodes();
        setEpisodes(response)
    }

    function infiniteScroll() {
        window.addEventListener("scroll", function () {

            var block = document.getElementById('infinite-scroll');

            var contentHeight = block.offsetHeight;      // 1) высота блока контента вместе с границами
            var yOffset = window.pageYOffset;      // 2) текущее положение скролбара
            var window_height = window.innerHeight;      // 3) высота внутренней области окна документа
            var y = yOffset + window_height;

            // если пользователь достиг конца
            if (y >= contentHeight) {
                
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
    }

    useEffect(() => { getAllEpisodes() }, [])
    useEffect(() => { filterBySeason() }, [episodes])
    infiniteScroll()
    return (
        <>  
            {episodesBySeason.map((item, index) => <EpisodeList episodes={item} season={index + 1} key={index}/>)}
        </>

    )
}

export default EpisodeSeason;


