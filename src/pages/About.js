import React from 'react'
import Banner from '../components/Banner'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import banner from '../images/banner2.jpeg'
import banner1 from '../images/logo2.jpeg'
import { Team } from '../components/Team';
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';



function About() {
  return (
    <div>
      <Banner imageUrl={banner} title="About us" description='Get to know our company.' />
      <div>
        
        <div className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-7 lg:grid-cols-2">

            <div className="lg:pr-10 pt-6">
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
                <h5 className="mb-4 px-2 text-4xl italic font-serif uppercase text-navy font-bold leading-none">
                  Algebris properties
                </h5>

              </span>

              <h6 className='pt-3 uppercase text-2xl font-serif italic '>Sophisticated Living</h6>
              <p className="mb-6 mt-4 text-gray-900 text-xl">
              Algebris Property Company is a leading real estate firm specialized in the development of residential  properties.

We offer a comfortable stay, luxurious services and uninterrupted relaxation. </p>

              <p className="mb-6 mt-4 text-gray-900 text-xl">
               Our state of the art accomodation provides for wonderful living space suitable for a peaceful family living and kids safety. We strive to provide our clients with exceptional customer service and exceed their expectations, ensuring our clients get return on their investments.              </p>




            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={banner1}
                alt=""
              />
            </div>
          </div>
        </div>


      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xl font-bold tracking-wider text-2xl text-navy italic font-serif uppercase rounded-full bg-teal-accent-400">
              Why choose our company
            </p>
          </div>

        </div>
        <div className="flex items-center flex-wrap justify-center lg:space-x-10 space-y-8 lg:space-y-0 py-6  mt-2">
          <div className="border-2 h-[500px] border-l-yellow-600 pr-20 px-20 shadow-sm py-20 flex items-start flex-col ">
            <div className='py-3'>
              <p className="mb-3 text-2xl font-bold font-serif tracking-wide text-navy uppercase">
                Our vision
              </p>

              <p className="max-w-xs mx-auto mb-2 text-lg text-gray-700">
              To be the real state developer of choice by providing quality developments that achieve optimum return on investment for our clients.
              </p>

            </div>
            <div>
              <p className="mb-3 md:text-2xl font-bold font-serif tracking-wide text-navy uppercase">
                Our mission
              </p>

              <p className="max-w-xs mx-auto md:text-lg mb-2 text-gray-700">
              Our mission is to continually provide affordable quality developments while delivering delightful engagement of clients.
              </p>

            </div>


          </div>
          <div className="border-2 h-[500px] border-l-yellow-600 px-10 pr-20 shadow-sm py-20 flex items-start flex-col ">
            <div className='-mt-5'>
              <p className="mb-2 md:text-2xl font-bold font-serif tracking-wide text-navy uppercase">
                Our core values
              </p>
              <p className="  font-medium tracking-wide md:text-lg ">
                We purpose to :
              </p>
              <div className='md:text-lg'>
                <p><ArrowRightSharpIcon /><span>Delight our Partners.</span></p>
                <p><ArrowRightSharpIcon /><span>Make our brand recognizable and ethical.</span></p>
                <p><ArrowRightSharpIcon /><span>Motivate out Teams; Celebrate our Managemen.</span></p>

              </div>




            </div>
            <div className=''>
              <p className="  font-medium tracking-wide md:text-lg ">
                We achieve our purpose through these pillars:
              </p>

              <div className='flex justify center space-x-4 md:text-lg ' >
                <div>
                  <p><ArrowRightSharpIcon /><span>Integrity.</span></p>
                  <p><ArrowRightSharpIcon /><span>Transparency.</span></p>
                  <p><ArrowRightSharpIcon /><span>Timeliness.</span></p>

                </div>
                <div>
                  <p><ArrowRightSharpIcon /><span>Integrity.</span></p>
                  <p><ArrowRightSharpIcon /><span>Transparency.</span></p>
                  <p><ArrowRightSharpIcon /><span>Timeliness.</span></p>

                </div>
                

              </div>

            </div>
           


          </div>



        </div>
      </div>


    </div>
  )
}

export default About