import React, { useEffect, useState } from "react";
import GetInfo from "./API/PostService";
import Episode from "./components/episode/Episode.jsx";
import EpisodeList from "./components/episodesList/EpisodeList.jsx";
import "./css/App.css"
import Layout from "./components/pages/Layout.jsx";
import {Routes, Route} from "react-router-dom";
import EpisodeSeason from "./components/episodeSeason/EpisodeSeason.jsx";
function App () {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<EpisodeSeason/>} />
                </Route>
            </Routes>
        </>
    )
}

export default App;