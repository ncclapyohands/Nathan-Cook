import Avatar from "@mui/material/Avatar";
import "../styling/intro.css";
import { useEffect } from "react";
// import { Button } from "@mui/material";
import avatarImg from "../assets/beachpic.png";
import Sun from "../assets/Sun.svg";
import Sailboat from "../assets/Sailboat.svg";
import Volcano from "../assets/Volcano.svg";
// import Resume from "../assets/NathanCookResume.pdf";

export default function Introduction() {
  // const onButtonClick = () => {
  //   const pdfUrl = { Resume };
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "NathanCookResume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
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
        <div className="sun">
          <img src={Sun} alt="the sun!" />
        </div>
        <div className="intro-title">
          <Avatar
            src={avatarImg}
            sx={{ width: 200, height: 200 }}
            className="avatar"
            data-aos="fade-right"
            data-aos-duration="2000"
          ></Avatar>
          <h2
            data-aos="fade-down-left"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            Nathan Cook
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            Recent Software Engineering Graduate from BYU - Idaho. Passion for
            web dev and information technology. Adventurous, spontaneous, and
            dedicated to learning new technologies.
          </p>
          {/* <Button
            onClick={onButtonClick}
            className="intro-button"
            variant="contained"
            data-aos="flip-up"
          >
            Resume
          </Button> */}
        </div>

        <div className="wave" id="wave1" style={{ "--var": 1 }}></div>
        <img
          src={Sailboat}
          alt="its a little red sailboat!"
          className="sailboat"
          id="sailboat"
          style={{ "--var": 5 }}
        />
        <div className="volcano">
          <img src={Volcano} alt="" />
        </div>
        <div className="wave" id="wave2" style={{ "--var": 2 }}></div>
        <div className="wave" id="wave3" style={{ "--var": 3 }}></div>
        <div className="wave" id="wave4" style={{ "--var": 4 }}></div>
      </section>
    </div>
  );
}
