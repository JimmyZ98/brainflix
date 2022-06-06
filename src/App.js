import "./App.scss";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/video/:videoId" component={HomePage} />
          <Route path="/upload" component={UploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
