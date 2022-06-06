import "./App.scss";
import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/video/:videoId" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
