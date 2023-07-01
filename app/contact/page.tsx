import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="If you have any questions or concerns, please do not hesitate to contact us. We will get back to you within 24 hours."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
