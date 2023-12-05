import React, { useState } from 'react';
import VotingShowtimeContainer from './VotingShowtimeContainer';

function DropDownTime() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
    const options = [];

  const handleSelectShowtime = (time, room) => {
    // Handle the selected showtime
    console.log(`Selected showtime: ${time} in room ${room}`);
  };

  return (
    <div>
      <div>
        <div><label htmlFor="velja" className="">Movie</label></div>
        <select
          name="velja"
          id="velja"
          className={`w-[320px] h-[47px] rounded-xl bg-dropDown ${
            isExpanded ? 'bg-white py-1' : ''
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
          onChange={(e) => setSelectedValue(e.target.value)}
          onBlur={() => setIsExpanded(false)}
          value={selectedValue}
        >
            {/*here is the dropdown menu*/}
          <option value="" disabled></option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Include the VotingShowtimeContainer component */}
      {isExpanded && (
        <VotingShowtimeContainer onSelectShowtime={handleSelectShowtime} />
      )}
    </div>
  );
}

export default DropDownTime;
