import React, { useMemo } from 'react';
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

const socialMediaIcons = [
  { Icon: FaFacebookF, key: 'facebook' },
  { Icon: FaInstagram, key: 'instagram' },
  { Icon: FaTwitter, key: 'twitter' },
  { Icon: FaYoutube, key: 'youtube' },
  { Icon: FaSnapchatGhost, key: 'snapchat' },
  { Icon: FaTiktok, key: 'tiktok' },
  { Icon: FaLinkedinIn, key: 'linkedin' },
];

const contactInfo = [
  { type: 'phone', value: '020 066 6211', link: 'tel:+233200666211', icon: '📞' },
  { type: 'email', value: 'theautochef83@gmail.com', link: 'mailto:autochef83@gmail.com', icon: '✉️' },
  { type: 'address', value: '5 Delaware Dr, Tongwell, Milton Keynes MK15 8HG', icon: '📍' },
  // { type: 'address', value: 'No.5 The Heights, Weybridge, Surrey, KT13 0NY', icon: '📍' },
  // { type: 'address', value: '274a Baker Street, Enfield, London, EN1 3LD', icon: '📍' },
];

const ContactPage = () => {
  const contactElements = useMemo(() => contactInfo.map((info, index) => (
    <div key={index} className="text-black text-lg mb-4">
      {info.link ? (
        <a href={info.link} className="inline-block mr-2">
          {info.icon} {info.value}
        </a>
      ) : (
        <>
          <span className="inline-block mr-2">{info.icon}</span> {info.value}
        </>
      )}
    </div>
  )), []);

  return (
    <div className="bg-white min-h-screen flex flex-col py-16 px-4 w-9/12 mx-auto">
      <h2 className="text-xl text-black font-bold mb-4">GOT A QUESTION?</h2>
      <h1 className="text-3xl text-black font-extrabold mb-8">GET IN TOUCH</h1>
      <p className="text-lg text-gray-700 mb-16">
        The team are ready to help with your enquiry. Please feel free to get in touch with any questions you may have on any of our services and someone from the team will endeavour to assist you.
      </p>
      <h3 className="text-2xl text-black font-semibold mb-8">FOLLOW US</h3>
      <div className="flex space-x-6 mb-8">
        {socialMediaIcons.map(({ Icon, key }) => (
          <Icon key={key} className="text-black text-2xl cursor-pointer hover:text-red-600 transition duration-300" />
        ))}
      </div>
      <div className="mb-16">
        {contactElements}
      </div>
      <MapComponent locations={locations} />
    </div>
  );
};

export default ContactPage;
