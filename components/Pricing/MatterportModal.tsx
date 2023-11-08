import React, { useState } from 'react';
import Modal from 'react-modal';

const MatterportModal = ({ isOpen, onRequestClose, matterportUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Matterport Walkthrough"
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
      <div className="bg-white w-screen/2 h-screen/2 p-6 rounded-lg relative z-10">
        <button
          className="absolute top-1 right-1 text-gray-700 hover:text-gray-900"
          onClick={onRequestClose}
        >
          Close
        </button>
        <div className="relative aspect-[16/9] w-full max-w-screen-xl h-[70vh]"> {/* Adjust the width and height here */}
          <iframe
            width="100%"
            height="100%"
            src={matterportUrl}
            title="Matterport Virtual Walkthrough"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </Modal>
  );
};

export default MatterportModal;
