import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://stronghub.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    const deleteProduct = (id) => {
        fetch(`https://stronghub.herokuapp.com/product/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className='p-5'>
            <p className='text-xl font-bold text-center'>Manage Product</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Name</th>
                            <th>Available</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map(product => <tr key={product._id}>
                                <th><img className='w-8 h-8' src={product.img} alt="" /></th>
                                <td>{product.productname}</td>
                                <td>{product.availableQuantity <= 0 ? <span className='text-red-500'>Out Of Stock</span> : product.availableQuantity}</td>
                                <td>



                                    <label for="my-modal-6" class="btn modal-button">Delete</label>

                                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                    <div class="modal modal-bottom sm:modal-middle">
                                        <div class="modal-box">
                                            <h3 class="font-bold text-lg">Are You Sure</h3>

                                            <div class="modal-action">
                                                <label onClick={() => deleteProduct(product._id)} for="my-modal-6" class="btn">Yes</label>
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
    );
};

export default ManageProducts;