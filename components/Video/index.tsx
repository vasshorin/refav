"use client"
import { useState } from 'react';
import SectionTitle from '../Common/SectionTitle';

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Some of our works"
          paragraph=""
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md flex justify-center" // Added flex and justify-center
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[16/9] w-full max-w-screen-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FVWO8JjiA14?si=_AMeAiwIpZVqu0Pm&controls=1" // Added controls=1
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <img src="/images/video/shape.svg" alt="shape" className="w-full" />
      </div>
    </section>
  );
};

export default Video;


