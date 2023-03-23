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
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
