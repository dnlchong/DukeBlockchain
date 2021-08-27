import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import Team from "./Team";

export default function App() {
  return (
    <MainPage/>
  );
}