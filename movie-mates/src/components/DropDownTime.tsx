import React, { useState } from 'react';

// Assuming your DropDown component is in the same file or imported properly
function DropDownTime({ onSelectShowtime }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
    {time:"18:00", room: "Salur 1"},
    {time:"20:00", room: "Salur 1"},
    {time:"22:00", room: "Lúxus VIP"},
    {time:"22:20", room: "Salur 2"},
];

  return (
    <div>
      <div>
        <label htmlFor="velja" className=""></label>
        <select
          name="velja"
          id="velja"
          className={`w-[320px] h-[47px] rounded-xl bg-dropDown ${
            isExpanded ? 'bg-white py-1' : ''
          } outline-none`}
          onClick={() => setIsExpanded(!isExpanded)}
          onChange={(e) => setSelectedValue(e.target.value)}
          onBlur={() => setIsExpanded(false)}
          value={selectedValue}
          style={{ fontSize: '16px', padding: '10px' }} // Adjust the font size and padding as needed
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

const VotingShowtimeContainer = ({ showtimes }) => {
  const onSelectShowtime = (time, room) => {
    // Handle the selected showtime
    console.log(`Selected showtime: ${time} in room ${room}`);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[21.75rem]">
        {/* Here I have to connect to kvikmyndir API or hardcode it myself if I don't get the info */}
        <div className="flex justify-center w-[21.75rem] h-auto border border-[#D9D9D9] shadow-md rounded-2xl">
          <div className="grid grid-cols-3 gap-5 py-4">
            {/* I need to add "key" prop */}
            {showtimes.map((showtime, index) => {
              const key = `${showtime.time}-${showtime.room}-${index}`;
              return (
                <BoxShowtime
                  key={key}
                  time={showtime.time}
                  room={showtime.room}
                  onSelect={() => onSelectShowtime(showtime.time, showtime.room)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Include the DropDown component */}
      <DropDown onSelectShowtime={onSelectShowtime} />
    </div>
  );
};

export default DropDownTime;
