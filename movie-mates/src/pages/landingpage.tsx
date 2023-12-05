import BigButton from "../components/ui/BigButton";
import Logo from "../assets/Logo - w text - light.svg"; 
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navitage = useNavigate();

  const goToSignUp = () => {
    navitage('/signup');
  };

  const goToHome = () => {
    navitage('/home');
  };

  const goToLogIn = () => {
    navitage('/login');
  };

  const buttons = [
    { title: "Register", onClick: goToSignUp },
    { title: "Take a look", onClick: goToHome }
  ];

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="bg-buttonColor w-[234px] h-[209px] rounded-[66px]">
        {/* Logo with alt text */}
        <img src={Logo} alt="Logo" className=" justify-center m-auto mt-5"/>
      </div>
      {/* Text and buttons under the logo */}
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-[20px] text-center mt-10">Discover movies and share with friends!</h1>
        <p className="mt-6 mb-10 text-[14px]" >Vote for a movie tonight</p>

        {/* Buttons */}
        {buttons.map((button) => (
          <div className="item-center pt-3" key={button.title}> 
            <BigButton title={button.title} onClick={button.onClick}/>
          </div>
        ))}
        
        <p className="absolute bottom-7 underline text-[14px]" onClick={goToLogIn}>Already a member?</p>
      </div>
    </div>
  );
}


export default LandingPage;
