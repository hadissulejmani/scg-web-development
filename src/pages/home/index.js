import React from "react";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import ContactSection from "./../../components/ContactSection";
import { useRouter } from "./../../util/router.js";
import heroImage from '../../assets/heroImage.png';
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
    <div id="heroSection">
      <HeroSection
          color="white"
          size="medium"
          title="Empowering those who can advance the world"
          subtitle="We are a full-service agency that helps companies thrive in the digital landscape."
          
          image={heroImage}
          //"https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        />
    </div>
      <div id="featuresSection"> 
        <FeaturesSection
          color="white"
          size="medium"
          title="Features"
          subtitle="."
        />
      </div>
      <div id="contactSection">
         <ContactSection />
      </div>
    </>
  );
}

export default HomePage;
