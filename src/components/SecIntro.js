import React from 'react'
import { Link } from 'react-router-dom'

const SecIntro = () => {
    return (
        <section className="intro-section">
            <div className="container ">
                <div className="row">
                    <div className="col">
                        <h1 className="pt-4 customHeading topBar">The Alumni Association</h1>
                        <h1 className="customHeading">Faculty of Applied Sciences</h1>
                        <p className="para-text">
                            The purpose of the Faculty Alumni is to serve as a catalyst for building a vibrant Alumni
                            network and lifelong intellectual and personal relationship between the faculty and its
                            constituents including graduates students and staff as well as to support actively,
                            financially and any other means necessary to achieve overall goals of the Faculty as set out
                            in the faculty mission.
                        </p>
                    </div>
                    <div className="col">
                        <div className="grid-tile-wrapper">
                            <div className="grid-tile tile-1">
                                <div className="tile-block">
                                    <a href={() => false}>
                                        <h5>Our Vision <br />and Mission </h5>
                                    </a>
                                </div>
                            </div>
                            <div className="grid-tile tile-2">
                                <div className="tile-block">
                                    <Link to="/register">
                                        <h5>Meet Our <br /> Members</h5>
                                    </Link>
                                </div>
                            </div>
                            <div className="grid-tile tile-3">
                                <div className="tile-block">
                                    <Link to="/sholarships">
                                        <h5>Scholarship <br /> Programs</h5>
                                    </Link>
                                </div>
                            </div>
                            <div className="grid-tile tile-4">
                                <div className="tile-block">
                                    <a href={() => false}>
                                        <h5>Our<br />  Achievement</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecIntro