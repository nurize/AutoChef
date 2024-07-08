import BackgroundImage from '../assets/email-image.png';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const EmailSignUp = () => {
  return (
    <div 
      className="bg-cover bg-center flex flex-col items-center md:mx-auto w-full md:w-11/12 lg:w-4/5 mt-24 py-10 md:py-16 lg:py-24 justify-center bg-gray-700 text-white" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${BackgroundImage})`,
        fontFamily: 'Inter, sans-serif'
      }}
    >
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">
          Email us for any concerns with your car.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Sign Up for Exclusive Car Updates!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:py-1 w-full md:w-2/3 lg:w-1/2 justify-between md:px-2 md:rounded-md md:bg-white">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 md:w-auto rounded-md md:rounded-l-md md:rounded-t-none focus:outline-none text-black"
        />
        <button className="px-10 py-3 mt-8 md:mt-0 bg-red-600 rounded-md md:rounded-bl-none md:rounded-tl-none hover:bg-red-700 focus:outline-none md:w-auto">
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default EmailSignUp;
