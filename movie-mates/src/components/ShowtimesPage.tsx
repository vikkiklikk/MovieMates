import {FaArrowLeft} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import TheaterContainer from "./TheaterContainer";
import Footer from "./Footer";
import SmallButton from "./ui/SmallButton";
import { useState } from "react";



const ShowtimesPage: React.FC = () => {

    const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);

    const navigate = useNavigate ();
    const handleBackClick = () => {
        navigate (-1);
    };

    const navigateToBuyTickets = () => {
        if (selectedShowtime) {
            navigate(`/buy-tickets/${selectedShowtime.time}/${selectedShowtime.room}`);
            // Or use state to pass the selectedShowtime object
        } else {
            // Handle the case where no showtime is selected
        }
    };

    const Buttons = [
        {title: "Send to vote",
        onclick: () => navigate('/')
    },
        {title: "Buy tickets",
        onclick: navigateToBuyTickets
    }
    ];

    const handleSelectedShowtime = (time: string, room:string) => {
        setSelectedShowtime({ time, room});
    };

    return (
        <div>
            <div className="pb-16 pt-7 px-7">
                <div>
                    <FaArrowLeft onClick={handleBackClick} />
                </div>
                <div className="flex justify-center text-xl font-bold ">
                    <p>Title of the movie</p>
                </div>
                <div className="flex justify-center">
                    <p>here come the dates</p>
                </div>
                
                <TheaterContainer onSelectedShowtime={handleSelectedShowtime} />
                <div className="flex justify-between">
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