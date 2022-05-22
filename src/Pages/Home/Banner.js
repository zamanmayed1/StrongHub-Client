import React from 'react';

const Banner = () => {
    return (
        <div className="hero md:h-[60vh]  h-screen bg-[url('https://i.ibb.co/4YbFSVL/New-Project-3.png')] " >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5  text-5xl font-bold">Strong Hub</h1>
                    <p className="mb-5 ">Straight Claw Hammers are also known as framing or rip hammers. All of the Vaughan hammers are designed with attention to detail to offer you the highest quality. Computer aided design for balance and precision.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;