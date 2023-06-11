import { motion } from "framer-motion";

const logoVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const Logo = () => {
  return (
    <>
      <motion.div variants={logoVariants} initial="hidden" animate="visible">
        marroos
      </motion.div>
    </>
  );
};

export default Logo;
