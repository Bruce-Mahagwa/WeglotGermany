import Carousel from 'react-bootstrap/Carousel';
import wieb from "../../assets/wieb.png"
import becher from "../../assets/becher.png"
import kolshstange from "../../assets/kolshstange.png"
import mabkurg from "../../assets/mabkrug.png"
import stange from "../../assets/stange.png";
import { useEffect } from "react";
const beerInfo = [
    {
        name: "Wieb",
        glass: "Wiezen"
    },
    {
        name: "Becher",
        glass: "Alt order Weizen"
    },
    {
        name: "Kolshstange",
        glass: "Kolsh"
    },
    {
        name: "Mabkurg",
        glass: "Helles & Dunkles"
    },
    {
        name: "Stange",
        glass: "Lager & Pills"
    }
]

const BeerSVGs = ({ setIndex, setBeerInfo, index }) => {

    useEffect(() => {
        setBeerInfo((prev) => {
            return {
                name: beerInfo[index].name,
                glass: beerInfo[index].glass
            }
        })
    }, [setIndex, setBeerInfo, index])
    return (
        <Carousel
            activeIndex={index}
            controls = {false}
            indicators={false}
            onSelect={(selectedIndex) => setIndex(selectedIndex)}
            interval = {1500}
            className = "w-full h-full flex justify-center items-center"
        >
            <Carousel.Item>
                <img src={wieb} alt="wieb beer" className="w-40 h-60 mx-auto" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={becher} alt="becher beer" className="w-40 h-60 mx-auto" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={kolshstange} alt="kolshstange beer" className="w-40 h-60 mx-auto" />
            </Carousel.Item>
            <Carousel.Item>
                <img src={mabkurg} alt="mabkurg beer" className="w-40 h-60 mx-auto" />
            </Carousel.Item>
            <Carousel.Item> 
                <img src={stange} alt="stange beer" className="w-40 h-60 mx-auto" />
            </Carousel.Item>
        </Carousel>
    )
}
export default BeerSVGs;

