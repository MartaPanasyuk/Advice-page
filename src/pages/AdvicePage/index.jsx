import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaDice } from "react-icons/fa";

import React from "react";

export default function AdvicePage() {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    const getRandomAdvice = async () => {
      try {
        const response = await axios.get(`https://api.adviceslip.com/advice`);
        setAdvice(response.data.slip);
        //console.log("smth", response.data.slip);
      } catch (err) {
        console.log(err.message);
      }
    };
    getRandomAdvice();
  }, []);

  //Click on the button to get Random Advice again
  const handleClick = () => {
    const getRandomAdvice = async () => {
      try {
        const response = await axios.get(`https://api.adviceslip.com/advice`);
        setAdvice(response.data.slip);
      } catch (err) {
        console.log(err.message);
      }
    };
    getRandomAdvice();
  };

  if (!advice)
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="page-block">
          <div className="page-header">
            <p className="page-head">ADVICE # {advice.id}</p>
          </div>
          <div className="page-content">
            <h2 className="content-text">{advice.advice}</h2>
          </div>
        </div>
        <div className="btn-container">
          <button onClick={() => handleClick()} className="btn">
            <FaDice />
          </button>
        </div>
      </div>
    </div>
  );
}
