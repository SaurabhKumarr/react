import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10);

  function addCounter() {
    let ct = count + 1;
    console.log(ct)
    if(ct <= 20)
      setCount(ct);
  }

  const removeCounter = () => {
    let ct = count - 1;
    console.log(ct)
    if(ct >= 0)
      setCount(ct);
  }


  return (
    <>
      <h1>Reach couter</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addCounter}>Add value</button><br/>
      <button onClick={removeCounter}>Remove value</button>
      <p>{count}</p>
    </>
  )
}

export default App
