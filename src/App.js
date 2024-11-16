import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setVisible(true)}>Click Me</button>

      <div className={`square ${isVisible ? "active" : ""}`}>Square</div>
    </div>
  );
}

export default App;
