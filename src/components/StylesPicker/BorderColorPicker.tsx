"use client";
import { HexColorPicker } from "react-colorful";
import { useStyles } from "../StylesContext/StylesContext";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";
const BorderColorPicker = () => {
  const {
    borderColor,
    setBorderColor,
    borderNumber,
    setBorderNumber,
    borderStyle,
    setBorderStyle,
  } = useStyles();
  return (
    <div>
      <HexColorPicker color={borderColor} onChange={setBorderColor} />
      <span> Border Color: {borderColor}</span>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="borderNumber">
            borderNumber : {borderNumber}
          </FieldLabel>
          <Input
            id="borderNumber"
            autoComplete="off"
            value={borderNumber}
            onChange={(e) => setBorderNumber(Number(e.target.value))}
            placeholder="borderNumber"
          />
        </Field>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Styles</SelectLabel>
              {borderStyle.map((style) => (
                <SelectItem key={style} value={style}>
                  {style}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FieldGroup>
    </div>
  );
};

export default BorderColorPicker;
