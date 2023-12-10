import classes from "./Navigation.module.css";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.div}>
        <Link
          activeClass="active"
          to="aboutSec"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={classes.link}
        >
          About Me
        </Link>
        <Link
          activeClass="active"
          to="projectsSec"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={classes.link}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
