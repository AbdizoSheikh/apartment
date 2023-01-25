import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import House from './House';
import { useNavigate } from 'react-router-dom'
import { posts } from '../data'
import '../Style.css'

function Featured() {
    return (
        <div>

            <div className='flex flex-wrap justify-center  w-full '>
                <div className='md:w-1/3 mt-24 px-3  '>
                    <div className=''>
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-10 left-10 z-0 hidden w-32 text-3xl font-bold -mt-8 -ml-20 text-yellow-700 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                                        x="0"
                                        y="0"
                                        width=".155"
                                        height=".30"
                                    >
                                        <circle cx="2" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                                    width="58"
                                    height="24"
                                />
                            </svg>
                            <h5 className="mb-4 px-2 text-3xl italic font-serif uppercase text-navy font-bold leading-none">
                                Project overview
                            </h5>

                        </span>
                        <p className='text-lg pb-2'>Infused within the idyllic suburban Parklands, Esplanade is a grand
                            architectural marvel soon to be fused on Suswa Road, off Mpaka road, in
                            Parklands.</p>

                    </div>
                    <div className='pt-3'>
                        <h4 className='capitalize font-normal pb-2'>Location, Breathtaking views , community</h4>
                        <h5 className='capitalize font-normal pb-2'>quality living it all starts here!</h5>
                        <p className='capitalize text-lx font-normal pb-2'>From the grandeur of Esplanade’s iconic design to the impeccable
                            and exquisite interiors, these spacious 4 Bedroom all En-suite
                            Residences present both resident and investor alike with a
                            valuable possession.</p>
                    </div>




                </div>

                <div className='flex md:-ml-10 items-center md:w-1/2 flex-wrap justify-around mt-16'>
                    {
                        posts.map(({ id, name, price, slug, profilePic, area, bedrooms }) => (
                            <div className='w-[390px] md:w-[550px] m-2'>
                                <House key={id} id={id} name={name} slug={slug} imageUrl={profilePic} price={price} area={area} bedroom={bedrooms} />

                            </div>

                        ))
                    }
                </div>

            </div>



        </div>
    )
}

export default Featured