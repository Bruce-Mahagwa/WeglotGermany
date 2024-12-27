import {Carousel} from "flowbite-react";
import wieb from "../../assets/wieb.png"
import becher from "../../assets/becher.png"
import kolshstange from "../../assets/kolshstange.png"
import mabkurg from "../../assets/mabkrug.png"
import stange from "../../assets/stange.png";
const BeerSVGs = () => {
    return (
            <Carousel
                indicators = {false}
                leftControl = "l"
                rightControl = "r"
                slideInterval={2000}
                className = "border-2 border-red"
            >   
                <img src={wieb} alt = "wieb beer" className = "w-40 h-60" />
                <img src={becher} alt = "becher beer" className = "w-40 h-60" />
                <img src={kolshstange} alt = "kolshstange beer" className = "w-40 h-60" />
                <img src={mabkurg} alt = "mabkurg beer" className = "w-40 h-60" />
                <img src={stange} alt = "stange beer" className = "w-40 h-60" />
            </Carousel>
    )
}
export default BeerSVGs;