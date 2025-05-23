import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-[#FFD347] w-full p-32 pb-5'>
            <div className='flex justify-between'>
                <div>
                    <img src="images/logo.png" alt="" className='w-[120px] h-auto' />
                    <h2 className='text-red-500 text-4xl mb-3'>follow us</h2>
                    <div className='flex space-x-3'>
                        <div className='bg-red-500 w-9 h-9 rounded-full flex justify-center items-center'>
                            <a href="#" className="text-white text-xl"><FaTwitter /></a>
                        </div>
                        <div className='bg-red-500 w-9 h-9 rounded-full flex justify-center items-center'>
                            <a href="#" className="text-white text-xl"><FaFacebookF /></a>
                        </div>
                        <div className='bg-red-500 w-9 h-9 rounded-full flex justify-center items-center'>
                            <a href="#" className="text-white text-xl"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-red-500 text-4xl mb-5'>Contact Info</h1>
                    <p className=''> Survey No 128, Pot No.1, <br />
                        Opp. Super Tech Industry, 15 <br /> Km from Metoda Gidc (rajkot) <br /> Rajkot Kalavad road At Nikava <br /> Tal Kalavad. Dist. Jamnagar <br /> State. Gujarat</p>
                    <div className='mb-3 mt-3'>
                        <a href="">avadhsnacks@gmail.com</a>
                    </div>
                    <a href=""> (+91) 99999 99999</a>
                </div>
                <div>
                    <h1 className='text-red-500 text-4xl mb-5'>Product Category</h1>
                    <ul className="pl-5 space-y-2 text-lg">
                        <li>Namkeen</li>
                        <li>Fryums</li>
                        <li>Chips</li>
                        <li>Extruded</li>
                        <li>Biscuit</li>
                        <li>Imli</li>
                        <li>Papad</li>
                    </ul>

                </div>
                <div>
                <h1 className='text-red-500 text-4xl mb-5'>Quick Links</h1>
                <ul className="pl-5 space-y-2 text-lg">
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
            <div className='text-center'>©2023 Copyright <span className='text-red-500 font-bold'>Prataap Snacks Limited</span> All Rights Reserved</div>
        </div>
    )
}

export default Footer
