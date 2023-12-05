import React, { useState } from 'react';

function DropDown() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const options = ['Smárabíó', 'SAMbíó Kringlunni', 'SAMbíó Álfabakka', 'SAMbíó Egilshöll', 'SAMbíó Akureyri', 'SAMbíó Keflavík', 'Laugarásbíó', 'Bíó Paradís'];

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
          {/*here is the "button for dropdown*/}
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
