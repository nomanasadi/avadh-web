import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contactus = () => {
    return (
        <div>
            <Navbar />
            <img src="images/slide-2.webp" alt="" />

            <div>
                <h2 className='text-red-500  mb-6 text-4xl font-bold max-w-6xl m-auto mt-6'>Contact Details</h2>
                <div className='max-w-6xl m-auto flex items-center'>
                    <div className='w-1/2'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119254.336098878!2d77.75665165!3d20.924466350000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1746033320811!5m2!1sen!2sin"
                            width="500"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                    <div className=' w-1/2 p-8  shadow-2xl'>
                        <div className='flex justify-between'>
                          <input type="text" name="" id="" className='border border-slate-300 h-10 w-60 p-3 text-black' placeholder='Full-name' />
                          <input type="text" name="" id="" className='border border-slate-300 h-10 w-60 p-3 text-black' placeholder='Enter Your Email' />
                        </div>
                        <input type="text" name="" id="" className=' border border-slate-300 h-10 w-full p-3 text-black mt-8 mb-8' placeholder='Enter Your Email' />
                        <div className=''>
                        <textarea name="" id="" placeholder='Message' className='p-3 border border-slate-300 w-full' rows={9}></textarea>
                        </div>

                        <button className='bg-red-500 text-white p-4 pt-3 pb-3 mt-3'>Send Message</button>
                    </div>
                </div>
            </div>
          
          {/* Lcation Email  */}

          <div className="bg-white shadow-md mt-10 max-w-7xl mx-auto p-6 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        
        {/* Location */}
        <div className="flex items-start gap-4 w-full lg:w-1/3">
          <div className="bg-orange-50 p-3 rounded-full">
            <FaMapMarkerAlt className="text-red-500 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Location</h3>
            <p className="text-gray-600 text-sm">
              Survey No 128, Pot No.1, Opp. Super Tech Industry, 15 Km from Metoda Gidc (rajkot)
              Rajkot Kalavad road At Nikava Tal Kalavad. Dist. Jamnagar State Gujarat
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 w-full lg:w-1/3">
          <div className="bg-orange-50 p-3 rounded-full">
            <FaEnvelope className="text-red-500 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600 text-sm">avadhsnacks@gmail.com</p>
          </div>
        </div>

        {/* Call */}
        <div className="flex items-start gap-4 w-full lg:w-1/3">
          <div className="bg-orange-50 p-3 rounded-full">
            <FaPhoneAlt className="text-red-500 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Call</h3>
            <p className="text-gray-600 text-sm">(+91) 99097 77977</p>
          </div>
        </div>

      </div>
    </div>



            {/* Footer */}
            <div className='mt-20'>
            <Footer/>
            </div>
        </div>
    )
}

export default Contactus
