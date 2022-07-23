import React, { useEffect, useState } from "react";
import GetInfo from "./API/PostService";
import Episode from "./components/episode/Episode.jsx";

function App () {

    const [episode, setEpisode] = useState([]);

    async function get() {
        const API = new GetInfo;
        const response = await API.getEpisodes();
        console.log(response)
        setEpisode(response)
        console.log(episode)
    }

    useEffect(()=>{get()},[])

    return (
        <>
            <div>Работаем</div>
            {episode.map(element => <Episode id={element.id} name={element.name} air_date={element.air_date} episode={element.episode}/>)}
        </>

    )

}

export default App;