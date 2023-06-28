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
    <motion.p
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      className="logo_color"
    >
      marroos
    </motion.p>
  );
};

export default Logo;
