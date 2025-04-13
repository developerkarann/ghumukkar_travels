import React from 'react'

const About = () => {
    return (
        <>
            <section className="section py-10">
                <div className="topBanner ">
                    <img className='w-full' src="./banner.png" alt="Ghumukkar Travels" />
                </div>

                <div className="aboutContent px-20 flex flex-col lg:flex-row w-full py-20 justify-center items-center ">
                    <div className="leftSection w-[100%] lg:w-[50%]">
                        <img src="./logo.png" alt="" />
                    </div>
                    <div className="rightSection w-[100%] lg:w-[50%]" >
                        <div className="box flex flex-col p-5 rounded-md border border-gray-100 shadow-lg gap-2">
                            <div className="heading text-2xl self-center">About Company</div>
                            <p className="description">
                            Ghumakkar Travels is a passionate travel company dedicated to turning your wanderlust into reality. We specialize in personalized travel planning, curated tour packages, and seamless booking experiences. Whether you're seeking adventure, relaxation, or cultural exploration, Ghumakkar Travels ensures every journey is memorable, affordable, and tailored to your unique travel dreams.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="teamContent flex flex-col justify-center items-center" >
                    <div className="heading self-center ">
                        <h1 className='text-3xl'>Our Team</h1>
                    </div>
                    <div className="team grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div className="card">
                            <div className="max-w-sm bg-white ">
                                <a href="#">
                                    <img className="w-70 h-90" src="https://images.unsplash.com/photo-1690166444476-8cc4c0f24032?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </a>
                                <div className="p-1 flex flex-col justify-center items-center">
                                    <p className="name text-amber-500 font-semibold ">John Mill franao</p>
                                    <div className="deg">Developer</div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="max-w-sm bg-white ">
                                <a href="#">
                                    <img className="w-70 h-90" src="https://plus.unsplash.com/premium_photo-1661590863910-69abf33b8f3f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </a>
                                <div className="p-1 flex flex-col justify-center items-center">
                                    <p className="name text-amber-500 font-semibold ">Diya Sharma</p>
                                    <div className="deg">The Explorer</div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="max-w-sm bg-white ">
                                <a href="#">
                                    <img className="w-70 h-90" src="https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </a>
                                <div className="p-1 flex flex-col justify-center items-center">
                                    <p className="name text-amber-500 font-semibold ">Kabir Singh</p>
                                    <div className="deg">The Storyteller</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About