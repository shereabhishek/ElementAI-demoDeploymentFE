import React, { useState } from "react";
import "./App.css";
import axios from "axios"

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    let data = {
      a: number1,
      b: number2
    };
  
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://0.0.0.0:9000/sum',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
  
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Simple Addition App</h1>
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="Enter first number"
        />
      </div>
      <div>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <button onClick={handleAdd}>Add</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
