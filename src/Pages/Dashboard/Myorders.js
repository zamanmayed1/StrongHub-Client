import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Myorders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState()

    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://stronghub.herokuapp.com/myorder/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const deleteorder = (id) => {

        fetch(`https://stronghub.herokuapp.com/order/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (

        <div className=' p-5'>
            <p className='text-xl font-bold text-center'>My Orders</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => <tr key={order?._id}>

                                <td>{order.productname}</td>
                                <td>{order.productQuantity}</td>
                                <td>{order.phone}</td>
                                <td>{order.email}</td>


                                <td>
                                    <button className='btn mx-2'>Pay</button>
                                    <button onClick={() => { deleteorder(order?._id) }} className='btn' >Cancel</button>
                                </td>




                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorders;