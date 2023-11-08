import { url } from 'inspector';
import React, { useState } from 'react';
import Modal from 'react-modal';

const VideoModal = ({ isOpen, onRequestClose, videoUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Video Example"
      ariaHideApp={false}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
      <div className="bg-white w-screen/1.5 h-screen/1.5 p-6 rounded-lg relative z-10">
        <button
          className="absolute top-1 right-1 text-gray-700 hover-text-gray-900"
          onClick={onRequestClose}
        >
          Close
        </button>
        <div className="relative aspect-[16/9] w-full max-w-screen-md">
        <iframe width="600" height="400" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
