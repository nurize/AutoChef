import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="relative container mx-auto">
        <div className="relative flex flex-cl md:flex-row justify-around items-center bg-neutral-800 md:w-11/12 lg:w-4/5 py-4 md:py-8 lg:py-10 rounded-2xl mx-4 md:mx-auto text-white mb-8 top-24 md:top-24">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-red-500 rounded-full p-2">
              <a href="#"><img src={require('../assets/location.png')} alt="Location" className="w-5 h-5 md:w-9 md:h-9" /></a>
            </div>
            <span className='hidden md:block'>Achimota Mile 7</span>
          </div>
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-red-500 rounded-full p-2">
              <a href="#"><img src={require('../assets/email.png')} alt="Email" className="w-5 h-5 md:w-9 md:h-9" /></a>
            </div>
            <span className='hidden md:block'>theautochef83@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-red-500 rounded-full p-2">
              <a href="#"><img src={require('../assets/phone.png')} alt="Phone" className="w-5 h-5 md:w-9 md:h-9" /></a>
            </div>
            <span className='hidden md:block'>0200666211</span>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white pb-2 pt-32 md:pt-40 lg:pt8 px-4 md:px-16 w-full">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:gap-8 lg:justify-between mb-8">
            <div className="w-full md:w-2/5 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-red-500 mb-4">AutoChef</h2>
              <p>
                Using State of the art technology, we undertake car wash and servicing of your machine.
                We know how much you value your vehicle.
              </p>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold mb-4">Useful Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Appointment</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul>
                <li>Performance Upgrade</li>
                <li>Transmission Services</li>
                <li>Break Repair & Service</li>
                <li>Engine Service & Repair</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Opening Hours</h3>
              <ul>
                <li>Monday - Saturday </li>
                <li>7:00 AM - 9:00 PM</li>
                <li>Sunday</li>
                <li>10:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t-2 pt-4">
            <p className="text-center mb-4 md:mb-0">© 2024 AutoChef. All rights reserved.</p>
            <div className="flex justify-center items-center space-x-4">
              <a href="#"><img src={require('../assets/facebook.png')} alt="Facebook" className="w-9 h-9" /></a>
              <a href="#"><img src={require('../assets/twitter.png')} alt="Twitter" className="w-9 h-9" /></a>
              <a href="#"><img src={require('../assets/instagram.png')} alt="Instagram" className="w-9 h-9" /></a>
              <a href="#"><img src={require('../assets/linkedin.png')} alt="LinkedIn" className="w-9 h-9" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
