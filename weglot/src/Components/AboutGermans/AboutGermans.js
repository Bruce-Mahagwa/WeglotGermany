import { motion } from "motion/react";
import sword from "../../assets/sword.jpg";
import woman from "../../assets/woman.jpg";
import shield from "../../assets/shield.png";
import viking from "../../assets/viking.jpg";
import wallet from "../../assets/wallet.png";
import beer from "../../assets/beer.jpg";
import { FaPlus } from "react-icons/fa6";

const AboutGermans = () => {
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

            <div className="w-full px-4 md:px-8 pt-12 pb-8 h-[600vh] relative border-4 border-red">
                <div className = "sticky min-h-screen top-0">
                    <div className="w-full flex flex-col items-center md:flex-row">
                        <div className="w-32 h-32 flex items-center items-center lg:w-48 lg:h-48 border border-gray-800 text-center rounded-full p-4">
                            <img src={woman} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto" />
                        </div>
                        <div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-32px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-28px] border border-gray-800 text-center rounded-full p-4">
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={wallet} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" />
                        </div>
                        <div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-64px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-56px] border border-gray-800 text-center rounded-full p-4">
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={shield} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" />
                        </div>
                        <div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-96px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-84px] border border-gray-800 text-center rounded-full p-4">
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={viking} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" />
                        </div>
                        <div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-128px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-112px] border border-gray-800 text-center rounded-full p-4">
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={sword} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" />
                        </div>
                        <div className="w-32 h-32 flex flex-col gap-4 items-center relative top-[-150px] lg:w-48 lg:h-48 md:flex-row md:top-0 md:left-[-140px] border border-gray-800 text-center rounded-full p-4">
                            <FaPlus className="inline-block md:absolute text-gray-500" />
                            <img src={beer} className="rounded-full w-1/2 h-1/2 md:w-3/4 md:h-3/4 mx-auto md:justify-self-center" />
                        </div>
                    </div>

                    <div className="border border-gray-800 p-8 rounded-lg mt-8 text-white">
                        <p>Here I am</p>
                    </div>

                    <div className="border border-gray-800 p-8 rounded-lg mt-8 text-white">
                        <p>Here I am</p>
                    </div>
                    <div className="border border-gray-800 p-8 rounded-lg mt-8 text-white">
                        <p>Here I am</p>
                    </div>

                    <div className="border border-gray-800 p-8 rounded-lg mt-8 text-white">
                        <p>Here I am</p>
                    </div>
                    <div className="border border-gray-800 p-8 rounded-lg mt-8 text-white">
                        <p>Here I am</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutGermans;