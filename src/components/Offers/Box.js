import React from "react";
import "./Box.css";

const Box = ({ isNew }) => {
  return (
    <div className={`offer-box ${isNew ? "new-box" : ""}`}>
      {`Box ${isNew ? "1 (nowość)" : ""}`}
      {isNew && <div className="new-dot"></div>}
    </div>
  );
};

export default Box;
