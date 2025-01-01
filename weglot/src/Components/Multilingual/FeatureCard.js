import { motion} from "motion/react";
import { useEffect, useRef, useState } from "react";
const FeatureCard = ({title, description, img, zindex, top, scrollPercentage}) => {
    const ref = useRef();

    return (
        <div className = "bg-[#222] border-2 border-gray-800 text-center md:text-left md:flex md:justify-between p-8 md:p-12 rounded-[10px] mb-12 sticky top-12"
            ref = {ref}
            style = {{zIndex: zindex, top: `${top}vh`}}
        >
            <img src = {img} alt = {title} className="md:order-2 w-40 mx-auto mb-8 md:w-60 lg:w-80"/>
            <motion.div
                initial={{ opacity: 0, top: "15px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{ duration: 0.8 }}
                className="relative md:order-1 md:text-left"
            >
                <h2 className = "green text-xl sm:text-2xl md:text-4xl lg:text-6xl mb-8">{title}</h2>
                <p>{description}</p>
            </motion.div>
        </div>
    )
}
export default FeatureCard;