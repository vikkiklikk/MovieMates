import { useState } from "react";

type Props = {
    time:string;
    room:string;
    onSelect: (time: string, room: string) => void;
};

const BoxShowtime: React.FC<Props> = ({time, room, onSelect}) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        const newSelectedState = !isSelected
        setIsSelected(newSelectedState);
        if (newSelectedState) {
            onSelect(time, room);
        }
    };

    return (
        <div className="w-[5.25rem] h-[58px] border rounded-2xl overflow-hidden border-buttonColor" 
        onClick={handleClick}>
           <div className="h-[20px]  bg-textColor flex justify-center text-textColorDark">
            {time}
           </div>
           <div className="h-[38px] flex justify-center text-textColor bg-buttonColor">
            {room}
           </div>
        </div>
    );
};

export default BoxShowtime;

//This is a little box that shows what time and in what room the movie is being shown