import classes from "./MainPage.module.css";
import bg from "../assets/frontpic.jpg";
import dexter from "../assets/dexter.jpg";

const MainPage = () => {
  return (
    <section id="mainpageSec" className={classes.intro}>
      <div className={classes.div}>
        <span className={classes.welcome}>Welcome,</span>
        <span className={classes.introduction}>
          I am <span className={classes.name}>Juan </span>
          a<br />
          Passionate Developer
        </span>
        <p className={classes.text}>
          I am committed to my professional development and have actively
          participated in projects
          <br /> thathave allowed me to apply my knowledge and skills in real
          situations. I am a very
          <br />
          communicative and open minded individual willing to learn from
          anything and anyone.
        </p>
        {/* <button className={classes.button}>
          <img src={dexter} className={classes.btnDexter} />
          HIRE ME
        </button> */}
      </div>
      <img src={bg} className={classes.bg} />
    </section>
  );
};

export default MainPage;
