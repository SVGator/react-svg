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
    <div>
    <button className={color ? "null" : "button"} onClick={handleClick}>
      <h1>Button with animated svg inside</h1>
      <object id="mysvg" type="image/svg+xml" data={Animated}>
        svg-animation
      </object>
    </button>
    </div>
  );
}
export default App;
