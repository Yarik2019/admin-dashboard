"use client";
import { HexColorPicker } from "react-colorful";
import { useStyles } from "../StylesContext/StylesContext";

const AccentColorPicker = () => {
  const { accentColor, setAccentColor } = useStyles();
  return (
    <div>
      <HexColorPicker color={accentColor} onChange={setAccentColor} />
      <span> Accent Color: {accentColor}</span>
    </div>
  );
};

export default AccentColorPicker;
