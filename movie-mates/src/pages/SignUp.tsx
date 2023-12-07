//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo - w text - light.svg";
import BigButton from "../components/ui/BigButton";
import { FaArrowLeft } from "react-icons/fa"; 

function SignUp() {
  //const [name, setName] = useState('prufa');

  const navigate = useNavigate ();

  const goToHome = () => {
    navigate('/home');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="pt-7 pl-7"> <FaArrowLeft size={24} onClick={handleBackClick} /></div>
      <div className="flex flex-col justify-center items-center"><p className="text-[20px] font-bold text-center mt-10 ">create account</p></div>
      <div className="flex items-center justify-center flex-col">
        <div className="bg-buttonColor w-[234px] h-[209px] rounded-[66px] mt-5 mb-5">
          {/* Logo with alt text */}
          <div className="flex flex-col justify-center items-center"><img src={Logo} alt="Logo" className=" justify-center m-auto mt-5"/></div>
        </div>
        <div className="items-center justify-center flex flex-col">
          <form action="" className="space-y-6" mt-4>
            <div className="flex flex-col">
              <label htmlFor="text" className="mb-1">email</label>
              <input
                type="email"
                id="email"
                className="w-[350px] h-[50px] rounded-2xl bg-greenBox"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1">password</label>
              <input
                type="password"
                id="password"
                className="w-[350px] h-[50px] rounded-2xl bg-greenBox"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text" className="mb-1">username</label>
              <input
                type="username"
                id="username"
                className="w-[350px] h-[50px] rounded-2xl bg-greenBox"
              />
            </div>
            <div className="justify-center pt-10"> <BigButton title="Sign Up" onClick={goToHome} /></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
