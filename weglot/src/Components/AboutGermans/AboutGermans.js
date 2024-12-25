import { motion, useScroll, useMotionValueEvent } from "motion/react";
import sword from "../../assets/sword.jpg";
import woman from "../../assets/woman.jpg";
import shield from "../../assets/shield.png";
import viking from "../../assets/viking.jpg";
import wallet from "../../assets/wallet.png";
import beer from "../../assets/beer.jpg";
import { FaPlus } from "react-icons/fa6";
import useScrollHook from "../../hooks/useScroll";
import DummyComponent from "../DummyComponent";
import { useEffect, useState, useRef } from "react";

const AboutGermans = () => {
    const { scrollDistance, countScrollPosition, setCountScrollPosition } = useScrollHook();
    const ref = useRef();
    const { scrollYProgress, scrollY } = useScroll({
        target: ref
    });
    const [scrollDirection, setScrollDirection] = useState("down")

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - scrollY.getPrevious()
        setScrollDirection(diff > 0 ? "down" : "up")
    })
    return (
        <>
            <div className="w-full px-4 md:px-8 pt-12 mb-12">
                <div className="about_germans_intro rounded-xl p-4 md:p-8 lg:p-12 w-max text-white text-xl md:text-4xl lg:text-6xl">
                    <motion.p
                        initial={{ opacity: 0, top: "15px" }}
                        whileInView={{ opacity: 1, top: "0px" }}
                        transition={{ duration: 1 }}
                        className="mb-2 relative">
                        We are known to have <span className="text-violet-600 font-bold">very long words</span>.<br />Such as...
                    </motion.p>
                </div>
            </div>

            <div className="w-full px-4 md:px-8 pt-12 pb-8 h-[700vh] relative"
                ref={ref}
            >
                <div className="sticky min-h-screen top-0 flex flex-col justify-center">
                    <div className="w-full flex flex-col items-center md:flex-row">
                        {countScrollPosition >= 1 && scrollYProgress.current > 0 && <motion.div className="w-32 h-32 flex items-center items-center lg:w-48 lg:h-48 border border-gray-800 text-center rounded-full p-4"
                            initial={scrollDirection === "down" ? {opacity: 0} : countScrollPosition === 1 ? {opacity:1}: {}}
                            animate={scrollDirection === "down" ? {opacity: 1} : countScrollPosition === 1 ? {opacity: 0}: {}}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={woman} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto" alt="pic of a woman" />
                        </motion.div>}
                        {countScrollPosition >= 2 && <motion.div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-32px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-28px] border border-gray-800 text-center rounded-full p-4"
                            initial={scrollDirection === "down" ? {opacity: 0} : countScrollPosition === 2 ? {opacity:1}: {}}
                            animate={scrollDirection === "down" ? {opacity: 1} : countScrollPosition === 2 ? {opacity: 0}: {}}
                            transition={{ duration: 0.5 }}
                        >
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={wallet} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" alt="pic of a wallet" />
                        </motion.div>}
                        {countScrollPosition >= 3 && <motion.div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-64px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-56px] border border-gray-800 text-center rounded-full p-4"
                            initial={scrollDirection === "down" ? {opacity: 0} : countScrollPosition === 3 ? {opacity:1}: {}}
                            animate={scrollDirection === "down" ? {opacity: 1} : countScrollPosition === 3 ? {opacity: 0}: {}}
                            transition={{ duration: 0.5 }}
                        >
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={shield} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" alt="pic of a shield" />
                        </motion.div>}
                        {countScrollPosition >= 4 && <motion.div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-96px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-84px] border border-gray-800 text-center rounded-full p-4"
                            initial={scrollDirection === "down" ? {opacity: 0} : countScrollPosition === 4 ? {opacity:1}: {}}
                            animate={scrollDirection === "down" ? {opacity: 1} : countScrollPosition === 4 ? {opacity: 0}: {}}
                            transition={{ duration: 0.5 }}
                        >
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={viking} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" alt="pic of a viking" />
                        </motion.div>}
                        {countScrollPosition >= 5 && <motion.div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-128px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-112px] border border-gray-800 text-center rounded-full p-4"
                            initial={scrollDirection === "down" ? {opacity: 0} : countScrollPosition === 5 ? {opacity:1}: {}}
                            animate={scrollDirection === "down" ? {opacity: 1} : countScrollPosition === 5 ? {opacity: 0}: {}}
                            transition={{ duration: 0.5 }}
                        >
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={sword} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" alt="pic of a sword" />
                        </motion.div>}
                        {countScrollPosition >= 6 && <motion.div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-150px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-140px] border border-gray-800 text-center rounded-full p-4"
                            initial={scrollDirection === "down" ? {opacity: 0} : countScrollPosition === 6 ? {opacity:1}: {}}
                            animate={scrollDirection === "down" ? {opacity: 1} : countScrollPosition === 6 ? {opacity: 0}: {}}
                            transition={{ duration: 0.5 }}
                        >
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={beer} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" alt="pic of a glass of beer" />
                        </motion.div>}
                    </div>

                    <div className="border border-gray-800 p-8 rounded-lg mt-4 text-white">
                        {countScrollPosition === 1 && <motion.p className="font-bold text-xl sm:text-2xl lg:text-4xl">
                            {"Barbara".split('').map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.1, delay: index * 0.05 }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.p>}
                        {countScrollPosition === 2 && <motion.p className="font-bold text-xl sm:text-2xl lg:text-4xl relative">
                            Rhabarberkuchen
                            <motion.span className="absolute text-purple-400"
                                initial={{ left: "5px", opacity: 0.5 }}
                                animate={{ left: "auto", opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >barbara</motion.span>
                        </motion.p>}

                        {countScrollPosition >= 3 && <motion.p className="font-bold text-xl sm:text-2xl lg:text-4xl relative">
                            <motion.span className="tex-white"
                                animate={{ color: "#c084fc" }}
                                transition={{ delay: 0.3, duration: 0.2 }}
                            >
                                Rhabarber
                            </motion.span>
                            <motion.span
                                animate={{ opacity: 0, position: "absolute" }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                kuchen
                            </motion.span>
                            <motion.span
                                className="relative"
                                animate={{ color: "#c084fc" }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                            >
                                barbara
                            </motion.span>
                            {scrollYProgress.current > 0.45 &&
                                <motion.span
                                    animate={ scrollYProgress.current > 0.52 ? {color: "#c084fc"} : {} }
                                    transition={{ duration: 0.2 }}
                                >
                                    {"bar".split('').map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.1, delay: index * 0.05 }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            }

                            {countScrollPosition >= 4 &&
                                <motion.span
                                    animate={ scrollYProgress.current > 0.67 ? {color: "#c084fc"} : {} }
                                    transition={{ duration: 0.2 }}
                                >
                                    {"barbaren".split('').map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.1, delay: index * 0.05 }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            }
                            {countScrollPosition >= 5 &&
                                <motion.span
                                    animate={ scrollYProgress.current > 0.84 ? {color: "#c084fc"} : {} }
                                    transition={{ duration: 0.2 }}
                                >
                                    {"barbier".split('').map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.1, delay: index * 0.05 }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            }
                            {countScrollPosition >= 6 &&
                                <motion.span
                                    animate={ scrollYProgress.current >= 1 ? {color: "#c084fc"} : {} }                                    
                                    transition={{ duration: 0.2 }}
                                >
                                    {"bier".split('').map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.1, delay: index * 0.05 }}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            }
                        </motion.p>}

                    </div>

                </div>

                {/* dummy components */}
                <DummyComponent value={1} scrollDistance={scrollDistance} setCountScrollPosition={setCountScrollPosition} />
                <DummyComponent value={2} scrollDistance={scrollDistance} setCountScrollPosition={setCountScrollPosition} />
                <DummyComponent value={3} scrollDistance={scrollDistance} setCountScrollPosition={setCountScrollPosition} />
                <DummyComponent value={4} scrollDistance={scrollDistance} setCountScrollPosition={setCountScrollPosition} />
                <DummyComponent value={5} scrollDistance={scrollDistance} setCountScrollPosition={setCountScrollPosition} />
                <DummyComponent value={6} scrollDistance={scrollDistance} setCountScrollPosition={setCountScrollPosition} />
            </div>
        </>
    )
}
export default AboutGermans;

