import Project from "./Project";
import "../styling/project.css";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <ul className="projects">
        <li>
          <Project
            img="/src/assets/linkedOut.png"
            alt="linked out page"
            title="LinkedOut"
            desc="LinkedOut was my first full stack development project. Utilized MongoDB, Express, React, and NodeJS."
            link="https://github.com/byui-wdd430/professional-network-ncclapyohands"
          />
        </li>
        <li>
          <Project
            img="/src/assets/flappyBird.png"
            alt="flappy bird game"
            title="Flappy Bird"
            desc="A game I created in Java. This project was meant to challenge me in a new language. It includes levels that vary in speed."
            link="https://github.com/ncclapyohands/FlappyBird"
          />
        </li>
        <li>
          <Project
            img="/src/assets/Poke-API.png"
            alt="Pokemon Battle Field!"
            title="PokeAPI"
            desc="Cordinated group project to create a pokemon battle arena written completely in Javascript. Music provided."
            link="https://github.com/Tanner221/LOTR_API"
          />
        </li>
        <li>
          <Project
            img="/src/assets/middle-earth.jpg"
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