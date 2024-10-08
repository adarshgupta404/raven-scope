import React from "react";
import { CardHoverEffectDemo } from "./FeaturesCard";

const Features = () => {
  return (
    <section className="px-3 md:px-12 lg:px-20 py-10 ">
      <div className="flex flex-col max-w-screen-xl mx-auto justify-center items-center">
        <div className="text-lg bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent font-bold md:text-xl lg:text-2xl">
          Our Solutions
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-screen-md text-center font-bold">
          Explore Our Company Best Features
        </div>
        <CardHoverEffectDemo />
      </div>
    </section>
  );
};

export default Features;
