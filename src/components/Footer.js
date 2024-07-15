import { Link } from 'react-router-dom';
import serviceData from '../data/serviceData';

const Footer = () => {
  return (
    <>
      <div className="relative container mx-auto">
        <div className="relative flex flex-cl md:flex-row justify-around items-center bg-neutral-800 md:w-11/12 lg:w-4/5 py-4 md:py-8 lg:py-10 rounded-2xl mx-4 md:mx-auto text-white mb-8 top-24 md:top-24">
          <div className="flex items-center space-x-4 my-4 md:mb-0">
            <div className="bg-red-500 rounded-full p-2">
              <a href="https://maps.app.goo.gl/Kdr4PQ27nfd6ukvJ7" target='blank' ><img src={require('../assets/location.png')} alt="Location" className="w-5 h-5 md:w-9 md:h-9" /></a>
            </div>
            <span className='hidden md:block'>Achimota Mile 7</span>
          </div>
          <div className="flex items-center space-x-4 my-4 md:mb-0">
            <div className="bg-red-500 rounded-full p-2">
              <a href="mailto:autochef83@gmail.com"><img src={require('../assets/email.png')} alt="Email" className="w-5 h-5 md:w-9 md:h-9" /></a>
            </div>
            <span className='hidden md:block'>theautochef83@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4 my-4 md:mb-0">
            <div className="bg-red-500 rounded-full p-2">
              <a href="tel:+233200666211"><img src={require('../assets/phone.png')} alt="Phone" className="w-5 h-5 md:w-9 md:h-9" /></a>
            </div>
            <span className='hidden md:block'>0200666211</span>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white pb-2 pt-32 md:pt-40 lg:pt-48 px-4 md:px-16 w-full">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:gap-8 lg:justify-between mb-8">
            <div className="w-full md:w-2/5 mb-8 md:mb-0">
              <div className="text-2xl font-bold">
                <Link to='/'>Auto<span className='text-red-700'>Chef</span></Link>
              </div>
              <p>
                Using State of the art technology, we undertake car wash and servicing of your machine.
                We know how much you value your vehicle.
              </p>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold mb-4">Useful Links</h3>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul>
                {serviceData.map((service) => (
                  <li><Link to={`/services#${service.path}`} key={service.title}>{service.title}</Link></li>
                ) )}
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
              <a href="https://instagram.com/autochef_gh" target="_blank" rel="noopener noreferrer"><img src={require('../assets/instagram.png')} alt="Instagram" className="w-9 h-9" /></a>
              <a href="https://twitter.com/autochef_gh" target="_blank" rel="noopener noreferrer"><img src={require('../assets/twitter.png')} alt="X (Twitter)" className="w-9 h-9" /></a>
              <a href="https://tiktok.com/@autochef_gh" target="_blank" rel="noopener noreferrer"><img src={require('../assets/tiktok.webp')} alt="TikTok" className="w-9 h-9 border rounded-lg" /></a>
              <a href="https://snapchat.com/add/am_oreen" target="_blank" rel="noopener noreferrer"><img src={require('../assets/snapchat.png')} alt="Snapchat" className="w-9 h-9" /></a>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
