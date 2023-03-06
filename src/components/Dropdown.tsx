import React from "react";
import { DateTime } from "luxon";

interface DropdownProps {
    title: string;
    options: DropdownOption[];
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

    class GetInput extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <h3>Get Input:</h3>
            <input
              value={this.props.input}
              onChange={this.props.handleChange}/>
          </div>
        );
      }
    };
    
    class RenderInput extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <div>
            <h3>Input Render:</h3>
            <p>{this.props.input}</p>
          </div>
        );
      }
    };

    
class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }
  handleClick(letter) {
    this.setState({ justClicked: letter });
  }
  render() {
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} onClick={() => this.handleClick(letter)}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  }
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
