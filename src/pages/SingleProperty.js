import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../data'
import banner from '../images/banner2.jpeg'
import banner1 from '../images/banner.jpeg'
import ShowerIcon from 'mdi-react/ShowerIcon';
import BedDoubleOutlineIcon from 'mdi-react/BedDoubleOutlineIcon';
import SquareOutlineIcon from 'mdi-react/SquareOutlineIcon';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ToysIcon from '@mui/icons-material/Toys';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import logo from '../images/logo.png'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import SchoolIcon from '@mui/icons-material/School';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import Banner from '../components/Banner';
import VideoModal from '../components/Modal'
import reception from '../images/reception.jpeg'

import gym from '../images/gym.jpeg'
import rooftop from '../images/rooftop.jpeg'
import playground from '../images/playground.jpeg'
import ImageModel from '../components/ImageModel'
import Amenities from '../components/Amenities'
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import ImageCarousel from '../components/Carousel'
import Sidebar from '../components/Sidebar'
import Message from '../components/Message'
import StickyBox from "react-sticky-box";





function SingleProperty() {
  const { slug } = useParams()
  const [modalShow, setModalShow] = useState(false);
  const [imageShow, setImageShow] = useState(false);
  return (
    <div className='h-full w-full'>

      <div>
        <ImageCarousel />
        <div className=' bg-gray-200 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 items-center'>


          <div className='flex items-center flex-wrap w-full justify-around pt-6  '>
            <p className='flex space-y-2 flex-col items-center space-x-3'><BedDoubleOutlineIcon /> <span className=''>4 Bedrooms</span> </p>
            <p className='flex space-y-2 flex-col items-center space-x-3'><ShowerIcon /> <span>4 Bathroom</span> </p>
            <p className='flex space-y-2 flex-col items-center space-x-3'><CameraEnhanceIcon /> <span>Camera </span> </p>

            <p className='flex space-y-2 flex-col items-center space-x-3'><LocalParkingIcon /> <span>2 Parking Slot</span> </p>


          </div>


        </div>

      </div>







      <div>
        <h3 className='text-center uppercase text-lg'>Extra amenities</h3>

        <div className='flex flex-wrap items-center justify-evenly p-10 space-x-4 space-y-4'>
          <div className='group md:h-[400px]  md:w-[450px] border rounded-none shadow-lg overflow-hidden hover:shadow-md flex flex-col cursor-pointer'>
            <Amenities imageUrl={reception} />

            <div className='flex flex-row items-center uppercase f justify-between p-3 bg-white'>
              <h3 className='text-lg text-center'>Reception</h3>


            </div>

          </div>


          <div className='group  md:h-[400px]  md:w-[450px] border rounded-none shadow-lg overflow-hidden hover:shadow-md flex flex-col cursor-pointer'>

            <Amenities imageUrl={gym} />
            <div className='flex flex-row items-center uppercase  f justify-between p-3 bg-white'>
              <h3 className='text-lg text-center'>Gym and workout</h3>



            </div>

          </div>
          <div className='group  md:h-[400px]  md:w-[450px] border rounded-none shadow-lg overflow-hidden hover:shadow-md flex flex-col cursor-pointer'>

            <Amenities imageUrl={rooftop} />
            <div className='flex flex-row items-center uppercase  f justify-between p-3 bg-white'>
              <h3 className='text-lg text-center'>Conference</h3>



            </div>

          </div>
          <div className='group  md:h-[400px]  md:w-[450px] border rounded-none shadow-lg overflow-hidden hover:shadow-md flex flex-col cursor-pointer'>
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

export default SingleProperty