// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-sky-50 dark:bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="border-t border-gray-800 mb-12 mx-auto max-w-7xl"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div variants={itemVariants} className="text-center mb-4">
          <h2 className="text-sm font-bold text-gray-900 dark:text-gray-50">
            © 2025 Channy Sok
          </h2>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
