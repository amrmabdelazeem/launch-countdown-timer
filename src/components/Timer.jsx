import React from "react";

export default function Timer({time, show}) {
  
 

  return (
      <div className="card">
          <div className="container">
        <div className="front">
          <div className="top">
            <span className="number">{show}</span>
          </div>
          <div className="bottom">
            <span className="number">{show}</span>
          </div>
        </div>
        <div className="back">
          <div className="top">
            <span className="number">{show}</span>
          </div>
          <div className="bottom">
            <span className="number">{show}</span>
          </div>
        </div>
      </div>
      <div className="title">{time}</div>
      </div>
  );
}
