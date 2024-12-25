import SausageBeerSVGs from "./SausageBeerSVGs";
import {motion} from "motion/react";
const GermanFood = () => {
    return (
        <div className="min-h-screen px-4 md:px-8 pt-40 text-white">
            <div className = "mb-12 text-center">
                <motion.h1 className = "font-bold text-xl sm:text-2xl md:text-4xl lg:text-6xl relative"
                    initial = {{opacity: 0, top: "15px" }}
                    whileInView = {{opacity: 1, top: "0px" }}
                    transition={{duration: 0.8}}                    
                >And that we only drink <span className="orange">beer</span> and eat <span className="orange">sausages</span></motion.h1>
            </div>
            <div className = "text-center">
                <motion.p className = "text-lg md:text-xl lg:text-4xl relative"
                    initial = {{opacity: 0, top: "15px" }}
                    whileInView = {{opacity: 1, top: "0px" }}
                    transition={{duration: 0.8}}
                >Well, we actually have over 1,500 types of sausages and more than 5,000 brands of beer. But who's counting?</motion.p>
            </div>

            <SausageBeerSVGs />    
        </div>
    )
}
export default GermanFood;