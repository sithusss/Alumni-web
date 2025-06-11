import React from 'react'
import HomeCarosel from '../HomeCarousel'

const OurEvents = () => {
    return (
        <>
        <section className="intro-section sec-ourEvents">
            <div className="container">
                <h1 className="pt-4 customHeading topBar">OUR EVENTS</h1>
                <p className="para-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
            </div>
        </section>
        <section className="gallery-section">
        <div className="container">
            <HomeCarosel />
        </div>
    </section>
    </>
    )
}

export default OurEvents