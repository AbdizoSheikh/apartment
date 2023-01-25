import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShowerIcon from 'mdi-react/ShowerIcon';
import BedDoubleOutlineIcon from 'mdi-react/BedDoubleOutlineIcon';
import SquareOutlineIcon from 'mdi-react/SquareOutlineIcon';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import '../Style.css'


function House({ id, name, imageUrl, price, slug, area, bedroom }) {

    const navigate = useNavigate()

    return (
        <div id={id} className='group bg-gray-100 border rounded-none shadow-lg overflow-hidden hover:shadow-md flex flex-col cursor-pointer'>
            <div className='relative bg-black'>
                <img className='h-64 w-full opacity-90 object-cover rounded-none group-hover:scale-105 transition-transform ease-in-out duration-200' src={imageUrl} alt="" />
                <h5 className='absolute top-0 right-2  p-2 font-bold text-white  bg-gray-800  m-2 uppercase text-sm'> for Sale</h5>
                <p className='absolute bottom-0 left-2 text-white text-xl font-bold'>Ksh 19.5 Million</p>
            </div>


            <div className='p-3'>
               
                <div>
                    <h2 className='uppercase text-navy tracking-widest text-2xl font-serif italic font-bold'>esplanade</h2>
                    <p>Suswa Road , Off Mpaka Road Parkland</p>
                </div>
                
                <div className='flex space-x-20 items-center pt-3'>
                    <div className='flex flex-col'>
                        <p className='flex items-center font-medium text-xl'>4 <span  className='text-yellow-500  '><BedDoubleOutlineIcon  /></span></p>
                        <h5 className='text-sm font-medium'>Bedrooms</h5>
                    </div>
                  
                    <div className='flex flex-col'>
                        <p className='flex items-center font-medium text-xl'>4 <span className='text-yellow-500'><ShowerIcon/></span></p>
                        <h5 className='text-sm font-medium'>Bathrooms</h5>
                    </div>
                    <div className='flex flex-col'>
                        <p className='flex items-center font-medium text-xl'>249 <span className='text-yellow-500 icon'><SquareFootIcon fontSize='xl' /></span></p>
                        <h5 className='text-sm font-medium'>Sq.Metres</h5>
                    </div>
                    
                   
                </div>
                
            </div>


            < button className=' text-center max-w-5xl mx-auto p-2  m-10 rounded-full hover:bg-black bg-navy text-white uppercase' onClick={() => navigate(`/property`)}>View Details</button>


        </div>
    )
}

export default House