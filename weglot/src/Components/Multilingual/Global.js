import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import flags from "../../assets/flags.png";
const Global = () => {
    return (
        <div className="text-white px-4 pt-12 md:px-8 w-full sm:w-[80%] mx-auto relative lg:flex gap-4">
            <div className = "lg:w-1/2">
                <motion.div
                    initial={{ opacity: 0, top: "15px" }}
                    whileInView={{ opacity: 1, top: "0px" }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-4"
                >
                    <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
                        Go Global with <span className="green">Weglot</span>!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, top: "15px" }}
                    whileInView={{ opacity: 1, top: "0px" }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-4 text-left"
                >
                    <p>
                        With Weglot, you can launch your website in multiple languages instantly. Simply select the languages you want and Weglot translates and displays your website content in minutes. Say goodbye, adios and ciao to multiple websites for different markets and hello, bonjour, olá to Weglot and your global web presence.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, top: "15px" }}
                    whileInView={{ opacity: 1, top: "0px" }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-4 text-left"
                >
                    <button outline className="flex gap-2 items-center p-[14px] border-4 border-[#41d673] rounded-[10px] green hover:opacity-80">
                        <span className="inline-block">Try Weglot for Free</span>
                        <FaArrowRightLong className="ml-2 h-5 w-5" />
                    </button>
                </motion.div>
            </div>
            <div className = "hidden md:block lg:w-1/2">
                <img src = {flags} alt="flags of countries" />
            </div>
        </div>
    )
}
export default Global;