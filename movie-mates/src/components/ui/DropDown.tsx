import React from "react";

const DropDown: dropdown = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div>
        <button className="bg-dropDown w-[320px] h-[47px] text-lightText"></button>
        </div>
    );
};

export default DropDown