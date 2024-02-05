import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import MyCard from "./Card";
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
          <ul>
            <li>
              {/* <MyCard
                img="object"
                alt="gay"
                title="C++"
                desc="I have worked with C++ before"
              ></MyCard> */}
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="../assets/python.png"
                    alt="alt"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      desc
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        );
      case "frontend":
        return (
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Vue.js</li>
          </ul>
        );
      case "backend":
        return (
          <ul>
            <li>Node.js</li>
            <li>Django</li>
            <li>Spring Boot</li>
          </ul>
        );
      case "DevOps":
        return (
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Jenkins</li>
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
