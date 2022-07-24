import React, { useState, useEffect } from "react";
import Episode from "../episode/Episode.jsx";
import GetInfo from "../../API/PostService.js";
import EpisodeList from "../episodesList/EpisodeList.jsx";
import useInfiniteScroll from "../hooks/UseInfifnteScroll.jsx";

function EpisodeSeason() {
    const [episodes, setEpisodes] = useState([])
    const [episodesBySeason, setEpisodesBySeason] = useState([])
    const [showForScroll, setShowForScroll] = useInfiniteScroll(episodesBySeason,'infinite-scroll')
    const [searchQuery, setSearchQuery] = useState('')

    async function getAllEpisodes() {
        const API = new GetInfo;
        const response = await API.getEpisodes();
        setEpisodes(response)
    }

    function splitBySeason() {
        let takeAll = []
        for (let i = 1; i < 6; i++) {
            const buff = episodes.filter(element => { if (element.episode[2] == i) return true })
            takeAll = [...takeAll, buff]
        }
        setEpisodesBySeason(takeAll)
        setShowForScroll([takeAll[0], takeAll[1]])
    }

    function search(e) {
        console.log(searchQuery)
    }

    useEffect(() => { getAllEpisodes() }, [])
    useEffect(() => { splitBySeason() }, [episodes])
    return (
        <>  <div><input className="episode__search" value={searchQuery} placeholder="поиск" onChange={e => { setSearchQuery(e.target.value); search(e.target.value)}}></input> </div>
            {showForScroll.map((item, index) => <EpisodeList episodes={item} season={index + 1} key={index}/>)}
        </>

    )
}

export default EpisodeSeason;


