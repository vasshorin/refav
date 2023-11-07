"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";


const Pricing = () => {
  const [selectedSqft, setSelectedSqft] = useState(1500);
  
  const calculatePrice = (sqft, ppsqft) => {
    // Define your pricing logic here
    if (sqft === 1500) {
      return Math.round(1500 * ppsqft);
    } else if (sqft === 2500) {
      return Math.round(2500 * ppsqft)
    } else if (sqft === 3500) {
      return Math.round(3500 * ppsqft)
    }
  };

  return (
    <section id="pricing" className="relative z-1 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Service Fees"
          paragraph="Choose any of the service option that suite your needs and let us help you."
          center
          width="665px"
        />
        <div className="w-full">
          <div className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16" data-wow-delay=".1s">
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedSqft(1500); }} className={`${selectedSqft === 1500
                ? "pointer-events-none text-primary bg-gray-300 px-4 py-2 rounded-lg border border-primary"
                : "text-dark dark:text-white bg-white px-4 py-2 rounded-lg hover:bg-gray-100 hover:border border-primary cursor-pointer"
              } mr-4 cursor-pointer text-base font-semibold`}>
              0 - 1500 sqft
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedSqft(2500); }} className={`${selectedSqft === 2500
                ? "pointer-events-none text-primary bg-gray-300 px-4 py-2 rounded-lg border border-primary"
                : "text-dark dark:text-white bg-white px-4 py-2 rounded-lg hover-bg-gray-100 hover-border border-primary cursor-pointer"
              } mr-4 cursor-pointer text-base font-semibold`}>
              1500 - 2500 sqft
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); setSelectedSqft(3500); }} className={`${selectedSqft === 3500
                ? "pointer-events-none text-primary bg-gray-300 px-4 py-2 rounded-lg border border-primary"
                : "text-dark dark:text-white bg-white px-4 py-2 rounded-lg hover-bg-gray-100 hover-border border-primary cursor-pointer"
              } cursor-pointer text-base font-semibold`}>
              2500 sqft +
            </a>
          </div>

        </div>


        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Photo"
            price={selectedSqft === 1500 ? "175" : selectedSqft === 2500 ? "200" : "230"}
            subtitle={`Photos of your prorepty up to ${selectedSqft} sqft.`}
            exampleImages={['/images/examples/525_1.jpg', '/images/examples/525_2.jpg']}
          >
            <OfferList text="20-40 still shots" status="active" />
            <OfferList text="Interior and exterior" status="active" />
            <OfferList text="24 hours delivery time" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Video"
            price={selectedSqft === 1500 ? "250" : selectedSqft === 2500 ? "300" : "350"}
            subtitle={`Video footage of your prorepty up to ${selectedSqft} sqft.`}
            exampleImages={['/example-image-1.jpg', '/example-image-2.jpg']}
          >
            <OfferList text="1-3 minutes video" status="active" />
            <OfferList text="Interior and exterior" status="active" />
            <OfferList text="3 days delivery time" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Drone"
            price={selectedSqft === 1500 ? "200" : selectedSqft === 2500 ? "220" : "240"}
            subtitle="Aerial footage of your prorepty."
            exampleImages={['/example-image-1.jpg', '/example-image-2.jpg']}
          >
            <OfferList text="Aerial photos" status="active" />
            <OfferList text="Aerial video" status="active" />
            <OfferList text="Combined with video" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic Package"
            price={selectedSqft === 1500 ? "400" : selectedSqft === 2500 ? "475" : "550"}
            subtitle={`Photo and video footage of your prorepty up to ${selectedSqft} sqft.`}
            exampleImages={['/example-image-1.jpg', '/example-image-2.jpg']}
          >
            <OfferList text="Photo services" status="active" />
            <OfferList text="Video services" status="active" />
            <OfferList text="Standard delivery times" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Premium Package"
            price={selectedSqft === 1500 ? "500" : selectedSqft === 2500 ? "600" : "700"}
            subtitle={`Photo, video, and drone footage of your prorepty up to ${selectedSqft} sqft.`}
            exampleImages={['/example-image-1.jpg', '/example-image-2.jpg']}
          >
            <OfferList text="Photo services" status="active" />
            <OfferList text="Video Services" status="active" />
            <OfferList text="Arial footage" status="active" />
          </PricingBox>
          <PricingBox
          packageName="Virtual Tour"
          price={selectedSqft === 1500 ? "175" : selectedSqft === 2500 ? "210" : "260"}
          subtitle={`Matterport 3D virtual tour of your property up to ${selectedSqft} sqft.`}
          exampleImages={[
            "/images/525_1.jpg",
            "/images/525_2.jpg"
          ]}
        >
          <OfferList text="3D virtual tour" status="active" />
        </PricingBox>

          <PricingBox
            packageName="Floor plan"
            price={"0.01/sqft"}
            subtitle={`Schematic 2D floor plan of the property.`}
            exampleImages={['/example-image-1.jpg', '/example-image-2.jpg']}
          >
            <OfferList text="Minimum charge of $165" status="active" />
            <OfferList text="Floor plan" status="active" />
          </PricingBox>

          <PricingBox
            packageName="Twilight"
            price={"250"}
            subtitle={``}
            exampleImages={['/example-image-1.jpg', '/example-image-2.jpg']}
          >
            <OfferList text="HDR twilight photos" status="active" />
            <OfferList text="Twilight video" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
