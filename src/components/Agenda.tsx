import React, {useState} from "react";
import { DateTime } from "luxon";

interface AgendaProps {
    onClick:() => void;
    buttonText: string;
}

export default function Agenda() {
    
    
    
    const items = [
        'wakeup',
        'eat breakfast',
        'cardio for 5 seconds',
        'pick things up and put them down again'
    ];


    return (
        <p>
            {items.map(item => <p>{item}</p> )}
        </p>
    )
};