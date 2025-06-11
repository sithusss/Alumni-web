import React from 'react';
import HomeCarosel from './HomeCarousel';

const SecImageGallery = () => {
    return (
        <section className="image-gallery-section">
            <div className="container animate-gallery">
                <div className="gallery-title">
                    <h1 className="topTitle">What we have done</h1>
                </div>
                <div className="carousel-wrapper">
                    <HomeCarosel />
                </div>
            </div>            
        </section>
    );
};

export default SecImageGallery;