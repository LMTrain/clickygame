import React from "react";
import "./style.css";

function CarCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      
      <span onClick={() => props.handleRemoveClick()} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default CarCard;
