import React from "react";
import { DateTime } from "luxon";

/**
 * An onclick function that lets users plan their day.
 * lets user view the days activities, and add/remove/check an activity
 */

export default function Agenda() {
    // list of items for the selected day
    // should display each of these
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