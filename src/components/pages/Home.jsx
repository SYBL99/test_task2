import React, { useState, useEffect, useContext } from "react";
import GetInfo from "../../API/PostService.js";
import EpisodeList from "../episodesList/EpisodeList.jsx";
import useSearch from "../hooks/UseSearch.js";
import SearchAndSort from "../searchAndSort/SearchAndSort.jsx"
import UserContext from "../../context/UserContext";

function EpisodeSeason() {

    const [episodes, setEpisodes] = useState([])
    const [searchQuery, setSearchQuery, setInputArr, searchedArr] = useSearch()
    const [episodesBySeason, setEpisodesBySeason] = useState([])
    const [sort, setSort] = useState('')
    const API = new GetInfo
    const {arr, setArr} = useContext(UserContext)

    async function getAllEpisodes() {
        const response = await API.getEpisodes();
        setInputArr(response)
        setEpisodes(response)
    }

    function sortBy() {
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
        if (takeAll[0].length != 0) {
            setEpisodesBySeason(takeAll)
            setArr(takeAll)
        }
    }

    useEffect(() => {sortBy() }, [sort])
    useEffect(() => {getAllEpisodes()}, [])
    useEffect(() => {splitBySeason()}, [searchedArr])

    return (
        <>
            <SearchAndSort searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSort={setSort} />
            {arr.map((item, index) => <EpisodeList season={index + 1} key={index} />)}
        </>

    )
}

export default EpisodeSeason;


