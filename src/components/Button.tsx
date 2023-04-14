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
      <button className="btn btn-primary" onClick={nextMonth}>{props.buttonText}</button>
  );
}