//I have not done the Movie theater connections
import {FaArrowLeft} from "react-icons/fa6";
import { WiTime8 } from "react-icons/wi";
import { TbMovie } from "react-icons/tb";
import { MdOutlinePlace } from "react-icons/md";
import { IoTodayOutline } from "react-icons/io5";
import { GiTheaterCurtains } from "react-icons/gi";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import BigButton from "../components/ui/BigButton";
import { Movie } from "../types";
import { useEffect, useState } from "react";
import { fetchMovieData } from "../api/api-tmdb";
import TicketSelector from "../components/TicketSelectorProps";

const TicketsConfirmation: React.FC = () => {
    const { time, room, title } = useParams<{ time: string, room: string, title: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [tickets, setTickets] = useState(1);
  
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

    //function for the ticket box, where you can choose more of less tickets
    const handleTiketChange = (newTicketCount: number) => {
        setTickets (newTicketCount);
    };

    //creating a price for one ticket
    const totalAmount = tickets * 1290;

    const navigate = useNavigate();
    //navigation for the back arrow, goes back one page
    const handleBackClick = () => {
        navigate(-1);
    };
    //navigation for "Confirm" button
    const goToPayment = () => {
        if (movie && movie.title) {
            navigate (`/movie/${movie.title}/payment`, {state: {total: totalAmount}});
        } else { //the case where no movie is found
        }
    };
    
       //specifying what happens if no movie is found
    if (!movie) {
        return <div>Loading...</div>;
      };

    const buttons = [
        {title: "Confirm"}
    ];

    return (
        <div>
            <div className="pb-16 pt-7 px-7">
                <div>
                    <FaArrowLeft size={24} onClick={handleBackClick} />
                </div>
                <div className="flex flex-col items-center">
                    <div className='my-7'>
                        <img className='w-[21.75rem] h-[11.75rem] rounded-2xl object-cover' src={movie.posterPath} alt={movie.title}/>
                    </div>
                    <div className="mt-3 px-5 py-3 w-[17rem] h-auto border border-[#D9D9D9] rounded-2xl text-xl font-semibold">
                        <div className="flex gap-3 items-center">
                            <div className="shrink-0">
                                <TbMovie size={24}/>
                            </div>
                            <p className="truncate">{movie.title}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <MdOutlinePlace size={24}/>
                            <p>Cinema</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <IoTodayOutline size={24}/>
                            <p>Date</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <WiTime8 size={24}/>
                            <p>{time}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <GiTheaterCurtains size={24}/>
                            <p>{room}</p>
                        </div>
                    </div>
                    <div className="mt-7 flex flex-col items-center gap-2">
                        <p>How many tickets do you want</p>
                        <TicketSelector onTicketChange={handleTiketChange}/>
                        <p className="font-semibold">Total {tickets * 1290} kr.</p>
                    </div>
                </div>
                <div className='mt-4 pt-4'>
                    {buttons.map((button)=>{
                        return <BigButton key={button.title} title={button.title} onClick={goToPayment}></BigButton>})}
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default TicketsConfirmation;