import BigButton from "../components/ui/BigButton";
import Logo from "../assets/Logo - w text - dark.svg"; 
//Lógóið er svart því bakgrunnurinn er enn hvítur, vantar tailwind.


const LandingPage = () => {
const buttons = [
  { title: "Register" },
  { title: "Take a look" }
];


return (
  <div className="">
    {/* Logo with alt text */}
    <img src={Logo} alt="Logo" className="logo" />

    {/* Text under the logo */}
    <div className="text-under-logo">
      <h1>Discover movies and share with friends!</h1>
      <p>Vote for a movie tonight</p>
    </div>

    {/* Buttons */}
    {buttons.map((button) => (
      <BigButton title={button.title} key={button.title} />
    ))}
    <p>Already a member?</p>
  </div>
);
};

export default LandingPage;
