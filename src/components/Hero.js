import React, { useState } from 'react'
import banner from '../images/banner2.jpeg'
import VideoModal from './Modal';
import logo from '../images/logo2.png'
import '../Style.css'

function Hero() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className=" relative w-full flex justify-center items-center    ">
            <img src={banner} className='w-full h-[85vh] md:h-[100vh] object-cover ' alt="" />

            <div className="absolute md:top-[40%] top-[30%]  mb-10 flex flex-col items-center justify-center  lg:mb-0  text-center">
                <section>
                    <div class="content">
                        <h2 className='text-yellow-600'>esplanade</h2>
                        <h2 className='text-yellow-600'>esplanade</h2>
                    </div>
                </section>
                <h3 className='mt-28 text-gray-100 font-bold uppercase italic tracking-widest font-serif text-3xl'>sophisticated living</h3>

            </div>
            {/*
                <div className=''Name="relative lg:w-1/2 w-full ">
                    <img
                        className="object-cover w-full h-56 rounded-md shadow-lg sm:h-96"
                        src={banner}
                        alt=""
                    />
                    <>
                        <button
                            href="/"
                            aria-label="Play Video"
                            onClick={() => setModalShow(!modalShow)}
                            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                        >


                            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform  rounded-full shadow-2xl group-hover:scale-110">

                                <svg
                                    className="w-10 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"

                                >
                                    <VideoModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                    <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                                </svg>

                            </div>
                        </button>
                    </>
                </div>
    */}

        </div>
    )
}

export default Hero