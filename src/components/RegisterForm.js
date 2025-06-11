import React, { useState, useEffect } from 'react'
import fireDB from '../database/fireDB'

const initState = {
    name: '',
    email: ''
}

const RegisterForm = () => {
    const [state, setState] = useState(initState);
    const [data, setData] = useState({});

    const { name, email } = state;

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (!name || !email) {
            alert("Please fill all fields");
        } else {
            fireDB.child("registration").push(state, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    alert("Success");
                }
            });
        }
    }

    useEffect(() => {
        fireDB.child("registration").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() });
            } else {
                setData({});
            }
        })
        return () => {
            setData({})
        }
    }, []);

    return (
        <>
            <section>
                <div className='container'>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nameId">Name</label>

                            <input type="text" className="form-control" id="nameId"
                                placeholder="Name"
                                name='name'
                                value={name}
                                onChange={handleInput} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>

                            <input
                                type="email" className="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter email"
                                name='email'
                                value={email}
                                onChange={handleInput} />

                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>
            <section>
                <div className='container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map((id, index) => {
                                return (
                                    <tr key={id}>
                                        <th scope='row'>{index + 1}</th>
                                        <th>{data[id].name}</th>
                                        <th>{data[id].email}</th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default RegisterForm