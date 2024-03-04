import Avatar from "@mui/material/Avatar";
import "../styling/intro.css";
import { useEffect } from "react";

export default function Introduction() {
  useEffect(() => {
    let wave1 = document.getElementById("wave1");
    let wave2 = document.getElementById("wave2");
    let wave3 = document.getElementById("wave3");
    let wave4 = document.getElementById("wave4");
    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      wave1.style.backgroundPositionX = value + 400 * 4 + "px";
      wave2.style.backgroundPositionX = value + 500 * -4 + "px";
      wave3.style.backgroundPositionX = value + 300 * 2 + "px";
      wave4.style.backgroundPositionX = value + 600 * -2 + "px";
    });
  });

  return (
    <div>
      <section className="intro">
        <canvas id="sunbeamCanvas"></canvas>
        <div className="intro-title">
          <Avatar
            src="/src/assets/beachpic.png"
            sx={{ width: 200, height: 200 }}
            className="avatar"
          ></Avatar>
          <h2>Nathan Cook</h2>
          <p>
            Recent Software Engineering Graduate from BYU - Idaho. Passion for
            web dev and information technology. Adventurous, spontaneous, and
            dedicated to learning new technologies.
          </p>
        </div>

        <div className="wave" id="wave1" style={{ "--var": 1 }}></div>
        <div className="wave" id="wave2" style={{ "--var": 2 }}></div>
        <div className="wave" id="wave3" style={{ "--var": 3 }}></div>
        <div className="wave" id="wave4" style={{ "--var": 4 }}></div>
      </section>
    </div>
  );
}
