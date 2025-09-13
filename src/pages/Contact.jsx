import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaFacebook, FaTelegram } from "react-icons/fa";
import emailjs from "emailjs-com";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { containerVariants, listItem, cardVariants } from "../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        "service_13ic5fn",
        "template_sgepxp9",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "iM1y9lgZNJqNCY7m8"
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-sky-50 dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" variants={listItem}>
          <h2 className="text-5xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get in{" "}
            <motion.span
              className="text-blue-600 dark:text-blue-400"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Touch
            </motion.span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div className="lg:w-1/2 w-full" variants={cardVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              {isSubmitted && (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
                >
                  Thank you! Your message has been sent. I'll get back to you
                  soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg"
                >
                  {error}
                </motion.div>
              )}

              <motion.div className="mb-6" variants={listItem}>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your Name"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              {/* Email must Field */}
              <motion.div className="mb-6" variants={listItem}>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              {/* Message must Field */}
              <motion.div className="mb-6" variants={listItem}>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your message here..."
                  whileFocus={{ scale: 1.01 }}
                ></motion.textarea>
              </motion.div>

              {/* Submit Btn */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={listItem}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          <motion.div className="lg:w-1/2 w-full" variants={cardVariants}>
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div className="flex items-start" variants={listItem}>
                  <motion.div
                    className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <FiMail className="text-blue-600 dark:text-blue-300 text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                      Email
                    </h4>
                    <motion.a
                      href="mailto:channysok.secret2003@gmail.com"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      channysok.secret2003@gmail.com
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={listItem}>
                  <motion.div
                    className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <FiPhone className="text-blue-600 dark:text-blue-300 text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                      Phone
                    </h4>
                    <motion.a
                      href="tel:+855965127003"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      +855 96 512 7003
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div className="flex items-start" variants={listItem}>
                  <motion.div
                    className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <FiMapPin className="text-blue-600 dark:text-blue-300 text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                      Location
                    </h4>
                    <motion.p
                      className="text-gray-800 dark:text-gray-200"
                      whileHover={{ x: 5 }}
                    >
                      ChamKar Doung, Phnom Penh, Cambodia
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              <motion.div className="mt-12" variants={listItem}>
                <h4 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">
                  CONNECT WITH ME
                </h4>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <FaLinkedin />,
                      href: "https://www.linkedin.com/in/sok-channy-6377a728a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                      label: "LinkedIn",
                    },
                    {
                      icon: <FaGithub />,
                      href: "https://github.com/ChannySok",
                      label: "GitHub",
                    },
                    {
                      icon: <FaFacebook />,
                      href: "https://web.facebook.com/channysok24",
                      label: "Facebook",
                    },
                    {
                      icon: <FaTelegram />,
                      href: "https://t.me/channy_sok24",
                      label: "Telegram",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label={social.label}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
