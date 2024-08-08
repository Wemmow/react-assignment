import React, { useState } from "react";ww
import "./App.css";

const Furre = () => {
  const [isFurre, setIsFurre] = useState(true); // State to determine which component to show

  const handleClick = () => {
    setIsFurre(!isFurre); // Toggle the state
  };

  return (
    <div>
      {isFurre ? (
        <div>
          <header className="box1">
            <h1>Hello furre modes</h1>
          </header>
          <div className="img">
            <img src="logo192.png" alt="coolphoto" />
          </div>
          <div>
            <button className="but" onClick={handleClick}>
              Press me
            </button>
          </div>
        </div>
      ) : (
        <NotFurkan />
      )}
    </div>
  );
};

const NotFurkan = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default Furre;

//ska göra en if function, om det är de så == så, inte == så
