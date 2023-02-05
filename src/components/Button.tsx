import React from "react";
import { DateTime } from "luxon";


//useState always retruns values as array

interface ButtonProps {
  onClick: () => void;
  buttonText: string;
}

export default function Button(props: ButtonProps) {
  function nextMonth() {
    props.onClick();
  }

  return (
    <div>
      <button className="bg-green-500 text-white border-2 border-black" onClick={nextMonth}>{props.buttonText}</button>
    </div>
  );
}