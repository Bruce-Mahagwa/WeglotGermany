import wieb from "../../assets/wieb.png"
import becher from "../../assets/becher.png"
import kolshstange from "../../assets/kolshstange.png"
import mabkurg from "../../assets/mabkrug.png"
import stange from "../../assets/stange.png";
const GermanLanguage = () => {
    return (
        <div className = "text-white px-4 pt-40 md:px-8 w-full mt-12 sm:w-[80%] mx-auto">
            <div>
                <img src={wieb} alt="wieb beer" className="w-40 h-60 mx-auto" />
                <img src={becher} alt="becher beer" className="w-40 h-60 mx-auto" />                
            </div>
            <div>
                <p className = "text-xl text-center lg:text-left sm:text-2xl md:text-4xl lg:text-6xl">And we are just as <span className = "red">demanding</span> with our <span className = "red">language.</span> Even if it may not seem so</p>
            </div>
            <div>
                <img src={kolshstange} alt="kolshstange beer" className="w-40 h-60 mx-auto" />
                <img src={mabkurg} alt="mabkurg beer" className="w-40 h-60 mx-auto" />
                <img src={stange} alt="stange beer" className="w-40 h-60 mx-auto" />
            </div>
        </div>    
    )
}
export default GermanLanguage;