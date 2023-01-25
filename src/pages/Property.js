import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Style.css'
import { posts } from '../data'
import banner from '../images/banner2.jpeg'
import banner1 from '../images/banner.jpeg'
import ShowerIcon from 'mdi-react/ShowerIcon';
import BedDoubleOutlineIcon from 'mdi-react/BedDoubleOutlineIcon';
import SquareOutlineIcon from 'mdi-react/SquareOutlineIcon';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ToysIcon from '@mui/icons-material/Toys';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import logo from '../images/logo2.png'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import SchoolIcon from '@mui/icons-material/School';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import Banner from '../components/Banner';
import VideoModal from '../components/Modal'
import reception from '../images/reception.jpeg'

import gym from '../images/gym.jpeg'
import rooftop from '../images/rooftop.jpeg'
import sauna from '../images/sauna.jpg'
import playground from '../images/playground.jpeg'
import ImageModel from '../components/ImageModel'
import Amenities from '../components/Amenities'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import ImageCarousel from '../components/Carousel'
import Sidebar from '../components/Sidebar'
import Message from '../components/Message'
import StickyBox from "react-sticky-box";
import SquareFootIcon from '@mui/icons-material/SquareFoot';





function Property() {
  const { slug } = useParams()
  const [show, handleShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 150) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className='h-full w-full bg-gray-100'>

      <div>
        <ImageCarousel />
        <div className='shadow-md bg-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 items-center'>


          <div className='flex items-center flex-wrap w-full justify-around pt-6  '>
            <p className='flex space-y-2 flex-col items-center space-x-3'><span><BedDoubleOutlineIcon /></span> <span className='text-xl'>4 Bedrooms all ensuite</span> </p>
            <p className='flex space-y-2 flex-col items-center space-x-3'><span><ShowerIcon /></span><span className='text-xl'>4 Bathrooms</span> </p>
            <p className='flex space-y-2 flex-col items-center space-x-3'><span><SquareFootIcon /></span> <span className='text-xl'>249 Sq.metres </span> </p>

            <p className='flex space-y-2 flex-col items-center space-x-3'><span><LocalParkingIcon /></span> <span className='text-xl'>2 Parking Slot</span> </p>


          </div>


        </div>
      </div>


      <div className='flex flex-col md:flex-row justify-around flex-wrap w-full h-full mt-24'>
        <div className='flex flex-col w-full md:w-1/2 '>
          <div className=' bg-white p-5'>
            <h3 className='py-2 text-3xl text-navy uppercase font-serif italic'>Description</h3>
            <div className='px-3   border-1 border-gray-500' />
            <h6 className='pt-3'>4 bedroom all Ensuite Apartment</h6>
            <p className='font-normal py-1 tracking-wider text-lg  leading-8 '>Algebris Property Company is a leading real estate firm specialized in the development of residential  properties.
            </p>
            <p className='font-normal py-1 tracking-wider text-lg leading-8 '>Set along suswa road parklands, and just a stroll away from parklands mosque, esplanade’s exquisite 4 beds apartment pivot on the intersection of leisure and luxurious lifestyles bringing residents the spirit of true urban and sophisticated living , residents will have access to resort like facilities such as a business hub, rooftop entertainment terrace, steam room and sauna ,business lounge and fully equipped start of art gym
            </p>
            <p className='font-normal py-1 tracking-wider text-lg leading-8 '>We offer a comfortable stay, luxurious services and uninterrupted relaxation. Our state of the art accomodation provides for wonderful living space suitable for a peaceful family living and kids safety. We strive to provide our clients with exceptional customer service and exceed their expectations, ensuring our clients get return on their investments.The architecture of these excutive spacious apartments is both inspiring and stylish blending impeccable design with world -class amenities
            </p>

            <div>
              <h4 className='text-lg font-medium py-2'>Features and amenities:</h4>
              <div className='md:px-24 text-lg'>
                <p><ArrowRightSharpIcon /> <span>Fully Equipped State-of-the-art Gym.</span></p>
                <p><ArrowRightSharpIcon /> <span>Steam Room & Sauna </span></p>
                <p><ArrowRightSharpIcon /> <span>Kids Play Zone</span></p>
                <p><ArrowRightSharpIcon /> <span> Business Centre .</span></p>
                <p><ArrowRightSharpIcon /> <span>back up generator and borehole .</span></p>
                <p><ArrowRightSharpIcon /> <span>Rooftop Entertainment Terrace .</span></p>
                <p><ArrowRightSharpIcon /> <span>Concierge Reception Lobby .</span></p>
                <p><ArrowRightSharpIcon /> <span>Beautiful Driveway and 2 Parking Bays for every
                  resident </span></p>
                <p><ArrowRightSharpIcon /> <span>CCTV Surveillance and Manned Gatehouse.</span></p>
                <p><ArrowRightSharpIcon /> <span>Just 50 metres from Parklands Mosque</span></p>
                <p><ArrowRightSharpIcon /> <span>Unhindered Views of Karura Forest & Nairobi’s Cityscape </span></p>
                <p><ArrowRightSharpIcon /> <span>Close Proximity to the best schools, hospitals, malls,
                  entertainment spots and much more… </span></p>


              </div>
            </div>

          </div>

          <div className='bg-white mt-3 '>
            <div className='flex justify-between px-2 py-4 '>
              <h5 className='text-lg italic uppercase text-navy'>address</h5>
              <a href='https://www.google.com/maps/place/Suswa+Rd,+Nairobi/@-1.256573,36.813111,16z/data=!4m5!3m4!1s0x182f17101c110ae9:0x51641902a98e7591!8m2!3d-1.256573!4d36.8131107?hl=en' target="_blank" className='p-2 bg-navy rounded-full no-underline capitalize text-white cursor-pointer'>Open google map</a>
            </div>



            <div className='px-4'>
              <div className='px-5   border-1 border-gray-500' />
              <div className='flex justify-between pt-3'>
                <h5 className='p-2 md:space-x-5 text-lg font-normal'>Address: <span className='px-1 md:px-4'>Suswa road parklands</span></h5>
                <h5 className='p-2 md:space-x-5 text-lg font-normal'>Zip Code / Postal Code: <span className='px-1 md:px-4'>00300</span></h5>
              </div>
              <h5 className='p-2 space-x-5 text-lg font-normal'>City:  <span className='px-4'> Nairobi, Parklands</span></h5>
            </div>
          </div>

          <div className='p-4 bg-white mt-4 px-5'>
            <h5 className='text-lg italic uppercase text-navy'>Details</h5>
            <div className='flex flex-col px-1    md:px-7'>
              <div className='flex flex-col  md:p-3'>
                <p className='flex justify-between w-full md:w-[400px]  '><span className='font-bold'>Price:</span>  <span>Ksh 19.5 Million</span></p>
                <p className='flex justify-between w-full md:w-[400px]  '><span className='font-bold'>Garage:</span>  <span>2</span></p>
                <p className='flex justify-between w-full md:w-[400px] '><span className='font-bold'>Property Type:</span>  <span>Residential</span></p>


                <p className='flex justify-between w-full md:w-[400px] '><span className='font-bold'>Property Status:</span>  <span>For Sale</span></p>
                <p className='flex justify-between w-full md:w-[400px]'><span className='font-bold'>Bathrooms:</span>  <span>5</span></p>

                <p className='flex justify-between w-full md:w-[400px]'><span className='font-bold'>Property Size:</span>  <span>249sq. Metres</span></p>





                <p className='flex justify-between w-full md:w-[400px]  '><span className='font-bold'>Bedrooms:</span>  <span className=''>4 Bedroom all ensuite</span></p>


              </div>

            </div>
          </div>


        </div>
        <div id="wrapper" className='mt-10 md:px-0 px-10'>


          <div id="sticky" className='md:sticky shadow-sm md:w-[350px]   md:top-[80px]  mb-10 p-10 flex flex-col justify-start items-start bg-white'>
            <div>
              <img className='w-72 h-36 object-fit' src={logo} alt="" />
              <h3 className='text-sm p-2'>Feel free to text us if interested</h3>

            </div>

            <form action="">
              <input className='p-2 w-full border border-navy outline-none  m-2 text-lg  text-black' type="text" placeholder=' Name' />
              <input className='p-2 w-full border border-navy outline-none  m-2 text-lg text-black' type="email" placeholder='Email' />
              <textarea className='p-2 w-full border border-navy outline-none  m-2 text-lg text-black' name="" id="" cols="20" rows="6" placeholder='Message'></textarea>

              <div className='w-full mx-auto flex justify-center items-center'>
                <button className='p-2 w-full  rounded-full bg-navy text-white uppercase'>Send Message</button>
              </div>
            </form>
          </div>

        </div>
      </div>








      <div className='mt-20'>
        <h3 className='text-center uppercase text-3xl text-navy italic font-serif'>Extra amenities</h3>

        <div className='flex flex-wrap items-center justify-around  space-x-4 space-y-4'>
          <div className='    border rounded-none  overflow-hidden  flex flex-col cursor-pointer'>

            <Amenities imageUrl={reception} />




            <div className='flex flex-row items-center uppercase f justify-between p-3 bg-white'>
              <h3 className='text-lg text-center'>Reception</h3>


            </div>

          </div>


          <div className=' border rounded-none overflow-hidden  flex flex-col cursor-pointer'>

            <Amenities imageUrl={gym} />
            <div className='flex flex-row items-center uppercase  f justify-between p-3 bg-white'>
              <h3 className='text-lg text-center'>Gym and workout</h3>



            </div>

          </div>
          <div className=' border rounded-none  overflow-hidden  flex flex-col cursor-pointer'>

            <Amenities imageUrl={rooftop} />
            <div className='flex flex-row items-center uppercase  f justify-between p-3 bg-white'>
              <h3 className='text-lg text-center'>Rooftop Entertainment Terrace</h3>



            </div>

          </div>
          <div className=' border rounded-none overflow-hidden  flex flex-col cursor-pointer'>

            <Amenities imageUrl={sauna} />
            <div className='flex flex-row items-center uppercase  f justify-between p-3 bg-white'>
              <h3 className='text-lg text-center'>Sauna Room</h3>



            </div>

          </div>
          <div className=' border rounded-none  overflow-hidden hover:shadow-md flex flex-col cursor-pointer'>
            <Amenities imageUrl={playground} />

            <div className='flex flex-row items-center uppercase  f justify-between p-3 bg-white'>
              <h3 className='text-lg text-center'>Kids playground</h3>



            </div>

          </div>

        </div>





      </div>












    </div>



  )
}

export default Property