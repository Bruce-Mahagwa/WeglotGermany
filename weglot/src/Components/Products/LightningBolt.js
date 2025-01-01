import { motion } from "motion/react";
import bolt from "../../assets/lightningboltsmall.png";
const LightningBolt = ({lightningBoltScale, lightningBoltTopPosition }) => {
    return (
        <motion.div className="absolute right-0 md:-right-[10px] lg:-right-[25px] top-[5%] rounded-full"
            initial={{ scale: lightningBoltScale }}
            animate={{ scale: lightningBoltScale, top: `${lightningBoltTopPosition}%` }}
            transition={{ duration: 0.5 }}
        >
            {/* lightning bolt */}
            <img src={bolt} alt="image of a lightning bolt" className="w-32 md:w-40 lg:w-52" />
        </motion.div>
    )
}
export default LightningBolt;