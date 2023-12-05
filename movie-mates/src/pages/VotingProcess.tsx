import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import SmallButton from "../components/ui/SmallButton";
import DropDown from "../components/ui/DropDown";


const VotingProcess = () => {

    return (
      <div>

        <div className="pt-7 pl-7"> <FaArrowLeft/> </div>
        <div className="text-center font-bold"><p>suggest a vote</p></div>

        <div>
    <h3> HALLÓ </h3>
        </div>
        {/* Add the footer here */}
        <div className="justify-center flex pt-10"> <SmallButton title="Submit" /></div>
        <Footer/>
      </div>
    );
  };
  
  export default VotingProcess;