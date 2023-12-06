// I still need to get movie title to go from selectedPage - to - showtimesPage and to this page
//I need to fix the ticket quantity window
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

    const handleTiketChange = (newTicketCount: number) => {
        setTickets (newTicketCount);
    };

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    const goToPayment = () => {
        navigate ('/movie/&{title}/Payment');
       };

       const buttons = [
        {title: "Confirm"}
    ];

    return (
        <div>
            <div className="pb-16 pt-7 px-7">
                <div>
                    <FaArrowLeft onClick={handleBackClick} />
                </div>
                <div className="flex justify-center text-xl font-bold">
                <h3>Your selection</h3>
                </div>
                <div className="flex flex-col items-center">
                    <div className='my-7'>
                        <img className='w-[21.75rem] h-[11.75rem] rounded-2xl object-cover' src="https://kvikmyndir.is/images/poster/x16119_500.jpg.pagespeed.ic.sA04q_-DOC.webp" alt="movietitle"/>
                    </div>
                    <div className="mt-3 px-5 py-3 w-[17rem] h-auto border border-buttonColor rounded-2xl text-xl font-semibold">
                        <div className="flex gap-3 place-items-center">
                            <TbMovie/>
                            <p>movie title</p>
                        </div>
                        <div className="flex gap-3 place-items-center">
                            <MdOutlinePlace/>
                            <p>Cinema</p>
                        </div>
                        <div className="flex gap-3 place-items-center">
                            <IoTodayOutline/>
                            <p>Date</p>
                        </div>
                        <div className="flex gap-3 place-items-center">
                            <WiTime8/>
                            <p>{time}</p>
                        </div>
                        <div className="flex gap-3 place-items-center">
                            <GiTheaterCurtains/>
                            <p>{room}</p>
                        </div>
                    </div>
                    <div className="mt-7 ">
                        <p>How many tickets do you want</p>
                        <div className="border border-buttonColor rounded-2xl flex justify-center">
                            <TicketSelector onTicketChange={handleTiketChange}/>
                        </div>
                        <p>Total: {tickets}</p>
                    </div>
                </div>
                <div className='mt-7 pt-4'>
                        {buttons.map((button)=>{
                            return <BigButton key={button.title} title={button.title} onClick={goToPayment}></BigButton>})}
                    </div>
            </div>
            <Footer/>
        </div>

    );
};

export default TicketsConfirmation;