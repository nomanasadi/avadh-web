import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Image */}
      <div className="mb-8">
        <img src="images/aboutusBanner.png" alt="About Us Banner" className="w-full h-auto object-cover" />
      </div>

      {/* About Us Section */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 md:px-8 mb-10 gap-6">
        {/* Text Content */}
        <div className="w-full md:w-1/2 bg-white h-auto md:h-[40rem] flex flex-col justify-start p-6 md:p-10 rounded-2xl shadow-md">
          <span className="text-red-500 text-3xl font-bold mb-4">About Us</span>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Welcome to Avadh Snacks, a rapidly growing snacks manufacturing brand based in Gujarat, India. Prataap Snacks Ltd. is our parent company. <br /><br />
            We pride ourselves on our state-of-the-art manufacturing setup, spanning a sprawling 5.8-acre land area. <br /><br />
            With 10 high-capacity manufacturing lines, we boast an impressive total production capacity of approximately 130 tonnes per day, catering to a wide customer base through our network of approximately 350 distributors. Our commitment to superior quality extends to our in-house printing and lamination division, made possible by our subsidiary, Red RotoPack Pvt Ltd. <br /><br />
            Embark on a snacking journey like no other and savor the flavours that have positioned us as the 3rd largest player in Gujarat’s organized snacks market.
          </p>
          <span className="mt-6 font-bold text-xl text-red-500">Read More...</span>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src="images/aboutusmain.png" alt="About Us" className="w-full h-auto md:h-[40rem] max-h-[38rem] object-contain rounded-2xl shadow-lg" />
        </div>
      </div>

      {/* Vision Section */}
      <section className="bg-gradient-to-br from-red-50 to-pink-50 py-12 px-4">
        <h2 className="text-red-600 text-3xl font-bold text-center mb-8">Vision</h2>
        <div className="space-y-8 max-w-4xl mx-auto text-center text-lg text-gray-800">
          <p>Become people’s favourite go-to brand in the snacks and namkeen industry with the yummiest/tastiest products.</p>
          <hr />
          <p>Commitment to the best quality products for our consumers.</p>
          <hr />
          <p>Maximum value to the consumer.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
        <h2 className="text-red-600 text-3xl font-bold text-center mb-8">Mission</h2>
        <div className="space-y-8 max-w-4xl mx-auto text-center text-lg text-gray-800">
          <p>We endeavour to fulfill all the snacking needs of our consumers with best quality, tasty, and value-for-money products.</p>
          <hr />
          <p>We strive to create value through best management practices, empowered & dedicated workforce, and innovation.</p>
          <hr />
          <p>We believe in building enduring partnerships with our business associates.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutus;
