import "./blog.css";
import MoneyImg from "../../Assets/images/image-currency.jpg";
import RestaurantImg from "../../Assets/images/image-restaurant.jpg";
import PlaneImg from "../../Assets/images/image-plane.jpg";
import ConfettiImg from "../../Assets/images/image-confetti.jpg";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Latest Articles</h2>
      <div className="blog-box-container">
        <div className="blog-box b1">
          <img src={MoneyImg} alt="blog" />
          <div className="blog-box-description">
            <p>By Claire Robinson</p>
            <h3>
              <a href="#1"> Recieve money in any currency with no fees</a>
            </h3>
            <p>
              The world is getting smaller and we're becoming more mobile. So
              why would you be forced to only receive money in a single...
            </p>
          </div>
        </div>
        <div className="blog-box b2">
          <img src={RestaurantImg} alt="blog" />
          <div className="blog-box-description">
            <p>By Wilson Hutton</p>
            <h3>
              <a href="#1">Treat yourself without worring about money</a>
            </h3>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you...
            </p>
          </div>
        </div>
        <div className="blog-box b3">
          <img src={PlaneImg} alt="blog" />
          <div className="blog-box-description">
            <p>By Wilson Hutton</p>
            <h3>
              <a href="#1">Take your Easybank card wherever you go</a>
            </h3>
            <p>
              We want you to enjoy your travels. This is why we don't charge any
              fees on purchases while you're abroad. We'll even show you...
            </p>
          </div>
        </div>
        <div className="blog-box b4">
          <img src={ConfettiImg} alt="blog" />
          <div className="blog-box-description">
            <p>By Claire Robinson</p>
            <h3>
              <a href="#1">Our invite-only Beta accounts are now live!</a>
            </h3>
            <p>
              After a lot of hard work by the whole team, we're excited to
              launch our closed beta. It's easy to request an invite thorugh the
              site...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
