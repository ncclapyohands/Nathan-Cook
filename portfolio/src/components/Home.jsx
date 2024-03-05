import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Journey from "./Journey";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Introduction />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Footer />
    </div>
  );
}
