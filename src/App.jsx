import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Opening from "./Opening";
import Events from "./Events";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import "./index.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Opening />
        <AboutUs />
        <Events />
        <Contact />
      </div>
    </>
  );
}

export default App;
