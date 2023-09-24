import "./App.css";
import React  from "react";
import KanbanBoard from "./components/Board/Board";

function App() {
  return (
    <div className="App">
      <header className="app-header">
      </header>
      <main className="app-main">
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;
