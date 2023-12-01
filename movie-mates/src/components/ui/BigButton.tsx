type Props = {
    title:string
}
const BigButton: React.FC<Props> = ({title}) => {
    

    
    return (
        <>
            <button className={`rounded-2xl h-12 w-[21.75rem] text-xl text-textColor bg-buttonColor hover:bg-buttonHover`}>{title}</button>
        </>
    )

}

export default BigButton;

// to use this button:

// const buttons = [
//    {title: "Your text"},
//   ]

//  AND

// {buttons.map((button)=>{
//    return <BigButton title={button.title}></BigButton>
// })}