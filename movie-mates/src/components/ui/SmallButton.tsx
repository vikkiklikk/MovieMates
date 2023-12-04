type Props = {
    title:string
    onClick: () => void;
}
const SmallButton: React.FC<Props> = ({title, onClick}) => {
    

    
    return (
        <>
            <button className="rounded-2xl h-12 w-[9.25rem] text-xl text-textColor bg-buttonColor hover:bg-buttonHover" onClick={onClick}>{title}</button>
        </>
    )

}

export default SmallButton;

// to use this button:

//import SmallButton from "./components/ui/SmallButton"; (change to correct path)

// const buttons = [
//    {title: "Your text"},
//   ]

// if you want another button you add here above
// {title: "Another button, your text"},

//  AND in the return

// {buttons.map((button)=>{
//    return <SmallButton title={button.title}></SmallButton>
// })}