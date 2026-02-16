"use client";
import { HexColorPicker } from "react-colorful";
import { useStyles } from "../StylesContext/StylesContext";

const CaretColorPicker = () => {
  const { caretColor, setCaretColor } = useStyles();
  return (
    <div>
      <HexColorPicker color={caretColor} onChange={setCaretColor} />
      <span> Caret Color: {caretColor}</span>
    </div>
  );
};

export default CaretColorPicker;
