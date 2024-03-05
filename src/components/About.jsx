import { useEffect } from "react";
import "../styling/about.css"; // Add your styles in AboutMe.css
import Teton7 from "../assets/teton7.jpeg";
import Runner2 from "../assets/4r2.jpeg";
import Runner3 from "../assets/4r3.jpeg";
import Runner4 from "../assets/4r4.jpeg";
import Carter from "../assets/carter.jpg";
import NateAndBent from "../assets/n8b.jpeg";
import Waterfall from "../assets/waterfall1.jpeg";
import Teton6 from "../assets/teton6.jpeg";
//import PuretoRico from "../assets/puretorico2.jpg";
import Teton8 from "../assets/teton8.jpeg";
import PuertoRico4 from "../assets/Pr4.jpeg";

const About = () => {
  useEffect(() => {
    let scroll = document.querySelectorAll(".scroll");

    function addAnimation() {
      scroll.forEach((scroll) => {
        const scrollInner = scroll.querySelector(".scroll-inner");
        const scrollContent = Array.from(scrollInner.children);

        scrollContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollInner.appendChild(duplicatedItem);
        });
      });
    }
    addAnimation();
  });
  return (
    <section className="about-me">
      <div className="am-container">
        <h2>About Me</h2>
        <p>
          Hi there! My name is Nate, and I am a passionate software engineer.
          Ever since middle school, I have been dedicated to learning the world
          of technology. Whether that is general programming, web development,
          computer engineering, or even networking, my curiosity always seems to
          get the better of me. Currently, I am studying for my CCNA!
        </p>
        <p>
          In my free time, I enjoy playing spikeball, overlanding, and working
          on my car. My weekends are often spent outside or socializing with
          friends. I also really enjoy talking about evolving technologies such
          as quantum computing and nuclear energy (though, I am no expert).
        </p>
      </div>
      <div className="scroll">
        <div id="img-track" className="scroll-inner">
          <img className="image" src={Teton7} alt="Tetons" draggable="false" />
          <img
            className="image"
            src={Runner2}
            alt="4runner2"
            draggable="false"
          />
          <img
            className="image"
            src={Runner3}
            alt="4runner3"
            draggable="false"
          />
          <img
            className="image"
            src={Runner4}
            alt="4runner4"
            draggable="false"
          />
          <img
            className="image"
            src={Carter}
            alt="bruther carter"
            draggable="false"
          />
          <img
            className="image"
            src={NateAndBent}
            alt="bentley my cusin"
            draggable="false"
          />
          <img className="image" src={Waterfall} alt="fam" draggable="false" />
          <img className="image" src={Teton6} alt="lincoln" draggable="false" />
          {/* <img
            className="image"
            src={PuretoRico}
            alt="pr squad"
            draggable="false"
          /> */}
          <img className="image" src={Teton8} alt="Tetons!" draggable="false" />
          <img
            className="image"
            src={PuertoRico4}
            alt="pr squad line-up"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
