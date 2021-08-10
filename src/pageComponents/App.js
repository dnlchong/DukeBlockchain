import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
          <Route path="/about">
            <MainPage />
          </Route>
          <Route path="/team">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}