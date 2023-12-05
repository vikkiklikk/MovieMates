import React, { useState } from "react";
import BoxShowtime from "./BoxShowtime";

const DropDownTime: React.FC<{onSelectShowtime: (time: string, room: string) => void}> = ({onSelectShowtime}) => {
    const [selectedShowtime, setSelectedShowtime] = useState<{time: string, room: string} | null>(null);

    const showtimes = [
        {time:"18:00", room: "Salur 1"},
        {time:"20:00", room: "Salur 1"},
        {time:"22:00", room: "Lúxus VIP"},
        {time:"22:20", room: "Salur 2"},
    ];

    const handleSelectedShowtime = (time: string, room: string) => {
        setSelectedShowtime({ time, room });
        onSelectShowtime(time, room);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-[21.75rem]">
                <div className="flex justify-center w-[350px] h-[50px] rounded-2xl">
                    {/* Dropdown Menu */}
                    <select
                        className="w-full p-2 bg-green"
                        value={selectedShowtime ? `${selectedShowtime.time}-${selectedShowtime.room}` : ""}
                        onChange={(e) => {
                            const [time, room] = e.target.value.split("-");
                            handleSelectedShowtime(time, room);
                        }}
                    >
                        <option value="" disabled>Select a showtime</option>
                        {showtimes.map((showtime, index) => (
                            <option
                                key={`${showtime.time}-${showtime.room}-${index}`}
                                value={`${showtime.time}-${showtime.room}`}
                            >
                                {`${showtime.time} - ${showtime.room}`}
                            </option>
                        ))}
                    </select>

                    {/* Display selected showtime */}
                    {selectedShowtime && (
                        <div className="mt-4">
                            <BoxShowtime
                                time={selectedShowtime.time}
                                room={selectedShowtime.room}
                                onSelect={onSelectShowtime}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DropDownTime;
