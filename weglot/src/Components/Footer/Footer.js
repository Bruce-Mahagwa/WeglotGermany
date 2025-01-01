import basf from "../../assets/Basf.png";
import dhl from "../../assets/DHL.png";
import ibm from "../../assets/IBM.png";
import nikon from "../../assets/Nikon.png";
import refokus from "../../assets/Refokus.png";
const Footer = () => {
    return (
        <div className ="flex gap-4 pt-20 pb-20 flex-wrap justify-center">
            <img src = {basf} alt = "basf logo" />
            <img src = {dhl} alt = "dhl logo" />
            <img src = {ibm} alt = "ibm logo" />
            <img src = {nikon} alt = "nikon logo" />
            <img src = {refokus} alt = "refokus logo" />
        </div>
    )
}
export default Footer;