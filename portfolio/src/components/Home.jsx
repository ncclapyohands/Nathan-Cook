import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Journey from "./Journey";
import Introduction from "./Introduction";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Introduction />
      <About />
      <Skills />
      <Journey />
    </div>
  );
}
