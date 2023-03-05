import React from "react";
import "./Home.css";
import hi_img from "../images/hi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div class="context">
        <h1>Hey Scholar!!</h1>
        <p>Get Into The Class...</p>
      </div>

      <div className="img">
        <img src={hi_img} alt="hi" />
      </div>

      <div class="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Link to="/checkin">
        <button className="checkin-btn bg-blue-500 text-white font-bold py-2 px-4 rounded block hover:bg-sky-700">
          Check in <FontAwesomeIcon icon="fa-solid fa-arrow-right" beatFade />
        </button>
      </Link>
    </div>
  );
};

export default Home;
