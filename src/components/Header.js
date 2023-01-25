import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Properties', href: '/property' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },

]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, handleShow] = useState(false);
  const navigate = useNavigate()
  const transitionNavBar = () => {
    if (window.scrollY > 80) {
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
    <div>

      <div className={`fixed top-0 z-50 w-full bg-gray-800 pb-2  `}>
        <div className={`flex bg-gray-800 p-3 justify-around items-center shadow-md ${show && 'hidden'}`}>
          <div className='flex space-x-4 text-sm text-white'>

            <span><EmailIcon /> info@esplanade.co.ke</span>
            <span><PhoneIcon /> +(254) 701888222</span>
            <span><FmdGoodIcon /> Suswa Road , Parklands</span>

          </div>
          <div className={`space-x-4  cursor-pointer hidden lg:flex text-white`}>
           

            <a className='text-yellow-600 bg-white  py-1 rounded-full space-x-2  flex px-3 w-full no-underline' target="_blank" href="https://wa.me/+254701888444">
              <h3 className='text-lg'>Get in touch</h3>
              <WhatsAppIcon />
            </a>


          </div>


        </div>
        <div className="">
          <div className="py-2 ">
            <div className="relative px-2 md:px-10 pt-3 flex items-center justify-between">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center no-underline"
              >

                <span className="ml-4 text-xl md:text-3xl  font-bold tracking-widest italic text-yellow-600 font-serif  uppercase">
                  Algebris properties
                </span>
              </a>
              <ul className="flex items-center hidden items-center flex-[0.7] space-x-8 lg:flex">
                <li>
                  <a
                    href="/"
                    aria-label="home page"
                    title="Home page"
                    className="font-medium text-lg no-underline uppercase tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    aria-label="About Us"
                    title="About Us"
                    className="font-medium text-lg no-underline uppercase tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/property"
                    aria-label="Property"
                    title="Property"
                    className="font-medium text-lg no-underline uppercase tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Property
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    aria-label="Contact Us"
                    title="Contact Us"
                    className="font-medium text-lg no-underline uppercase  tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <div className="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-7 text-yellow-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full">
                    <div className="p-5 bg-white border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center  no-underline "
                          >

                            <span className="ml-2 text-xl font-bold tracking-wide text-yellow-600 uppercase">
                              algebris properties
                            </span>
                          </a>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg className="w-7 text-yellow-600" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-5">
                          <li>
                            <a
                              href="/"
                              aria-label="home page"
                              title="Home page"
                              className="font-medium text-lg no-underline uppercase tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                              Home
                            </a>
                          </li>
                          <li>
                            <a
                              href="/about"
                              aria-label="About Us"
                              title="About Us"
                              className="font-medium text-lg no-underline uppercase tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                              About
                            </a>
                          </li>
                          <li>
                            <a
                              href="/property"
                              aria-label="Property"
                              title="Property"
                              className="font-medium text-lg no-underline uppercase tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                              Property
                            </a>
                          </li>

                          <li>
                            <a
                              href="/contact"
                              aria-label="Contact Us"
                              title="Contact Us"
                              className="font-medium text-lg no-underline uppercase  tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                              Contact
                            </a>
                          </li>

                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header