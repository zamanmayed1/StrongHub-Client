import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate()
    const placeOrder = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div>

            <h2 className='text-3xl font-bold text-primary text-center my-5'>All Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10   justify-center">


                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/e/s/estwing_e324s_24oz_straight_claw_framing_hammer_-_vinyl_grip.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>

                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button onClick={() => placeOrder('125411')} className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/f/m/fmht1-51278.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>
                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/e/s/este20c.png?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560&format=jpeg" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>
                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/1/9/19724_th7_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>
                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/o/x/ox-t081932.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>
                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/t/h/the_ck_tools_av03031.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>
                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/t/h/the_ck_tools_av03031.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>
                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/t/h/the_ck_tools_av03031.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>
                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/t/h/the_ck_tools_av03031.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>
                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/t/h/the_ck_tools_av03031.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>
                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className='shadow-md p-2'><img className='h-60' src="https://www.dwtoolshop.com/media/catalog/product/e/s/estwing_e324s_24oz_straight_claw_framing_hammer_-_vinyl_grip.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" alt="Hammer" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Super mm 5Pxz Hammer </h2>
                        <p>If a dog chews Hammer whose Hammer does he choose?</p>
                        <p >Price : <span className='text-xl font-bold'>$35</span> per piece</p>

                        <p>Available Quantity : 500 </p>
                        <p>Minimum Quantity : 100 </p>
                        <div className="card-actions justify-start">
                            <button className="btn  btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;