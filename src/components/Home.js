import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home({ setIsMobileMenuOpen, fetchData }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);
  }, []);

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
      {isMobile && (
        <div className="homeBtns">
          <Link
            to="/films"
            onClick={() => {
              fetchData("films");
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="filmBtn homeBtn">
              <div className="filmsIcon homeBtnIcon"></div>Films
            </div>
          </Link>
          <Link
            to="/people"
            onClick={() => {
              fetchData("people");
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="peopleBtn homeBtn">
              <div className="peopleIcon homeBtnIcon"></div>People
            </div>
          </Link>
          <Link
            to="/planets"
            onClick={() => {
              fetchData("planets");
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="planetsBtn homeBtn">
              <div className="planetsIcon homeBtnIcon"></div>Planets
            </div>
          </Link>
          <Link
            to="/species"
            onClick={() => {
              fetchData("species");
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="speciesBtn homeBtn">
              <div className="speciesIcon homeBtnIcon"></div>Species
            </div>
          </Link>
          <Link
            to="/starships"
            onClick={() => {
              fetchData("starships");
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="starshipsBtn homeBtn">
              <div className="starshipsIcon homeBtnIcon"></div>Starships
            </div>
          </Link>
          <Link
            to="/vehicles"
            onClick={() => {
              fetchData("vehicles");
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="vehiclesBtn homeBtn">
              <div className="vehiclesIcon homeBtnIcon"></div>Vehicles
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
