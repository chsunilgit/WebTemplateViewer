import React from 'react';

//The component that shows a single image
function ImageComponent({ src, alt }) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} />
    </div>
  );
}

export default ImageComponent;
