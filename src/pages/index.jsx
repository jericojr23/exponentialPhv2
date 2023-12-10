import Companies from "../components/Landing/Companies";
import Everything from "../components/Landing/Everything";
import ExponentialPhBusiness from "../components/Landing/ExponentialPhBusiness";
import HeroBanner from "../components/Landing/HeroBanner";
import JoinExponentialPh from "../components/Landing/JoinExponentialPh";
import Services from "../components/Landing/Services";
import React from "react";
import Navbar from "../components/Landing/Navbar";
import Footer from "../components/Landing/Footer";
import PopularTasks from "../components/Landing/PopularTasks";

function Index() {
  return (
    <div>
      <Navbar/>
      <HeroBanner />
      <Everything />
      <Services />
      <ExponentialPhBusiness />
      <JoinExponentialPh />
      <Footer/>
    </div>
  );
}

export default Index;
