import { motion } from "motion/react";
import ship from "../../assets/ship.png";

const Ship = ({scrollPercentage, shipLeftPosition}) => {
    return (
        <motion.div className="flex border-2 border-red w-full bg-[#161616] z-50 absolute top-80 md:top-96 min-h-40 left-[100%]"
            initial={scrollPercentage <= 0.35 ? { left: "100%" } : {}}
            animate={scrollPercentage > 0.35 ? { left: `${shipLeftPosition}%` } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* ship */}
            <img src={ship} alt="ship image" className="w-40 md:w-60" />
        </motion.div>
    )
}
export default Ship;