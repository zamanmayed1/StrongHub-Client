import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://stronghub.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    const deleteOrder = (id) => {
        fetch(`https://stronghub.herokuapp.com/order/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
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
                                    <td>
                                        {/* <button onClick={() => deleteOrder(order._id)} className='btn-secondary mx-2 btn'>Cancel</button> */}

                                        <label for="my-modal-6" class="btn modal-button">Delete</label>

                                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                        <div class="modal modal-bottom sm:modal-middle">
                                            <div class="modal-box">
                                                <h3 class="font-bold text-lg">Are You Sure</h3>

                                                <div class="modal-action">
                                                    <label onClick={() => deleteOrder(order._id)} for="my-modal-6" class="btn">Yes</label>
                                                    <label for="my-modal-6" class="btn">No</label>
                                                </div>
                                            </div>
                                        </div>










                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default ManageAllOrders;