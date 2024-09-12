import './App.css';
import { useState } from 'react';

function App() {

  const [counter,setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <div>
        <button onClick={(e)=>setCounter((prev)=>prev+1)}>Increment</button>
        <button onClick={(e)=>setCounter((prev)=>prev-1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
