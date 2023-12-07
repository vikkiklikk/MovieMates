import React from 'react';
import UserV from "../assets/User - Viktor.svg";
import { FaArrowLeft } from "react-icons/fa";
import Footer from '../components/Footer';

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

const Image: React.FC<ImageType> = (props) => {
  return (
    <div className="mt-7 ml-7">
      <div className="pt-7 pl-7">
        <FaArrowLeft />
      </div>
      <div className="justify-center flex mt-7 mb-7">
        <p>Your Profile</p>
      </div>
      <div>
        <img src={UserV} className="ml-1.5 w-[70px] h-[70px]" alt="User" />
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

      <div className="justify-center flex mt-10">
        <h1>Liked movies</h1>
      </div>

      <div
        style={{
          ...styles.ImageContainer,
          backgroundImage: `url(${props.image ?? defaultProps.image})`,
        }}
      >
        {/* Add any content or child components for the image container if needed */}
      </div>
{/*Footer*/}
   
    </div>
  );
};

export default Image;

