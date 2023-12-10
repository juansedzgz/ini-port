import { useState } from "react";
import linkedlogo from "../assets/linkedinlogo.png";
import mailogo from "../assets/mailogo.png";
import githublogo from "../assets/githublogo.png";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div className={classes.introText}>
          <p>
            Here are some of my professional social networks. <br />
            <br />
            They still are very immature so bear with me!
          </p>
        </div>
        <div className={classes.network}>
          <a
            href="https://www.linkedin.com/in/jusedigu/"
            className={classes.btn}
            target="_blank"
          >
            <img className={classes.logo} src={linkedlogo} />
          </a>
          <a
            href="mailto: diazgzjuan@gmail.com"
            className={classes.btn}
            target="_blank"
          >
            <img className={classes.logo} src={mailogo} />
          </a>
          <a
            href="https://github.com/juansedzgz"
            className={classes.btn}
            target="_blank"
          >
            <img className={classes.logo} src={githublogo} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      <Backdrop onModal={props.onModal} />
      <ModalOverlay />
    </>
  );
};

export default Modal;
