import React, { useEffect, useState } from "react";
import "./css/App.css"
import Layout from "./components/pages/Layout.jsx";
import {Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home.jsx"
import AboutEpisode from "./components/pages/AboutEpisode.jsx"
import NotFound from "./components/pages/NotFound.jsx";
import Locations from "./components/pages/Locations.jsx";
import AboutLocation from "./components/pages/AboutLocation.jsx";
import UserContext from "./context/UserContext";

function App () {
    const [arr, setArr] = useState([])
    return (
        <>
            <UserContext.Provider value={{arr, setArr}}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/about/:id" element={<AboutEpisode />} />
                        <Route path="/locations" element={<Locations />} />
                        <Route path="/locations/:id" element={<AboutLocation />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </UserContext.Provider>
        </>
    )
}

export default App;