import { motion } from "motion/react";
import IntroSVG from "./IntroSVG";
import { Dropdown } from "flowbite-react";
import exportgraph from "../../assets/exportgraph.png"
import countryranking from "../../assets/countryranking.png"
const Intro = () => {
    return (
        <div className="text-white text-center px-4 pt-40 md:px-8 w-full mt-12 sm:w-[80%] mx-auto">
            <motion.div
                initial={{ opacity: 0, top: "15px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
                    But it would be a shame if our language <span className="green">prevented</span> us from showing the world our great products.
                </p>
            </motion.div>
            <div className="mt-8 language-selector relative">
                <IntroSVG />
                <div className="absolute center_absolute text-white">
                    <Dropdown label="Select Language" placement="bottom" className="bg-[#161616] dropdown">
                        <Dropdown.Item className="dropdown_item text-white font-bold text-base md:text-lg lg:text-xl">German</Dropdown.Item>
                        <Dropdown.Item className="dropdown_item text-white font-bold text-base md:text-lg lg:text-xl">English</Dropdown.Item>
                        <Dropdown.Item className="dropdown_item text-white font-bold text-base md:text-lg lg:text-xl">French</Dropdown.Item>
                        <Dropdown.Item className="dropdown_item text-white font-bold text-base md:text-lg lg:text-xl">Turkish</Dropdown.Item>
                        <Dropdown.Item className="dropdown_item text-white font-bold text-base md:text-lg lg:text-xl">Danish</Dropdown.Item>
                        <Dropdown.Item className="dropdown_item text-white font-bold text-base md:text-lg lg:text-xl">Polish</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, top: "15px" }}
                whileInView={{ opacity: 1, top: "0px" }}
                transition={{ duration: 0.8 }}
                className="relative mt-52 text-left"
            >
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl">
                    After all, what happens when Germany actually <span className="purple">exports?</span>
                </p>
            </motion.div>

            <div className = "mt-32 flex flex-col gap-32 md:flex-row gap-4">
                <div className="border-2 border-gray-700 rounded-xl p-4">
                    <img src={exportgraph} alt="graph of exports" className = "block relative -top-32 md:-top-24" />
                    <motion.div className="mt-4 text-left relative"
                        initial={{ opacity: 0, top: "25px" }}
                        whileInView={{ opacity: 1, top: "-20px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="mb-2 orange text-3xl md:text-5xl font-bold purple">1.3 billion</h1>
                        <p className="text-xs sm:text-base font-bold">exported goods</p>
                    </motion.div>
                </div>
                <div className="border-2 border-gray-700 rounded-xl p-4">
                    <img src={countryranking} alt="graph of country rankings" className = "block relative -top-32 md:-top-24" />
                    <motion.div className="mt-4 text-left relative"
                        initial={{ opacity: 0, top: "25px" }}
                        whileInView={{ opacity: 1, top: "-20px" }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="mb-2 orange text-3xl md:text-5xl font-bold purple">3.</h1>
                        <p className="text-xs sm:text-base font-bold">leading export country</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Intro;