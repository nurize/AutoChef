import GalleryComponent from "../components/GalleryComponent";
import HeroSection from "../components/HeroSection";
import heroSections from "../data/heroSections";

const GalleryPage = () => {
  const heroData = heroSections.find(section => section.page === 'gallery');

  return ( 
    <div className="bg-black">
      {/* <h2 className="text-red-800 text-center text-5xl font-bold py-10 bg-stone-700 ">Gallery</h2> */}

      {/* <HeroSection 
        backgroundImage={heroData.backgroundImage}
        title={heroData.title}
        description={heroData.description}
        description2={heroData.description2}
      /> */}
      <GalleryComponent/>
    </div>
  );
}
 
export default GalleryPage;