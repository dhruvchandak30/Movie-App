import classes from "./Footer.module.css";
import FB from "../../images/Main-Page/FB.png";
import Youtube from "../../images/Main-Page/Youtube.png";
import Insta from "../../images/Main-Page/Insta.png";
import Twitter from "../../images/Main-Page/Twitter.jpeg";

const Footer = () => {
  return (
    <footer>
      <div className={classes.Icons}>
        <img src={FB} alt="FB"></img>
        <img src={Youtube} alt="YT"></img>
        <img src={Insta} alt="Insta"></img>
        <img src={Twitter} alt="Twitter"></img>
      </div>
      <div className={classes.list}>
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Media Centre</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={classes.Copyright}>
        <button>Service Code</button>
        <h6>&copy; 1997-2023 Movies,Inc</h6>
      </div>
    </footer>
  );
};
export default Footer;
