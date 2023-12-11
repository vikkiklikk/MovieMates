import "./App.css";
import LandingPage from "./pages/landingpage";
import SignUp from "./pages/SignUp";
import VotingProcess from "./pages/VotingProcess";
import Login from "./pages/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "./pages/HomeScreen";
import SelectedMovie from "./pages/SelectedPage";
import ShowtimesPage from "./pages/ShowtimesPage";
import TicketsConfirmation from "./pages/TicketsConfirmation";
import Payment from "./pages/PaymentScreen";
import PaymentSucceed from "./pages/PaymentSucceed";
import MyFriends from "./pages/FriendPage";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import { MovieProvider } from "./hooks/MovieContext";

const App: React.FC = () => {

  return (
    <MovieProvider>
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
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/friendPage" element={<MyFriends/>}/>
            <Route path="/wallet" element={<Wallet/>}/>
          </Routes>
        </Router>
    </MovieProvider>
  );
}

export default App;

