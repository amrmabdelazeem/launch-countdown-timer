import React from "react";
import Timer from "./Timer";

export default function App(){
    return <>
        <header role="banner" className="title">
            <h1>WE'RE LAUNCHING SOON</h1>
        </header>
        <main role="main" className="timer">
        <Timer/>
        <Timer/>
        <Timer/>
        <Timer/>
        </main>
        <footer role="contentinfo">
        <img src="./images/icon-facebook.svg" alt="facebook-icon"/>
        <img src="./images/icon-pinterest.svg" alt="pinterest-icon"/>
        <img src="./images/icon-instagram.svg" alt="instagram-icon"/>
        </footer>
    </>
}