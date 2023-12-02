import React, { useState } from "react";

const DropDown = ( { options} : {options: string[]}) => {
    const [isExpanded, setIsExpanded] = useState(false)
    
    
    return (
        <div>
        <button onClick={() => setIsExpanded(true)} 
        className="bg-dropDown w-[320px] h-[47px] rounded-xl text-lightText">Takki</button>
        {isExpanded && 
        <div className="bg-white border py-1">
            {options.map(options =>
               <div className="hover:bg-lightText px-2 py-1" 
               key={options}>{options} 
               </div>
               )}
        </div>
        }
        </div>
    );
};

export default DropDown