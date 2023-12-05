import React from 'react';
import 

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
  image: 

const Image = (props) => {
    return (
      <div className="">
        <p>Your Profile</p>
        <div
          style={{
            ...styles.ImageContainer,
            backgroundImage: `url(${props.image ?? defaultProps.image})`,
          }}
        >
          {/* Add any content or child components for the image container if needed */}
        </div>
      </div>
    );
  };
  
  export default Image;
  