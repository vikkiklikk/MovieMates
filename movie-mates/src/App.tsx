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
import VotingShowtimeContainer from "./components/VotingShowtimeContainer";
import DropDownTime from "./components/DropDownTime";

const App: React.FC = () => {

  return (
    <>
    <VotingShowtimeContainer/>
    <DropDownTime/>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/movie/:title" element={<SelectedMovie/>}/>
        <Route path="/movie/:title/showtimes" element={<ShowtimesPage/>}/>
        <Route path="/movie/:title/voting" element={<VotingProcess/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

