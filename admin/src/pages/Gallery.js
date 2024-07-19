import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetch('/api/gallery-images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching gallery images:', error));
  }, []);

  const handleImageUpload = () => {
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
      })
      .catch(error => console.error('Error uploading image:', error));
  };

  const handleImageDelete = (id) => {
    fetch(`/api/delete-image/${id}`, { method: 'DELETE' })
      .then(() => {
        setImages(images.filter(image => image.id !== id));
      })
      .catch(error => console.error('Error deleting image:', error));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <input type="file" onChange={(e) => setImageFile(e.target.files[0])} />
      <button onClick={handleImageUpload} className="bg-blue-500 text-white p-2 ml-2">Upload Image</button>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map(image => (
          <div key={image.id} className="relative">
            <img src={image.url} alt="Gallery" className="w-full h-32 object-cover" />
            <button onClick={() => handleImageDelete(image.id)} className="absolute top-0 right-0 bg-red-500 text-white p-1">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
