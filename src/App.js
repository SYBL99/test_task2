import React, { useEffect, useState } from "react";
import GetInfo from "./API/PostService";
import Episode from "./components/episode/Episode.jsx";
import EpisodeList from "./components/episodesList/EpisodeList.jsx";
import "./css/App.css"
import Layout from "./components/pages/Layout.jsx";
import {Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home.jsx"
import AboutEpisode from "./components/pages/AboutEpisode.jsx"
import NotFound from "./components/pages/NotFound.jsx";

function App () {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<AboutEpisode/>}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes>
        </>
    )
}

export default App;