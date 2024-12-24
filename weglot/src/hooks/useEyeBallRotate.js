import {useState, useEffect} from "react";
const useEyeBallRotate = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouseX(e.clientX)
            setMouseY(e.clientY)
        }
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize)
        }
    }, [mouseX, mouseY, width, height])
    
    let new_position_x = mouseX / width;
    let new_position_y = mouseY / height;  
    return [-new_position_x, -new_position_y]    
}
export default useEyeBallRotate;