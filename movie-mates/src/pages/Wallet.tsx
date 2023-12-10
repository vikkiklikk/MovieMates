import Footer from "../components/Footer";
import { WiTime8 } from "react-icons/wi";
import { TbMovie } from "react-icons/tb";
import { MdOutlinePlace } from "react-icons/md";
import { IoTodayOutline, IoTicketOutline } from "react-icons/io5";
import { GiTheaterCurtains } from "react-icons/gi";
import { useMovieContext } from "../hooks/MovieContext";

const Wallet : React.FC = () => {
    const { movieData } = useMovieContext(); // Use the context to access the movie data


    return (
        <div>
            <div className="pb-16 pt-7 px-7">
                <div className="mt-7">
                    <p className="font-semibold text-xl">My wallet</p>
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
            </div>
            <Footer/>
        </div>
    );
};

export default Wallet;