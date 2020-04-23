import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavBar from "./components/layout/AppNavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavBar />
        <h1>Hello</h1>
      </div>
    </Router>
  );
}

export default App;
