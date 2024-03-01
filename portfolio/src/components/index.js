import Home from "./Home";
import Introduction from "./Introduction";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar";
import Edu from "./Education";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export { Home, Introduction, ErrorPage, NavBar, Edu };
