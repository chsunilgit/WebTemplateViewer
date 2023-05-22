import React from 'react';
import nextButtonImage from '../assets/next.png';
import previousButtonImage from '../assets/previous.png';

//A Thumbnail component that shows a full strip of images. For now hard-coded to show 4 images at a time.
function Thumbnails({
  images,
  startIndex,
  activeId,
  handleThumbnailClick,
  handlePrevious,
  handleNext,
  isPreviousDisabled,
  isNextDisabled,
}) {
  const visibleThumbnails = images?.slice(startIndex, startIndex + 4);

  return (
    <div className="thumbnail-container">
      <img
        src={previousButtonImage}
        alt="Previous"
        className={`previous-button ${isPreviousDisabled ? 'disabled' : ''}`}
        onClick={handlePrevious}
        disabled={isPreviousDisabled}
      />

      <div className="thumbnails">
        <div className="thumbnail previous-placeholder"></div>
        {visibleThumbnails.map((image) => (
          <div
            key={image?.id}
            className={`thumbnail ${image?.id === activeId ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(image.id)}
          >
            <img src={`/images/thumbnails/${image.thumbnail}`} alt={`Thumbnail ${image.id}`} />
          </div>
        ))}
        <div className="thumbnail next-placeholder"></div>
      </div>

      <img
        src={nextButtonImage}
        alt="Next"
        className={`next-button ${isNextDisabled ? 'disabled' : ''}`}
        onClick={handleNext}
        disabled={isNextDisabled}
      />
    </div>
  );
}

export default Thumbnails;
