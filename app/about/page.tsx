import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a team of videograpers and photographers who are passionate about capturing the best moments of your life. We are here to help you with your marketing needs starting from shots of the place, showcasing from the air, capturing tiny details of the interiors as well as exterios and providing you with 2D & 3D plans."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
