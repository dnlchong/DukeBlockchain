import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import Team from "./Team";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/team">
            <Team />
          </Route>
          
          <Route path="/about">
            <MainPage />
          </Route>
          
          <Route path="/">
            <MainPage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}