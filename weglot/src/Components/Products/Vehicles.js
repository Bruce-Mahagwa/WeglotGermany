import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState, useEffect } from "react";
import useScrollHook from "../../hooks/useScroll";
import Car from "./Car";
import LightningBolt from "./LightningBolt";
import WindTurbine from "./WindTurbine";
import Plane from "./Plane";
import Ship from "./Ship";

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
        if (scrollPercentage >= 0.20) {            
            const topValue = scrollPercentage * 100 - 20; // get values ranging from 1 to 20          
            const scrollValue = topValue * 5/2 // get values ranging from 2.5 to 50
            if (scrollPercentage <= 0.50) {
                setLightningBoltScale(1);
            }
            else { 
                setLightningBoltScale(() => {
                    const scrollValue = scrollPercentage  * 100 - 50 // get values ranging from 1 to 10
                    let new_scale = (100 - scrollValue * 10) / 100; // get a value between 0 and 1;
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
        else if (scrollPercentage < 0.20) {
            setLightningBoltScale(0);
        }

        if (scrollPercentage > 0.40) {            
            const carElement = document.querySelector(".car");
            carElement.classList.add("animate-pulse")
            carElement.classList.add("z-50")

            const topValue = scrollPercentage * 100 - 40; // get values ranging from 1 to 20
            const scrollValue = 42.5 - topValue * (4.25 / 2) // get values ranging from 5 to 4.25/2 to 42.5
            setCarTopPosition(() => {
                if (scrollValue <= 0) {
                    return 0;
                }
                return scrollValue
            });
            setPlaneRightPosition(() => {
                let rightValue = scrollPercentage * 100 - 50; //get values ranging from 1 to 50                
                const scrollRightValue = 100 - rightValue * 2;
                if (scrollPercentage > 0.50) {
                    setPlaneRightPosition(() => {
                        if (scrollRightValue <= 0) {
                            return 0;
                        }
                        return scrollRightValue;
                    })
                }
            })
            setShipLeftPosition(() => {
                const leftValue = scrollPercentage * 100 - 50; //get values ranging from 1 to 50
                const scrollLeftValue = 100 - leftValue * 2;
                if (scrollPercentage > 0.50) {
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
            <div className="sticky min-h-screen top-20 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, top: "15px" }}
                    whileInView={{ opacity: 1, top: "0px" }}
                    transition={{ duration: 0.8 }}
                    className="relative min-h-12 md:min-h-24 lg:min-h-40"
                >
                    <motion.p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl absolute"
                        animate = {scrollPercentage > 0.50 ? {opacity: 0, display: "none"} : {}}
                        transition={{duration: 0.5}}
                    >
                        No wonder. We know all about good design and like to <span className="orange">share it</span> with the world.
                    </motion.p>
                    {scrollPercentage <= 0.75 && <motion.p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl hidden absolute"
                        animate = {scrollPercentage >= 0.52 ? {opacity: 1, display: "block"} : {}}
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
                <Car carTopPosition = {carTopPosition} scrollPercentage = {scrollPercentage} />                
                <LightningBolt lightningBoltTopPosition = {lightningBoltTopPosition} lightningBoltScale = {lightningBoltScale} />                
                <WindTurbine scrollPercentage = {scrollPercentage} />
                <Plane scrollPercentage = {scrollPercentage} planeRightPosition = {planeRightPosition}/>
                <Ship scrollPercentage = {scrollPercentage} shipLeftPosition = {shipLeftPosition} />                
            </div>

        </div>
    )
}
export default Vehicles;



// useEffect(() => {
//     setScrollPercentage(scrollYProgress.current.toFixed(2))
//     if (scrollPercentage >= 0.10) {            
//         const topValue = scrollPercentage * 100 - 10; // get values ranging from 1 to 10
//         const scrollValue = topValue * 5 // get values ranging from 5 to 50
//         if (scrollPercentage < 0.40) {
//             setLightningBoltScale(1);
//         }
//         else {
//             setLightningBoltScale(() => {
//                 const scrollValue = scrollPercentage  * 100 - 40 // get values ranging from 1 to 10
//                 let new_scale = (100 - scrollValue * 50) / 100; // get a value between 0 and 1;
//                 if (new_scale < 0) {
//                     new_scale = 0;
//                 }
//                 return new_scale;
//             })
//         }
//         setLightningBoltTopPosition(() => {
//             if (scrollValue > 50) {
//                 return 50;
//             }
//             else if (scrollValue < 5) {
//                 return 5;
//             }
//             return scrollValue;
//         })
//     }
//     else if (scrollPercentage < 0.10) {
//         setLightningBoltScale(0);
//     }

//     if (scrollPercentage > 0.30) {            
//         const carElement = document.querySelector(".car");
//         carElement.classList.add("animate-pulse")
//         carElement.classList.add("z-50")

//         const topValue = scrollPercentage * 100 - 30; // get values ranging from 1 to 10
//         const scrollValue = 42.5 - topValue * 4.25 // get values ranging from 5 to 50
//         setCarTopPosition(() => {
//             if (scrollValue <= 0) {
//                 return 0;
//             }
//             return scrollValue
//         });
//         setPlaneRightPosition(() => {
//             let rightValue = scrollPercentage * 100 - 30 - 5; //get values ranging from 1 to 10                
//             const scrollRightValue = 100 - rightValue * 10;
//             if (scrollPercentage > 0.35) {
//                 setPlaneRightPosition(() => {
//                     if (scrollRightValue <= 0) {
//                         return 0;
//                     }
//                     return scrollRightValue;
//                 })
//             }
//         })
//         setShipLeftPosition(() => {
//             const leftValue = scrollPercentage * 100 - 30 - 5; //get values ranging from 1 to 10
//             const scrollLeftValue = 100 - leftValue * 10;
//             if (scrollPercentage > 0.35) {
//                 setShipLeftPosition(() => {
//                     if (scrollLeftValue <= 0) {
//                         return 0;
//                     }
//                     return scrollLeftValue;
//                 })
//             }
//         })
//     }
// }, [scrollDistance])