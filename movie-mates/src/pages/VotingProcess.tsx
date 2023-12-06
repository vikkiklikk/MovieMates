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
import { LiaUserFriendsSolid } from "react-icons/lia";
import Friend from "../components/ui/Friend";

const TicketsConfirmation: React.FC = () => {
    const { time, room, title } = useParams<{ time: string, room: string, title: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    
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

    const navigate = useNavigate();
    //navigation for the back arrow, goes back one page
    const handleBackClick = () => {
        navigate(-1);
    };
    //navigation for "Confirm" button
    const goToPayment = () => {
        if (movie && movie.title) {
            navigate (`/movie/${movie.title}/payment`);
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

    const friends = [
      {picture:"https://ca.slack-edge.com/T6R96F03V-U05CDBYRJU8-893cd53d9ff5-512", 
      name: "Svanlaug"},
      {picture:"https://ca.slack-edge.com/T6R96F03V-U05CEAJDS3B-ee33dcd79c2a-512", 
      name: "Björk"},
      {picture:"https://ca.slack-edge.com/T6R96F03V-U05C11Z3S0Z-c82e40e29fe0-512", 
      name: "Michal"}
    ]

    return (
        <div>
            <div className="pb-16 pt-7 px-7">
                <div>
                    <FaArrowLeft size={24} onClick={handleBackClick} />
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Suggest a vote to your friends</p>
                    <div className='my-7'>
                        <img className='w-[21.75rem] h-[11.75rem] rounded-2xl object-cover' src={movie.posterPath} alt={movie.title}/>
                    </div>
                    <div className="mt-3 px-5 py-3 w-[17rem] h-auto border border-[#D9D9D9] rounded-2xl text-xl font-semibold">
                        <div className="flex gap-3 place-items-center">
                            <TbMovie/>
                            <p>{movie.title}</p>
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
                        <div className="flex gap-3 place-items-center">
                            <LiaUserFriendsSolid/>
                            <p>Select your friends</p>
                        </div>
                        <div className="flex justify-space-even">
                          {friends.map((friend) =>{
                            return <Friend picture={friend.picture} name={friend.name}></Friend>
                          })}
                          <div className="h-[36px] w-[36px] rounded-full bg-lighBackground">
                            <button className="flex justify-center items-center">+</button>
                          </div>  
                        </div>
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