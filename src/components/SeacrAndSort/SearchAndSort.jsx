import React from "react";

function searchAndSort ({searchQuery, setSearchQuery, setSort}) {
    console.log('алло')
    return(
        <div>
            <input className="episode__search" value={searchQuery} placeholder="поиск" onChange={e => { setSearchQuery(e.target.value) }}></input>
            <select defaultValue='default' onChange={(e) => setSort(e.target.value)}>
                <option disabled value='default'> Сортировка</option>
                <option value='name'>По имени</option>
                <option value='id'>По дате выхода</option>
            </select>
        </div>
    )

}

export default searchAndSort;
