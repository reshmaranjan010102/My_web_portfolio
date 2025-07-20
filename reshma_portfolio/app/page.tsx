import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import "./customStyles/buttons.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}
