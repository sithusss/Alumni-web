import React, { Component } from "react";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import sImageURL1 from '../images/ig-4.jpg';
import sImageURL2 from '../images/ig-2.jpg';
import sImageURL3 from '../images/ig-3.jpg';

const sImage1 = {
    backgroundImage: `url(${sImageURL1})`,
}
const sImage2 = {
    backgroundImage: `url(${sImageURL2})`,
}
const sImage3 = {
    backgroundImage: `url(${sImageURL3})`,
}

class HomeCarosel extends Component {
    constructor(props) {
        super(props);
        // this.slider = React.createRef();
        this.state = {
            autoplay: true,
        };
    }

    render() {   
        let url = "./";

        return (
            <div className="h-100">
                <RBCarousel
                    animation={true}
                    autoplay={this.state.autoplay}
                    slideshowSpeed={5000}
                    defaultActiveIndex={0}
                    // leftIcon={this.state.leftIcon}
                    // rightIcon={this.state.rightIcon}
                    // onSelect={this._onSelect}
                    // ref={this.slider}
                    version={4}
                >
                    <div className="h-100">
                        <div className="row h-50">
                            <div className="col-4 slider-tile tile-bg-1">
                                <h4><a href={url}>AGM Meetings</a></h4>
                                <p>Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim,
                                     pulvinar ac, lorem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum...</p>
                                <a href={url}>Read More</a>     
                            </div>
                            <div className="col-4 p-0">
                                <a href={url}><div className="s-image-wrapper" style={sImage1}></div></a>
                            </div>
                            <div className="col-4 slider-tile tile-bg-3">
                            <h4><a href={url}>NEW CLASSROOM TECHNOLOGY</a></h4>
                                <p>Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim,
                                     pulvinar ac, lorem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum...</p>
                                <a href={url}>Read More</a>
                            </div>
                        </div>
                        <div className="row h-50">
                            <div className="col-4 p-0">
                                <a href={url}><div className="s-image-wrapper" style={sImage2}></div></a>
                            </div>
                            <div className="col-4 slider-tile tile-bg-4">
                                <h4><a href={url}>NEW CLASSROOM TECHNOLOGY</a></h4>
                                <p>Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim,
                                     pulvinar ac, lorem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum...</p>
                                <a href={url}>Read More</a>
                            </div>
                            <div className="col-4 p-0">                                
                                <a href={url}><div className="s-image-wrapper" style={sImage3}></div></a>
                            </div>
                        </div>
                    </div>
                    <div className="h-100">
                        <div className="row h-50">
                            <div className="col-4 slider-tile tile-bg-1">
                                <h4><a href={url}>AGM Meetings</a></h4>
                                <p>Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim,
                                     pulvinar ac, lorem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum...</p>
                                <a href={url}>Read More</a>     
                            </div>
                            <div className="col-4 p-0">
                                <a href={url}><div className="s-image-wrapper" style={sImage1}></div></a>
                            </div>
                            <div className="col-4 slider-tile tile-bg-3">
                            <h4><a href={url}>NEW CLASSROOM TECHNOLOGY</a></h4>
                                <p>Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim,
                                     pulvinar ac, lorem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum...</p>
                                <a href={url}>Read More</a>
                            </div>
                        </div>
                        <div className="row h-50">
                            <div className="col-4 p-0">
                                <a href={url}><div className="s-image-wrapper" style={sImage2}></div></a>
                            </div>
                            <div className="col-4 slider-tile tile-bg-4">
                                <h4><a href={url}>NEW CLASSROOM TECHNOLOGY</a></h4>
                                <p>Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis quis, lobortis dignissim,
                                     pulvinar ac, lorem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum...</p>
                                <a href={url}>Read More</a>
                            </div>
                            <div className="col-4 p-0">                                
                                <a href={url}><div className="s-image-wrapper" style={sImage3}></div></a>
                            </div>
                        </div>
                    </div>
                </RBCarousel>
            </div>
        )
    }
}

export default HomeCarosel;