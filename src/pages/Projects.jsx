// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";
import { fadeIn, cardVariants } from "../variants";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cafe's Shop E-commerce",
      description:
        "A full-featured for Cafe and Snacks's Store with product catalog, cart functionality, and secure checkout process. (In Progress)",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      demoUrl: "https://cafe-ecommerce-9mld-dehxw821g-channys-projects-7edf10bf.vercel.app",
      githubUrl: "https://github.com/ChannySok/Cafe-Ecommerce", 
      image: "/images/project1.jpg", 
      status: "in-progress"
    },
    {
      id: 2,
      title: "Lunara Skincare Store",
      description:
        "Skincare e-commerce store with product catalog, shopping cart, and responsive design.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      demoUrl: "https://lunara-skincare-store-tes1.vercel.app",
      githubUrl: "https://github.com/ChannySok/LunaraSkincareStore", 
      image: "/images/lunaraSS.jpg", 
      status: "completed"
    },
  ];

  const handleViewDemo = (url, title, event) => {
    event.preventDefault(); 
    event.stopPropagation(); 
    
    if (!url || url === "#" || url === "") {
      alert(`🚧 "${title}" demo is not available yet!\n\nThis project is still in development. Please check back soon!`);
      return;
    }
    
    try {
      // Validate URL
      const validatedUrl = new URL(url);
      window.open(validatedUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Invalid URL:', error);
      alert(`❌ The demo link for "${title}" is not configured properly.\n\nURL: ${url}`);
    }
  };

  const handleViewCode = (url, title, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (!url || url === "#" || url === "") {
      alert(`🔒 The source code for "${title}" is not publicly available yet.`);
      return;
    }
    
    try {
      const validatedUrl = new URL(url);
      window.open(validatedUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Invalid URL:', error);
      alert(`❌ The code repository for "${title}" is not configured properly.\n\nURL: ${url}`);
    }
  };

  // Fallback image component
  const ProjectImage = ({ image, title }) => {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // If image fails to load, show fallback
              e.target.style.display = 'none';
              const fallback = e.target.parentElement.querySelector('.image-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="image-fallback hidden flex-col items-center justify-center text-gray-400 dark:text-gray-500">
          <FiCode className="text-4xl mb-2" />
          <span className="text-sm">Project Image</span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 bg-sky-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My{" "}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve
            specific problems and improve my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                <ProjectImage image={project.image} title={project.title} />
                
                {/* Status Badge */}
                {!project.demoUrl && (
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full shadow-lg">
                      Coming Soon
                    </span>
                  </div>
                )}
                {project.demoUrl && (
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full shadow-lg">
                      Live Demo
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={(e) => handleViewDemo(project.demoUrl, project.title, e)}
                    className={`flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 flex-1 ${
                      project.demoUrl 
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow hover:shadow-md cursor-pointer" 
                        : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-80"
                    }`}
                    disabled={!project.demoUrl}
                  >
                    <FiExternalLink className="mr-2" />
                    {project.demoUrl ? "Live Demo" : "Coming Soon"}
                  </button>
                  
                  <button
                    onClick={(e) => handleViewCode(project.githubUrl, project.title, e)}
                    className={`flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 flex-1 border ${
                      project.githubUrl 
                        ? "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer" 
                        : "border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-80"
                    }`}
                    disabled={!project.githubUrl}
                  >
                    <FiGithub className="mr-2" />
                    Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          {/* <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              💡 <strong>Note:</strong> Some projects are still in development. 
              Live demos and source code will be available soon!
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
