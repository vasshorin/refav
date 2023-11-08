"use client"

import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';
import ImageModal from '../Pricing/ImageModal';
import VideoModal from '../Pricing/VideoModal';
import Image from 'next/image';
import DroneModal from '../Pricing/DroneModal';
import FloorplanModal from '../Pricing/FloorplanModal';

const Video = () => {
  const [isOpen, setIsOpen] = useState({
    image: false,
    video: false,
    drone: false,
    floorplan: false,
  });

  const openModal = (modalType) => {
    setIsOpen((prevState) => ({ ...prevState, [modalType]: true }));
  };

  const closeModal = (modalType) => {
    setIsOpen((prevState) => ({ ...prevState, [modalType]: false }));
  };

  const exampleImages = ['/images/examples/525.jpg','/images/examples/525_1.jpg', '/images/examples/525_3.jpg'];
  const videoUrl = 'https://www.youtube.com/embed/FVWO8JjiA14?si=_AMeAiwIpZVqu0Pm&controls=1';
  const exampleImages1 = ['/images/examples/fp1.png'];
  const exampleImages2 = ['/images/examples/drone_3.jpg','/images/examples/drone_2.jpg', '/images/examples/drone_1.jpg'];

  const modalHeight = 330; // Fixed modal height (adjust as needed)

  return (
    <section className="relative z-1 py-16 md:py-20 lg:py-28">
  <div className="container">
    <SectionTitle title="Some of our works" paragraph="" center mb="80px" />

    {/* Center Video */}
    <div className="flex justify-center mb-12">
      <div className="relative overflow-hidden group">
        <div
          className="wow fadeInUp w-full transform transition-transform scale-100 group-hover:scale-110 relative"
          data-wow-delay=".15s"
        >
          <button
            className="relative w-full aspect-w-16 aspect-h-9"
            onClick={() => openModal('video')}
          >
            <iframe
              width="560"
              height="310"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </button>
        </div>
      </div>
    </div>

    {/* Bottom Modals (Drone, Floorplan, Images) */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <div className="col-span-1 md:col-span-1 lg:col-span-1 relative overflow-hidden group">
        <div
          className="wow fadeInUp w-full transform transition-transform scale-100 group-hover:scale-110 relative"
          data-wow-delay=".15s"
        >
          <button
            className="relative w-full"
            style={{ height: `${modalHeight}px` }}
            onClick={() => openModal('image')}
          >
            <Image
              src={exampleImages[0]}
              alt="about-image"
              layout="fill"
              objectFit="cover" // Make the image fill the container
            />
            <div className={isOpen.image ? "overlay" : "overlay"}>
              <div className="category">Images</div>
            </div>
          </button>
        </div>
      </div>

      {/* Add the DroneModal */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1 relative overflow-hidden group">
        <div
          className="wow fadeInUp w-full transform transition-transform scale-100 group-hover:scale-110 relative"
          data-wow-delay=".15s"
        >
          <button
            className="relative w-full"
            style={{ height: `${modalHeight}px` }}
            onClick={() => openModal('drone')}
          >
            <Image
              src={exampleImages2[0]}
              alt="about-image"
              layout="fill"
              objectFit="cover" // Make the image fill the container
            />
            <div className={isOpen.drone ? "overlay" : "overlay"}>
              <div className="category">Drone</div>
            </div>
          </button>
        </div>
      </div>

      {/* Add the FloorplanModal */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1 relative overflow-hidden group">
        <div
          className="wow fadeInUp w-full transform transition-transform scale-100 group-hover:scale-110 relative"
          data-wow-delay=".15s"
        >
          <button
            className="relative w-full"
            style={{ height: `${modalHeight}px` }}
            onClick={() => openModal('floorplan')}
          >
            <Image
              src={exampleImages1[0]}
              alt="about-image"
              layout="fill"
              objectFit="cover"
            />
            <div className={isOpen.floorplan ? "overlay" : "overlay"}>
              <div className="category">Floor Plans</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>

  <ImageModal isOpen={isOpen.image} onRequestClose={() => closeModal('image')} exampleImages={exampleImages} />
  <DroneModal isOpen={isOpen.drone} onRequestClose={() => closeModal('drone')} exampleImages={exampleImages2} />
  <FloorplanModal isOpen={isOpen.floorplan} onRequestClose={() => closeModal('floorplan')} exampleImages={exampleImages1} />
</section>

  );
};

export default Video;
