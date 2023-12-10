//I need to fix the ticket quantity window
//and I have not done the Movie theater connections
import {FaArrowLeft} from "react-icons/fa6";
import { WiTime8 } from "react-icons/wi";
import { TbMovie } from "react-icons/tb";
import { MdOutlinePlace } from "react-icons/md";
import { IoTodayOutline, IoTicketOutline } from "react-icons/io5";
import { GiTheaterCurtains } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import BigButton from "../components/ui/BigButton";
import { useMovieContext } from "../hooks/MovieContext";

const PaymentSucceed: React.FC = () => {
    const { movieData } = useMovieContext(); // Use the context to access the movie data

    const navigate = useNavigate();
    //navigation for the back arrow, goes back one page
    const handleBackClick = () => {
        navigate(-1);
    };
    //navigation for "Go to wallet" button
    const goToWallet = () => {
         navigate (`/wallet`);
    };
    
       //specifying what happens if no movie is found
    if (!movieData) {
        return <div>Loading...</div>;
      }

    const buttons = [
        {title: "Go to wallet"}
    ];

    return (
        <div>
            <div className="pb-16 pt-7 px-7">
                <div>
                    <FaArrowLeft size={24} onClick={handleBackClick} />
                </div>
                <div className="flex justify-center text-xl font-bold">
                
                <p>Here is your ticket, you can find it later in your wallet</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="mt-3 px-5 py-3 w-[17rem] h-auto border border-[#D9D9D9] rounded-2xl text-xl font-semibold">
                        <div className="flex gap-3 items-center">
                            <div className="shrink-0">
                                <TbMovie size={24}/>
                            </div>
                            <p className="truncate">{movieData.title}</p>
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
                            <p>{movieData.time}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <GiTheaterCurtains size={24}/>
                            <p>{movieData.room}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <IoTicketOutline size={24}/>
                            <p>{movieData.ticketCount} pcs</p>
                        </div>
                    </div>
                </div>
                <div className='mt-7 pt-4'>
                    {buttons.map((button)=>{
                        return <BigButton key={button.title} title={button.title} onClick={goToWallet}></BigButton>})}
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default PaymentSucceed;