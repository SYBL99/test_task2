import React from "react";
import { useNavigate } from "react-router-dom";

function Location({ id, name, type, dimension }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/locations/${id}`)
    }


    return (
        <div onClick={handleClick} className="episode">{ name }: {type} ,  {dimension}</div>
    )
}

export default Location;