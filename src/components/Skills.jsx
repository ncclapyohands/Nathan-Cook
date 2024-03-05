import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styling/skills.css";

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
              <Skill img="/src/assets/c++.png" alt="C++ Logo" />
            </li>
            <li>
              <Skill img="/src/assets/python.png" alt="Python Logo" />
            </li>
            <li>
              <Skill img="/src/assets/java.svg" alt="Java Logo" />
            </li>
          </ul>
        );
      case "frontend":
        return (
          <ul className="cards">
            <li>
              <Skill img="/src/assets/HTML5.svg" alt="HTML Logo" />
            </li>
            <li>
              <Skill img="/src/assets/css.svg" alt="CSS logo" />
            </li>
            <li>
              <Skill img="/src/assets/react.svg" alt="React Logo" />
            </li>
            <li>
              <Skill img="/src/assets/vite.svg" alt="Vite Logo" />
            </li>
          </ul>
        );
      case "backend":
        return (
          <ul className="cards">
            <li>
              <Skill img="/src/assets/mongodb.svg" alt="MongoDB Logo" />
            </li>
            <li>
              <Skill img="/src/assets/nodejs.svg" alt="Node.JS Logo" />
            </li>
            <li>
              <Skill img="/src/assets/firebase.svg" alt="Firebase Logo" />
            </li>
          </ul>
        );
      case "DevOps":
        return (
          <ul className="cards">
            <li>
              <Skill img="/src/assets/kubernetes.svg" alt="Kubernetes Logo" />
            </li>
            <li>
              <Skill img="/src/assets/docker.svg" alt="Docker Logo" />
            </li>
            <li>
              <Skill img="/src/assets/terraform.svg" alt="Terraform Logo" />
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
        <h2>Skills</h2>
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
