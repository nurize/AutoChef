const services = [
  { title: 'Automobile resprays', icon: require('../assets/game-icons_car-key.png')},
  { title: 'Auto Electrical', icon: require('../assets/game-icons_car-key.png') },
  { title: 'Car Detailing', icon: require('../assets/game-icons_car-key.png')},
  { title: 'Paint Correction', icon: require('../assets/game-icons_car-key.png')},
  { title: 'Body Works', icon: require('../assets/game-icons_car-key.png') },
  { title: 'Auto Mechanic', icon: require('../assets/game-icons_car-key.png') },
];

const ServicesHomeSection = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">We Are Specialists In Following Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-16">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg border-2 border-gray-300">
              <h3 className="text-2xl font-semibold mb-4 pt-10">{service.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-red-600">Book Now</p>
                <img src={service.icon} alt="service icon" className="h-20 w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHomeSection;
