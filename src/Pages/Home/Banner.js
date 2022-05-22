import React from 'react';

const Banner = () => {
    return (
        <div className="hero md:h-[60vh]  h-screen bg-[url('https://housegrail.com/wp-content/uploads/2021/08/types-of-hammers.png')] " >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5  p-2 text-5xl text-yellow-500 font-bold">Strong <span className='text-red-600'>Hub</span></h1>
                    <p className="mb-5 ">Straight Claw Hammers are also known as framing or rip hammers. All of the Vaughan hammers are designed with attention to detail to offer you the highest quality. Computer aided design for balance and precision.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;