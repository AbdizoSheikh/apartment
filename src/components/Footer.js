import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
export const Footer = () => {
  return (
    <div className="px-4 pt-16 bg-gray-800 text-white ">

      <div className="p-6 ">
        <h2 className="text-center py-3">In need of a property or any other inquiries</h2>
        <h3 className="text-center">Send us an Email</h3>
        <form action="" className="flex w-full flex-wrap justify-center items-center space-x-10">

          <div className=' flex flex-col m-4 md:flex-row w-full lg:w-1/3 '>
            <label className='leading-7 text-md text-white ' for="">Name:</label>
            <input name="lastname" className=' md:mx-auto md:px-3  bg-white text-black  rounded border border-none outline-none w-full lg:w-3/4 py-2' type="text" />
          </div>

          <div className=' flex flex-col m-4 md:flex-row w-full lg:w-1/3 '>
            <label className='leading-7 text-md text-white ' for="">Email:</label>
            <input name="email" className='md:mx-auto md:px-3 bg-white text-black rounded border border-none outline-none w-full lg:w-3/4 py-2' type="text" />
          </div>

          <div className=''>
            <button type="submit" className='bg-black text-white px-10 py-2  rounded-full uppercase'  >Send</button>
          </div>
        </form>
      </div>
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center no-underline"
          >
            
            <span className="ml-2 text-xl font-bold no-underline tracking-wide text-white uppercase">
              algebris properties
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
            Esplanade is strategically located on Suswa Road, off Mpaka Road,
Parklands enjoying quick access through Westlands and Limuru
Road with easy connectivity and close proximity to various spots and
amenities
            </p>
            
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-white">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors no-underline duration-300 text-white hover:text-deep-purple-800"
            >
              +254701888222
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors no-underline duration-300 text-white hover:text-deep-purple-800"
            >
              info@esplanade.co.ke
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors no-underline duration-300 text-white hover:text-deep-purple-800"
            >
              Suswa Road , Off Mpaka Road Parklands
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-white">
            Social 
          </span>
          <div className="flex items-center mt-1 space-x-3">
          <a className='text-white' href="">
              <FacebookIcon />
            </a>

            <a className='text-white ' target="_blank" href="https://wa.me/+254701888444">
              <WhatsAppIcon />
            </a>
          </div>
          <p className="mt-4 text-sm text-white">
            Free free to send us a text via our socials too
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center pt-5 pb-2 border-t lg:flex-row">
        <p className="text-sm text-white text-center">
          © Copyright 2022 Algebris Properties. All rights reserved.
        </p>
        
      </div>
    </div>
  );
};