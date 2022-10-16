import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

const tg = window.Telegram.WebApp;

function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
