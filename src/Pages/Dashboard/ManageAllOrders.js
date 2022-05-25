import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    return (
        <div>
            <p className='text-xl font-bold text-center'>Manage All Orders</p>
            <div className='p-5'>
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
                                    <td><select className="select select-bordered w-32">
                                        <option selected>Unpaid</option>
                                        <option>Paid</option>
                                        <option>Packaging</option>
                                        <option>Shipped</option>
                                        <option>Completed</option>
                                    </select>
                                        <button className='btn-secondary mx-2 btn'>Cancel</button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;