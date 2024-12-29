import BeerSVGs from "./BeersSVG";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
const SlideIndicator = ({beerName, glassName, setIndex, index}) => {
    function handlePrev() {
        if (index) {
            setIndex((prev) => prev - 1);
        }
    }
    function handleNext() {
        if (index < 4) {
            setIndex((prev) => prev + 1);
        }
    }
    return (
        <div className = "orange_border rounded-[40px] w-[240px] h-[80px] py-2 px-2 mx-auto flex items-center justify-between text-white -mt-[45%] md:-mt-[30%] lg:-mt-[25%] z-40">
            <FaChevronLeft className = "text-white cursor-pointer" size = {"1.5em"} onClick={handlePrev}/>
            <div className = "text-center ml-4 mr-4 flex flex-col items-center justify-center self-center text-sm grow">
                <h4 className="orange">{beerName}</h4>
                <small>{glassName}</small>
            </div>
            <FaChevronRight className = "text-white cursor-pointer" size = {"1.5em"} onClick={handleNext}/>
        </div>
    )
}
const BeerTypes = () => {
    const [index, setIndex] = useState(0);
    const [beerInfo, setBeerInfo] = useState({
        name: "Wieb",
        glass: "Wiezen"
    });
    return (
        <div className = "text-white px-4 pt-40 md:px-8 w-full mt-12 sm:w-[80%] mx-auto">
            <div>
                <p className = "text-xl text-center lg:text-left sm:text-2xl md:text-4xl lg:text-6xl">Fussy, us? Why? Just because we use a <span className = "orange">special glass</span> for each type of beer?</p>
            </div>
            <div className = "beer_svgs h-screen text-black mt-12 flex flex-col items-center">
                <BeerSVGs setIndex = {setIndex} setBeerInfo = {setBeerInfo} index = {index} />
                <SlideIndicator beerName = {beerInfo?.name} glassName = {beerInfo?.glass} setIndex = {setIndex} index = {index}/>
            </div>
        </div>
    )
}
export default BeerTypes;