import Companies from "../components/Landing/Companies";
import Everything from "../components/Landing/Everything";
import ExponentialPhBusiness from "../components/Landing/ExponentialPhBusiness";
import HeroBanner from "../components/Landing/HeroBanner";
import JoinExponentialPh from "../components/Landing/JoinExponentialPh";
import PopularServices from "../components/Landing/PopularServices";
import Services from "../components/Landing/Services";
import React from "react";
import Navbar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";

function Index() {
  return (
    <div>
      <Navbar/>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <ExponentialPhBusiness />
      <JoinExponentialPh />
      <Footer/>
    </div>
  );
}

export default Index;
