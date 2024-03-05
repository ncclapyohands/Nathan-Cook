import Avatar from "@mui/material/Avatar";
import "../styling/intro.css";
import { useEffect } from "react";
import { Button } from "@mui/material";

export default function Introduction() {
  const onButtonClick = () => {
    const pdfUrl = "/src/assets/Nathan Cook Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Nathan Cook Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
    //Raidal Sunbeams
    const canvas = document.getElementById("sunbeamCanvas");
    const ctx = canvas.getContext("2d");

    // Initial canvas size setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Variables
    let config = {
      amountOfBeams: 50,
      minLength: window.innerHeight, // Dynamic based on current window size
      maxLength: Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2), // Hypotenuse
      gradientStartOpacity: 0.4,
      gradientEndOpacity: 0,
      circleRadius: 130, // Radius of the circle representing the sun
      blurStrength: 5,
      fadeInOutTime: 15,
      rotationSpeed: -0.004, // Radians per frame
      lineWidth: 45,
      beamOrigin: { x: canvas.width, y: 0 }, // Adjust as needed for other corners
      beamColor: 0,
    };

    function generateBeams() {
      let beams = [];
      for (let i = 0; i < config.amountOfBeams; i++) {
        let length =
          Math.random() * (config.maxLength - config.minLength) +
          config.minLength;
        let angle = Math.random() * Math.PI * 2;

        // Generate a random width for each beam
        let widthRandomness = Math.random(); // Generate a random number between 0 and 1
        let biasedWidth = widthRandomness * widthRandomness; // Square it to bias towards smaller numbers
        let width =
          biasedWidth * (config.lineWidth - config.lineWidth / 10) +
          config.lineWidth / 10;
        let opacityPhase = Math.random() * Math.PI * 2; // Random phase for each beam

        beams.push({ length, angle, width, opacityPhase });
      }
      return beams;
    }

    let beams = generateBeams();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the sun
      ctx.beginPath();
      ctx.arc(
        config.beamOrigin.x,
        config.beamOrigin.y,
        0,
        Math.PI * 3,

        false
      );

      // Set the fill style to sun gradient
      let sunGradient = ctx.createRadialGradient(
        config.beamOrigin.x,
        config.beamOrigin.y,
        0,
        config.beamOrigin.x,
        config.beamOrigin.y,
        config.circleRadius
      );
      sunGradient.addColorStop(0, "rgba(255, 204, 0, 1)"); // Inner color
      sunGradient.addColorStop(1, "rgba(255, 153, 0, 0.95)"); // Outer color, semi-transparent

      ctx.fillStyle = sunGradient;
      ctx.fill();
      ctx.closePath();

      // Apply blur filter
      ctx.filter = `blur(${config.blurStrength}px)`;

      beams.forEach((beam) => {
        beam.angle += config.rotationSpeed;
        const time = performance.now() / 1000; // Get time in seconds
        const opacity =
          (Math.sin(
            (time * Math.PI) / config.fadeInOutTime + beam.opacityPhase
          ) +
            1) /
          2;

        drawBeam(beam, opacity);
      });

      requestAnimationFrame(animate);
    }

    function drawBeam(beam, opacity) {
      let x0 = config.beamOrigin.x,
        y0 = config.beamOrigin.y;
      let x1 = x0 + Math.cos(beam.angle) * beam.length;
      let y1 = y0 + Math.sin(beam.angle) * beam.length;

      let gradient = ctx.createLinearGradient(x0, y0, x1, y1);
      gradient.addColorStop(
        0,
        `rgba(255, 255, 0, ${config.gradientStartOpacity * opacity})`
      );
      gradient.addColorStop(
        1,
        `rgba(255, 255, 0, ${config.gradientEndOpacity * opacity})`
      );

      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = beam.width;
      ctx.stroke();
    }
    animate();
  });

  return (
    <div>
      <section className="intro">
        <div className="sun"></div>
        <canvas id="sunbeamCanvas"></canvas>
        <div className="intro-title">
          <Avatar
            src="/assets/beachpic.png"
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
          <Button
            onClick={onButtonClick}
            className="intro-button"
            variant="contained"
            data-aos="flip-up"
          >
            Resume
          </Button>
        </div>

        <div className="wave" id="wave1" style={{ "--var": 1 }}></div>
        <div className="wave" id="wave2" style={{ "--var": 2 }}></div>
        <div className="wave" id="wave3" style={{ "--var": 3 }}></div>
        <div className="wave" id="wave4" style={{ "--var": 4 }}></div>
      </section>
    </div>
  );
}
