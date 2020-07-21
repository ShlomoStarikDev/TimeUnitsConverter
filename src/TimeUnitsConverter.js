import React, { useState } from 'react'

export default function TimeUnitsConverter(){
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
 
  function changeSeconds(e){
   setSeconds(Number(e.target.value))
   setMinutes(Number(e.target.value) / 60)
   setHours(Number(e.target.value) / 3600)
  }
  function changeMinutes(e){
   setSeconds(Number(e.target.value) * 60)
   setMinutes(Number(e.target.value))
   setHours(Number(e.target.value) / 60)
  }
  function changeHours(e){
   setSeconds(Number(e.target.value) * 3600)
   setMinutes(Number(e.target.value) * 60)
   setHours(Number(e.target.value))
  }
 
   return(
     <div>
      <label>seconds</label>
      <input id='seconds' value={seconds} onChange={changeSeconds}/>
  
      <label>minutes</label>
      <input id='minutes' value={minutes} onChange={changeMinutes}/>
  
      <label>hours</label>
      <input id='hours' value={hours} onChange={changeHours}/>
 
     </div>
   );
 }
 