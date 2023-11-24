import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="homeChild">
        <div className="homeChild__img"></div>
        <div className="homeChild__title">
          Welcome to Star Wars <br /> Dashboard
        </div>
        <div className="homeChild__subtitle">
          Star Wars is an American epic space opera multimedia franchise created
          by George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon.
        </div>
      </div>
    </div>
  );
}

export default Home;
