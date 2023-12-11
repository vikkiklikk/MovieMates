//import { useState } from "react";
import BoxShowtime from "./BoxShowtime";

//type Showtime = {
//    time: string;
//    room: string;
//};

const VotingShowtimeContainer: React.FC<{
  onSelectShowtime: (time: string, room: string) => void;
}> = ({ onSelectShowtime }) => {
  //const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);

  //const handleSelectedShowtime = (time: string, room: string) => {
  //    setSelectedShowtime ({time, room});
  //};

  ////dropdown settings-------------------------

  const showtimes = [
    { time: "18:00", room: "Salur 1" },
    { time: "20:00", room: "Salur 1" },
    { time: "22:00", room: "Lúxus VIP" },
    { time: "22:20", room: "Salur 2" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-[21.75rem]">
        {/*Here I have to connect to kvikmyndir API or hardcode it myself if I don't get the info */}
        <div className="flex justify-center w-[21.75rem] h-auto border border-[#D9D9D9] shadow-md rounded-2xl">
          <div className=" grid grid-cols-3 gap-5 py-4 ">
            {/*I need to add "key" prop */}
            {showtimes.map((showtime, index) => {
              const key = `${showtime.time}-${showtime.room}-${index}`;
              return (
                <BoxShowtime
                  key={key}
                  time={showtime.time}
                  room={showtime.room}
                  onSelect={onSelectShowtime}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingShowtimeContainer;
