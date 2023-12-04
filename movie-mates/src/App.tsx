import "./App.css";
import Login from "./pages/LoginScreen";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "./pages/HomeScreen";
import SelectedMovie from "./components/SelectedPage";
import ShowtimesPage from "./components/ShowtimesPage";



const App: React.FC = () => {

  return (
    <>
    <Login/>
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/movie/:title" element={<SelectedMovie/>}/>
        <Route path="/movie/:title/showtimes" element={<ShowtimesPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

