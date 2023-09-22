import { useState } from 'react';
import '../App.css';


function Testing() {
  const [count, setCount] = useState(0);

  return (
    
    <div className="app">
     <button onClick={() => count && setCount(prev => prev -1)}>-</button>
     <span>{count}</span>
     <button onClick={() => setCount(e=> e+1)}>+</button>
     
    </div>
    
  );
}

export default Testing;
