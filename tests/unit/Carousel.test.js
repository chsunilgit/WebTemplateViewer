import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from '../../src/components/Carousel';
import { images } from './mockData';

describe('Carousel', () => {
  it('renders the main image and thumbnails', () => {
    const { getByAltText } = render(<Carousel images={images} />);
    
    // Check if the main image is rendered
    const mainImage = getByAltText('Slide 1');
    expect(mainImage).toBeInTheDocument();
    
    // Check if the thumbnails are rendered
    const thumbnail1 = getByAltText('Thumbnail 1');
    expect(thumbnail1).toBeInTheDocument();
    const thumbnail2 = getByAltText('Thumbnail 2');
    expect(thumbnail2).toBeInTheDocument();
    const thumbnail3 = getByAltText('Thumbnail 3');
    expect(thumbnail3).toBeInTheDocument();
    const thumbnail4 = getByAltText('Thumbnail 4');
    expect(thumbnail4).toBeInTheDocument();
  });

  it('activates the clicked thumbnail and updates the main image', () => {
    const { getByAltText } = render(<Carousel images={images} />);
    
    // Click on the second thumbnail
    const thumbnail2 = getByAltText('Thumbnail 2');
    fireEvent.click(thumbnail2);

    // Check if the second thumbnail is active
    expect(thumbnail2).toHaveClass('active');

    // Check if the main image has updated
    const mainImage = getByAltText('Slide 2');
    expect(mainImage).toBeInTheDocument();
  });

  it('disables the previous button when at the beginning of the carousel', () => {
    const { getByAltText } = render(<Carousel images={images} />);
    
    // Check if the previous button is initially disabled
    const previousButton = getByAltText('Previous');
    expect(previousButton).toBeDisabled();

    // Click on the second thumbnail
    const thumbnail2 = getByAltText('Thumbnail 2');
    fireEvent.click(thumbnail2);

    // Check if the previous button is enabled after clicking the thumbnail
    expect(previousButton).toBeEnabled();

    // Click on the previous button
    fireEvent.click(previousButton);

    // Check if the previous button is disabled again
    expect(previousButton).toBeDisabled();
  });

  it('disables the next button when at the end of the carousel', () => {
    const { getByAltText } = render(<Carousel images={images} />);
    
    // Check if the next button is initially enabled
    const nextButton = getByAltText('Next');
    expect(nextButton).toBeEnabled();

    // Click on the last thumbnail
    const thumbnail4 = getByAltText('Thumbnail 4');
    fireEvent.click(thumbnail4);

    // Check if the next button is disabled after clicking the last thumbnail
    expect(nextButton).toBeDisabled();
  });
});
