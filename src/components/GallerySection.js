import { Link } from "react-router-dom";
import GalleryComponent from "./GalleryComponent";



const GallerySection = () => {
  return (
    <div className="container mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="mb-8 text-gray-700">
        Explore our latest automotive triumphs - showcasing precision in every service and genuine parts, ensuring your vehicle excels on every journey.
      </p>
      <GalleryComponent/>
      <div className="mt-8 text-right">
        <Link to="/gallery" className="text-red-600 hover:underline">View More</Link>
      </div>
    </div>
  );
};

export default GallerySection;
