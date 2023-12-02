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
        <p className="text-[20px] font-bold text-center ">create account</p>
      <div className="flex items-center justify-center h-screen flex-col">
    <div className="bg-buttonColor w-[234px] h-[209px] rounded-[66px]">
    {/* Logo with alt text */}
    <img src={Logo} alt="Logo" className=" justify-center m-auto mt-5"/>
</div>
        <form action="" className="space-y-6" mt-4>
          <div>
            <label htmlFor="" className="text-[20px] ">
              email
            </label>
            <input type="text" className="w-full p-2 border bg-greenBox rounded-xl h-[50px]" />
          </div>
          <div>
            <label htmlFor="" className="text-[20px] ">
              password
            </label>
            <input type="text" className="w-full p-2 border bg-greenBox rounded-xl h-[50px]" />
          </div>
          <div>
            <label htmlFor="" className="text-[20px] ">
              username
            </label>
            <input type="text" className="w-full p-2 border bg-greenBox rounded-xl h-[50px]" />
          </div>
          <div>
            {buttons.map((button) => (
              <div className=""> <BigButton title={button.title} /></div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
