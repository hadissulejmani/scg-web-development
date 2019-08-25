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
          title="Your landing page title here"
          subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
          
          image={heroImage}
          //"https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        />
    </div>
      <div id="featuresSection"> 
        <FeaturesSection
          color="white"
          size="medium"
          title="Features"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        />
      </div>
      <div id="contactSection">
         <ContactSection />
      </div>
    </>
  );
}

export default HomePage;
