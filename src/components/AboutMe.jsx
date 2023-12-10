import classes from "./AboutMe.module.css";
import img from "../assets/LOGO ORIGINAL-PhotoRoom.png-PhotoRoom.png";
import pydev from "../assets/pydev.jpg";
import webdev from "../assets/webdev.jpg";
import machinelearning from "../assets/machinelearning.jpg";

const AboutMe = () => {
  return (
    <section id="aboutSec" className={classes.section}>
      <h2 className={classes.h2}>About</h2>
      <div className={classes.div}>
        <img src={img} className={classes.aboutImageStart} />
        <ul className={classes.ul}>
          <li className={classes.li}>
            <img src={webdev} className={classes.aboutImage} />
            <div className={classes.divText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer eager to share my skills and energy.
              </p>
            </div>
          </li>
          <li className={classes.li}>
            <img src={pydev} className={classes.aboutImage} />
            <div className={classes.divText}>
              <h3>Data Analyst</h3>
              <p>I have experience working with big data bases.</p>
            </div>
          </li>
          <li className={classes.li}>
            <img src={machinelearning} className={classes.aboutImage} />
            <div className={classes.divText}>
              <h3>Machine Learning</h3>
              <p>I have built complex neural networks.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
