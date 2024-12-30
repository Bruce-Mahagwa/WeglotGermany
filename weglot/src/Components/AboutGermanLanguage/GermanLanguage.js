import wieb from "../../assets/wieb.png"
import becher from "../../assets/becher.png"
import kolshstange from "../../assets/kolshstange.png"
import mabkurg from "../../assets/mabkrug.png"
import stange from "../../assets/stange.png"; 
import {motion} from "motion/react";
const GermanLanguage = () => {
    
    return (
        <div className = "text-white px-4 pt-40 md:px-8 w-full mt-12 sm:w-[80%] mx-auto flex flex-col gap-40">
            <div className = "flex justify-between">
                <img src={mabkurg} alt="makburg beer" className="w-28 h-40 md:w-40 md:h-60 mx-auto block"
                    style = {{
                        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(9deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                    }}
                />
                <img src={wieb} alt="wieb beer" className="w-28 h-40 md:w-40 md:h-60 mx-auto block"
                    style = {{
                        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-17deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                    }}
                />                
            </div>
            <motion.div
                 initial = {{opacity: 0, top: "15px" }}
                 whileInView = {{opacity: 1, top: "0px" }}
                 transition={{duration: 0.8}}
                 className = "relative"
            >
                <p className = "text-xl text-center lg:text-left sm:text-2xl md:text-4xl lg:text-6xl">And we are just as <span className = "red">demanding</span> with our <span className = "red">language.</span> Even if it may not seem so</p>
            </motion.div>
            <div className = "flex justify-between">
                <img src={stange} alt="stange beer" className="w-24 h-36 md:w-40 md:h-60 mx-auto block"
                    style = {{
                        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-12deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                    }}
                />
                <img src={kolshstange} alt="kolshstange beer" className="w-24 h-36 md:w-40 md:h-60 mx-auto block"
                    style = {{
                        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(9deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                    }}
                />
                <img src={becher} alt="becher beer" className="w-24 h-36 md:w-40 md:h-60 mx-auto block"
                    style = {{
                        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(20deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                    }}
                />
            </div>
        </div>    
    )
}
export default GermanLanguage;