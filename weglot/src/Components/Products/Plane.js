import plane from "../../assets/plane.png";
import { motion } from "motion/react";
const Plane = ({scrollPercentage, planeRightPosition}) => {
    return ( 
        <motion.div className="flex items-center justify-end w-full z-50 absolute top-24 right-[100%] z-50 bg-[#161616]"
            initial={scrollPercentage <= 0.50 ? { right: "100%" } : {}}
            animate={scrollPercentage > 0.50 ? { right: `${planeRightPosition}%` } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* plane */}
            <div className="text-white text-sm md:text-base plane_banner w-56 md:w-60 lg:w-72">
                <h2 className="orange">~2.9m</h2>
                <p>People are employed in the logistics sector</p>
            </div>
            <img src={plane} alt="plane image" className="w-40 md:w-60" />
        </motion.div>
    )
}
export default Plane;