import React from "react";

export default function Timer({time, show}) {
  
  return (
      <div className="card">
      <div className="page1">
      <h2>{show}</h2>
      <h2>{show}</h2>
      </div>
      <div className="page2"><p>{time}</p></div>
      </div>
  );
}
