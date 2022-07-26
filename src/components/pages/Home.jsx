import React, { useState, useEffect } from "react";
import Episode from "../episode/Episode.jsx";
import GetInfo from "../../API/PostService.js";
import EpisodeList from "../episodesList/EpisodeList.jsx";
import useInfiniteScroll from "../hooks/UseInfifnteScroll.jsx";
import useSearch from "../hooks/UseSearch.js";
import SearchAndSort from "../searchAndSort/SearchAndSort.jsx"

function EpisodeSeason() {
    const [episodes, setEpisodes] = useState([])
    const [searchQuery, setSearchQuery, setInputArr, searchedArr] = useSearch()
    const [episodesBySeason, setEpisodesBySeason] = useState([])
    const [sort, setSort] = useState('')
    const [showForScroll, setShowForScroll] = useInfiniteScroll(searchedArr,'infinite-scroll')
    const API = new GetInfo

    async function getAllEpisodes() {
        const response = await API.getEpisodes();
        setInputArr(response)
        setEpisodes(response)
    }

    function sortedBy() {
        try {
            if (sort === 'id') {
                setInputArr([...episodes].sort((a, b) => a.id - b.id))
            }
            if (sort !== '' && sort !== 'id') {
                setInputArr([...episodes].sort((a, b) => a[sort].localeCompare(b[sort])))
            }
        } catch (error) {
            console.log(error)
        }
    }

    function splitBySeason() {
        let takeAll = []
        for (let i = 1; i < 6; i++) {
            const buff = searchedArr.filter(element => { if (element.episode[2] == i) return true })
            takeAll = [...takeAll, buff]
        }
        console.log(takeAll)
        if (takeAll[0].length != 0) {
            setShowForScroll([takeAll[0], takeAll[1]])
            setEpisodesBySeason(takeAll)
        }


    }
    useEffect(() => { sortedBy() }, [sort])
    useEffect(() => { console.log('scr',showForScroll) }, [showForScroll])
    useEffect(() => { getAllEpisodes(); }, [])
    useEffect(() => {setShowForScroll(searchedArr); splitBySeason();}, [searchedArr])
    return (
        <>
            <button onClick={() => { console.log('searchedArr', searchedArr); console.log('showForScroll', showForScroll) }}>пЛог</button>
            <SearchAndSort searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSort={setSort} />
            {showForScroll.map((item, index) => <EpisodeList setEpisodesBySeason={setEpisodesBySeason} episodes={item} season={index + 1} key={index} />)}
        </>

    )
}

export default EpisodeSeason;


