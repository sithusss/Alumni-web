import React, { useState } from 'react';

const districts = [
    'Colombo', 'Kandy', 'Galle', 'Ampara', 'Anuradhapura',
    'Badulla', 'Batticaloa', 'Gampaha', 'Hambantota', 'Jaffna', 'Kalutara', 'Kegalle',
    'Kilinochchi', 'Kurunegala', 'Mannar', 'Matale', 'Matara', 'Moneragala', 'Mullativu',
    'Nuwara Eliya', 'Polonnaruwa', 'Puttalam', 'Ratnapura', 'Trincomalee', 'Vavuniya'
];

const years = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
const scholarshipsList = ['Mahapola', 'University Scholarship', 'Bursary', 'None'];

const ScholarRegisterForm = () => {
    const [state, setState] = useState({
        name: '',
        gender: '',
        regNumber: '',
        email: '',
        contactAddress: '',
        permanentAddress: '',
        district: '',
        phoneLand: '',
        phoneMobile: '',
        yearOfStudy: '',
        gpa: '',
        extraCurricular: '',
        fatherOccupation: '',
        fatherIncome: '',
        motherOccupation: '',
        motherIncome: '',
        numOfSiblings: '',
        scholarships: [],
        otherIncome: '',
        verificationInitials: ''
    });

    const handleInputs = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setState(prev => {
                let scholarships = [...prev.scholarships];
                if (checked) {
                    scholarships.push(value);
                } else {
                    scholarships = scholarships.filter(s => s !== value);
                }
                return { ...prev, scholarships };
            });
        } else {
            setState({ ...state, [name]: value });
        }
    };

 const handleScholarRegistration = async (e) => {
    e.preventDefault();
    try {
        // Log the state object before sending
        console.log('Submitting state:', state);

        const response = await fetch('/.netlify/functions/submit-to-sheet', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();
        if (result.result === "success") {
            alert("Form submitted successfully!");
            setState({
                name: '',
                gender: '',
                regNumber: '',
                email: '',
                contactAddress: '',
                permanentAddress: '',
                district: '',
                phoneLand: '',
                phoneMobile: '',
                yearOfStudy: '',
                gpa: '',
                extraCurricular: '',
                fatherOccupation: '',
                fatherIncome: '',
                motherOccupation: '',
                motherIncome: '',
                numOfSiblings: '',
                scholarships: [],
                otherIncome: '',
                verificationInitials: ''
            });
        } else {
            alert("Submission failed.");
        }
    } catch (err) {
        alert("Error submitting form: " + err.message);
    }
};

    return (
        <section className="intro-section sec-scholarships">
            <div className="container">
                <h2 className="mb-5 customHeading topBar">Application for Applied-RUSL ALUMNI Scholarships 2022</h2>
                <div className="card card-body">
                    <form className="row g-3" onSubmit={handleScholarRegistration}>
                        <h4>Contact Details</h4>
                        <div className="col-12">
                            <label className="form-label">Full Name</label>
                            <input type="text" className="form-control" name='name' value={state.name} onChange={handleInputs} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Gender</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" value="Male" checked={state.gender === "Male"} onChange={handleInputs} />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" value="Female" checked={state.gender === "Female"} onChange={handleInputs} />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">University registration number *</label>
                            <input type="text" className="form-control" name="regNumber" value={state.regNumber} onChange={handleInputs} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email *</label>
                            <input type="email" className="form-control" name="email" value={state.email} onChange={handleInputs} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Contact Address</label>
                            <input type="text" className="form-control" name="contactAddress" value={state.contactAddress} onChange={handleInputs} />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Permanent Address</label>
                            <input type="text" className="form-control" name="permanentAddress" value={state.permanentAddress} onChange={handleInputs} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">District *</label>
                            <select className="form-select" name="district" value={state.district} onChange={handleInputs}>
                                <option value="" disabled>Choose your District</option>
                                {districts.map((district, i) => (
                                    <option key={i} value={district}>{district}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Telephone No (Land phone):</label>
                            <input type="text" className="form-control" name="phoneLand" value={state.phoneLand} onChange={handleInputs} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Mobile No: *</label>
                            <input type="text" className="form-control" name="phoneMobile" value={state.phoneMobile} onChange={handleInputs} />
                        </div>
                        <hr />
                        <h4>Academic Background</h4>
                        <div className="col-md-4">
                            <label className="form-label">Year of study *</label>
                            <select className="form-select" name="yearOfStudy" value={state.yearOfStudy} onChange={handleInputs}>
                                <option value="" disabled>Choose your year</option>
                                {years.map((year, i) => (
                                    <option key={i} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-md-3'>
                            <label className="form-label">The most recent GPA *</label>
                            <input type="number" className="form-control" name="gpa" value={state.gpa} onChange={handleInputs} />
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label">Extra-curricular activities (Sports, Drama, Music etc.)</label>
                            <textarea className="form-control" name="extraCurricular" value={state.extraCurricular} onChange={handleInputs}></textarea>
                        </div>
                        <hr />
                        <h4>Family Income</h4>
                        <p className='mt-1'>Information about household income (Please focus on your permanent home)</p>
                        <div className='col-md-6'>
                            <label className="form-label">Father's occupation</label>
                            <input type="text" className="form-control" name="fatherOccupation" value={state.fatherOccupation} onChange={handleInputs} />
                        </div>
                        <div className='col-md-6'>
                            <label className="form-label">Father's income per month</label>
                            <input type="text" className="form-control" name="fatherIncome" value={state.fatherIncome} onChange={handleInputs} />
                        </div>
                        <div className='col-md-6'>
                            <label className="form-label">Mother's occupation</label>
                            <input type="text" className="form-control" name="motherOccupation" value={state.motherOccupation} onChange={handleInputs} />
                        </div>
                        <div className='col-md-6'>
                            <label className="form-label">Mother's income per month</label>
                            <input type="text" className="form-control" name="motherIncome" value={state.motherIncome} onChange={handleInputs} />
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label">Number of siblings (brothers and sisters in your family) who are not earning *</label>
                        </div>
                        <div className='col-md-1 mt-0'>
                            <input type="number" className="form-control" name='numOfSiblings' value={state.numOfSiblings} onChange={handleInputs} />
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label">List other scholarships you are currently entitled </label>
                            {scholarshipsList.map((sch, i) => (
                                <div className="form-check" key={i}>
                                    <input className="form-check-input" type="checkbox" value={sch} id={`scholarship${i}`}
                                        checked={state.scholarships.includes(sch)}
                                        name="scholarships"
                                        onChange={handleInputs}
                                    />
                                    <label className="form-check-label" htmlFor={`scholarship${i}`}>
                                        {sch}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className='col-md-12'>
                            <label className="form-label">Any other income from which you are currently getting support for your studies? (If the answer is NO, please type it so)</label>
                            <textarea className="form-control" name="otherIncome" value={state.otherIncome} onChange={handleInputs}></textarea>
                        </div>
                        {/* File upload skipped: Not supported with Google Apps Script */}
                        <hr />
                        <h4>Student verification</h4>
                        <div className='col-md-6'>
                            <label className="form-label">Type your initials to certify that all information provided in this form is accurate. *</label>
                            <input type="text" className="form-control" name="verificationInitials" value={state.verificationInitials} onChange={handleInputs} />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ScholarRegisterForm;