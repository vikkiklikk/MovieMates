type Props = {
    time:string;
    room:string;
    isSelected: boolean;
    onSelect: (time: string, room: string) => void;
};

const BoxShowtime: React.FC<Props> = ({time, room, isSelected, onSelect}) => {
   
    const handleClick = () => {
        onSelect(time, room); //the parent component will be notified of selection
    };

    return (
        <div className={`w-[5.25rem] h-[58px] rounded-2xl overflow-hidden border ${isSelected ? 'border-boxHover' : 'border-buttonColor'}`} 
        onClick={handleClick}>
           <div className="h-[20px]  bg-textColor flex justify-center text-textColorDark">
            {time}
           </div>
           <div className={`h-[38px] flex justify-center text-textColor ${isSelected ? 'bg-boxHover' : 'bg-buttonColor'}`}>
            {room}
           </div>
        </div>
    );
};

export default BoxShowtime;

//This is a little box that shows what time and in what room the movie is being shown