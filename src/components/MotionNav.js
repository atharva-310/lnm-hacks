
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
export default function MotionNav() {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 , delay: 0.5}}
    >
        <Navbar />
    </motion.div>
  );
}
