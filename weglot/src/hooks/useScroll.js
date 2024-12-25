import { useEffect, useState } from "react";

const useScroll = () => {
    const [scrollDistance, setScrollDistance] = useState(0); // detects how far a user has scrolled
    useEffect(() => {
         const handleScroll = () => {
             const scrollTop = window.scrollY || (document.documentElement || document.body.parentNode || document.body).scrollTop
             setScrollDistance(scrollTop)
         }
         window.addEventListener("scroll", handleScroll)
         return () => {
             window.removeEventListener("scroll", handleScroll);
         }
    }, [scrollDistance])      
 
     //handle page update and animation
     const [countScrollPosition, setCountScrollPosition] = useState(0);
     return {countScrollPosition, setCountScrollPosition, scrollDistance};
}
export default useScroll;