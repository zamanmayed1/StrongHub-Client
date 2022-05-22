import React from 'react';
import CountUp from 'react-countup';


const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary text-center my-5'>Business Summary</h2>
            <p className='text-center text-secondary'>Straight Claw Hammers are also known as framing or rip hammers. All of the Vaughan hammers are designed with attention to detail to offer you the highest quality. Computer aided design for balance and precision.</p>
            <div className="mt-10  p-10 grid gap-11 md:grid-cols-4 justify-center items-center">
                <div className='shadow-md h-[230px] p-5 flex flex-col   items-center'>
                    <img className='w-2/4' src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/344/external-worldwide-business-and-management-kiranshastry-gradient-kiranshastry-5.png" alt="" />
                    <h2 className='text-xl text-accent text-center font-bold'><span className='text-primary'><CountUp end={95} /></span>
                        + World Wide Customers</h2>

                </div>
                <div className='shadow-md h-[230px] p-5 flex flex-col   items-center'>
                    <img className='w-2/4' src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/344/external-review-digital-marketplace-inipagistudio-lineal-color-inipagistudio.png" alt="Reviews" />
                    <h2 className='text-xl text-center text-accent font-bold'><span className='text-primary'><CountUp end={75} /></span>+ Customers Reviews</h2>

                </div>
                <div className='shadow-md h-[230px] p-5 flex flex-col   items-center'>
                    <img className='w-2/4' src="https://i.ibb.co/dD9Zvbn/icons8-crowd-100.png" alt="Reviews" />
                    <h2 className='text-xl text-center text-accent font-bold'><span className='text-primary'><CountUp end={375} /></span>+ Happy Clients</h2>

                </div>
                <div className='shadow-md h-[230px] p-5 flex flex-col   items-center'>
                    <img className='w-2/4' src="https://i.ibb.co/cxzcKYW/icons8-money-100.png" alt="Reviews" />
                    <h2 className='text-xl text-center text-accent font-bold'><span className='text-primary'><CountUp end={69} /></span> M+ Annual revenue</h2>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;