import { useState } from "react";

type Props = {
    time:string;
    room:string;
    onSelect: (time: string, room: string) => void;
};

const BoxShowtime: React.FC<Props> = ({time, room, onSelect}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(prevState => {
            const newSelectedState = !prevState;
            console.log(`Box clicked. New selected state: ${newSelectedState}`); // Debugging
            if (newSelectedState) {
                onSelect(time, room);
            }
            return newSelectedState;
        });
    };

    //const boxStyle = {
    //    ...isSelected ? {border: 'red'} : {border: 'green'}
    //}

    return (
        <div className={`w-[5.25rem] h-[58px] rounded-2xl overflow-hidden border ${isSelected ? 'border-[#EA7101] bg-opacity-51' : 'border-buttonColor'}`} 
        onClick={handleClick}>
           <div className="h-[20px]  bg-textColor flex justify-center text-textColorDark">
            {time}
           </div>
           <div className={`h-[38px] flex justify-center text-textColor ${isSelected ? 'bg-[#EA7101] bg-opacity-51' : 'bg-buttonColor'}`}>
            {room}
           </div>
        </div>
    );
};

export default BoxShowtime;

//This is a little box that shows what time and in what room the movie is being shown