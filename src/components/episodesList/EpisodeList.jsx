import React, {useState, useEffect} from "react";
import Episode from "../episode/Episode.jsx";

function EpisodeList({ episodes, season }) {
    return(
        <>
            <div>Сезон {season}</div>
            {episodes.map(element => (<Episode key={element.id} id={element.id} name={element.name} air_date={element.air_date} episode={element.episode} />))}
        </>
        
    )
}

export default EpisodeList;