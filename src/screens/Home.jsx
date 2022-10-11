import React from "react";
import Card from "../components/Card";
import Categoriy from "../components/Categoriy";
import FeactureSection from "../components/FeactureSection";
import FeaturedCollection from "../components/feaeturedCollection1/FeaturedCollection1";
import FeaturedCollection2 from "../components/featuredCollection2/FeaturedCollection2"
import FeaturedCollection3 from "../components/featuredCollection3/FeaturedCollection3"
import NewArrivals from "../components/NewArrivals";
import NewsLetter from "../components/NewsLetter";
import ProductTrends from "../components/productTrend/ProductTrends";
import SaleSection from "../components/saleSection/SaleSection";


import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <FeactureSection />
      <Categoriy />
      <ProductTrends />
      <section className="bg-hero-pattern">
        <FeaturedCollection />
        <FeaturedCollection2 />
        <FeaturedCollection3 />
      </section>
      <NewArrivals />
      <SaleSection />
      <NewsLetter />
      {/* <Card /> */}
    </>
  );
};

export default Home;
