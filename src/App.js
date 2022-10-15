import React from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      Working...<button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
