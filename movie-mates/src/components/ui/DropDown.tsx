import React, { useState } from 'react';

function DropDown() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
    "Smárabíó",
    "Sambíó Kringlunni",
    "Sambíó Egillshöll",
    "Sambíó Keflavík",
    "Sambíó Akureyri",
    "Laugarásbíó",
    "Bíó Paradís"
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

export default DropDown;

