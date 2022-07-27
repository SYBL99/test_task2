import { useState, useEffect, useContext } from "react";
import UserContext from "../../context/UserContext";
function useInfiniteScroll (arrayForScroll, tag) {
    const [showForScroll, setShowForScroll] = useState([])
    const [arr, setArr] = useState([])
    let firstCall = true
    useEffect(()=>{infiniteScroll()},[])
    
    return(

        [showForScroll, setShowForScroll,arr, setArr]
    )
}
export default useInfiniteScroll;
