import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const deleteProduct = (id) => {



        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))

        console.log(id);
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
                            products?.map(product => <tr>
                                <th><img className='w-8 h-8' src={product.img} alt="" /></th>
                                <td>{product.productname}</td>
                                <td>{product.availableQuantity <= 0 ? <span className='text-red-500'>Out Of Stock</span> : product.availableQuantity}</td>
                                <td><button onClick={() => deleteProduct(product._id)} className='btn'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;