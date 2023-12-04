type Props = {
    title:string
    onClick: () => void;
}
const BigButton: React.FC<Props> = ({title, onClick}) => {
    

    
    return (
        <>
            <button className="rounded-2xl h-12 w-[21.75rem] text-xl text-textColor bg-buttonColor hover:bg-buttonHover" onClick={onClick}>{title}</button>
        </>
    )

}

export default BigButton;

// to use this button:
//import BigButton from "./components/ui/BigButton"; (change to correct path)
// const buttons = [
//    {title: "Your text"},
//   ]
// if you want another button you add here above
// {title: "Another button, your text"},
//  AND in the return
// {buttons.map((button)=>{
//    return <BigButton title={button.title}></BigButton>
// })}