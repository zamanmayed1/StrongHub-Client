import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])
    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Barer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {


                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                }

            })
    }
    return (
        <div className='p-5'>
            <p className='text-xl font-bold text-center my-2'>Make Admin</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra mx-auto max-w-2xl w-full md:w-2/4">

                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map(user => <tr key={user?._id}>

                                <td>{user.email}</td>
                                <td> {user.role !== 'admin' && <button onClick={() => makeAdmin(user?.email)} className='btn btn-secondary'>Make Admin</button>}</td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;