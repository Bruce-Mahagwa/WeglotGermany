import FeatureCard from "./FeatureCard";
import data from "./Data";
import { useScroll } from "motion/react";
import { useRef, useState, useEffect } from "react";
import useScrollHook from "../../hooks/useScroll";

const Features = () => {
    const ref = useRef();
    const { scrollDistance } = useScrollHook();
    const { scrollYProgress } = useScroll({
        target: ref 
    });
    const [scrollPercentage, setScrollPercentage] = useState(0);
    useEffect(() => {
        setScrollPercentage(scrollYProgress.current.toFixed(2))                
    }, [scrollYProgress, scrollDistance]);
    return (
        <div className = "text-white px-4 md:px-8 w-full sm:w-[80%] mx-auto relative"
            ref= {ref}
        >
            {data.map((item, index) => {
                const {title, img, description} = item;
                const zindex = (index + 1) * 10;
                const top = ((index + 1) * 4);
                return (
                    <FeatureCard 
                        title = {title}
                        img = {img}
                        description = {description}
                        key = {title}
                        zindex = {zindex}
                        top = {top}
                        scrollPercentage = {scrollPercentage}
                    />
                )
            })}
        </div>
    )
}
export default Features;