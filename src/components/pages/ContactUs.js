import React from 'react'

let alumniUrl = "http://fasalumni.lk/"

const ContactUs = () => {
    return (
        <section className="intro-section sec-contactUs">
            <div className="container">
                <h1 className="pt-4 customHeading topBar">CONTACT US</h1>
                <p className="para-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <address>
                        Visit us at: <a href={alumniUrl}>fasalumni.lk</a><br/><br/>
                        {/* Visit us at: <a href="mailto:info@fasalumni.lk">fasalumni.lk</a><br/><br/> */}
                        Faculty of Applied Sciences<br/>
                        Rajarata University of Sri Lanka
                        </address>
                        <p>
                            <strong>Email: </strong>
                            info@fasalumni.lk
                            <br/>
                            <strong>Tel.: </strong>
                            011 2233 456
                        </p>
                    </div>
                    <div className="col-8">
                    <form>
                        <div className="row">
                            <div className="col-4">
                            <input type="text" className="form-control" placeholder="Name *" />
                            </div>
                            <div className="col-4">
                            <input type="email" className="form-control" placeholder="Email *" />
                            </div>
                            <div className="col-4">
                            <input type="text" className="form-control" placeholder="Mobile" />
                            </div>
                        </div>
                        <div className="row pt-4">
                        <div className="col-12">
                            <textarea rows='5' type="text" className="form-control" placeholder="Message *"></textarea>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <button type="submit" className="btn btn-primary px-4">Send</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs