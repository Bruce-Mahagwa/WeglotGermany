import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState, useEffect } from "react";
import useScrollHook from "../../hooks/useScroll";
import car from "../../assets/car.png";
import bolt from "../../assets/lightningboltsmall.png";
import plane from "../../assets/plane.png";
import ship from "../../assets/ship.png";
import { GiWindTurbine } from "react-icons/gi";
import { GiPaperWindmill } from "react-icons/gi";

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
    const [carTopPosition, setCarTopPosition] = useState(42.5);
    const [planeRightPosition, setPlaneRightPosition] = useState(100);
    const [lightningBoltScale, setLightningBoltScale] = useState(0);
    const [shipLeftPosition, setShipLeftPosition] = useState(100);
    useEffect(() => {
        setScrollPercentage(scrollYProgress.current.toFixed(2))
        if (scrollPercentage >= 0.10) {            
            const topValue = scrollPercentage * 100 - 10; // get values ranging from 1 to 10
            const scrollValue = topValue * 5 // get values ranging from 5 to 50
            if (scrollPercentage < 0.40) {
                setLightningBoltScale(1);
            }
            else {
                setLightningBoltScale(() => {
                    const scrollValue = scrollPercentage  * 100 - 40 // get values ranging from 1 to 10
                    let new_scale = (100 - scrollValue * 50) / 100; // get a value between 0 and 1;
                    if (new_scale < 0) {
                        new_scale = 0;
                    }
                    return new_scale;
                })
            }
            setLightningBoltTopPosition(() => {
                if (scrollValue > 50) {
                    return 50;
                }
                else if (scrollValue < 5) {
                    return 5;
                }
                return scrollValue;
            })
        }
        else if (scrollPercentage < 0.10) {
            setLightningBoltScale(0);
        }

        if (scrollPercentage > 0.30) {            
            const carElement = document.querySelector(".car");
            carElement.classList.add("animate-pulse")
            carElement.classList.add("z-50")

            const topValue = scrollPercentage * 100 - 30; // get values ranging from 1 to 10
            const scrollValue = 42.5 - topValue * 4.25 // get values ranging from 5 to 50
            setCarTopPosition(() => {
                if (scrollValue <= 0) {
                    return 0;
                }
                return scrollValue
            });
            setPlaneRightPosition(() => {
                let rightValue = scrollPercentage * 100 - 30 - 5; //get values ranging from 1 to 10                
                const scrollRightValue = 100 - rightValue * 10;
                if (scrollPercentage > 0.35) {
                    setPlaneRightPosition(() => {
                        if (scrollRightValue <= 0) {
                            return 0;
                        }
                        return scrollRightValue;
                    })
                }
            })
            setShipLeftPosition(() => {
                const leftValue = scrollPercentage * 100 - 30 - 5; //get values ranging from 1 to 10
                const scrollLeftValue = 100 - leftValue * 10;
                if (scrollPercentage > 0.35) {
                    setShipLeftPosition(() => {
                        if (scrollLeftValue <= 0) {
                            return 0;
                        }
                        return scrollLeftValue;
                    })
                }
            })

        }


    }, [scrollDistance])
    return (
        <div className="relative text-white px-4 pt-40 md:px-8 w-full mt-12 sm:w-[80%] mx-auto h-[500vh]"
            ref={ref}
        >
            <div className="sticky min-h-screen top-0 pt-12 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, top: "15px" }}
                    whileInView={{ opacity: 1, top: "0px" }}
                    transition={{ duration: 0.8 }}
                    className="relative min-h-12 md:min-h-24 lg:min-h-40"
                >
                    <motion.p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl absolute"
                        animate = {scrollPercentage > 0.30 ? {opacity: 0, display: "none"} : {}}
                        transition={{duration: 0.5}}
                    >
                        No wonder. We know all about good design and like to <span className="orange">share it</span> with the world.
                    </motion.p>
                    {scrollPercentage <= 0.35 && <motion.p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl hidden absolute"
                        animate = {scrollPercentage >= 0.32 ? {opacity: 1, display: "block"} : {}}
                        transition={{duration: 0.5}}
                    >
                        We believe in <span className="orange">innovation</span>, driven by technology.
                    </motion.p>}
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
                    <motion.div className="mt-24 md:mt-20 text-left relative"
                        initial={{ opacity: 0, top: "25px" }}
                        whileInView={{ opacity: 1, top: "0" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="mb-2 orange text-3xl md:text-5xl font-bold orange">187.4 bn</h1>
                        <p className="text-xs sm:text-base font-bold">turnover last year in euros</p>
                    </motion.div>
                </div>

                {/* images */}
                <motion.div className="absolute top-[42.5%] right-[23px] car"
                    animate = {scrollPercentage > 0.30 ? {top: `${carTopPosition}%`} : {}}
                >
                    {/* car */}
                    <img src={car} alt="image of a car" className="w-20 md:w-24 lg:w-28" />
                </motion.div>

                <motion.div className="absolute right-0 md:-right-[10px] lg:-right-[25px] top-[5%] rounded-full"
                    initial={{ scale: lightningBoltScale }}
                    animate={{ scale: lightningBoltScale, top: `${lightningBoltTopPosition}%`}}                    
                    transition={{ duration: 0.5 }}
                >
                    {/* lightning bolt */}
                    <img src={bolt} alt="image of a lightning bolt" className="w-32 md:w-40 lg:w-52" />
                </motion.div>

                <motion.div className="flex absolute top-[50%] right-[25%]">
                    {/* wind turbine */}
                    {scrollPercentage < 0.40 && <><motion.div
                        initial={scrollPercentage <= 0.27 ? { opacity: 0 } : { opacity: 1 }}
                        animate={scrollPercentage <= 0.27 ? { opacity: 0 } : { opacity: 1 }}
                    >
                        <GiWindTurbine size={100} className="animate-bounce text-gray-700 brightness-150 contrast-200" />
                    </motion.div>
                    <motion.div
                        initial={scrollPercentage <= 0.24 ? { opacity: 0 } : { opacity: 1 }}
                        animate={scrollPercentage <= 0.24 ? { opacity: 0 } : { opacity: 1 }}
                    >
                        <GiWindTurbine size={100} className="animate-pulse text-gray-700 brightness-150 contrast-200" />
                    </motion.div>
                    <motion.div
                        initial={scrollPercentage <= 0.20 ? { opacity: 0 } : { opacity: 1 }}
                        animate={scrollPercentage <= 0.20 ? { opacity: 0 } : { opacity: 1 }}
                    >
                        <GiPaperWindmill size={100} className="animate-spin text-gray-700 brightness-150 contrast-200" />
                    </motion.div>
                    </>}
                </motion.div>

                <motion.div className = "flex items-center justify-end border-2 border-red w-full bg-[#161616] z-50 absolute top-32 right-[100%]"
                    initial = {scrollPercentage <= 0.35 ? {right: "100%"} : {}}
                    animate = {scrollPercentage > 0.35 ? {right: `${planeRightPosition}%`} : {}}
                    transition={{duration: 0.4, ease: "easeOut"}}
                >
                    {/* plane */}
                    <div className = "text-white text-sm md:text-base plane_banner w-56 md:w-60 lg:w-72">
                        <h2 className = "orange">~2.9m</h2>
                        <p>People are employed in the logistics sector</p>
                    </div>
                    <img src = {plane} alt = "plane image" className = "w-40 md:w-60" />                    
                </motion.div>

                <motion.div className = "flex border-2 border-red w-full bg-[#161616] z-50 absolute top-80 md:top-96 min-h-40 left-[100%]"
                    initial = {scrollPercentage <= 0.35 ? {left: "100%"} : {}}
                    animate = {scrollPercentage > 0.35 ? {left: `${shipLeftPosition}%`} : {}}
                    transition={{duration: 0.4, ease: "easeOut"}}
                >
                    {/* ship */}
                    <img src = {ship} alt = "ship image" className = "w-40 md:w-60" />                    
                </motion.div>
            </div>

        </div>
    )
}
export default Vehicles;