"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Service Fees"
          paragraph="Choose any of the service option that suite your needs and let us help you."
          center
          width="665px"
        />

        {/* <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Photo"
            price={isMonthly ? "195" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Photos of your prorepty up to 1000 sqft."
          >
            <OfferList text="18-25 still shots" status="active" />
            <OfferList text="< 24 hours delivery time" status="active" />
            {/* <OfferList text="Commercial Use" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" /> */}
          </PricingBox>
          <PricingBox
            packageName="Video"
            price={isMonthly ? "250" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Video footage of your prorepty up to 1000 sqft."
          >
            <OfferList text="2 minute video" status="active" />
            <OfferList text="Interior and exterior" status="active" />
            <OfferList text="Close-ups" status="active" />
            <OfferList text="< 3 days delivery time" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Drone"
            price={isMonthly ? "200" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Aerial footage of your prorepty."
          >
            <OfferList text="Aerial photos" status="active" />
            <OfferList text="Aerial video" status="active" />
            <OfferList text="< 3 days delivery time" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic Package"
            price={isMonthly ? "400" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Photo and video footage of your prorepty up to 1000 sqft."
          >
            <OfferList text="20-30 still shots" status="active" />
            <OfferList text="2 minute video" status="active" />
            <OfferList text="Interior and exterior" status="active" />
            <OfferList text="< 24 hours delivery time for photos" status="active" />
            <OfferList text="< 3 days delivery time" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Premium Package"
            price={isMonthly ? "600" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Photo, video, and drone footage of your prorepty up to 1500 sqft."
          >
            <OfferList text="includes basic package" status="active" />
            <OfferList text="Arial photos" status="active" />
            <OfferList text="Arial videos" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Virutal Tour"
            price={isMonthly ? "160" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Matterport 3D virtual tour of your prorepty up to 1500 sqft."
          >
            <OfferList text="3D virtual tour" status="active" />
            <OfferList text="Floor plan" status="active" />
            <OfferList text="3D dollhouse view" status="active" />

            
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
