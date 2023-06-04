import "../../Components/Button/button.css";

const Button = (prop) => {
  return <button className={`btn ${prop.className}`}>Request invite</button>;
};
export default Button;
