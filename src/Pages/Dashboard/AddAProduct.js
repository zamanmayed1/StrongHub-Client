import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
const AddAProduct = () => {
    const [user] = useAuthState(auth)

    const addProduct = (e) => {
        e.preventDefault()
        const productname = e.target.productname.value
        const description = e.target.text.value
        const price = e.target.price.value
        const minimumQuantity = e.target.minimumQuantity.value
        const availableQuantity = e.target.availableQuantity.value
        const name = e.target.name.value
        const email = e.target.email.value


        const imgbbKey = 'f06912440d3096062f70bf6d58535480'
        const image = e.target.imgs.files[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {

                if (result.success) {
                    const img = result.data.display_url
                    const Data = {
                        productname, description, price, minimumQuantity, img, availableQuantity, name, email
                    }
                    // send to your database
                    const url = 'http://localhost:5000/addproduct'
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(Data)

                    })
                        .then(res => res.json())
                        .then(data => console.log(data))


                }
            })





    }
    return (
        <div className='p-5'>
            <p className='text-xl font-bold text-center'>Add A Product</p>
            <form onSubmit={addProduct} encType="multipart/form-data" className='md:w-2/4 mx-auto my-3'>
                <span className="label-text">Product Name</span>
                <input name='productname' type="text" className="input block input-bordered my-2 font-bold  w-full  " required />
                <span className="label-text">Description</span>
                <textarea required name='text' className="textarea h-52 my-2 w-full  block textarea-accent"></textarea>



                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="small_size">Product Image</label>
                <input name='imgs' className="block mb-5 p-3 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" required />


                <span className="label-text">Price</span>
                <input name='price' type="number" className="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " required />

                <span className="label-text">Minimum Order Quantity</span>
                <input name='minimumQuantity' type="number" className="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " required />

                <span className="label-text">Available Quantity</span>
                <input name='availableQuantity' type="number" className="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " required />
                <span className="label-text">Your Name</span>
                <input name='name' value={user?.displayName} type="text" className="input block input-bordered my-2 font-bold  w-full  " required />
                <span className="label-text">Your Email</span>
                <input name='email' value={user?.email} type="text" className="input block input-bordered my-2 font-bold  w-full  " required />

                <input className='btn btn-secondary mt-3' type="submit" value={'Submit Order'} />
            </form>
        </div>
    );
};

export default AddAProduct;