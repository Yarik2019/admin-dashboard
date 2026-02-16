"use client";
import { HexColorPicker } from "react-colorful";
import { useStyles } from "../StylesContext/StylesContext";
import { FieldGroup, Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const BoxShadowPicker = () => {
  const {
    boxShadowColor,
    setBoxShadowColor,
    minNumber,
    maxNumber,
    stop,
    setMinNumber,
    setMaxNumber,
    setStop,
  } = useStyles();
  return (
    <div>
      <HexColorPicker color={boxShadowColor} onChange={setBoxShadowColor} />
      <span> Box Shadow Color: {boxShadowColor}</span>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="stop">Stop : {stop}</FieldLabel>
          <Input
            id="stop"
            autoComplete="off"
            value={stop}
            onChange={(e) => setStop(Number(e.target.value))}
            placeholder="stop"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="minNumber">minNumber : {minNumber}</FieldLabel>
          <Input
            id="minNumber"
            autoComplete="off"
            value={minNumber}
            onChange={(e) => setMinNumber(Number(e.target.value))}
            placeholder="minNumber"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="maxNumber">maxNumber : {maxNumber}</FieldLabel>
          <Input
            id="maxNumber"
            autoComplete="off"
            value={maxNumber}
            onChange={(e) => setMaxNumber(Number(e.target.value))}
            placeholder="maxNumber"
          />
        </Field>
      </FieldGroup>
    </div>
  );
};

export default BoxShadowPicker;
