import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#FFD347] w-full px-6 md:px-12 lg:px-24 py-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                
                {/* Logo & Social */}
                <div>
                    <img src="images/logo.png" alt="Logo" className='w-[120px] h-auto mb-4' />
                    <h2 className='text-red-500 text-2xl md:text-3xl mb-3'>Follow Us</h2>
                    <div className='flex space-x-3'>
                        {[FaTwitter, FaFacebookF, FaInstagram].map((Icon, idx) => (
                            <div key={idx} className='bg-red-500 w-9 h-9 rounded-full flex justify-center items-center'>
                                <a href="#" className="text-white text-xl"><Icon /></a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h1 className='text-red-500 text-2xl md:text-3xl mb-4'>Contact Info</h1>
                    <p className='text-sm leading-relaxed'>
                        Survey No 128, Plot No.1, <br />
                        Opp. Super Tech Industry, 15 Km from Metoda GIDC (Rajkot) <br />
                        Rajkot Kalavad Road, At Nikava <br />
                        Tal Kalavad, Dist. Jamnagar <br />
                        Gujarat, India
                    </p>
                    <div className='mt-3'>
                        <a href="mailto:avadhsnacks@gmail.com" className='block text-sm text-blue-800 hover:underline'>
                            avadhsnacks@gmail.com
                        </a>
                        <a href="tel:+919999999999" className='block text-sm text-blue-800 hover:underline mt-1'>
                            (+91) 99999 99999
                        </a>
                    </div>
                </div>

                {/* Product Categories */}
                <div>
                    <h1 className='text-red-500 text-2xl md:text-3xl mb-4'>Product Category</h1>
                    <ul className="space-y-2 text-base text-gray-800">
                        <li>Namkeen</li>
                        <li>Fryums</li>
                        <li>Chips</li>
                        <li>Extruded</li>
                        <li>Biscuit</li>
                        <li>Imli</li>
                        <li>Papad</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h1 className='text-red-500 text-2xl md:text-3xl mb-4'>Quick Links</h1>
                    <ul className="space-y-2 text-base text-gray-800">
                        <li>About Us</li>
                        <li>Infrastructure</li>
                        <li>Contact Us</li>
                        <li>Annual Report</li>
                        <li>NR Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
            </div>

            <hr className='border-black opacity-25 mt-12 mb-5' />
            <div className='text-center text-sm'>
                ©2023 Copyright <span className='text-red-500 font-bold'>Prataap Snacks Limited</span>. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;
