import "../styling/journey.css";

function Journey() {
  return (
    <div className="timeline-container">
      <h1 className="title">Journey</h1>
      <div className="timeline">
        {/* Component 1 (left p)*/}
        <div className="timeline-component">
          <div
            className="timeline-date timeline-date--right"
            data-aos="flip-down"
          >
            June 2019
          </div>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div
          className="timeline-component timeline-component--bg"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="timeline-title">Graduated from Sprague High School</h2>
          <p className="timeline--p">
            C++ Tutor, Windows Server Admin, IT Administrator, printer and
            projector fixer-upper, Frisbee Fridays!
          </p>
        </div>
        {/* Component 2 (right p)*/}
        <div
          className="timeline-component timeline-component--bg"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="timeline-title">Rainsweet Inc.</h2>
          <p className="timeline--p">
            Worked as a Packaging Lead. This would be my seasonal job for the
            next three consecutive years. This job put me through college. I led
            teams of 20-30 people with a goal of cleaning, freezing, and
            packaging 300,000lbs of blueberries daily. Responsibilities included
            delegating work, meeting daily quotas, and hitting the highest
            quality grade standard.
          </p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component">
          <div className="timeline-date" data-aos="flip-down">
            July 2019 - August 2022
          </div>
        </div>
        {/* Component 2 (right p) */}
        <div className="timeline-component">
          <div
            className="timeline-date timeline-date--right"
            data-aos="flip-down"
          >
            September 2019 - July 2022
          </div>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div
          className="timeline-component timeline-component--bg"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="timeline-title">Progrexion</h2>
          <p className="timeline--p">
            Senior Sales Representative for Lexington Law Firm. Addressed
            clients low credit scores and advised a variety of solutions to
            assist their credit needs. Top performer sitting in the top 10% in
            the branch 3 months in a row. Awarded the prestigious Pace Setter
            Award for consistancy, conversion, and compliance.
          </p>
        </div>
        {/* Component 3 (left p)*/}
        <div
          className="timeline-component timeline-component--bg"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="timeline-title">Replay Live - Internship</h2>
          <p className="timeline--p">
            An advertising start-up company based in Salem, Oregon. I was
            brought on as an intern to help with ad production logistics and the
            development of an e-commerce webpage. The company had a vision of
            customers being able to purchase ads through a webapp and distribute
            them across a network of LED boards.
          </p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div className="timeline-component">
          <div className="timeline-date" data-aos="flip-down">
            April 2022 - January 2023
          </div>
        </div>
        {/* Component 5 (right p) */}
        <div className="timeline-component ">
          <div
            className="timeline-date timeline-date--right timeline-date--bottom"
            data-aos="flip-down"
          >
            September 2019 - July 2023
          </div>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
        </div>
        <div
          className="timeline-component timeline-component--bg"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="timeline-title">Graduated from BYU - Idaho</h2>
          <p className="timeline--p">
            BoS, Majoring in Software Engineering. Emphasis in Full Stack
            Development. APIs, webpages, and databases.
          </p>
        </div>
        {/* Final (left p) */}
        <div
          className="timeline-component timeline-component--bg"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="timeline-title">We are Here!</h2>
          <p className="timeline--p">This slot could be yours!</p>
        </div>
        <div className="timeline-middle">
          <div className="timeline-point"></div>
          <div className="timeline-point--bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
