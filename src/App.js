import './App.css';
import {useState} from 'react'

function App() {
  const [Upper,setUpper] = useState(0)
  const [Lower,setLower] = useState(0)
  const [Age,setAge] = useState(0)

  function laske(e){
    e.preventDefault()
    const ala = (220-Age) * 0.65
    const yla = (220-Age) * 0.85
    setLower (ala)
    setUpper(yla)
  }


  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske}>
        <div>
        <label>Age</label>
        <input value={Age} onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{Lower.toFixed(0) +"-" + Upper.toFixed(0)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
    
  );
}

export default App;
