import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Footer from "../components/Footer";
import Friend from "../components/Friends";
import UserB from "../assets/User - Bjork.svg";
import UserV from "../assets/User - Viktor.svg";
import UserM from "../assets/User - Michal.svg";
import UserS from "../assets/User - Svanlaug.svg";
import Aaron from "../assets/Aaron.jpg";
import Smari from "../assets/Smari.png";
import Sólveig from "../assets/solveig.png";
import Margrét from "../assets/margret.png";
import Rebekka from "../assets/rebekka.png";
import Peter from "../assets/peter.png";
import Blank from "../assets/blank-profile-picture-973460_960_720.webp";
import Jakub from "../assets/jakub.png";
import Brian from "../assets/blank-profile-picture-973460_960_720.webp";
import IronMan from "../assets/blank-profile-picture-973460_960_720.webp";
import { useNavigate } from "react-router-dom";


const MyFriends = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
   };

  const friendsData = [
    { picture: UserB, name: "Björk" },
    { picture: UserM, name: "Michal" },
    { picture: UserS, name: "Svanlaug" },
    { picture: UserV, name: "Viktor" },
  ];

  const suggestedFriendsData = [
  { picture:Aaron, name: "Aaron"},
  { picture:Smari, name: "Smári"},
  {picture: Sólveig, name: "Sólveig"},
  {picture: Margrét, name: "Margrét"},
  {picture: Rebekka, name: "Rebekka"},
  {picture: Peter, name: "Peter"},
  {picture: Blank, name: "Mr Jones"},
  {picture: Jakub, name: "Jakub"},
  {picture: Brian, name: "Brian"},
  {picture: IronMan, name: "Iron Man"  }
  ];

  const suggestedFriendsRows = [];
const friendsPerRow = 4;

for (let i = 0; i < suggestedFriendsData.length; i += friendsPerRow) {
  const row = suggestedFriendsData.slice(i, i + friendsPerRow);
  suggestedFriendsRows.push(row);
}

  return (
    <div>
      <div className="mt-7 ml-7">
        <FaArrowLeft size={24} onClick={handleBackClick} />
      </div>
      <div>
        <div className="flex items-center justify-center mt-7 text-[12px]">
          <IoIosSearch size={24} />
          <input
            type="text"
            placeholder="Looking for someone special?"
            className="bg-green w-[230px] h-[40px] rounded-2xl ml-2 p-2 outline-none"
          />
        </div>
        <div className="flex justify-center mt-12 mb-5 font-bold text-[24px]">
          <h1>My Friends</h1>
        </div>
        <div className="flex justify-between ml-12 mr-12">
          {friendsData.map((friend, index) => (
            <Friend key={index} picture={friend.picture} name={friend.name} />
          ))}
        </div>
        <div className="flex justify-center mt-12 mb-7 text-[24px]">
          <h1>Suggested Friends</h1>
        </div>
        <div>
    {/* Other content */}
    {suggestedFriendsRows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-between ml-9 mr-9 mt-7">
        {row.map((friend, index) => (
          <Friend key={index} picture={friend.picture} name={friend.name} />
        ))}
      </div>
    ))}
    {/* Other content */}
  </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyFriends;
