import React, { useState } from "react";
import Timer from "./Timer";

export default function App() {
  const [newTime, setNewTime] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

//   setInterval(()=>{
//     setNewTime((preSecond) => {
//         return { ...preSecond, days, hours, minutes, seconds };
//       })
//   }, 1000)
  const newDate = new Date("Dec 24, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const timeRemaining = newDate - now;

  const days = String(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
  const hours = String(
    Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = String(
    Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000));

  return (
    <>
      <header role="banner" className="title">
        <h1>WE'RE LAUNCHING SOON</h1>
      </header>
      <main role="main" className="timer">
        <Timer time="DAYS" show={newTime.days} />
        <Timer time="HOURS" show={newTime.hours} />
        <Timer time="MINUTES" show={newTime.minutes} />
        <Timer time="SECONDS" show={newTime.seconds} />
      </main>
      <footer role="contentinfo">
        <img src="./images/icon-facebook.svg" alt="facebook-icon" />
        <img src="./images/icon-pinterest.svg" alt="pinterest-icon" />
        <img src="./images/icon-instagram.svg" alt="instagram-icon" />
      </footer>
    </>
  );
}
