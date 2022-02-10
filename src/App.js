import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {

  }

  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        I am Luiz and I code for web3.0 so that's cool, right? Connect your Ethereum wallet and send something to me!
        </div>

        <button className="waveButton" onClick={wave}>
          Post something
        </button>
      </div>
    </div>
  );
}
