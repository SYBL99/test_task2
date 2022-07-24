import { useState, useEffect } from "react";
function useInfiniteScroll (arrayForScroll, tag) {
    const [showForScroll, setShowForScroll] = useState([])
    let firstCall = true
    infiniteScroll()
    function MyScroll() {
            const block = document.getElementById(tag);
            const contentHeight = block.offsetHeight;
            const yOffset = window.pageYOffset;
            const window_height = window.innerHeight;
            const y = yOffset + window_height;
            console.log(contentHeight)
            if (y >= contentHeight && showForScroll.length < 5) {
                setShowForScroll([...showForScroll, arrayForScroll[showForScroll.length]])
        }
    }
    function infiniteScroll() {
        console.log('length',showForScroll.length)
        if ((showForScroll.length < 5) && firstCall) {
            firstCall = false
            console.log('добавил скролл')
            console.log(firstCall)
            window.addEventListener("scroll", MyScroll);
        }
        if (showForScroll.length == 6)
        {   console.log('кил')
            console.log(window.getEventListeners());
            window.removeEventListener('scroll', MyScroll)}
    }
    return(
        [showForScroll, setShowForScroll]
    )
}
export default useInfiniteScroll;
