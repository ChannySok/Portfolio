import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
<>
      <nav>
        <Navbar />
      </nav>

      <main>
        <HomePage />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>


      </>
  );
};

export default App;