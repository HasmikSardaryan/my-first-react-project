import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import { Fragment } from "react";

function App() {
  return (
    <>
      <HomePage />
      <section className="All">
        <Projects />
        <About />
        <Contacts />
      </section>
    </>
  );
}

export default App;
