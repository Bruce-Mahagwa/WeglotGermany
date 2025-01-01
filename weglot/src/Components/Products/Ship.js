import { motion } from "motion/react";
import ship from "../../assets/ship.png";

const Ship = ({scrollPercentage, shipLeftPosition}) => {
    return ( 
        <motion.div className="flex w-full bg-[#161616] z-50 absolute top-72 md:top-80 min-h-40 left-[100%]"
            initial={scrollPercentage <= 0.50 ? { left: "100%" } : {}}
            animate={scrollPercentage > 0.50 ? { left: `${shipLeftPosition}%` } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* ship */}
            <img src={ship} alt="ship image" className="w-40 md:w-60" />
        </motion.div>
    )
}
export default Ship;