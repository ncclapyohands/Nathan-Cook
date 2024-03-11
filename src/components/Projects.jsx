import Project from "./Project";
import "../styling/project.css";
import LinkedOut from "../assets/linkedOut.png";
import FlappyBird from "../assets/flappyBird.png";
import PokeAPI from "../assets/Poke-API.png";
import LOTRAPI from "../assets/middle-earth.jpg";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="title-container">
        <h2>&lt;</h2>
        <h2 data-aos="slide-left" className="title">
          Projects
        </h2>
        <h2
          data-aos="slide-left"
          data-aos-duration="1500"
          className="title-lag"
        >
          &nbsp;&#47;&gt;
        </h2>
      </div>
      <ul className="projects">
        <li>
          <Project
            img={LinkedOut}
            alt="linked out page"
            title="LinkedOut"
            desc="LinkedOut was my first full stack development project. Utilized MongoDB, Express, React, and NodeJS. There is a user authentication, feed, and a connections page. "
            link="https://github.com/byui-wdd430/professional-network-ncclapyohands"
          />
        </li>
        <li>
          <Project
            img={FlappyBird}
            alt="flappy bird game"
            title="Flappy Bird"
            desc="A game I created in Java. This project was meant to challenge me in a new language. It includes levels that vary in speed."
            link="https://github.com/ncclapyohands/FlappyBird"
          />
        </li>
        <li>
          <Project
            img={PokeAPI}
            alt="Pokemon Battle Field!"
            title="PokeAPI"
            desc="Coordinated group project to create a pokemon battle arena written completely in Javascript. Battle music provided."
            link="https://github.com/Tanner221/LOTR_API"
          />
        </li>
        <li>
          <Project
            img={LOTRAPI}
            alt="Map of Middle Earth"
            title="LOTR_API"
            desc="Worked in a backend team to develop an API for a frontend team. The NodeJS API was used for a map of Middle Earth. Utilized tools such as Swagger, MongoDB, and Rest."
            link="https://github.com/Tanner221/LOTR_API"
          />
        </li>
      </ul>
    </div>
  );
}
