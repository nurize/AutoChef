import React, { useState, useEffect } from 'react';
import UploadSection from '../components/UploadSection';
import Gallery from '../../client/components/Gallery';

const GalleryUpload = () => {
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/gallery-images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching gallery images:', error));
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (file && validImageTypes.includes(file.type)) {
      setImageFile(file);
      setError('');
    } else {
      setError('Please select a valid image file (jpeg, png, gif).');
      setImageFile(null);
    }
  };

  const handleImageUpload = () => {
    if (!imageFile) {
      setError('No image selected for upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    fetch('/api/upload-image', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        setImages([...images, data]);
        setImageFile(null);
        setError('');
      })
      .catch(error => {
        console.error('Error uploading image:', error);
        setError('Error uploading image.');
      });
  };

  const handleImageDelete = (id) => {
    fetch(`/api/delete-image/${id}`, { method: 'DELETE' })
      .then(() => {
        setImages(images.filter(image => image.id !== id));
      })
      .catch(error => {
        console.error('Error deleting image:', error);
        setError('Error deleting image.');
      });
  };

  return (
    <div className="flex flex-col">
      {/* Upload section */}
      <div className="flex-1 bg-white p-4 lg:px-12">
        <UploadSection />
      </div>
      {/* Gallery section */}
      <div className="border-t border-[#E8E9ED] pt-4 lg:pt-10">
        <Gallery images={images} onDelete={handleImageDelete} />
      </div>
    </div>
  );
};

export default GalleryUpload;
