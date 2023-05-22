import React, { useEffect, useState } from 'react';
import nextButtonImage from '../assets/next.png';
import previousButtonImage from '../assets/previous.png';
import '../styles/Carousel.css';
import MainImage from './MainImage';
import Thumbnails from './Thumbnails';

/*
Main Casousel component built from MainImage component and Thumbnails component(Nested components).
*/

function Carousel({ images }) {
    const [activeId, setActiveId] = useState(null);
    const [startIndex, setStartIndex] = useState(0);
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

    useEffect(() => {
        if (images.length > 0) {
            setActiveId(images[0].id);
            setIsNextDisabled(images.length <= 4);
        }
    }, [images]);

    const handlePrevious = () => {
        if (startIndex > 0) {
            const newStartIndex = startIndex - 4;
            setStartIndex(newStartIndex);
            setActiveId(images[newStartIndex]?.id);
            setIsNextDisabled(false);
        }
        if (startIndex - 4 <= 0) {
            setIsPreviousDisabled(true);
        }
    };

    const handleNext = () => {
        const maxIndex = images.length - 4;
        if (startIndex < maxIndex) {
            const newStartIndex = startIndex + 4;
            setStartIndex(newStartIndex);
            setActiveId(images[newStartIndex]?.id);
            setIsPreviousDisabled(false);
        }
        if (startIndex + 4 >= maxIndex) {
            setIsNextDisabled(true);
        }
    };

    const handleThumbnailClick = (id) => {
        setActiveId(id);
    };

    return (
        <div className="carousel-container">
            <div className="main-image-container">
                {activeId && (
                    <MainImage
                        src={`/images/large/${images.find((image) => image.id === activeId).image}`}
                        alt={`Slide ${activeId}`}
                    />
                )}
            </div>

            <Thumbnails
                images={images}
                startIndex={startIndex}
                activeId={activeId}
                handleThumbnailClick={handleThumbnailClick}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                isPreviousDisabled={isPreviousDisabled}
                isNextDisabled={isNextDisabled}
            />
        </div>
    );
}

export default Carousel;
