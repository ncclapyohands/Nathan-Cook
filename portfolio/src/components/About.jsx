import { useEffect } from "react";
import "../styling/about.css"; // Add your styles in AboutMe.css

const About = () => {
  useEffect(() => {
    // let track = document.getElementById("img-track");
    // // let scrollValue = window.scrollY;
    // window.onmousedown = (e) => {
    //   track.dataset.mouseDownAt = e.clientX;
    // };
    // this.window.onmouseup = () => {
    //   track.dataset.mouseDownAt = "0";
    //   track.dataset.prevPercentage = track.dataset.percentage;
    // };
    // window.onmousemove = (e) => {
    //   if (track.dataset.mouseDownAt === "0") return;
    //   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    //     maxDelta = window.innerWidth / 2;
    //   let percentage = (mouseDelta / maxDelta) * -100,
    //     nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    //   Math.min(nextPercentage, 0);
    //   Math.max(nextPercentage, -100);
    //   track.dataset.percentage = nextPercentage;
    //   for (const image of track.getElementsByClassName("image")) {
    //     image.animate(
    //       {
    //         objectPosition: `${100 + nextPercentage}% center`,
    //       },
    //       { duration: 1200, fill: "forwards" }
    //     );
    //   }
    //   track.animate(
    //     {
    //       transform: `translate(${nextPercentage}%, 0%)`,
    //     },
    //     { duration: 1200, fill: "forwards" }
    //   );
    // };

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
          <img
            className="image"
            src="/src/assets/teton7.jpeg"
            alt="4runner1"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/4r2.jpeg"
            alt="4runner2"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/4r3.jpeg"
            alt="4runner3"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/4r4.jpeg"
            alt="4runner4"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/crt.JPG"
            alt="bruther carter"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/n8b.jpeg"
            alt="bently my cusin"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/waterfall1.jpeg"
            alt="fam"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/teton6.jpeg"
            alt="lincoln"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/pr2.jpg"
            alt="pr squad"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/teton8.jpeg"
            alt="sign"
            draggable="false"
          />
          <img
            className="image"
            src="/src/assets/pr4.jpeg"
            alt="pr squad line-up"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
