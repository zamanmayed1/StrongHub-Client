// import React, { useEffect, useState } from 'react';
// import { Elements } from '@stripe/react-stripe-js';
// import { useParams } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from '../Pages/Dashboard/CheckoutForm';


// const stripePromise = loadStripe('pk_test_51L3jDrIdy0kcvEE5WXUB9XcTGhWRetMHVyyMB4Wdzb2Vqxbum3sstwUNGvimZQfXprmfBMXgrChWbu8MSsJZnTj000D6GxrfBk');
// const Payment = () => {
//     const { id } = useParams()
//     const [product, setProduct] = useState({})
//     console.log(product);
//     useEffect(() => {
//         fetch(`https://stronghub.herokuapp.com/order/${id}`)
//             .then(res => res.json())
//             .then(data => setProduct(data))
//     }, [])
//     return (
//         <div>

//             <div className="w-full border p-10">
//                 <div className="w-md:2/4 grid md:grid-cols-2 gap-10 mx-auto border p-10">
//                     <div class="card  bg-base-100 shadow-xl">
//                         <div class="card-body">
//                             <h2 class="card-title">{product?.productname}</h2>
//                             <p>Name : {product?.name}</p>
//                             <p>Price :{product?.price}</p>
//                             <p> Quantity : {product?.productQuantity}</p>

//                         </div>
//                     </div>
//                     <div class="card  bg-base-100 shadow-xl image-full">
//                         <figure><img src="https://media.istockphoto.com/photos/stacked-credit-cards-picture-id1203763961?k=20&m=1203763961&s=612x612&w=0&h=mrFgkoWWVdp0mtt_vw6OTEZCSjw3bUYhuJt5QWVdkXo=" alt="Shoes" /></figure>
//                         <div class="card-body">
//                             <Elements stripe={stripePromise}>
//                                 <CheckoutForm order={product} />
//                             </Elements>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Payment;