import React,{ useState, useEffect } from 'react';
import axios from 'axios';


const ScholForm = () => {
    return(
        <div>
            <h1>Scholarship Form</h1>
            <form>
                <div>
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="batch">Batch:</label>
                    <input type="text" id="batch" name="batch" required />
                </div>
                <div>
                    <label htmlFor="card">Card:</label>
                    <input type="text" id="card" name="card"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="mobileNumber">Mobile Number:</label>
                    <input type="tel" id="mobilenumber" name="mobilenumber" required />
                </div>
                 <div>
                    <label htmlFor="designation">Designation:</label>
                    <input type="tel" id="designation" name="designation" required />
                </div>
                 <div>
                    <label htmlFor="workplace"> Name & Address of Workplace:</label>
                    <input type="tel" id="workplace" name="workplace"/>
                </div>
                <div>
                    <label htmlFor="address">Home Address:</label>
                    <input type="text" id="address" name="address" />
                </div>
                <div>
                    <label htmlFor="landLine">Land Line:</label>
                    <input type="text" id="landLine" name="landLine" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};