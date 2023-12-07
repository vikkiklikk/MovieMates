//component for friends bubble with image and name
type Props = {
    picture:string,
    name:string
};

const Friend: React.FC<Props> = ({picture, name}) => {

    return (
        <div className="flex flex-col place-items-center">
        <button className="h-[36px] w-[36px] rounded-full">
            <img className="rounded-full" src={picture} alt={name}/></button>
        <p>{name}</p>
        </div>
    );
};

export default Friend;