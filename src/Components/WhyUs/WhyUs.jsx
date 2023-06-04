import "./whyUs.css";
import Banking from "../../Assets/images/icon-online.svg";
import Budgeting from "../../Assets/images/icon-budgeting.svg";
import Onboarding from "../../Assets/images/icon-onboarding.svg";
import Api from "../../Assets/images/icon-api.svg";

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <div className="whyus-description-container">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </div>
      <div className="whyus-reason-container">
        <div className="whyus-reason">
          <img src={Banking} alt="" />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow yout to keep track of
            your finances wherever you are in the world
          </p>
        </div>
        <div className="whyus-reason">
          <img src={Budgeting} alt="" />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. receive notificactions
            when you're close to your hitting limits.
          </p>
        </div>
        <div className="whyus-reason">
          <img src={Onboarding} alt="" />
          <h3>Fast Onboarding</h3>
          <p>
            We don't do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="whyus-reason">
          <img src={Api} alt="" />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyUs;
