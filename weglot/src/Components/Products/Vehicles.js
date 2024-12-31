import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState, useEffect } from "react";
import useScrollHook from "../../hooks/useScroll";
import car from "../../assets/car.png";
import bolt from "../../assets/lightningboltsmall.png";
const Vehicles = () => {
    const ref = useRef();
    const [scrollDirection, setScrollDirection] = useState("down")
    const { scrollDistance } = useScrollHook();
    const { scrollYProgress, scrollY } = useScroll({
        target: ref
    });
    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - scrollY.getPrevious()
        setScrollDirection(diff > 0 ? "down" : "up")
    });
    // ui state to determine when images show
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [lightningBoltTopPosition, setLightningBoltTopPosition] = useState(0);
    const [lightningBoltScale, setLightningBoltScale] = useState(0);
    useEffect(() => {
        setScrollPercentage(scrollYProgress.current.toFixed(2))
        if (scrollPercentage >= 0.10) {
            setLightningBoltScale(1);
            const topValue = scrollPercentage * 100 - 10; // get values ranging from 1 to 10
            const scrollValue = topValue * 5 // get values ranging from 5 to 50
            setLightningBoltTopPosition(() => {
                if (scrollValue > 50) {
                    return 50;
                }
                else if (scrollValue < 5) {
                    return 5;
                }
                return scrollValue;
            })
            // console.log(scrollPercentage, topValue, scrollValue)

        }
        else if (scrollPercentage < 0.10) {
            setLightningBoltScale(0);
        }

    }, [scrollDistance])
    return (
        <div className="relative text-white px-4 pt-40 md:px-8 w-full mt-12 sm:w-[80%] mx-auto h-[1000vh]"
            ref={ref}
        >
            <div className="sticky min-h-screen top-0 pt-12">
                <motion.div
                    initial={{ opacity: 0, top: "15px" }}
                    whileInView={{ opacity: 1, top: "0px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
                        No wonder. We know all about good design and like to <span className="orange">share it</span> with the world.
                    </p>
                </motion.div>

                <div className="mt-20">
                    <motion.div className="text-left relative"
                        initial={{ opacity: 0, top: "25px" }}
                        whileInView={{ opacity: 1, top: "0" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="mb-2 orange text-3xl md:text-5xl font-bold orange">2.65 m</h1>
                        <p className="text-xs sm:text-base font-bold">exported cars per year</p>
                    </motion.div>
                    <motion.div className="mt-8 text-left relative"
                        initial={{ opacity: 0, top: "25px" }}
                        whileInView={{ opacity: 1, top: "0" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="mb-2 orange text-3xl md:text-5xl font-bold orange">187.4 bn</h1>
                        <p className="text-xs sm:text-base font-bold">turnover last year in euros</p>
                    </motion.div>
                </div>

                {/* images */}
                <div className="absolute top-[42.5%] right-[23px]">
                    {/* car */}
                    <img src={car} alt="image of a car" className="w-20 md:w-24 lg:w-28" />
                </div>

                <motion.div className="absolute right-0 md:-right-[10px] lg:-right-[25px] top-[5%] border-[orange] rounded-full"
                    initial={{ scale: lightningBoltScale }}
                    animate={{ scale: lightningBoltScale, top: `${lightningBoltTopPosition}%` }}
                    transition={{ duration: 0.5 }}                    
                >
                    {/* lightning bolt */}
                    <img src={bolt} alt="image of a lightning bolt" className="w-32 md:w-40 lg:w-52" />
                </motion.div>
            </div>

        </div>
    )
}
export default Vehicles;