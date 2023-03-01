import React from "react";
import { DateTime } from "luxon";




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
      <button className="bg-gray-800 text-white border-2 border-slate-400" onClick={nextMonth}>{props.buttonText}</button>
    </div>
  );
}