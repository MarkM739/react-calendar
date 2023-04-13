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
      <button onClick={nextMonth}>{props.buttonText}</button>
    </div>
  );
}