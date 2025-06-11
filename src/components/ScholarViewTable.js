import React, { useState, useEffect } from 'react'
import fireDB from '../database/fireDB';

const ScholarViewTable = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fireDB.child("ScholarRegistration").on("value", (snapshot) => {
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
        <div>
               <section>
                <div className='container'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Reg.No</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact Address</th>
                                <th scope="col">Permanent Address</th>
                                <th scope="col">District</th>
                                <th scope="col">Phone(Land)</th>
                                <th scope="col">Phone(Mobile)</th>
                                <th scope="col">Num Of Siblings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map((id, index) => {
                                return (
                                    <tr key={id}>
                                        <th scope='row'>{index + 1}</th>
                                        <th>{data[id].name}</th>
                                        <th>{data[id].gender}</th>
                                        <th>{data[id].regNumber}</th>
                                        <th>{data[id].email}</th>
                                        <th>{data[id].contactAddress}</th>
                                        <th>{data[id].permanentAddress}</th>
                                        <th>{data[id].district}</th>
                                        <th>{data[id].phoneLand}</th>
                                        <th>{data[id].phoneMobile}</th>
                                        <th>{data[id].numOfSiblings}</th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>        
        </div>
    )
}

export default ScholarViewTable;