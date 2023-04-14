import React, {useState} from "react";
import { DateTime } from "luxon";
import Dropdown from "./Dropdown";
import { AgendaItem } from "../types";

interface AgendaProps {
   items?: AgendaItem[];
   addAgendaItem: (item: AgendaItem) => void;
   activeDate: DateTime;
}

interface Option {
    value: string;
    label: string;
  }


function generateDropdownOptions(): Option[] {
    const dropdownOptions: Option[] = [];
    for (let i = 0; i < 24; i++) {
      const label = i === 0 ? '12 AM' : i < 12 ? `${i} AM` : i === 12 ? '12 PM' : `${i - 12} PM`;
      dropdownOptions.push({ value: i.toString(), label });
    }
    return dropdownOptions;
  }

  //
  
const dropdownOptions = generateDropdownOptions();

export default function Agenda(props: AgendaProps) {
    const agendaItems = props.items ?? [];

    const [inputText, setInputText] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(-1);
 
    const handleInputChange = (event: any) => {
        setInputText(event.target.value);
    };
 
    const handleOnClick = () => {  
        if (selectedIndex === -1) {
          alert('Please select a time');
          return; 
        }
        const selectedValue = parseInt(dropdownOptions[selectedIndex].value);
      
        const agendaItem = {
          item: inputText,
          dt: DateTime.now().set({ month: props.activeDate.month, day: props.activeDate.day, hour: selectedValue })
        };

        props.addAgendaItem(agendaItem);
        // ALT: setData(old => [...old, inputText])
        // TODO: Fix input field not clearing after on click
    };


    const buildList = (items: AgendaItem[]) => {
        const sortedItems = items.sort((a, b) => a.dt.toMillis() - b.dt.toMillis());

        return (
       
            <ol>
                {sortedItems.map(element => <li>{`${element.dt.toLocaleString(DateTime.TIME_SIMPLE)} ${element.item}`}</li>)}
            </ol>  
            
            
        );
    };

    const onDropdownChange = (index: number) => {
        setSelectedIndex(index)
    }
    
    return (
        <div>
            <h1 className="text-2xl uppercase font-bold">{props.activeDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</h1>
            {buildList(agendaItems)}

            <div className="form-control">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <label className="input-group">
            <input type="text" placeholder="Task" className="input input-bordered" onChange={handleInputChange} value={inputText} />
            </label>
            </div>

            

            <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn m-1">Time</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <Dropdown title="Time" options={dropdownOptions} onChange={onDropdownChange}/>
            </ul>
            </div>
            <button className="btn btn-secondary" onClick={handleOnClick}>Add item</button>
        </div>
    );
}



 
  
