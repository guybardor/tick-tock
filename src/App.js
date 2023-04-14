import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Square() {
  const [ value , setValue] = useState(null);
  function handleclick()
  {
    console.log("click on the square");
  }
  
  return (
      <button 
        className="square" 
        onClick={handleclick}
      >
        {value}
        </button>
  );
}

export default function board() {
  return (
    <>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square   />
        <Square  />
       <Square  />
      </div>
      <div className="board-row">
       <Square   />
        <Square  />
        <Square  />
      </div>
    </>
  );
}