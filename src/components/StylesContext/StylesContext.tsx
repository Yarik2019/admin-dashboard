"use client";
import { createContext, useContext, useState } from "react";

const StylesContext = createContext<{
  color: string;
  setColor: (color: string) => void;
  bgColor: string;
  setBgColor: (bgColor: string) => void;
  borderColor: string;
  setBorderColor: (borderColor: string) => void;
  boxShadowColor: string;
  borderNumber: number;
  setBorderNumber: (borderNumber: number) => void;
  borderStyle: string[];
  setBorderStyle: (borderStyle: string[]) => void;
  setBoxShadowColor: (boxShadowColor: string) => void;
  caretColor: string;
  setCaretColor: (caretColor: string) => void;
  accentColor: string;
  setAccentColor: (accentColor: string) => void;
  textShadowColor: string;
  setTextShadowColor: (textShadowColor: string) => void;
  minNumber: number;
  setMinNumber: (minNumber: number) => void;
  maxNumber: number;
  setMaxNumber: (maxNumber: number) => void;
  stop: number;
  setStop: (stop: number) => void;
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}>({
  color: "#000000",
  setColor: () => {},
  bgColor: "#ffffff",
  setBgColor: () => {},
  borderColor: "#000000",
  setBorderColor: () => {},
  borderNumber: 0,
  setBorderNumber: () => {},
  borderStyle: [
    "solid",
    "dashed",
    "dotted",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "none",
    "hidden",
  ],
  setBorderStyle: () => {},
  boxShadowColor: "#000000",
  setBoxShadowColor: () => {},
  caretColor: "#000000",
  setCaretColor: () => {},
  accentColor: "#000000",
  setAccentColor: () => {},
  textShadowColor: "#000000",
  setTextShadowColor: () => {},
  minNumber: 0,
  setMinNumber: () => {},
  maxNumber: 1000,
  setMaxNumber: () => {},
  stop: 0,
  setStop: () => {},
  fontSize: 16,
  setFontSize: () => {},
});

import { PropsWithChildren } from "react";

export const StylesProvider = ({ children }: PropsWithChildren<object>) => {
  const [color, setColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#000000");
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderNumber, setBorderNumber] = useState(0);
  const [borderStyle, setBorderStyle] = useState<string[]>([
    "solid",
    "dashed",
    "dotted",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "none",
    "hidden",
  ]);
  const [boxShadowColor, setBoxShadowColor] = useState("#000000");
  const [caretColor, setCaretColor] = useState("#000000");
  const [accentColor, setAccentColor] = useState("#000000");
  const [textShadowColor, setTextShadowColor] = useState("#000000");
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(1000);
  const [stop, setStop] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  return (
    <StylesContext.Provider
      value={{
        color,
        setColor,
        bgColor,
        setBgColor,
        borderColor,
        setBorderColor,
        borderNumber,
        setBorderNumber,
        borderStyle,
        setBorderStyle,
        boxShadowColor,
        setBoxShadowColor,
        caretColor,
        setCaretColor,
        accentColor,
        setAccentColor,
        textShadowColor,
        setTextShadowColor,
        minNumber,
        setMinNumber,
        maxNumber,
        setMaxNumber,
        stop,
        setStop,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </StylesContext.Provider>
  );
};

export const useStyles = () => useContext(StylesContext);
