import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About Page | Free Next.js Template for Startup and SaaS",
//   description: "This is About Page for Startup Nextjs Template",
//   // other metadata
// };

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="NextServeLabs: Transforming ideas into reliable software solutions. We specialize in innovative, client-focused services, helping businesses grow with cutting-edge technology and long-term partnerships."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
