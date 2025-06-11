import React, { useState } from 'react'
import ScholarRegisterForm from '../ScholarRegisterForm';

const Scholarships = () => {
    const [showForm, setShowForm] = useState(false);
    if (showForm) {
        return <ScholarRegisterForm />;
    }
    return (
        <section className="intro-section sec-scholarships">
            <div className="container">
                <h1 className="pt-4 customHeading topBar">Scholarships</h1>
                <p className="para-text">
                    Welcome to the Scholarships page! Here you can find information about our scholarship programs and how to apply. We are gathering information from students and alumni to help us provide better opportunities and support. If you are interested in applying for a scholarship, please proceed to the registration form.
                </p>
                <div className="mt-4">
                    <button className="btn btn-primary btn-lg" onClick={() => setShowForm(true)}>Enter my details</button>
                </div>
            </div>
        </section>
    )
}

export default Scholarships