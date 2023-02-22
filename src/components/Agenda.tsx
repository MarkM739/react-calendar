import React, {useState} from "react";
import { DateTime } from "luxon";

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
const DropDown = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Menu 1</button>
          </li>
          <li className="menu-item">
            <button>Menu 2</button>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
};


    const buildList = (items: AgendaItem[]) => {
        return (
            <ol>
                {items.sort((a, b) => a.dt.toMillis() - b.dt.toMillis()).map(element => <li>{element.item}</li>)}
            </ol>  
        )
    };
    
    return (
        <div>
            {buildList(agendaItems)}
            <input type="text" onChange={handleInputChange} value={inputText} />
            <button className="bg-slate-100 dark:bg-slate-400" onClick={handleOnClick}>Add item</button>
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
 * [input field] [Add item]
 * 
 */