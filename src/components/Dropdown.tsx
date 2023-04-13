import React from "react";
import { DateTime } from "luxon";

interface DropdownProps {
    title: string;
    options: DropdownOption[];
    onChange: (index: number) => void;
}

interface DropdownOption {
    value: string;
    label?: string;
}

export default function Dropdown(props: DropdownProps) {
  const buildOptionList = (items: DropdownOption[]) => {
      return items.map(item => {
          return <option value={item.value}>{item.label ? item.label : item.value}</option>
      })
  }

  const onChange = (e: any) => {
    props.onChange(e.target.selectedIndex - 1);
  }






  return (
    <>
      <label
        htmlFor="countries"
        
      >
        Select an option
      </label>
      <select
        id="countries"
        
        onChange={onChange}
      >
        {/* <option selected>{props.title}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="9">9 AM</option> */}
        <option selected>{props.title}</option>
        {buildOptionList(props.options)}
      </select>
    </>
  );
};
