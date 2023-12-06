import { useState } from "react";
import BoxShowtime from "./BoxShowtime";

type Showtime = {
    time: string;
    room: string;
};

const TheaterContainer: React.FC<{onSelectShowtime: (time: string, room: string) => void}> = ({onSelectShowtime}) => {
    const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);

    //Making the selection function so that only one box can be chosen, and you can deselect it
    const handleSelectedShowtime = (time: string, room: string) => {
        if (selectedShowtime && selectedShowtime.time === time && selectedShowtime.room === room) {
            setSelectedShowtime(null);
            onSelectShowtime ('','')
        } else {
            setSelectedShowtime({ time, room });
            onSelectShowtime(time, room);
        }
    };

    //using props form "BoxShowtime" to make boxes
    const showtimes = [
        {time:"18:00", room: "Salur 1"},
        {time:"20:00", room: "Salur 1"},
        {time:"22:00", room: "Lúxus VIP"},
        {time:"22:20", room: "Salur 2"},
    ];

    return (
        <div className="flex flex-col items-center">
            <div className="w-[21.75rem]">
                {/*Here I have to connect to kvikmyndir API or hardcode it myself if I don't get the info */}
                <h3>SAMbíó Álfabakka</h3>
                <div className="flex justify-center w-[21.75rem] h-auto border border-[#D9D9D9] rounded-2xl">
                    <div className=" grid grid-cols-3 gap-5 py-4 ">
                        {showtimes.map((showtime, index)=>{
                            {/*Here "const isSelected" is to make shure that you can only choose one box*/}
                            const isSelected = selectedShowtime?.time === showtime.time && selectedShowtime?.room === showtime.room;
                            return ( <BoxShowtime 
                                key={`${showtime.time}-${showtime.room}-${index}`}
                                time={showtime.time} 
                                room={showtime.room}
                                isSelected={isSelected}
                                onSelect={handleSelectedShowtime}/> 
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TheaterContainer;