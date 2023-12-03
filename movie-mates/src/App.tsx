import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "./pages/HomeScreen";
import SelectedMovie from "./components/SelectedPage";



const App: React.FC = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/movie/:title" element={<SelectedMovie/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

