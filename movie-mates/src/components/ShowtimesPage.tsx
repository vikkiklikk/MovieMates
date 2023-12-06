import {FaArrowLeft} from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import TheaterContainer from "./TheaterContainer";
import Footer from "./Footer";
import SmallButton from "./ui/SmallButton";
import { useEffect, useState } from "react";
import { Movie } from "../types";
import { fetchMovieData } from "../api/api-tmdb";

type Showtime = {
    time: string;
    room: string;
};

const ShowtimesPage: React.FC = () => {
    const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);
    const [movie, setMovie] = useState<Movie | null>(null);
    const { title } = useParams<{ title: string }>(); // Retrieve the movie title of URL parameters

        // fetching the data by the title of the movie
    useEffect(() => {
        if (title) {
          fetchMovieData(title).then(data => {
            if(data) {
                setMovie(data);
            } else {
                console.log("No movie found for the given title");
            }
          });
        }
      }, [title]);
    
    const navigate = useNavigate ();
    //navigation for the back arrow, goes back one page
    const handleBackClick = () => {
        navigate (-1);
    };
    //navigation for "buy tickets" button
    const navigateToBuyTickets = () => {
        if (selectedShowtime && movie && movie.title) {
            navigate(`/movie/${movie.title}/tickets/${selectedShowtime.time}/${selectedShowtime.room}/ticketsConfirmation`);
        } else {// the case where no showtime is selected
        }
    };
    //    //navigation for "send to vote" button
    const navigateToVoting = () => {
        if (selectedShowtime && movie && movie.title) {
            navigate(`/movie/${movie.title}/voting/${selectedShowtime.time}/${selectedShowtime.room}/`);
        } else {// the case where no showtime is selected
        }
    };

    //specifying what happens if no movie is found
    if (!movie) {
        return <div>Loading...</div>;
      }

    const Buttons = [
        {title: "Send to vote", onclick: navigateToVoting},
        {title: "Buy tickets", onclick: navigateToBuyTickets}
    ];

    const handleSelectedShowtime = (time: string, room:string) => {
        setSelectedShowtime({ time, room});
    };

    return (
        <div>
            <div className="pb-16 pt-7 px-7">
                <div>
                    <FaArrowLeft size={24} onClick={handleBackClick} />
                </div>
                <div className="flex justify-center">
                    <h3 className='text-xl font-bold '>{movie.title}</h3>
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