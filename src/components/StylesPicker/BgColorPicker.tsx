"use client";
import { HexColorPicker } from "react-colorful";
import { useStyles } from "../StylesContext/StylesContext";

const BgColorPicker = () => {
  const { bgColor, setBgColor } = useStyles();
  return (
    <div>
      <HexColorPicker color={bgColor} onChange={setBgColor} />
      <span> Background Color: {bgColor}</span>
    </div>
  );
};

export default BgColorPicker;
