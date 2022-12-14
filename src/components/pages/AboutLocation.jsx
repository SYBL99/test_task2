import React, { useState, useEffect } from "react";
import GetInfo from "../../API/PostService.js";
import parseId from "../utils/PasrseId.js";
import CharaterCard from "../characterCard/CharacterCard.jsx";
import { useParams } from "react-router-dom";

function AboutLocation() {
    const [charactersInfo, setCharactersInfo] = useState([])
    const { id } = useParams();
    const API = new GetInfo

    async function getCharacters(idArr) {
        let response = await API.getCharactersByidArr(idArr)
        if (typeof response === 'object' && !Array.isArray(response) && !Array.isArray(response.results)) {
            response = [response]
        }
        Array.isArray(response.results) ? setCharactersInfo(response.results) : setCharactersInfo(response)
    }

    async function getAllResidents(id) {
        let response = await API.getResidentsByLocation(id)
        const idArr = response.residents.map(parseId)
        getCharacters(idArr)
    }



    useEffect(()=>{getAllResidents(id)},[])
    return (
        <>  
            <div className="title">Персоонажи на локации</div>
            {charactersInfo.map(element => <CharaterCard key={element.id} {...element} />)} 
        </>

    )
}

export default AboutLocation;


