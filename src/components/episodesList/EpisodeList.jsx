import React, {useContext} from "react";
import UserContext from "../../context/UserContext.js";
import Episode from "../episode/Episode.jsx";


function EpisodeList({episodes, season}) {
    const { arr } =useContext(UserContext)
    return(
        <>
            {arr[season - 1].length === 0 ? <></> : <div className="episode__season">Сезон {season}</div>}
            {arr[season - 1].map(element => <Episode key={element.id} id={element.id} name={element.name} air_date={element.air_date} episode={element.episode} />)}
        </>
    )
}

export default EpisodeList;