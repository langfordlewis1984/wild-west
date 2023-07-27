import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [outcome, setOutcome] = useState("");
  const [dummy, setDummy] = useState(0);

  useEffect(() => {
    console.log("useEffect has been triggered");
    handleSurvive();
  }, [dummy]);

  async function handleSurvive(event) {
    const API = "https://wickywickywa.onrender.com/survive";
    const res = await axios.get(API);
    console.log(res.status);
    setOutcome(res.data);

    const firstWord = res.data.replace(/ .*/, "");
    console.log(firstWord);
  }

  function insultJez() {
    setDummy(dummy + 1);
  }

  return <div className="App">{outcome}</div>;
}

export default App;
