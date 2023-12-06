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
import TicketsConfirmation from "./pages/TicketsConfirmation";
import Payment from "./pages/PaymentScreen";
import PaymentSucceed from "./pages/PaymentSucceed";

const App: React.FC = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/movie/:title" element={<SelectedMovie/>}/>
        <Route path="/movie/:title/showtimes" element={<ShowtimesPage/>}/>
        <Route path="/movie/:title/voting/:time/:room/" element={<VotingProcess/>}/>
        <Route path="/movie/:title/tickets/:time/:room/ticketsConfirmation" element={<TicketsConfirmation/>}/>
        <Route path="/movie/:title/payment" element={<Payment/>}/>
        <Route path="/movie/:title/paymentsucceed" element={<PaymentSucceed/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

