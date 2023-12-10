import React from 'react';
import UserV from "../assets/User - Viktor.svg";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

interface ImageType {
  image?: string;
}

const styles = {
  ImageContainer: {
    top: '394px',
    left: '20px',
    width: '64px',
    height: '64px',
    borderRadius: '100000px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: UserV,
};

const Profile: React.FC<ImageType> = (props = defaultProps) => {
  const navigate = useNavigate();

  const goToFriendsPage = () => {
    navigate (`/friendPage`);
};

  return (
    <div>
      <div className="mt-7 mx-7">
        <div className="justify-center flex mt-7 mb-7">
          <p className="font-semibold text-xl">Your Profile</p>
        </div>
        <div>
          <img src={UserV} className="ml-1.5 w-[70px] h-[70px] rounded-full" alt="User" />
        </div>
        <div>
          <p>Viktor Birgisson</p>
        </div>
        <div className="bg-buttonColor text-white rounded-xl mt-5 mr-7 p-2">
          <p>
            DJ. Web Developer and avid movie goer. I like indie flicks and cult
            classics. Werner Herzog, David Fincher and Tarantino are some of my
            all-time favorite directors.
          </p>
        </div>
        <div className="justify-start flex mt-10">
          <h1 className="font-semibold text-xl">Favorites</h1>
        </div>
        <div className="justify-between flex mt-10 ">
          <h1 className="font-semibold text-xl">Friends</h1>
          <button onClick={goToFriendsPage}>
          <h2 className="font-semibold ">See all</h2>
          </button>
        </div>
        <div
          style={{
            ...styles.ImageContainer,
            backgroundImage: `url(${props.image ?? defaultProps.image})`,
          }}
        >
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;

