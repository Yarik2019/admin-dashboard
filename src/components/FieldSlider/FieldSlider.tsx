"use client";

import { useState } from "react";

import { Field, FieldDescription, FieldTitle } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";
interface FieldSliderProps {
  minNumber: number;
  maxNumber: number;
}
export const FieldSlider = ({ minNumber, maxNumber }: FieldSliderProps) => {
  const [value, setValue] = useState([minNumber, maxNumber]);
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldTitle></FieldTitle>
        <FieldDescription>
          minNumber <span className="font-medium tabular-nums">{value[0]}</span>{" "}
          maxNumber: -{" "}
          <span className="font-medium tabular-nums">{value[1]}</span>
        </FieldDescription>
        <Slider
          value={value}
          onValueChange={setValue}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-full"
          aria-label="Price Range"
        />
      </Field>
    </div>
  );
};

export default FieldSlider;
