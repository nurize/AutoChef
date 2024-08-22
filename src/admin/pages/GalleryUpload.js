import React, { useState, useEffect } from 'react';
import UploadSection from '../components/UploadSection';
import Gallery from '../../client/components/Gallery';

const GalleryUpload = () => {
  // State to store the list of images retrieved from the server
  const [images, setImages] = useState([]);
  
  // State to store the currently selected image file for upload
  const [imageFile, setImageFile] = useState(null);
  
  // State to handle error messages
  const [error, setError] = useState('');
  
  // State to manage the upload process
  const [isUploading, setIsUploading] = useState(false);

  // Fetch the initial list of images from the server when the component mounts
  useEffect(() => {
    fetch('/api/gallery-images')
      .then(response => response.json())
      .then(data => setImages(data)) // Store the fetched images in the state
      .catch(error => console.error('Error fetching gallery images:', error)); // Log any fetch errors
  }, []);

  // Handle file selection for uploading an image
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setImageFile(file); // Set the selected file in the state
  };

  // Handle the upload process of the selected image file
  const handleImageUpload = () => {
    setIsUploading(true); // Indicate that the upload process has started
    setError(''); // Clear any existing errors

    // Prepare the form data with the selected image file
    const formData = new FormData();
    formData.append('image', imageFile);

    // Send a POST request to the server to upload the image
    return fetch('/api/upload-image', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error uploading image'); // Handle non-OK responses
        }
        return response.json(); // Parse the response data
      })
      .then(data => {
        setImages([...images, data.file]); // Add the newly uploaded image to the state
        setImageFile(null); // Clear the selected image file
      })
      .catch(error => {
        console.error('Error uploading image:', error); // Log any errors
        setError('Error uploading image. Please try again.'); // Set error message for the user
      })
      .finally(() => {
        setIsUploading(false); // Indicate that the upload process has finished
      });
  };

  // Handle the deletion of an image by its ID
  const handleImageDelete = (id) => {
    // Send a DELETE request to the server to remove the image
    fetch(`/api/delete-image/${id}`, { method: 'DELETE' })
      .then(() => {
        // Update the state to remove the deleted image
        setImages(images.filter(image => image._id !== id));
      })
      .catch(error => {
        console.error('Error deleting image:', error); // Log any errors
        setError('Error deleting image. Please try again.'); // Set error message for the user
      });
  };

  return (
    <div className="flex flex-col">
      {/* Upload section for selecting and uploading new images */}
      <div className="flex-1 bg-white p-4 lg:px-12">
        <UploadSection 
          onFileChange={handleFileChange} // Handle file selection
          onUpload={handleImageUpload} // Handle image upload
          error={error} // Display any error messages
        />
      </div>

      {/* Gallery section displaying uploaded images */}
      <div className="border-t border-[#E8E9ED] pt-4 lg:pt-10">
        <h2 className='text-2xl px-8 pb-4 lg:pb-6 lg:px-16'>Gallery</h2>

        {/* Render the gallery component with the images and delete handler */}
        <Gallery 
          images={images} // List of images to display
          onDelete={handleImageDelete} // Handle image deletion
        />
      </div>
    </div>
  );
};

export default GalleryUpload;
