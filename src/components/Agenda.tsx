import React, {useState} from "react";
import { DateTime } from "luxon";

interface AgendaProps {
    onClick: () => void;
    buttonText: string;
}

export default function Agenda(props: AgendaProps) {
    const [inputText, setText] = useState('');
  
    const handleClick = () => {
        setText(inputText);
    };

    return (
        <div>
           <button onClick={handleClick}>{props.buttonText}</button>
        </div>
    );}