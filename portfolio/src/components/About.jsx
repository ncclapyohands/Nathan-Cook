import "../styling/about.css"; // Add your styles in AboutMe.css

const About = () => {
  return (
    <section className="about-me">
      <div className="about-me-section">
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
    </section>
  );
};

export default About;
