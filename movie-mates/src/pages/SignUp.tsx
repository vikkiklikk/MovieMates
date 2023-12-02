import { useState } from "react";
import Logo from "../assets/Logo - w text - light.svg";
import BigButton from "../components/ui/BigButton";

function SignUp() {
  const [name, setName] = useState('prufa');
  const buttons = [
    { title: "Sign Up" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="mx-auto w-[320px] h-[50px]">
        <div className=" bg-buttonColor w-[234] h-[209]"> <img src={Logo} alt="Logo"/></div>
        <form action="" className="space-y-6">
          <div>
            <label htmlFor="" className="text-[20px] ">
              Email
            </label>
            <input type="text" className="w-full p-2 border bg-greenBox" />
          </div>
          <div>
            <label htmlFor="" className="text-[20px] ">
              Password
            </label>
            <input type="text" className="w-full p-2 border bg-greenBox" />
          </div>
          <div>
            <label htmlFor="" className="text-[20px] ">
              Username
            </label>
            <input type="text" className="w-full p-2 border bg-greenBox" />
          </div>
          <div>
            {buttons.map((button) => (
              <BigButton title={button.title} />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
