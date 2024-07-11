
import { motion } from "framer-motion";
import { MdOpacity } from "react-icons/md";

const animations = {
    initial: {opacity:0, x:100},
    animate: { opacity:1, x:0},
    exit: {opacity:0, x:-100},
}

const AnimationPage = ({children}) =>
{
    return(
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit">





           { children}
        </motion.div>

    )

}
export default AnimationPage

