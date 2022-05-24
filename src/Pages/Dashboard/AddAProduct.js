import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
const AddAProduct = () => {
    const [user] = useAuthState(auth)

    const addProduct = (e) => {

    }
    return (
        <div className='p-5'>
            <p className='text-xl font-bold text-center'>Add A Product</p>
            <form onSubmit={addProduct} className='md:w-2/4 mx-auto my-3'>
                <span class="label-text">Product Name</span>
                <input name='productname' type="text" class="input block input-bordered my-2 font-bold  w-full  " />
                <span class="label-text">Description</span>
                <textarea required name='text' class="textarea h-52 my-2 w-full  block textarea-accent"></textarea>



                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="small_size">Product Image</label>
                <input class="block mb-5 p-3 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="small_size" type="file" />


                <span class="label-text">Price</span>
                <input name='minimumQuantity' type="number" class="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " />

                <span class="label-text">Minimum Order Quantity</span>
                <input name='minimumQuantity' type="number" class="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " />

                <span class="label-text">Available Order Quantity</span>
                <input name='availableQuantity' type="number" class="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " />
                <span class="label-text">Your Name</span>
                <input name='name' value={user?.displayName} type="text" class="input block input-bordered my-2 font-bold  w-full  " />
                <span class="label-text">Your Email</span>
                <input name='email' value={user?.email} type="text" class="input block input-bordered my-2 font-bold  w-full  " />

                <input className='btn btn-secondary mt-3' type="submit" value={'Submit Order'} />
            </form>
        </div>
    );
};

export default AddAProduct;