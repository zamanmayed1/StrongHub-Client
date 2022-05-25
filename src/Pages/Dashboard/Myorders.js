import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Myorders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/myorder/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    const deleteorder = (id) => {
    
        fetch(`http://localhost:5000/order/${id}`, {
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
                                    <div className="badge badge-accent">Unpaid</div>
                                    <button onClick={() => deleteorder(order._id)} className='btn-secondary btn-sm mx-2 btn'>Cancel</button>
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