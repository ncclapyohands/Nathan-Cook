import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

import MyCard from "./Card";
export default function Skills() {
  const [alignment, setAlignment] = useState("languages");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const renderList = () => {
    switch (alignment) {
      case "languages":
        return (
          <ul className="cards">
            <li>
              <MyCard
                img="/src/assets/c++.png"
                alt="C++ Logo"
                title="C++"
                desc="I have worked with C++ before"
              />
            </li>
            <li>
              <MyCard
                img="/src/assets/python.png"
                alt="Python Logo"
                title="Python"
                desc="I have worked with Python before"
              />
            </li>
            <li>
              <MyCard
                img="/src/assets/java.svg"
                alt="Java Logo"
                title="Java - 2 Years"
                desc="I have worked with Java before"
              />
            </li>
          </ul>
        );
      case "frontend":
        return (
          <ul>
            <li>
              <MyCard
                img="/src/assets/HTML5.svg"
                alt="HTML Logo"
                title="HTML 5"
                desc="I have worked with HTML before"
              />
            </li>
            <li>
              <MyCard
                img="/src/assets/css.svg"
                alt="CSS logo"
                title="CSS"
                desc="I have worked with CSS before"
              />
            </li>
            <li>
              <MyCard
                img="/src/assets/react.svg"
                alt="React Logo"
                title="React"
                desc="I have worked with HTML before"
              />
            </li>
            <li>
              <MyCard
                img="/src/assets/vite.svg"
                alt="Vite Logo"
                title="Vite"
                desc="I have worked with Vite before"
              />
            </li>
          </ul>
        );
      case "backend":
        return (
          <ul>
            <li>
              <MyCard
                img="/src/assets/nodejs.svg"
                alt="Node.JS Logo"
                title="Node.js"
                desc="I have worked with Node.JS before"
              />
            </li>
            <li>
              <MyCard
                img="/src/assets/mongodb.svg"
                alt="MongoDB Logo"
                title="Node.js"
                desc="Worked in Mongoose and MongoDB Compass"
              />
            </li>
            <li>
              <MyCard
                img="/src/assets/firebase.svg"
                alt="Firebase Logo"
                title="Firebase"
                desc="I have worked with Firebase before"
              />
            </li>
          </ul>
        );
      case "DevOps":
        return (
          <ul>
            <li>
              <MyCard
                img="/src/assets/docker.svg"
                alt="Docker Logo"
                title="Docker"
                desc="I have worked with Docker before"
              />
            </li>
            <li>
              <MyCard
                img="/src/assets/kubernetes.svg"
                alt="Kubernetes Logo"
                title="Kubernetes"
                desc="I have worked with Kubernetes before"
              />
            </li>
            <li>
              <MyCard
                img="/src/assets/terraform.svg"
                alt="Terraform Logo"
                title="Terraform"
                desc="I have worked with Terraform before"
              />
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <section className="container">
        <h2>Skills</h2>
        <p>Jack of all trades, master of none</p>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="languages">Languages</ToggleButton>
          <ToggleButton value="frontend">Frontend</ToggleButton>
          <ToggleButton value="backend">Backend</ToggleButton>
          <ToggleButton value="DevOps">DevOps</ToggleButton>
        </ToggleButtonGroup>
      </section>

      {renderList()}
    </div>
  );
}
