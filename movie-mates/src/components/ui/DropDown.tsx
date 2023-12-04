import React, { useState } from 'react';

function DropDown() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const options = ['Val 1', 'Val 2', 'Val 3'];

  return (
    <div>
      <div>
        <label htmlFor="velja" className=""></label>
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
          <option value="" disabled>
            Takki
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
