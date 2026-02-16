"use client";
import { HexColorPicker } from "react-colorful";
import { useStyles } from "../StylesContext/StylesContext";

const TextShadowPicker = () => {
  const { textShadowColor, setTextShadowColor } = useStyles();
  return (
    <div>
      <HexColorPicker color={textShadowColor} onChange={setTextShadowColor} />
      <span> Text Shadow Color: {textShadowColor}</span>
    </div>
  );
};

export default TextShadowPicker;
