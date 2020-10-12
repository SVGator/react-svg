import React, { useState } from "react";
import Animated from "./Animated.svg";
import "./App.css";

function App() {
  let [color, setColor] = useState(false);

  function handleClick() {
    let svg = window.document.getElementById("mysvg");
    let svgDocument = svg.contentDocument;
    let svgTag = svgDocument.getElementById("efxc4pz558wj1"); // the id from the svg file
    svgTag.dispatchEvent(new Event("click"));

    console.log("It's working");
    setColor(!color);
  }
  return (
    <button className={color ? "null" : "button"} onClick={handleClick}>
      <object id="mysvg" type="image/svg+xml" data={Animated}>
        svg-animation
      </object>
    </button>
  );
}
export default App;
