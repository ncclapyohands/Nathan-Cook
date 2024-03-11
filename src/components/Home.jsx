import NavBar from "./NavBar";
import About from "./About";
import Skills from "./Skills";
import Journey from "./Journey";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Footer from "./Footer";
// import Todo from "./Todo";
// import { useEffect, useMemo, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// // import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// // import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export default function Home() {
  // const [init, setInit] = useState(false);

  // // this should be run only once per application lifetime
  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //     // starting from v2 you can add only the features you need reducing the bundle size
  //     //await loadAll(engine);
  //     //await loadFull(engine);
  //     await loadSlim(engine);
  //     //await loadBasic(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  // const options = useMemo(
  //   () => ({
  //     background: {
  //       color: {
  //         value: "#bada55",
  //       },
  //       opacity: 0,
  //       position: "center",
  //       size: "cover",
  //     },
  //     fullScreen: {
  //       enable: false,
  //       zIndex: -1, // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
  //     },
  //     fpsLimit: 60,

  //     particles: {
  //       number: {
  //         value: 10,
  //         density: {
  //           enable: true,
  //           value_area: 800,
  //         },
  //       },
  //       color: {
  //         value: ["#bf5e14", "#f0a465"],
  //         animation: {
  //           enable: true,
  //           speed: -0.5,
  //           sync: true,
  //         },
  //       },
  //       shape: {
  //         type: "circle",
  //       },
  //       opacity: {
  //         value: 0.5,
  //         animation: {
  //           enable: true,
  //           speed: 0.5,
  //           minimumValue: 0,
  //           sync: false,
  //         },
  //       },
  //       size: {
  //         value: 5,
  //         random: { enable: true, minimumValue: 1 },
  //         animation: {
  //           enable: false,
  //           speed: 5,
  //           minimumValue: 1,
  //           sync: false,
  //         },
  //       },
  //       life: {
  //         duration: {
  //           value: 80,
  //         },
  //         time: 10,
  //         delayTime: 10,
  //         count: 1,
  //       },
  //       move: {
  //         angle: {
  //           value: 45,
  //           offset: 0,
  //         },
  //         enable: true,
  //         gravity: {
  //           enable: false,
  //           acceleration: 0.5,
  //         },
  //         speed: 2,
  //         direction: "top",
  //         random: false,
  //         straight: false,
  //         size: true,
  //         outModes: {
  //           default: "destroy",
  //           bottom: "none",
  //         },
  //         attract: {
  //           enable: false,
  //           distance: 300,
  //           rotate: {
  //             x: 600,
  //             y: 1200,
  //           },
  //         },
  //       },
  //     },
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: "repulse",
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: "attract",
  //         },
  //         resize: true,
  //       },
  //       modes: {
  //         attract: {
  //           distance: 200,
  //           duration: 0.4,
  //           easing: "ease-out-quad",
  //           factor: 1,
  //           maxSpeed: 50,
  //           speed: 1.5,
  //         },
  //         repulse: {
  //           distance: 100,
  //           duration: 0.5,
  //         },
  //       },
  //     },
  //     detectRetina: true,
  //     emitters: {
  //       direction: "top",
  //       rate: {
  //         quantity: 1,
  //         delay: 0.5,
  //       },
  //       size: {
  //         width: 5,
  //         height: 5,
  //       },
  //       position: {
  //         x: 50,
  //         y: 94,
  //       },
  //     },
  //   }),
  //   []
  // );

  // if (init) {
  //   return (
  //     <div>
  //       <NavBar />
  //       <Introduction />
  //       <About />
  //       <Skills />
  //       <Journey />
  //       <Projects />
  //       <Footer />
  //       {/* <Todo /> */}
  //       <Particles
  //         id="tsparticles"
  //         particlesLoaded={particlesLoaded}
  //         options={options}
  //       />
  //     </div>
  //   );
  // } else {
  return (
    <div>
      <NavBar />
      <Introduction />
      <div className="background">
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Footer />
      </div>
      {/* <Todo /> */}
    </div>
  );
}
