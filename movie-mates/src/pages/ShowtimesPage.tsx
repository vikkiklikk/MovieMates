import {FaArrowLeft} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import TheaterContainer from "../components/TheaterContainer";
import Footer from "../components/Footer";
import SmallButton from "../components/ui/SmallButton";
import { useState } from "react";
import { useMovieContext } from "../hooks/MovieContext";

type Showtime = {
    time: string;
    room: string;
};

const ShowtimesPage: React.FC = () => {
    const {movieData, updateMovieData} = useMovieContext();
    const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);
    
    const navigate = useNavigate ();
    //navigation for the back arrow, goes back one page
    const handleBackClick = () => {
        navigate (-1);
    };
    //navigation for "buy tickets" button
    const navigateToBuyTickets = () => {
        if (selectedShowtime) {
            // updating movie data in the context with selected showtime
            updateMovieData({ time: selectedShowtime.time, room: selectedShowtime.room});
            navigate(`/movie/${movieData.title}/tickets/${selectedShowtime.time}/${selectedShowtime.room}/ticketsConfirmation`);
        } 
    };
    //navigation for "send to vote" button
    const navigateToVoting = () => {
        if (selectedShowtime) {
            // updating movie data in the context with selected showtime
            updateMovieData({ time: selectedShowtime.time, room: selectedShowtime.room});
            navigate(`/movie/${movieData.title}/voting/${selectedShowtime.time}/${selectedShowtime.room}/`);
        }
    };

    const Buttons = [
        {title: "Send to vote", onclick: navigateToVoting},
        {title: "Buy tickets", onclick: navigateToBuyTickets}
    ];

    const handleSelectedShowtime = (time: string, room:string) => {
        setSelectedShowtime({ time, room});
    };

    //specifying what happens if no movie is found
    if (!movieData) {
        return <div>Loading...</div>;
      }

    return (
        <div>
            <div className="pb-16 pt-7 px-7">
                <div>
                    <FaArrowLeft size={24} onClick={handleBackClick} />
                </div>
                <div className="flex justify-center">
                    <h3 className='text-xl font-bold '>{movieData.title}</h3>
                </div>
                <div className="my-5 flex justify-center">
                    <p>here come the dates</p>
                </div>
                <TheaterContainer onSelectShowtime={handleSelectedShowtime} />
                <div className=" mt-7 flex justify-between">
                    {Buttons.map((button)=>{
                        return <SmallButton key={button.title} title={button.title} onClick={button.onclick} ></SmallButton>
                    })}
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default ShowtimesPage;