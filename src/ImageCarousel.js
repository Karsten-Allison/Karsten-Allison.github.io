import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, captions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        const index = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(index);
    };

    const handleNextClick = () => {
        const index = (currentIndex + 1) % images.length;
        setCurrentIndex(index);
    };

    return (
        <div className="image-carousel">
            <button
                className="image-carousel-button left"
                onClick={handlePrevClick}
            >
                &#10094;
            </button>
            <div className="image-carousel-container">
                <div
                    className="image-carousel-image"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <div className="image-carousel-caption">{captions[currentIndex]}</div>
                </div>
            </div>
            <button
                className="image-carousel-button right"
                onClick={handleNextClick}
            >
                &#10095;
            </button>
        </div>
    );
};

export default ImageCarousel;
