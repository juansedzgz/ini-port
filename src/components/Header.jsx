import classes from "./Header.module.css";
import img from "../assets/LOGO ORIGINAL-PhotoRoom.png-PhotoRoom.png";
import Navigation from "./Navigation";
import { Link } from "react-scroll";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Link
        activeClass="active"
        to="mainpageSec"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={classes.link}
      >
        {/* <p>Back to the TOP</p> */}
        <img src={img} className={classes.img} />
      </Link>
      <Navigation />
      <button className={classes.button} onClick={props.onModal}>
        Contact Me!
      </button>
    </header>
  );
};

export default Header;
