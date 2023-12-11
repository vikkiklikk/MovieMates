import { FaRegUser } from "react-icons/fa6";
import { TbMovie } from "react-icons/tb";
import { IoTicketOutline, IoStatsChartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate (`/home`);
  };

  const goToProfilePage = () => {
    navigate (`/profile`);
  };

  const goToWallet = () => {
    navigate (`/wallet`);
  };
  
  return (
    <div className="fixed bottom-0 left-0 w-screen h-[58px] bg-[#202A25] bg-opacity-95 p-2 flex justify-evenly items-center">
      <TbMovie size={36} color="white" onClick={goToHomePage} />
      <IoStatsChartOutline size={30} color="white" />
      <IoTicketOutline size={30} color="white" onClick={goToWallet} />
      <FaRegUser size={30} color="white" onClick={goToProfilePage} />
    </div>
  );
};

export default Footer;
