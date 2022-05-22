import React from 'react';

const OurPartners = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary text-center my-5'>Our Partners</h2>
            <p className='text-center text-secondary'>While we are at the forefront of and specialize in design-build, we are very familiar with a number of delivery methods and are confident we can find the process that will best help you meet your goals.</p>
            <div className="mt-10  p-10 grid gap-11 md:grid-cols-4 justify-center items-center">
                <div className='shadow-md h-[230px] p-5 flex flex-col   items-center'>
                    <img className='w-2/4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUEsRA_77crcM2BYeVvarBzbxWEhY3_IYyA&usqp=CAU" alt="" />
                    <h2 className='text-2xl font-bold'>Black Smith</h2>


                </div>
                <div className='shadow-md h-[230px] p-5 flex flex-col   items-center'>
                    <img className='w-2/4' src="https://t3.ftcdn.net/jpg/01/37/40/46/360_F_137404631_ZAKA2yHAwptlGh0g5kdeLtMenG1ZPCuo.jpg" alt="" />
                    <h2 className='text-2xl font-bold'>Golbal Hammer</h2>

                </div>
                <div className='shadow-md h-[230px] p-5 flex flex-col   items-center'>
                    <img className='w-2/4' src="https://seeklogo.com/images/A/arm-hammer-logo-B32FB796EF-seeklogo.com.png" alt=" Hamers" />
                    <h2 className='text-2xl font-bold'>ARM & Hammers</h2>


                </div>
                <div className='shadow-md h-[230px] p-5 flex flex-col   items-center'>
                    <img className='w-2/4' src="https://i.pinimg.com/originals/1d/e8/9c/1de89c951586d4bff09f8293e85a8a59.jpg" alt=" Hamers" />
                    <h2 className='text-2xl font-bold'>Joun Betta</h2>

                </div>
            </div>
        </div>
    );
};

export default OurPartners;