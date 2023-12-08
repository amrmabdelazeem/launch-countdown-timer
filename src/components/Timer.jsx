import React from "react";

export default function Timer({time}) {
  return (
      <div className="card">
      <div className="page1"><h2>38</h2></div>
      <div className="page2"><p>{time}</p></div>
      </div>
  );
}
