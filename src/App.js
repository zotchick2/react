import React from 'react';
import Hello from './HelloWorld';
import Board from './Board';
import './style.css';
import DropDown from './DropDown'



function App() {
  return (
    <div className='mother'>
    <Hello />
    <Board />
    <DropDown />
    </div>
  );
}



export default App;
