import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
const Purchase = () => {
    const [user] = useAuthState(auth)
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


        }
        console.log(orderData);
    }
    return (
        <div>
            <div className="grid gap-10 p-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                <div className=" shadow-md p-5 flex items-center justify-center">
                    <img className='md:w-2/4  block mx-auto' src="https://www.dwtoolshop.com/media/catalog/product/e/s/estwing_e324s_24oz_straight_claw_framing_hammer_-_vinyl_grip.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="" />
                </div>
                <div className=" p-5 ">
                    <h1 className='text-2xl font-bold text-gray-900'>Super mm 5Pxz Hammer</h1>
                    <p className='my-3 text-xl text-gray-600 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eius pariatur animi aliquam omnis neque, explicabo nihil ipsam laborum fugiat ipsum dolor, tempore at consectetur facilis. Itaque quo quis exercitationem.</p>


                    <div className='flex justify-between my-3'>
                        <span className='text-xl font-bold'> Available Quantity :</span>
                        <span className='text-xl font-bold'>500 Piece</span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-xl font-bold'> Minimum Order Quantity :</span>
                        <span className='text-xl font-bold'>100 Piece</span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-xl font-bold'> Prce :</span>
                        <span className='text-xl font-bold'><span className='text-xl font-bold'>$35</span> Per Piece</span>
                    </div>
                </div>

            </div>

            <div className='shadow-sm p-5 col-span-2 my-2'>
                <h1 className='text-2xl font-bold text-gray-900 text-center my-3'>Place Your Order</h1>
                <form onSubmit={placeorder} className='md:w-2/4 mx-auto my-3'>
                    <span class="label-text">Product Name</span>
                    <input name='productname' value={'Super mm 5Pxz Hammer'} type="text" class="input block input-bordered my-2 font-bold  w-full  " disabled />
                    <span class="label-text">Order Quantity</span>
                    <input name='productQuantity' type="text" class="input block input-bordered bg-[#F0F6FF] my-2  font-bold  w-full  " required />
                    <span class="label-text">Your Name</span>
                    <input name='name' value={user?.displayName} type="text" class="input block input-bordered my-2 font-bold  w-full  " disabled />
                    <span class="label-text">Your Email</span>
                    <input name='email' value={user?.email} type="text" class="input block input-bordered my-2 font-bold  w-full  " disabled />
                    <span class="label-text">Your Phone Number</span>
                    <input name='phone' type="number" class="input block input-bordered bg-[#F0F6FF] my-2 font-bold  w-full  " required />
                    <span class="label-text">Address</span>
                    <input name='address' type="text" class="input block input-bordered bg-[#F0F6FF] my-2 font-bold  w-full  " required />
                    <input className='btn btn-secondary mt-3' type="submit" value={'Submit Order'} />
                </form>

            </div>
        </div>
    );
};

export default Purchase;