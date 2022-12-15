import React, { useState, useRef } from "react";
import QuoteModalForm from "./getQuoteModal";
import HeroImg from "../assets/Apw_Hero.jpg";

function Hero() {
  //open modal for quote
  const childRef = useRef(null);
  const handleOpenModal = (value) => {
    childRef.current.isShowing(value);
  };
  return (
    <section id="hero" className="p-6  ">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 tracking-wide">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-wide text-pricol sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Ambika</span>
              </span>{" "}
              Textile Packing Works
            </h2>
            <p className="text-base text-black md:text-lg">
              Textile Packaging Company in Bhiwandi(Anjurphata) and Tarapur
              <br />
              Open 24 hours
            </p>
          </div>
          <button
            onClick={() => handleOpenModal(true)}
            class="mb-6 inline-flex items-center justify-center h-12 gap-2 px-10 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-pricol hover:bg-pricol focus:bg-pricol disabled:cursor-not-allowed disabled:border-pricol disabled:bg-pricol disabled:shadow-none"
          >
            <span>Get Quote</span>
          </button>
        </div>
        <img
          src={HeroImg}
          className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
      <QuoteModalForm ref={childRef} />
    </section>
  );
}

export default Hero;
