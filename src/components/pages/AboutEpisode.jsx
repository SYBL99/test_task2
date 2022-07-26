import React, { useState, useEffect } from "react";
import GetInfo from "../../API/PostService.js";

import { useParams } from "react-router-dom";
import CharaterCard from "../characterCard/CharacterCard.jsx";

function AboutEpisode() {
    const [charactersInfo, setCharactersInfo] = useState([])
    const {id} = useParams();

    function parseId(string) {
        let id = ''
        for (let i = string.length - 1; i > 0; i--) {
            if (string[i] === '/') {
                return id
            } else {
                id = string[i] + id
            }
        }
        return ''
    }

    async function getAboutEpisode () {
        const API = new GetInfo
        const response = await API.getAboutEpisode(id)
        const idArr = response.characters.map(parseId)
        getCharacters(idArr)
    }

    async function getCharacters(idArr) {
        const API = new GetInfo
        const response = await API.getAboutCharacters(idArr)
        setCharactersInfo(response)
        console.log('charac',response)
    }

    useEffect(() => { getAboutEpisode() },[])
    return (
        <>
            <div>Здесь о {id}</div>
            {charactersInfo.map(element => <CharaterCard key={element.id} {...element} />)} 
        </>

    )
}

export default AboutEpisode;


