import React, { useState, useEffect } from "react";
import GetInfo from "../../API/PostService.js";
import parseId from "../utils/PasrseId.js";
import { useParams } from "react-router-dom";
import CharaterCard from "../characterCard/CharacterCard.jsx";
import EpisodeInfo from "../episodeInfo/EpisodeInfo.jsx";

function AboutEpisode() {
    const [charactersInfo, setCharactersInfo] = useState([])
    const [episodeInfo, setEpisodeInfo] = useState({})
    const {id} = useParams()
    const API = new GetInfo

    async function getAboutEpisode () {
        const response = await API.getAboutEpisode(id)
        const idArr = response.characters.map(parseId)
        setEpisodeInfo(response)
        getCharacters(idArr)
    }

    async function getCharacters(idArr) {
        const response = await API.getAboutCharacters(idArr)
        setCharactersInfo(response)
    }

    useEffect(() => { getAboutEpisode() },[])
    
    return (
        <>  
            <div>Информация об эпизоде</div>
            <EpisodeInfo {...episodeInfo}/>
            <div className="title">Персоонажи из эпизода</div>
            {charactersInfo.map(element => <CharaterCard key={element.id} {...element} />)} 
        </>

    )
}

export default AboutEpisode;


