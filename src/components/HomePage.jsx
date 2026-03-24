import { FaDownload, FaCode } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { buttonVariants } from "../variants";
import Navbar from "./Navbar";
import About from "../pages/About";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect, useMemo, useRef } from "react";
import RINGS from "vanta/dist/vanta.rings.min";
import * as THREE from "three"; 

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) return JSON.parse(savedMode);
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
  if (!vantaEffect && typeof window !== "undefined") {
    const effect = RINGS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: darkMode ? 0x111827 : 0xf8fafc,
      color: darkMode ? 0x3b82f6 : 0x2563eb,
    });
    setVantaEffect(effect);
  }

  return () => {
    if (vantaEffect) vantaEffect.destroy();
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []); 


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }

    // Update Vanta.js colors when dark mode changes
    if (vantaEffect) {
      vantaEffect.setOptions({
        backgroundColor: darkMode ? 0x111827 : 0xf8fafc,
        color: darkMode ? 0x3b82f6 : 0x2563eb
      });
    }
  }, [darkMode, vantaEffect]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const texts = useMemo(() => ["Portfolio!", "Website!"], []);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentText = texts[currentIndex % texts.length];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
          setTypingSpeed(50);
        }, 1000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, typingSpeed);
      } else {
        setIsTyping(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setTypingSpeed(150);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isTyping, typingSpeed, texts]);

  return (
    <div className="dark:bg-gray-900">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Vanta.js background - only for the home section */}
        <div
          ref={vantaRef}
          className="absolute top-0 left-0 w-full h-full z-0"
        ></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:whitespace-nowrap">
                Welcome to my{" "}
                <span className="text-green-600 dark:text-primary-400">
                  {displayText}
                  <span className="animate-pulse text-gray-900 dark:text-sky-50">
                    |
                  </span>
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                I'm{" "}
                <span className="text-primary-600 dark:text-primary-400">
                  Channy.
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                Front-End Developer | UI/UX Designer
              </p>

              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                I create beautiful, functional websites and applications with a
                focus on user experience and clean code. Currently specializing
                in React and modern JavaScript frameworks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <a
                    href="https://www.canva.com/design/DAG3OoYWY1g/fCgVmn_3J7UYYiwi-_lxZg/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <IoEyeOutline className="mr-2" />
                    View my Resume
                  </a>
                </motion.button>

                <motion.a
                  href="#projects"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-white hover:text-black dark:text-primary-400 dark:border-primary-400 font-medium rounded-lg transition-all duration-300 hover:bg-amber-50 bg-gray-800 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View Projects
                  <FiArrowRight className="ml-2" />
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-4 opacity-80">
                <div className="text-3xl text-gray-500 transition-colors">
                  <FaCode title="Coding" />
                </div>
                <div className="text-3xl text-blue-600 transition-colors">
                  <FaReact title="React" />
                </div>
                <div className="text-3xl text-amber-700 transition-colors">
                  <FaHtml5 title="HTML5" />
                </div>
                <div className="text-3xl text-blue-500 transition-colors">
                  <FaCss3Alt title="CSS3" />
                </div>
                <div className="text-3xl text-purple-600 transition-colors">
                  <FaBootstrap title="Bootstrap" />
                </div>
                <div className="text-3xl text-sky-400 transition-colors">
                  <RiTailwindCssFill title="Tailwind CSS" />
                </div>
                <div className="text-3xl text-yellow-300 transition-colors">
                  <SiJavascript title="JavaScript" />
                </div>
                <div className="text-3xl text-green-500 hover:text-green-600 transition-colors">
                  <FaNodeJs title="Node.js" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md ">
                <img
                  src="channy-dev.png"
                  alt="Sok Channy - Developer"
                  className="rounded-full shadow-2xl dark:shadow-lg w-full h-auto max-w-xs md:max-w-sm mx-auto lg:mx-0 dark:backdrop-blur-2xl "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;