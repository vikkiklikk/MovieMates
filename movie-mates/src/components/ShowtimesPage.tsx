import BoxShowtime from "./BoxShowtime";
import {FaArrowLeft} from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const ShowtimesPage: React.FC = () => {

    const showtimes = [
        {time:"18:00", room: "Salur 1"},
        {time:"20:00", room: "Salur 1"},
        {time:"22:00", room: "Lúxus VIP"},
        {time:"22:20", room: "Salur 2"},
    ];

    const navigate = useNavigate ();
    const handleBackClick = () => {
        navigate (-1);
    }

    return (
        <div>
            <FaArrowLeft onClick={handleBackClick} />
            {showtimes.map((showtime)=>{
                return ( <BoxShowtime 
                    
                    time={showtime.time} 
                    room={showtime.room}/>
                );
            })}
            
        <p>testing</p>
        </div>

    );
};

export default ShowtimesPage;