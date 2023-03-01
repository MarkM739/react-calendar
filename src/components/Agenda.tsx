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

export default function Agenda(props: AgendaProps) {
    const [inputText, setText] = useState('');
    const [agendaItems, setData] = useState(props.items ?? []);
 
    const handleInputChange = (event: any) => {
        setText(event.target.value);
    };

    const handleOnClick = () => {        
        const agendaItem = {
            item: inputText,
            dt: DateTime.now() // DateTime.now().setHour(clock.hour)
        }

        const listCopy = [...agendaItems, agendaItem]

        setData(listCopy);
        // ALT: setData(old => [...old, inputText])
        // TODO: Fix input field not clearing after on click
    };


    const buildList = (items: AgendaItem[]) => {
        return (
            <ol>
                {items.sort((a, b) => a.dt.toMillis() - b.dt.toMillis()).map(element => <li>{element.item}</li>)}
            </ol>  
        )
    };

    const dropdownOptions = [
        {value: '9'},
        {value: '10', label: '10 AM'}
    ]
    
    return (
        <div>
            {buildList(agendaItems)}
            <input className="bg-slate-300 border-white-2" type="text" onChange={handleInputChange} value={inputText} />
            <Dropdown title="Tasks" options={dropdownOptions} />
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