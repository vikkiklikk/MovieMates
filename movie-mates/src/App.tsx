import "./App.css";
import LandingPage from "./pages/landingpage";
import SignUp from "./pages/SignUp";
import VotingProcess from "./pages/VotingProcess";
import Login from "./pages/LoginScreen";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "./pages/HomeScreen";
import SelectedMovie from "./components/SelectedPage";
import ShowtimesPage from "./components/ShowtimesPage";
import Image from "./pages/Profile";

const App: React.FC = () => {

  return (
  <div>
    <Image/>
  </div>
  );
}

export default App;

