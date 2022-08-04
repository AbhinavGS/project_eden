import React from "react";

import { AiFillCheckCircle } from "react-icons/ai";

import "./SuccessScreen.scss";

const SuccessScreen = ({ name }) => {
  return (
    <>
      <div className="success-icon-container">
        <AiFillCheckCircle size={50} className="success-icon" />
      </div>

      <h4 className="app__title">{`Congratulations, ${name}!`}</h4>
      <h6 className="app__sub-title">
        You have completed onboarding, you can start using the Eden!
      </h6>
    </>
  );
};

export default SuccessScreen;
