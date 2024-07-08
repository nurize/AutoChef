import engineImage from '../assets/engine-block.png'; 

const Contact = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between my-24 px-4">
      <div className="lg:absolute top-0 w-full lg:w-3/4 bg-red-600 text-white p-8 md:p-16 z-0 lg:ml-8">
        <div className="lg:mr-4">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-16">Easy To Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-1/2">
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Opening Hours</h3>
              <p>Monday - Saturday</p>
              <p>7:00 AM - 9:00 PM</p>
              <p className="mt-2">Sunday</p>
              <p>10:00 AM - 6:00 PM</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Our Location</h3>
              <div className="flex items-center mb-2">
                
                <div className="bg-white rounded-full p-3 mr-3 min-w-fit">
                  <a href="#"><img src={require('../assets/contact-location.png')} alt="Location" className="w-5 h-5" /></a>
                </div>
                <p>1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</p>
              </div>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-3 mr-3">
                  <a href="#"><img src={require('../assets/contact-email.png')} alt="Location" className="w-5 h-5" /></a>
                </div>
                <p>autochef83@gmail.com</p>
              </div>
            </div>
          </div>
          <button className="bg-white text-red-600 py-2 px-4 w-full lg:w-1/2 font-semibold hover:bg-gray-100 mt-4 md:mt-8">
            Contact
          </button>
        </div>
      </div>
      <div className="relative z-10 mt-8 ml-auto pt-12 lg:mt-0 lg:mr-32 w-5/12 h-3/5 align-bottom hidden lg:block">
        <img 
          src={engineImage} 
          alt="Engine" 
          className="w-full lg:w-[600px] h-[300px] lg:h-[500px] object-cover rounded-lg border-2" 
        />
      </div>
    </div>
  );
};

export default Contact;
