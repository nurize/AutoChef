const ServicesSection = ({ title, description, points, image, icon, alignRight }) => {
  const containerAlignmentClass = alignRight ? 'ml-auto lg:ml-auto' : 'mr-auto lg:mr-auto';

  return (
    <section className="relative flex items-center justify-center bg-black text-white bg-cover bg-center p-3 md:p-10"
    style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${image})`,
      fontFamily: 'Inter'
    }}
    >
      {/* <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70" 
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${image})`
        }} 
      />
      <div 
      className="bg-cover bg-center flex flex-col items-center w-11/12 md:w-4/5 mx-auto py-24 justify-center bg-gray-700 text-white" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
        fontFamily: 'Inter'
      }}
      >
     </div> */}
      <div className={`relative z-10 p-8 sm:p-12 md:p-16 lg:w-2/3 xl:w-7/12 rounded-lg ${containerAlignmentClass}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 md:pb-6 lg:pb-8 font-bold mb-4 flex italic items-center">
          {title} 
          <span className="ml-2 text-xl h-20 w-20 " role="img" aria-label="icon">
            <img src={icon} alt='service icon'/></span>
        </h2>
        <p className="mb-4 text-base sm:text-lg">{description}</p>
        <ul className="list-disc list-inside mb-8 text-base sm:text-lg">
          {points.map((point, index) => (
            <li key={index} className='mb-2 md:mb-4'><span className="font-bold">{point.title}:</span> {point.text}</li>
          ))}
        </ul>
        <button className="bg-white hover:bg-red-700 text-red-700 hover:text-white text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Book A Service
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
