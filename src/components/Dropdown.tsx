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

  import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function VariantsExample() {
  return (
    <>
      {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ),
      )}
    </>
  );
}

export default VariantsExample;

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
