import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styling/skills.css";
import C from "../assets/c++.png";
import PythonImg from "../assets/python.png";
import Java from "../assets/java.svg";
import HTML from "../assets/HTML5.svg";
import CSS from "../assets/css.svg";
import ReactImg from "../assets/react.svg";
import Vite from "../assets/vite.svg";
import MongoDb from "../assets/mongodb.svg";
import NodeJS from "../assets/nodejs.svg";
import Firebase from "../assets/firebase.svg";
import Kubernetes from "../assets/kubernetes.svg";
import Docker from "../assets/docker.svg";
import Terraform from "../assets/terraform.svg";

import Skill from "./Skill";
export default function Skills() {
  const [alignment, setAlignment] = useState("languages");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const theme = createTheme({
    palette: {
      blue: {
        main: "#03045e",
      },
    },
  });

  const renderList = () => {
    switch (alignment) {
      case "languages":
        return (
          <ul className="cards">
            <li>
              <Skill img={C} alt="C++ Logo" />
            </li>
            <li>
              <Skill img={PythonImg} alt="Python Logo" />
            </li>
            <li>
              <Skill img={Java} alt="Java Logo" />
            </li>
          </ul>
        );
      case "frontend":
        return (
          <ul className="cards">
            <li>
              <Skill img={HTML} alt="HTML Logo" />
            </li>
            <li>
              <Skill img={CSS} alt="CSS logo" />
            </li>
            <li>
              <Skill img={ReactImg} alt="React Logo" />
            </li>
            <li>
              <Skill img={Vite} alt="Vite Logo" />
            </li>
          </ul>
        );
      case "backend":
        return (
          <ul className="cards">
            <li>
              <Skill img={MongoDb} alt="MongoDB Logo" />
            </li>
            <li>
              <Skill img={NodeJS} alt="Node.JS Logo" />
            </li>
            <li>
              <Skill img={Firebase} alt="Firebase Logo" />
            </li>
          </ul>
        );
      case "DevOps":
        return (
          <ul className="cards">
            <li>
              <Skill img={Kubernetes} alt="Kubernetes Logo" />
            </li>
            <li>
              <Skill img={Docker} alt="Docker Logo" />
            </li>
            <li>
              <Skill img={Terraform} alt="Terraform Logo" />
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="skills-container">
      <section className="skills-button-container">
        <div className="title-container-outer">
          <div className="title-container">
            <h2>&lt;</h2>
            <h2 data-aos="slide-left" className="title">
              Skills
            </h2>
            <h2
              data-aos="slide-left"
              data-aos-duration="1500"
              className="title-lag"
            >
              &nbsp;&#47;&gt;
            </h2>
          </div>
        </div>

        <ThemeProvider theme={theme}>
          <ToggleButtonGroup
            color="blue"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className="button-group"
          >
            <ToggleButton value="languages">Languages</ToggleButton>
            <ToggleButton value="frontend">Frontend</ToggleButton>
            <ToggleButton value="backend">Backend</ToggleButton>
            <ToggleButton value="DevOps">DevOps</ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
      </section>

      {renderList()}
    </div>
  );
}
