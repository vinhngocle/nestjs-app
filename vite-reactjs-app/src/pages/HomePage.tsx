// import React from "react";
// import CardList from "../components/Card/CardList";
import Tab from "../components/Tab/Tab";
import { tabsData } from "../__mocks__/tabs.tsx";
// import MySwiper from "../components/Swiper/Swiper.tsx";
// import { productsData } from "../__mocks__/products.js";
import Footer from "../components/Footer/Footer.tsx";

function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold ms-10 py-6">
        A broad selection of courses
      </h1>
      {/* <div className="flex justify-center">
        <CardList cards={productsData} />
      </div> */}
      <Tab tabs={tabsData} />
      <Footer />
    </div>
  );
}

export default HomePage;
