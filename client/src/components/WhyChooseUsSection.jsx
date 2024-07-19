const reasons = [
  { title: 'Exceptional Expertise', icon: require('../assets/game-icons_car-key.png') },
  { title: 'Comprehensive Services', icon: require('../assets/game-icons_car-key.png') },
  { title: 'Timely And Reliable', icon: require('../assets/game-icons_car-key.png') },
  { title: 'Outstanding Reputation', icon: require('../assets/game-icons_car-key.png') },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-cover bg-center bg-gray-900 text-white py-16 lg:px-16" style={{ backgroundImage: `url(${require('../assets/whyBackgroundImage.png')})` }}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 ">
          <div className="space-y-6">
            <img src={require('../assets/mechanic.png')} alt="Mechanic working under a car" className="rounded-lg shadow-lg" />
            <img src={require('../assets/happy-mechanic.png')} alt="Mechanic smiling" className="rounded-lg shadow-lg" />
          </div>
          <img src={require('../assets/engine.png')} alt="Car engine" className="rounded-lg shadow-lg h-full" />
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:pl-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="mb-8">
            Choose us for seamless automotive experience - where expertise meets excellence. 
            With a commitment to quality, choose us for seamless automotive experience - where expertise meets excellence.
          </p>
          <ul>
            {reasons.map((reason) => (
              <li key={reason.title} className="flex items-center mb-4">
                <img src={reason.icon} alt="service icon" className="h-6 w-6 mr-2" />
                <span className="text-xl">{reason.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
