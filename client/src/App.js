import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [outcome, setOutcome] = useState("");

  async function handleSurvive(event) {
    const API = "http://localhost:8080/survive";
    const res = await axios.get(API);
    console.log(res);
    setOutcome(res.data);
  }
  return (
    <div className="App">
      <h1>placeholder</h1>
      <button onClick={handleSurvive}>Brave the Oregon Trail!</button>
    </div>
  );
}

export default App;
