type Props = {
  time: string;
  room: string;
  onSelect: (time: string, room: string) => void;
  isSelected?: boolean; // Make isSelected optional
};

const BoxShowtime: React.FC<Props> = ({ time, room, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(time, room);
  };

  return (
    <div
      className={`w-[5.25rem] h-[58px] rounded-2xl overflow-hidden border ${
        isSelected ? "border-boxHover" : "border-buttonColor"
      }`}
      onClick={handleClick}
    >
      <div className="h-[20px]  bg-textColor flex justify-center text-textColorDark">
        {time}
      </div>
      <div
        className={`h-[38px] flex justify-center text-textColor ${
          isSelected ? "bg-boxHover" : "bg-buttonColor"
        }`}
      >
        {room}
      </div>
    </div>
  );
};

export default BoxShowtime;
