"use client";
import { HexColorPicker } from "react-colorful";
import { useStyles } from "../StylesContext/StylesContext";

const ColorPicker = () => {
  const { color, setColor } = useStyles();
  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
      <span> Color: {color}</span>
    </div>
  );
};

export default ColorPicker;
