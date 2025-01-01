import { motion } from "motion/react";
import car from "../../assets/car.png";
const Car = ({ carTopPosition, scrollPercentage }) => {
    return ( 
        <motion.div className="absolute top-[42.5%] right-[23px] car"
            animate={scrollPercentage > 0.40 ? { top: `${carTopPosition}%` } : {}}
        >
            {/* car */}
            <img src={car} alt="image of a car" className="w-20 md:w-24 lg:w-28" />
        </motion.div>
    )
}
export default Car;