import FooterImg from "../assets/footerImg.svg";
import "../styling/footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <h3 className="gratitude">
        <span className="fire">Th</span>
        <span className="burn">a</span>
        <span className="burn">n</span>
        <span className="fire">ks</span>
      </h3>
      <h3 className="sticking-around">For sticking around!</h3>
      <img src={FooterImg} alt="Footer Volcano" />
    </div>
  );
}
