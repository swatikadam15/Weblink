import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Main() {
  return (

      <div className="main-Wrapper">
        <div className="div">
      
        <Link to="/movie">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            alt="jhbhjb"
          />
          </Link>
          </div>
         
          <div className="div">
        <Link to="/ep2">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            alt="jhbhjb"
          />
        </Link>
        </div>
        <div className="div">
        <Link to="/ep3">
          <img
            src="https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            alt="cbnncb"
          />
        </Link>
        </div>
     
        <div className="div">
        <img
          src="https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
          alt="star"
        />
        </div>
        <div className="div">
        <img
          src="https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
          alt="war"
        />
        </div>
     
        <div className="div">
        <img src="https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"alt="tony" />
        </div>
     
        <div className="div">
        <img src="https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"alt="stark" />
        </div>
        <div className="div">
        <img src="https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg" alt="abc"/>
        </div> 
      </div>

  );
}

export default Main;
