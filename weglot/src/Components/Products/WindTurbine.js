import { motion } from "motion/react";
import { GiWindTurbine } from "react-icons/gi";
import { GiPaperWindmill } from "react-icons/gi";
const WindTurbine = ({scrollPercentage}) => {
    return (
        <motion.div className="flex absolute top-[50%] right-[25%]">
            {/* wind turbine */}
            {scrollPercentage <= 0.50 && <><motion.div
                initial={scrollPercentage <= 0.47 ? { opacity: 0 } : { opacity: 1 }}
                animate={scrollPercentage <= 0.47 ? { opacity: 0 } : { opacity: 1 }}
            > 
                <GiWindTurbine size={100} className="animate-bounce text-gray-700 brightness-150 contrast-200" />
            </motion.div>
                <motion.div
                    initial={scrollPercentage <= 0.44 ? { opacity: 0 } : { opacity: 1 }}
                    animate={scrollPercentage <= 0.44 ? { opacity: 0 } : { opacity: 1 }}
                >
                    <GiWindTurbine size={100} className="animate-pulse text-gray-700 brightness-150 contrast-200" />
                </motion.div>
                <motion.div
                    initial={scrollPercentage <= 0.40 ? { opacity: 0 } : { opacity: 1 }}
                    animate={scrollPercentage <= 0.40 ? { opacity: 0 } : { opacity: 1 }}
                >
                    <GiPaperWindmill size={100} className="animate-spin text-gray-700 brightness-150 contrast-200" />
                </motion.div>
            </>}
        </motion.div>
    )
}
export default WindTurbine;