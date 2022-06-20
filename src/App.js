import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [state, setState] = useState("verde");

  return (
 
    <div className='superCaja'>
    <div className='barraNegra'></div>
      <div className="cajaNegra">
        <div onClick={()=>setState("roja")} className={"luz roja"+(state==="roja"? " brillo": " ")}> </div>
        <div onClick={()=>setState("amarilla")} className={"luz amarilla"+(state==="amarilla"? " brillo": " ")}> </div>
        <div onClick={()=>setState("verde")} className={"luz verde"+(state==="verde"? " brillo": " ")}> </div>
      </div>
    </div>
  )

}



export default App;
