import React from "react";

function searchAndSort ({searchQuery, setSearchQuery, setSort}) {
    return(
        <div className="main__sort">
            <input className="main__sort-searcher" value={searchQuery} placeholder="Поиск" onChange={e => { setSearchQuery(e.target.value) }}></input>
            <select className="main__sort-selector" defaultValue='default' onChange={(e) => setSort(e.target.value)}>
                <option disabled value='default'> Сортировка</option>
                <option value='name'>По имени</option>
                <option value='id'>По дате выхода</option>
            </select>
        </div>
    )

}

export default searchAndSort;
