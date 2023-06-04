import Button from "../Button/Button";
import heroImg from "../../Assets/images/image-mockups.png";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-img-container">
        <img src={heroImg} className="hero-img" alt="easybank app" />
      </div>
      <div className="hero-text-container">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easeybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button />
      </div>
    </div>
  );
};
export default Hero;
