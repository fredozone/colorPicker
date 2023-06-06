import { useState } from "react";
import "./App.css";
import Color from "./components/color";
function App() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <>
      <div id="navbar">
        <div>Currently selected:</div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="green"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
    </>
  );
}

export default App;
