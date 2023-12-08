import React from "react";
import Timer from "./Timer";

export default function App(){
    return <>
        <header role="banner">
            <h1>WE'RE LAUNCHING SOON</h1>
        </header>
        <main role="main" className="timer">
        <Timer/>
        <Timer/>
        <Timer/>
        <Timer/>
        </main>
        <footer role="contentinfo"></footer>
    </>
}