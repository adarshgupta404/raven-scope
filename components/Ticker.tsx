import React from "react";
import { NumberTicker } from "./ui/number-ticker";

const Ticker = () => {
  return (
    <div className="my-20 text-primary-foreground bg-primary p-5 grid grid-cols-3 md:px-20">
      <p className="text-2xl md:text-8xl text-center font-medium text-white">
        <NumberTicker value={100} />+
        <div className="text-sm md:text-xl">Professional Field Executives</div>
      </p>
      <p className="text-2xl md:text-8xl text-center font-medium text-white">
        <NumberTicker value={300} />+
        <div className="text-sm md:text-xl">Cases Solved</div>
      </p>
      <p className="text-2xl md:text-8xl text-center font-medium text-white">
        <NumberTicker value={200} />+
        <div className="text-sm md:text-xl">Districts Covered</div>
      </p>
    </div>
  );
};

export default Ticker;
