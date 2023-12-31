import { useState } from 'react';
import './App.css';
import Testing from './Components/testing';


function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div className="app">
     <button onClick={() => count && setCount(prev => prev -1)}>-</button>
     <span>{count}</span>
     <button onClick={() => setCount(e=> e+1)}>+</button>
     <Testing/>
    </div>
    
  );
}

export default App;
