import MainPage from "./components/MainPage";
import "./App.css";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log("modal");
  };

  return (
    <>
      {modal && <Modal onModal={toggleModal} />}
      <Header onModal={toggleModal} />
      <MainPage />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
