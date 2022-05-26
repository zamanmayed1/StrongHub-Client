import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'react-router-dom';
const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    let { productname, price, _id, email, name, minimumQuantity, availableQuantity, description, img } = product
    const [orderQnty, setOrderQnty] = useState(minimumQuantity)


    useEffect(() => {
        fetch(`https://stronghub.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    let availableQnty = Number(availableQuantity)

    const purchaseQtny = (e) => {
        e.preventDefault()
        const orderQuantity = Number(e.target.orderQuantity.value)
        if (orderQuantity > availableQnty) {
            toast.warning(`We Have No ${orderQuantity} Piece . We Have Only ${availableQnty}`)
        }
        else if (orderQuantity < minimumQuantity) {
            toast.warning(`Minimum Order Quantity is ${minimumQuantity}`)
        }
        else {
            setOrderQnty(orderQuantity)
            window.scroll({
                top: 1000,
                behavior: 'smooth'
            });
        }

    }

    const placeorder = (e) => {
        e.preventDefault()
        const productname = e.target.productname.value
        const productQuantity = e.target.productQuantity.value
        const name = e.target.name.value
        const email = e.target.email.value
        const phone = e.target.phone.value
        const address = e.target.address.value
        const orderData = {
            productname: productname,
            productQuantity: productQuantity,
            name: name,
            email: email,
            phone: phone,
            address: address,
            price: price
        }

        const url = 'https://stronghub.herokuapp.com/addorder'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    let updatedProduct = availableQuantity - Number(orderData.productQuantity)
                    let reamining = Number(updatedProduct)

                    fetch(`https://stronghub.herokuapp.com/product/${id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ reamining })
                    })
                        .then(res => res.json())
                        .then(data => {
                            e.target.reset()
                        })
                }
            })


    }
    return (
        <div>
            <div className="grid gap-5 py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                <div className=" shadow-md p-5 flex items-center justify-center">
                    <img className='md:w-2/4  block mx-auto' src={img} alt="" />
                </div>
                <div className=" p-5 ">
                    <h1 className='text-2xl font-bold text-gray-900'>{productname}</h1>
                    <p className='my-3 text-sm text-gray-600 font-thin'>{description}</p>


                    <div className='flex justify-between my-3'>
                        <span className='text-xl font-bold'> Available Quantity :</span>
                        <span className='text-xl font-bold'>{availableQnty <= 0 ? <span className='text-red-500'>Out Of Stock</span> : availableQnty}</span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-xl font-bold'> Minimum Order Quantity :</span>
                        <span className='text-xl font-bold'>{minimumQuantity} Piece</span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-xl font-bold'> Prce :</span>
                        <span className='text-xl font-bold'><span className='text-xl font-bold'>${price}</span> Per Piece</span>
                    </div>
                    <form onSubmit={purchaseQtny}>
                        <span className="label-text block">Order Quantity</span>
                        <input className='input input-bordered ' name='orderQuantity' type="number" defaultValue={minimumQuantity} />
                        <button className=' btn btn-secondary mx-2' disabled={availableQnty <= 0} >Purchase</button>
                    </form>
                </div>

            </div>

            <div className='shadow-sm p-5 col-span-2 my-2 	 '>
                <h1 className='text-2xl font-bold backdrop-opacity-75	 text-gray-900 text-center my-3'>Place Your Order</h1>
                <form onSubmit={placeorder} className='md:w-2/4 mx-auto my-3'>
                    <span className="label-text">Product Name</span>
                    <input name='productname' value={productname} type="text" className="input block input-bordered my-2 font-bold  w-full  " disabled />
                    <span className="label-text">Order Quantity</span>
                    <input name='productQuantity' type="number" className="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " value={orderQnty} disabled />
                    <span className="label-text">Your Name</span>
                    <input name='name' value={user?.displayName} type="text" className="input block input-bordered my-2 font-bold  w-full  " disabled />
                    <span className="label-text">Your Email</span>
                    <input name='email' value={user?.email} type="text" className="input block input-bordered my-2 font-bold  w-full  " disabled />
                    <span className="label-text">Your Phone Number</span>
                    <input name='phone' type="number" className="input block input-bordered bg-[#F0F6FF] my-2 font-bold  w-full  " required />
                    <span className="label-text">Address</span>
                    <input name='address' type="text" className="input block input-bordered bg-[#F0F6FF] my-2 font-bold  w-full  " required />
                    <input className='btn btn-secondary mt-3' type="submit" disabled={availableQnty <= 0} value={'Submit Order'} />
                </form>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Purchase;