import classes from "./Projects.module.css";
import projectimg1 from "../assets/foodmenu.jpg";
import projectimg2 from "../assets/bankist.jpg";
import projectimg3 from "../assets/dicegame.jpg";
import projectimg4 from "../assets/map.jpg";
import projectimg5 from "../assets/guessing.jpg";
import projectimg6 from "../assets/redux.jpg";

const Projects = () => {
  return (
    <section id="projectsSec" className={classes.section}>
      <h5>This is a project</h5>
      <h2>Portfolio</h2>
      <div className={classes.div}>
        <article className={classes.item}>
          <div className={classes.divImg}>
            <img src={projectimg1} alt="" className={classes.img} />
          </div>
          <h3>Food Ordering Page</h3>
          <div className={classes.btnContainer}>
            <a
              href="https://peppy-croquembouche-3fbe73.netlify.app"
              className={`${classes.btn} ${classes.btnProject}`}
              target="_blank"
            >
              Check it out!
            </a>
          </div>
        </article>
        <article className={classes.item}>
          <div className={classes.divImg}>
            <img src={projectimg2} alt="" className={classes.img} />
          </div>
          <h3>Banking Page</h3>
          <div className={classes.btnContainer}>
            <a
              href="https://majestic-strudel-7b85c5.netlify.app"
              className={`${classes.btn} ${classes.btnProject}`}
              target="_blank"
            >
              Check it out!
            </a>
          </div>
        </article>
        <article className={classes.item}>
          <div className={classes.divImg}>
            <img src={projectimg3} alt="" className={classes.img} />
          </div>
          <h3>Dice Game</h3>
          <div className={classes.btnContainer}>
            <a
              href="https://deft-tiramisu-cd741e.netlify.app"
              className={`${classes.btn} ${classes.btnProject}`}
              target="_blank"
            >
              Check it out!
            </a>
          </div>
        </article>
        <article className={classes.item}>
          <div className={classes.divImg}>
            <img src={projectimg4} alt="" className={classes.img} />
          </div>
          <h3>Log Cycling and Running Page</h3>
          <div className={classes.btnContainer}>
            <a
              href="https://polite-beignet-aa0643.netlify.app"
              className={`${classes.btn} ${classes.btnProject}`}
              target="_blank"
            >
              Check it out!
            </a>
          </div>
        </article>
        <article className={classes.item}>
          <div className={classes.divImg}>
            <img src={projectimg5} alt="" className={classes.img} />
          </div>
          <h3>Simple Number Guessing Game</h3>
          <div className={classes.btnContainer}>
            <a
              href="https://dynamic-faloodeh-46bf3c.netlify.app"
              className={`${classes.btn} ${classes.btnProject}`}
              target="_blank"
            >
              Check it out!
            </a>
          </div>
        </article>
        <article className={classes.item}>
          <div className={classes.divImg}>
            <img src={projectimg6} alt="" className={classes.img} />
          </div>
          <h3>Simple Redux Cart</h3>
          <div className={classes.btnContainer}>
            <a
              href="https://snazzy-flan-cda5e0.netlify.app"
              className={`${classes.btn} ${classes.btnProject}`}
              target="_blank"
            >
              Check it out!
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
