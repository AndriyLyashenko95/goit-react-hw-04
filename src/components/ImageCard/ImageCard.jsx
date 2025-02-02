import React from 'react';

const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ImageCard;