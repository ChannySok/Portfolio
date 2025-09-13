// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  cardVariants,
  imageVariants,
  textVariants,
} from "../variants";
import { FaBriefcase, FaGraduationCap, FaLanguage } from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-sky-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full lg:w-1/3 flex flex-col items-center"
          >
            <div className="hidden lg:flex flex-col gap-5 w-full">
              <div className="relative group max-w-xs mx-auto">
                <div className="absolute -inset-2 bg-none group-hover:opacity-100 transition-all duration-300"></div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={imageVariants}
                  className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="uss.jpg"
                    alt="Teamwork"
                    className="relative rounded-2xl w-full h-auto border-4 border-white dark:border-gray-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>
              <div className="relative group max-w-xs mx-auto">
                <div className="absolute -inset-2 bg-none group-hover:opacity-100 transition-all duration-300"></div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideInFromRight}
                  className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="Rupp.jpg"
                    alt="RUPP"
                    className="relative rounded-2xl w-full h-auto border-4 border-white dark:border-gray-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>
              <div className="relative group max-w-xs mx-auto">
                <div className="absolute -inset-2 bg-none group-hover:opacity-100 transition-all duration-300"></div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideInFromLeft}
                  className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="graduatedlvl12.jpg"
                    alt="Graduation Level 12"
                    className="relative rounded-2xl w-full h-auto border-4 border-white dark:border-gray-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>
              <div className="relative group max-w-xs mx-auto">
                <div className="absolute -inset-2 bg-none group-hover:opacity-100 transition-all duration-300"></div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideInFromRight}
                  className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="Graduationday.jpg"
                    alt="Graduation Day"
                    className="relative rounded-2xl w-full h-auto border-4 border-white dark:border-gray-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>
            </div>

            <div className="lg:hidden flex flex-wrap justify-center gap-4 mb-6">
              <div className="relative group w-[45%] max-w-xs">
                <div className="absolute -inset-2 bg-none rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideInFromRight}
                  className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="Rupp.jpg"
                    alt="Teamwork"
                    className="relative rounded-2xl w-full h-auto border-4 border-white dark:border-gray-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>
              <div className="relative group w-[45%] max-w-xs">
                <div className="absolute -inset-2 bg-none group-hover:opacity-100 transition-all duration-300"></div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideInFromLeft}
                  className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="uss.jpg"
                    alt="RUPP"
                    className="relative rounded-2xl w-full h-auto border-4 border-white dark:border-gray-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-2/3 w-full">
            {/* Section Title */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
            >
              <span className="text-blue-600 dark:text-blue-400">
                Experiences
              </span>{" "}
              and
              <span className="text-blue-600 dark:text-blue-400">
                {" "}
                Education
              </span>
            </motion.h2>

            {/* Personal Intro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
              className="mb-10"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Hi, I'm{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Sok Channy
                </span>
                , a passionate web developer from Cambodia with expertise in
                building modern web applications. I love transforming ideas into
                digital experiences that are both beautiful and functional. With
                a strong foundation in frontend technologies and a continuous
                learning mindset, I strive to create solutions that make a real
                impact.
              </p>
            </motion.div>

            {/* Experiences */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-10"
            >
              <h3 className="flex items-center text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                <FaBriefcase className="mr-3 text-blue-600 dark:text-blue-400" />
                Professional Experience
              </h3>

              <div className="space-y-6">
                {/* Experience Item 1 */}
                <div className="relative pl-8 pb-6 border-l-2 border-blue-200 dark:border-gray-700 group">
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Frontend Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    TechHub Cambodia • 2022–Present
                  </p>
                  <p className="text-gray-500 dark:text-gray-300">
                    Developed responsive web applications using React.js and
                    Next.js. Implemented state management with Redux and
                    optimized performance.
                  </p>
                </div>

                {/* Experience Item 2 */}
                <div className="relative pl-8 pb-6 border-l-2 border-blue-200 dark:border-gray-700 group">
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Web Development Intern
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    Digital Solutions Co. • Summer 2021
                  </p>
                  <p className="text-gray-500 dark:text-gray-300">
                    Assisted in building client websites using WordPress and
                    custom HTML/CSS. Collaborated with senior developers on
                    JavaScript functionality.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="lg:hidden w-full flex flex-col items-center my-16">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                <div className="relative group w-[45%] max-w-xs">
                  <div className="absolute -inset-2 bg-none group-hover:opacity-100 transition-all duration-300"></div>
                  <motion.button
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromRight}
                    className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="Graduationday.jpg"
                      alt="Graduation Day"
                      className="relative rounded-2xl w-full h-auto border-4 border-white dark:border-gray-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.button>
                </div>
                <div className="relative group w-[45%] max-w-xs">
                  <div className="absolute -inset-2 bg-none group-hover:opacity-100 transition-all duration-300"></div>
                  <motion.button
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideInFromLeft}
                    className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img
                      src="graduatedlvl12.jpg"
                      alt="Graduation Level 12"
                      className="relative rounded-2xl w-full h-auto border-4 border-white dark:border-gray-800 shadow-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Education & English Classes */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Education */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromLeft}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="flex items-center text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  <FaGraduationCap className="mr-3 text-blue-600 dark:text-blue-400" />
                  Education
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Royal University of Phnom Penh
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      • 2021–2025 : Gradduated.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 mt-1">
                      • Focused on software development, data structures, and
                      web technologies
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 mt-1">
                      • Web Development (HTML, CSS, JavaScript, React.js PHP
                      ...)
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 mt-1">
                      • Database Systems (MySQL, Sql Server...)
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 mt-1">
                      • Software Engineering & Project Management
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 mt-1">
                      • Participated in coding challenges and collaborative
                      assignments to strengthen problem-solving and teamwork
                      skills
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* English Classes */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInFromRight}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="flex items-center text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  <FaLanguage className="mr-3 text-blue-600 dark:text-blue-400" />
                  English Education
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-white">
                      Aii Language Center
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Level 12 (Advanced English)
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      • 2021–2024 : Graduated.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-300">
                      • IELTS Preparation Course
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      • 2025 : Achieved IELTS 6.0
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      • Focusing on listening, writing, Grammar, reading...
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      • Joinning the competition
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      • Collaborating as a teamwork to do the projects or
                      assignment
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      • Joinning the community project to collect the trast at
                      the public places
                    </p>
                    <p className="text-gray-500 dark:text-gray-300">
                      • Doing alot of things and aslo communicate with foriegn
                      teacher
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
