import { motion } from "motion/react";
import SmallScreenTest from "./SmallScreenTest";
const GermamTest = () => {
    return (
        <div className="text-white px-4 pt-40 md:px-8 w-full mt-12 sm:w-[80%] mx-auto">
            {/* intro */}
            <div>
                <motion.div
                    initial={{ opacity: 0, top: "15px" }}
                    whileInView={{ opacity: 1, top: "0px" }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-4"
                >
                    <p className="text-xl md:text-left sm:text-2xl md:text-4xl lg:text-6xl">Sometimes even Germans <span className="red">don't understand</span> their own language</p>
                </motion.div>
                <div>
                    <h4 className = "font-bold mb-2">Up for a little test?</h4>
                    <p className = "hidden lg:block">Drag and drop the correct word into the right field.</p>
                    <p className = "lg:hidden">Click on the correct option that matches the word</p>
                </div>
            </div>
            {/* intro */}

            <div>
                <SmallScreenTest />
            </div>
        </div>
    )
}
export default GermamTest;