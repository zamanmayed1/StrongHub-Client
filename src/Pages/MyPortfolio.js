import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className="w-full bg-[#EDF1F5] md:flex ">
                <div className="text md:w-2/4 flex flex-col items-center justify-center ">
                    <div>
                        <h2 className='text-3xl my-2'>Hello ! <br />
                            <span className='text-[#C0392B]'>  I Am Front End Developer</span></h2>

                        <h2 className='text-3xl my-2 font-bold'>
                            My Name Is <br />
                            Jd. Kamruzzaman Mayed</h2>
                        <div className='my-2'>
                            <div className="btn">Download MY CV</div>
                            <div className="btn btn-red  mx-2">Contact ME</div>
                        </div>
                    </div>
                </div>
                <div className="img flex  md:w-2/4 justify-end ">
                    <img className='' src="https://i.ibb.co/JdZJC8x/275331542-273973154867778-103572550779029173-n-1-removebg-preview.png" alt="" />
                </div>

            </div>
            {/* About ME  */}
            <div className=' mt-5'>
                <div className=' mt-5'>
                    <h1 className='text-xl font-bold text-primary text-center'>About ME</h1>
                    <div className='  grid md:grid-cols-2 p-10'>


                        <div className=' flex justify-center items-center'>
                            <div>
                                <img className='rounded-full mx-auto ring-2 w-28' src="https://i.ibb.co/JdZJC8x/275331542-273973154867778-103572550779029173-n-1-removebg-preview.png" alt="" />
                                <div className="stats stats-vertical lg:stats-horizontal shadow gap-2">

                                    <div className="stat my-1">
                                        <div className="stat-title">Projects</div>
                                        <div className="stat-value">15+</div>
                                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                                    </div>

                                    <div className="stat my-1">
                                        <div className="stat-title">Happy Clients</div>
                                        <div className="stat-value">7+</div>
                                        <div className="stat-desc">↗︎ 7 (98%)</div>
                                    </div>

                                    <div className="stat my-1">
                                        <div className="stat-title">Problem Solving</div>
                                        <div className="stat-value">73+</div>
                                        <div className="stat-desc">↗︎ 25 (98%)</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='p-5' >
                            <p>
                                My name is Jd. Kamruzzaman Mayed.  I'm a Front End Engineer based in Bangladesh ☀️. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.
                                Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things ✍️ at my blog.
                                In my free time you can find me longboarding 🛹 , at the gym 🏋️‍♂️, at the beach 🏖 or on tech meetups and conferences around Bangladesh  🗺
                            </p>
                            <h2 className='font-bold'>Full Name: Kamruzzaman Mayed</h2>
                            <h2 className='font-bold'>Age: 17</h2>
                            <h2 className='font-bold'>Address: Sylhet, Bangladesh.</h2>
                            <h2 className='font-bold'>Phone Number: 01755429524</h2>
                            <h2 className='font-bold'>Phone Email: zamanmayed01@gmail.com</h2>

                        </div>
                    </div>



                </div>
                {/* Skills */}
                <div>
                    <h1 className='text-xl font-bold text-primary text-center'>My Skills</h1>
                    <div className=' grid md:grid-cols-2 p-10'>
                        <div>
                            <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg" alt="" />
                        </div>
                        <div className='flex flex-col  justify-center '>
                            <div>
                                <span className='block my-1 font-bold  '>HTML</span>
                                <progress className="progress progress-primary w-full max-w-md" value="90" max="100"></progress>
                                <span className='block progress-error my-1 font-bold  '>CSS</span>
                                <progress className="progress w-full max-w-md" value="85" max="100"></progress>
                                <span className='block  my-1 font-bold  '>JAVASCRIPT</span>
                                <progress className="progress progress-success w-full max-w-md" value="75" max="100"></progress>
                                <span className='block  my-1 font-bold  '>React</span>
                                <progress className="progress progress-info w-full max-w-md" value="80" max="100"></progress>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='my-5'>
                    <h1 className='text-xl mb-6 font-bold text-primary text-center'>My Projects</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center item-center'>
                        {/* Stock Room */}
                        <div className="card w-96 bg-base-100 shadow-xl p-1">
                            <figure><img className='border-2 border-gray-900 rounded-md' src="https://i.ibb.co/Fb78C8g/mobile-6.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Stock Room
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Stock Room is a werehouse Website.</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Werehouse</div>
                                    <div className="badge badge-outline">Full Stack</div>
                                </div>
                                <button className='btn mt-2'><a target={'_blank'} href="https://stockroom-97369.web.app/">Visite Site</a></button>

                            </div>
                        </div>
                        {/* Strong Hub */}
                        <div className="card w-96 bg-base-100 shadow-xl p-1">
                            <figure><img className='border-2 border-gray-900 rounded-md' src="https://i.ibb.co/pZSNXz1/mobile-5.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Strong Hub
                                    <div className="badge badge-secondary">Pending</div>
                                </h2>
                                <p>Strong Hub is a  manufacturer Website.</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Manufacturer</div>
                                    <div className="badge badge-outline">Full Stack</div>
                                </div>
                                <button className='btn mt-2'><a target={'_blank'} href="https://stronghub-9986c.web.app/">Visite Site</a></button>

                            </div>
                        </div>
                        {/* Coffee */}
                        <div className="card w-96 bg-base-100 shadow-xl p-1">
                            <figure><img className='border-2 border-gray-900 rounded-md' src="https://i.ibb.co/266dn29/mobile-7.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Fatobook
                                    <div className="badge badge-secondary">Old</div>
                                </h2>
                                <p>Fatobook is a Resturant Website.</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Resturant</div>
                                    <div className="badge badge-outline">Full Stack</div>
                                </div>
                                <button className='btn mt-2'><a target={'_blank'} href="https://foodbababd.netlify.app/">Visite Site</a></button>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyPortfolio;