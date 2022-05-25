import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = () => {
    const navigate = useNavigate()
    const placeOrder = (id) => {
        navigate(`/purchase/${id}`)
    }
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary text-center my-5'>Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10  justify-center">
                {
                    products.slice(0,6).map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className='shadow-md p-2'><img className='h-60' src={product.img} alt="Hammer" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.productname}</h2>
                            <p>{product.description.slice(0, 40)} <span title={product.description}>[...]</span> </p>
                            <p >Price : <span className='text-xl font-bold'>${product.price}</span> per piece</p>

                            <p>Available Quantity : {product.availableQuantity} </p>
                            <p>Minimum Quantity : {product.minimumQuantity}</p>
                            <div className="card-actions justify-start">
                                <button onClick={() => placeOrder(product._id)} className="btn  btn-secondary">Place Order</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Tools;