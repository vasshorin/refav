import React, { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const FloorplanModal = ({ isOpen, onRequestClose, exampleImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!exampleImages || exampleImages.length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % exampleImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? exampleImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Images"
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
      <div className="bg-white w-screen/2 h-screen/2 p-6 rounded-lg relative z-10">
        <button
          className="absolute top-1 right-1 text-gray-700 hover:text-gray-900 z-20"
          onClick={onRequestClose}
        >
          Close
        </button>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-full h-full z-0">
            <Image
              src={exampleImages[currentImageIndex]}
              width={800}
              height={400}
              alt={`Example ${currentImageIndex + 1}`}
              style={{ zIndex: 1 }} // Add a zIndex to control the image
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={prevImage}
              className="text-gray-700 hover:text-gray-900"
            >
              Previous
            </button>
            <button
              onClick={nextImage}
              className="text-gray-700 hover:text-gray-900"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
  
};

export default FloorplanModal;
