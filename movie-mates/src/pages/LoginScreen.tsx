//import React, { useState } from "react";
import BigButton from "../components/ui/BigButton";
import Logo from "../assets/Logo - w text - light.svg"
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; 

function Login() {
  //const [name, setName] = useState('login');

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
      <div className="flex items-center justify-center h-screen flex-col">
        <div  className="font-bold text-center mt-10"> 
          <p> log into your account</p>
        </div>
        <div className=" bg-buttonColor  w-[234px] h-[209px] rounded-[66px]">
          <img src={Logo} alt="Logo" className=" justify-center m-auto mt-5"/>
        </div>
        <div> 
          <form action="" className="space-y-6"> 
            <div className="flex flex-col">
              <label htmlFor="text" className="mb-1">email</label>
              <input
                type="email"
                id="email"
                className="w-[320px] h-[50px] rounded-2xl bg-green"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1">password</label>
              <input
                type="password"
                id="password"
                className="w-[320px] h-[50px] rounded-2xl bg-green"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4"></input>
                <label htmlFor="" className="ml-2"> Keep me signed in</label>
              </div>
            </div>
            {/* button */}
            <div>
              <div className="justify-center pt-10"> <BigButton title="Login" onClick={goToHome} /></div>
              <div> <a href="" className="underline" > Forgot your password?</a></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;