import React, { useState } from "react";
import ColorBlock from "./ColorBlock";
import ColorForm from "./ColorForm";

const DEFAULT_COLORS = [
  "red",
  "yellow",
  "blue",
  "green",
  "violet",
  "teal",
  "greenyellow",
  "lightblue",
  "grey",
];

function App() {
  const [colors, setColors] = useState(DEFAULT_COLORS);

  const handleAddColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const colorMap = colors.map((c) => <ColorBlock color={c} />);
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={handleAddColor} />
    </div>
  );
}

export default App;
