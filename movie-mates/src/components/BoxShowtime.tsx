type Props = {
    time:string;
    room:string;
}

const BoxShowtime: React.FC<Props> = ({time, room}) => {
 
    return (
        <div className="w-[5.25rem] h-[58px] border border-buttonColor rounded-2xl overflow-hidden">
           <div className="h-[20px]  bg-textColor flex justify-center text-textColorDark">
            {time}
           </div>
           <div className="h-[38px] bg-buttonColor flex justify-center text-textColor">
            {room}
           </div>
        </div>
    );
};

export default BoxShowtime;