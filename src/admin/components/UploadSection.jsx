import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const UploadSection = ({ onImageUpload }) => {
  const [files, setFiles] = useState([]); // State to store selected files
  const [previewUrls, setPreviewUrls] = useState([]); // State to store preview URLs for selected images
  const [error, setError] = useState(''); // State to store any errors during the upload process
  const [uploadStatus, setUploadStatus] = useState({}); // State to track upload status for each file
  const maxFileSizeMB = 5; // Maximum allowed file size

  // Handle file selection and validation
  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files); // Convert FileList to an array
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif']; // Valid image MIME types

    // Filter valid files by type and size
    const validFiles = selectedFiles.filter(file =>
      validImageTypes.includes(file.type) && file.size / 1024 / 1024 <= maxFileSizeMB
    );

    // Set error message if any files are invalid or too large
    if (validFiles.length !== selectedFiles.length) {
      setError('Some files were not added because they are invalid or exceed the size limit.');
    } else {
      setError(''); // Clear error if all files are valid
    }

    // Update state with valid files and their preview URLs
    setFiles([...files, ...validFiles]);
    const newPreviewUrls = validFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);

    // Initialize upload status and start the upload process
    validFiles.forEach(file => {
      setUploadStatus(prevStatus => ({ ...prevStatus, [file.name]: 'Uploading' }));

      // Upload image to the server
      uploadImage(file)
        .then(newImageUrl => {
          setUploadStatus(prevStatus => ({ ...prevStatus, [file.name]: 'Completed' })); // Set status to "Completed"
          onImageUpload(newImageUrl); // Trigger callback to update the gallery with the new image
        })
        .catch(() => {
          setError('Error uploading image.');
          setUploadStatus(prevStatus => ({ ...prevStatus, [file.name]: 'Failed' })); // Handle upload failure
        });
    });
  };

  // Upload image to the backend server
  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch('/api/upload-image', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    return data.fileUrl; // Return the URL of the uploaded image
  };

  // Handle file removal
  const handleFileRemove = (index) => {
    const fileName = files[index].name;
    // Update state to remove the selected file
    setFiles(files.filter((_, i) => i !== index));
    setPreviewUrls(previewUrls.filter((_, i) => i !== index));
    setUploadStatus(prevStatus => {
      const newStatus = { ...prevStatus };
      delete newStatus[fileName];
      return newStatus;
    });
  };

  return (
    <div className="flex flex-col w-full p-4 h-auto lg:h-[50vh]">
      {/* File upload and preview section */}
      <div className='flex flex-col lg:flex-row lg:h-2/3 gap-10'>
        
        {/* File upload area */}
        <div className="border-2 border-dashed border-[#CCCCCD] py-16 h-full w-full lg:flex-1 text-center rounded-2xl flex justify-center items-center">
          <input
            type="file"
            multiple
            onChange={handleFileUpload} // Handle file selection and validation
            accept="image/png, image/jpeg, image/gif"
            className="hidden"
            id="fileUpload"
          />
          <label htmlFor="fileUpload" className="cursor-pointer">
            <div className="flex flex-col items-center">
              <div className='bg-[#FFE5E5] hover:bg-[#fdcdcd] p-4 rounded-full mb-3'>
                <Icon icon='gravity-ui:file-arrow-up' className='text-red-600 h-7 w-7'/>
              </div>
              <div>Drag and drop files here or <span className="text-red-600">Upload</span></div>
              <div className="text-sm text-gray-500">Upload images here, maximum size 5MB each</div>
            </div>
          </label>
        </div>

        {/* Image preview area */}
        <div className='h-48 lg:h-full lg:w-1/3 border-2 border-[#E8E9ED] flex flex-col justify-center items-center rounded-2xl overflow-hidden'>
          {!previewUrls.length ? (
            <div className='flex flex-col items-center'>
              <div className='bg-[#EFF0F3] p-4 rounded-full mb-3'>
                <Icon icon='radix-icons:image' className='h-6 w-6 text-[#6E7786]'/> 
              </div>
              <div className='text-[#6E7786]'>Preview Image</div>
            </div>
          ) : (
            <div>
              <img src={previewUrls[previewUrls.length - 1]} alt="Preview" className='w-48 h-48 object-cover rounded' />
            </div>
          )}
        </div>
      </div>

      {/* Display error message if any */}
      {/* {error && (
        <div className="mt-4 text-red-600">
          {error}
        </div>
      )} */}

      {/* Display list of selected files with their details */}
      {files.length > 0 && (
        <div className="mt-4">
          <div className='mb-3'>Files</div>
          <div className='flex flex-col lg:flex-row gap-3 bg-red300 lg:max-w-[1000px] max-h-96 overflow-y-auto lg:overflow-x-auto'>
            {files.map((file, index) => (
              <div key={index} className="relative w-ful sm:w-64 max-h-[246px] py-2 px-3 mb-2 border-2 border-[#f0f0f1] text-[#6E7786] rounded-lg">
                <div className='mr-8 truncate'>{file.name}</div>
                <div className='flex items-center text-sm mt-1'>
                  <span className='flex'>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  <div className={`h-[0.45rem] w-[0.45rem] rounded-full ml-2 mt-1 ${uploadStatus[file.name] === 'Completed' ? 'bg-green-400' : uploadStatus[file.name] === 'Failed' ? 'text-red-600' : 'text-gray-500'}`}></div>
                  <span className={`ml-1 ${uploadStatus[file.name] === 'Completed' ? 'text-green-500' : uploadStatus[file.name] === 'Failed' ? 'text-red-600' : 'text-gray-500'}`}>
                    {uploadStatus[file.name]}
                  </span>
                </div>
                {/* Remove file from the list */}
                <Icon
                  icon='ic:round-close'
                  className='absolute top-2 right-2 h-5 w-5 text-[#B3B4B5] cursor-pointer'
                  onClick={() => handleFileRemove(index)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSection;
