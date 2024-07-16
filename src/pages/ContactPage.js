import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSnapchatGhost,
  FaTiktok,
  FaLinkedinIn,
} from 'react-icons/fa';
import MapComponent from '../components/MapComponent';

const locations = [
  { lat: 51.509865, lng: -0.118092 }, 
];

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col py-16 px-4 w-9/12 mx-auto">
      <h2 className="text-xl text-black font-bold mb-4">GOT A QUESTION?</h2>
      <h1 className="text-3xl text-black font-extrabold mb-8">GET IN TOUCH</h1>
      <p className="text-lg text-gray-700 mb-16">
        The team are ready to help with your enquiry. Please feel free to get in touch with any questions you may have on any of our services and someone from the team will endeavour to assist you.
      </p>
      <h3 className="text-2xl text-black font-semibold mb-8">FOLLOW US</h3>
      <div className="flex space-x-6 mb-8">
        <FaFacebookF className="text-black text-2xl cursor-pointer hover:text-red-600 transition duration-300" />
        <FaInstagram className="text-black text-2xl cursor-pointer hover:text-red-600 transition duration-300" />
        <FaTwitter className="text-black text-2xl cursor-pointer hover:text-red-600 transition duration-300" />
        <FaYoutube className="text-black text-2xl cursor-pointer hover:text-red-600 transition duration-300" />
        <FaSnapchatGhost className="text-black text-2xl cursor-pointer hover:text-red-600 transition duration-300" />
        <FaTiktok className="text-black text-2xl cursor-pointer hover:text-red-600 transition duration-300" />
        <FaLinkedinIn className="text-black text-2xl cursor-pointer hover:text-red-600 transition duration-300" />
      </div>
      <div className="mb-16">
        <div className="text-black text-lg mb-4">
          <a href="tel:+233200666211"><span className="inline-block mr-2">📞</span></a> 020 066 6211
        </div>
        <div className="text-black text-lg mb-4">
          <a href="mailto:autochef83@gmail.com"><span className="inline-block mr-2">✉️</span></a> theautochef83@gmail.com
        </div>
        <div className="text-black text-lg mb-4">
          <span className="inline-block mr-2">📍</span> 5 Delaware Dr, Tongwell, Milton Keynes MK15 8HG
        </div>
        <div className="text-black text-lg mb-4">
          <span className="inline-block mr-2">📍</span> No.5 The Heights, Weybridge, Surrey, KT13 0NY
        </div>
        <div className="text-black text-lg mb-4">
          <span className="inline-block mr-2">📍</span> 274a Baker Street, Enfield, London, EN1 3LD
        </div>
      </div>
      <MapComponent locations={locations} />
    </div>
  );
};

export default ContactPage;
