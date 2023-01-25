import React, { useRef } from 'react'
import Banner from '../components/Banner'
import banner from '../images/contact.jpg'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ScrollReveal from '../components/ScrollReveal';


function Contact() {
  const childRef = useRef();

  return (
    <div className='bg-gray-100'>
      <ScrollReveal ref={childRef} children={() => (
        <div>


          <Banner imageUrl={banner} title="Contact Us" description='Got a question about us?  We are here to assist you.' />

          <div className='flex justify-center flex-wrap w-full items-center p-3 md:-space-x-24 '>
            <div className='md:w-1/2 h-[1000px] flex flex-wrap flex-col   items-center'>
              <div className='md:w-3/4 p-10 shadow-sm border-t-4 bg-white  border-t-yellow-500 mb-3 mt-3'>
                <h4 className='capitalize font-bold text-navy text-4xl font-serif'>Get in touch with us</h4>
                <p className='pt-1'>If you have any questions, We’d love to chat. Reach out below and We’ll get back to you shortly. I look forward to hearing from you.</p>
              </div>
              <div className='mx-auto w-full md:w-3/4 border-2 rounded-md shadow-sm p-3 md:p-14 lg:px-32 bg-white ' >
                <form className="w-full bg-white">

                  <div className=' flex flex-col md:flex-row m-4 '>
                    <label className='leading-7 text-md text-gray-900 w-full lg:w-1/4' for="">FirstName:</label>
                    <input name="firstname" className='md:mx-auto md:px-3 py-2 bg-gray-100 bg-opacity-50 rounded border border-gray-600 w-full lg:w-3/4' type="text" />

                  </div>

                  <div className=' flex flex-col m-4 md:flex-row '>
                    <label className='leading-7 text-md text-gray-900 w-1/4' for="">LastName:</label>
                    <input name="lastname" className=' md:mx-auto md:px-3  bg-gray-100 bg-opacity-50 rounded border border-gray-600 w-full lg:w-3/4 py-2' type="text" />
                  </div>

                  <div className=' flex flex-col m-4 md:flex-row '>
                    <label className='leading-7 text-md text-gray-900 w-1/4' for="">Email:</label>
                    <input name="email" className='md:mx-auto md:px-3 bg-gray-100 bg-opacity-50 rounded border border-gray-600 w-full lg:w-3/4 py-2' type="text" />
                  </div>

                  <div className=' flex flex-col m-4 md:flex-row '>
                    <label className='leading-7 text-md text-gray-900 w-1/4' for="">Message:</label>
                    <textarea name="message" className='md:mx-auto py-5   bg-gray-100 bg-opacity-50 md:px-3 md:py-8 rounded border border-gray-600 w-full lg:w-3/4'>  </textarea>
                  </div>

                  <div className='flex justify-center items-center mx-auto mb-5 mt-2'>
                    <button type="submit" className='bg-gray-900 text-white p-2 rounded-full uppercase font-serif'  >Send us an Email</button>
                  </div>
                </form>



              </div>

            </div>
            <div className='md:w-1/2 flex h-[1000px] flex-wrap flex-col items-center '>
              <div className='md:w-3/4 w-full p-7 md:p-10 shadow-sm border-t-4 flex flex-col space-y-2  bg-white border-t-navy mb-3 mt-3 '>
                <h4 className='capitalize font-bold text-navy text-4xl font-serif'>For more information</h4>
                <span><PhoneIcon /> +254701888222</span>
                <span><EmailIcon /> info@esplanade.co.ke</span>

              </div>
              <div className='md:w-3/4 w-full p-7 md:p-10 shadow-sm bg-white mb-2 mt-2'>
                <span><FmdGoodIcon/> Suswa Road , Off Mpaka Road Parklands</span>
                

              </div>


              <div className='mx-auto w-full' >
                <div className=" mt-6 w-full md:w-3/4  lg:mx-auto shadow-md p-3 md:p-14 lg:px-32  h-[300px] lg:h-[400px] bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end  relative">
                  <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8588404033826!2d36.810916650437!3d-1.2565729990789845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17101c110ae9%3A0x51641902a98e7591!2sSuswa%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1649242200291!5m2!1sen!2ske" style={{ opacity: '1' }}></iframe>
                </div>



              </div>

            </div>
          </div>












        </div>

      )} />

    </div>
  );
}

export default Contact