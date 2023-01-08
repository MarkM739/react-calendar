import React from 'react';
import Calendar from './components/Calendar';
import { DateTime } from "luxon";



function App() {
  return (
    <div>
      <Calendar month= { DateTime }/>
    </div>
  );
}

export default App;


