import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';





function App() {


  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked');
  }

  // vejailla 
  const addToFive = (num) => {
    alert(num + 5);  // 5 jhog kora alert korbo 
  }

  return (
    <>
      <h3>React Core Concepts 2</h3> 

      <Friends></Friends>
      
      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('third clicked')}}>Third</button>

        {/* vejailla */}
      <button onClick={() => {addToFive(3)}}>Four</button>
    </>
  )
}

export default App
