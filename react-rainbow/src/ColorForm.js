import React, { useState } from "react";

export default function ColorForm(props) {
  let [inputColor, setInputColor] = useState(props.colors);

  const handleaddColor = (e) => {
    e.preventDefault();
    props.addColor(inputColor);
    setInputColor("");
  };

  return (
    <div>
      <form>
        <input type="text" onChange={(e) => setInputColor} value={inputColor} />
        <button type="submit" onClick={handleaddColor}>
          Add Color!
        </button>
      </form>
    </div>
  );
}
