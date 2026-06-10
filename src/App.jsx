import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Showreel from "./components/Showreel";
import Portfolio from "./components/Portfolio";
// import BeforeAfter from './components/BeforeAfter'
import Services from "./components/Services";
// import Testimonials from './components/Testimonials'
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Subtle radial gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/3 rounded-full blur-[100px]" />
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Showreel />
          <div className="section-divider" />
          <Portfolio />
          {/* <div className="section-divider" />
        <BeforeAfter /> */}
          <div className="section-divider" />
          <Services />
          {/* <div className="section-divider" />
        <Testimonials /> */}
          <div className="section-divider" />
          <Resume />
          <div className="section-divider" />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
