import React, {useState} from "react";
import { DateTime } from "luxon";
import Dropdown from "./Dropdown";

interface AgendaItem {
    item: string;
    dt: DateTime;
}

interface AgendaProps {
   items?: AgendaItem[];
}


//TODO: Dynamically iterate from 0-23 to create 'hours' dropdown
const dropdownOptions = [
    {value: '9', label: '9 AM'},
    {value: '10', label: '10 AM'},
    {value: '13', label: '1 PM'}
];

export default function Agenda(props: AgendaProps) {
    const [inputText, setInputText] = useState('');
    const [agendaItems, setAgendaItems] = useState(props.items ?? []);
    const [selectedIndex, setSelectedIndex] = useState(-1);
 
    const handleInputChange = (event: any) => {
        setInputText(event.target.value);
    };

    const handleOnClick = () => {  
        //TODO: Make alert for -1 value     
        const agendaItem = {
            item: inputText,
            dt: DateTime.now().set({ hour: parseInt(dropdownOptions[selectedIndex].value)})
        }

        const listCopy = [...agendaItems, agendaItem]

        setAgendaItems(listCopy);
        // ALT: setData(old => [...old, inputText])
        // TODO: Fix input field not clearing after on click
    };


    const buildList = (items: AgendaItem[]) => {
        const sortedItems = items.sort((a, b) => a.dt.toMillis() - b.dt.toMillis());

        return (
            <ol>
                {sortedItems.map(element => <li>{`${element.dt.toLocal()} ${element.item}`}</li>)}
            </ol>  
        )
    };

    const onDropdownChange = (index: number) => {
        setSelectedIndex(index)
    }
    
    return (
        <div>
            {buildList(agendaItems)}
            <input className="bg-slate-300 border-white-2" type="text" onChange={handleInputChange} value={inputText} />
            <Dropdown title="Time" options={dropdownOptions} onChange={onDropdownChange}/>
            <button className="bg-slate-700 border-white" onClick={handleOnClick}>Add item</button>
        </div>
    );
}

 
  
/**
 * Agenda View
 * 
 * - wake up
 * - work out
 * - skip leg day
 * - whatever
 * 
 * [input field] [Dropdown for time] [Add item]
 * 
 */