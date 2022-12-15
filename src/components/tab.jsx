import React, { useState, useRef } from "react";
import QuoteModalForm from "./getQuoteModal";

function tab() {
  //open modal for quote
  const childRef = useRef(null);
  const handleOpenModal = (value) => {
    childRef.current.isShowing(value);
  };

  return (
    <div className="sticky top-[88px] w-full flex sm:hidden ml-auto  items-center px-2 lg:ml-0 lg:p-0 justify-around bg-seccol ">
      <button
        onClick={() => handleOpenModal(true)}
        className="fill-pricol hover:fill-slate-500  text-pricol hover:text-slate-500  inline-flex h-10 items-center justify-center gap-1 sm:gap-2 whitespace-nowrap px-1 sm:px-3 md:px-5 text-xs md:text-sm font-medium tracking-tight "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-7 h-7 "
        >
          <path
            d="M29,7H28V4H26V7H19V4H17V7H10V4H8V7H7a3,3,0,0,0-3,3V41a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V10A3,3,0,0,0,29,7Zm0,35H7a1,1,0,0,1-1-1V15H9a1,1,0,0,0,0-2H6V10A1,1,0,0,1,7,9H29a1,1,0,0,1,1,1v3H13a1,1,0,0,0,0,2H30V41A1,1,0,0,1,29,42ZM26,27a1,1,0,0,1-1,1H11a1,1,0,0,1,0-2H25A1,1,0,0,1,26,27Zm0-6a1,1,0,0,1-1,1H11a1,1,0,0,1,0-2H25A1,1,0,0,1,26,21ZM21,33a1,1,0,0,1-1,1H11a1,1,0,0,1,0-2h9A1,1,0,0,1,21,33ZM43,7H37a1,1,0,0,0-1,1V40a1,1,0,0,0,.29.71l3,3a1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,44,40V8A1,1,0,0,0,43,7ZM42,9v7H38V9ZM40,41.59l-2-2V18h4V39.59Z"
            data-name="39 Notebook"
          />
        </svg>

        <span>Get Quote</span>
      </button>
      <button
        onClick={() => {
          document.location = "tel:+919820500609";
        }}
        className="fill-pricol hover:fill-slate-500  text-pricol hover:text-slate-500 inline-flex h-10 items-center justify-center gap-1 sm:gap-2 whitespace-nowrap px-1 sm:px-3 md:px-5 text-xs md:text-sm font-medium tracking-tight "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-7 h-7"
        >
          <path d="M48.648 53.335a1.5 1.5 0 0 1-.814-2.761A12.083 12.083 0 0 0 51.362 47c.863-1.311 1.159-2.372.882-3.156-.563-1.594-3.594-2.745-6.171-3.57a6.477 6.477 0 0 0-6.586 1.593l-.976.977a1.5 1.5 0 0 1-.627.376c-.67.2-4.347.864-11.155-5.945a1.5 1.5 0 1 1 2.121-2.125c4.466 4.467 7.08 5.095 7.94 5.168l.576-.576a9.478 9.478 0 0 1 9.621-2.33c3.365 1.078 7.041 2.474 8.085 5.428.607 1.715.2 3.668-1.2 5.8a15.1 15.1 0 0 1-4.411 4.46 1.5 1.5 0 0 1-.813.235zm-7.207 2.012c-6.866 0-14.749-3.97-21.783-11.005a1.5 1.5 0 1 1 2.121-2.121c6.638 6.639 14.27 10.412 20.39 10.108a1.48 1.48 0 0 1 1.574 1.422 1.5 1.5 0 0 1-1.422 1.574c-.291.014-.585.022-.88.022z" />
          <path d="M20.718 44.782a1.494 1.494 0 0 1-1.06-.44C12.09 36.775 8.008 27.989 8.739 20.84a14.232 14.232 0 0 1 6.617-10.71c2.137-1.4 4.09-1.807 5.8-1.2 2.954 1.044 4.351 4.72 5.428 8.085a9.471 9.471 0 0 1-2.33 9.621l-.591.592c.072.773.655 3.4 5.183 7.924a1.5 1.5 0 0 1-2.121 2.121c-6.808-6.807-6.146-10.486-5.945-11.154a1.484 1.484 0 0 1 .376-.627l.977-.977a6.482 6.482 0 0 0 1.593-6.585c-.825-2.578-1.976-5.609-3.569-6.172-.785-.277-1.847.019-3.157.881a11.18 11.18 0 0 0-5.28 8.509c-.641 6.26 3.118 14.139 10.055 21.075a1.5 1.5 0 0 1-1.061 2.561Z" />
        </svg>

        <span>Call Now</span>
      </button>
      <button
        onClick={() => {
          document.location = "https://goo.gl/maps/CW3JssucZDrjzwTeA";
        }}
        className="fill-pricol hover:fill-slate-500  text-pricol hover:text-slate-500 inline-flex h-10 items-center justify-center gap-1 sm:gap-2 whitespace-nowrap px-1 sm:px-3 md:px-5 text-xs md:text-sm font-medium tracking-tight "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          enable-background="new 0 0 64 64"
          viewBox="0 0 64 64"
          className="w-7 h-7 "
        >
          <path
            d="M55.961,29.522H35.178V19.499h14.995c0.199,0,0.394-0.06,0.559-0.17l5.788-3.894c0.275-0.187,0.441-0.497,0.441-0.83
              s-0.166-0.644-0.441-0.83l-5.788-3.894c-0.165-0.11-0.359-0.17-0.559-0.17H35.178V5c0-0.553-0.447-1-1-1h-4.355
              c-0.553,0-1,0.447-1,1v4.712H8.039c-0.553,0-1,0.447-1,1v7.787c0,0.553,0.447,1,1,1h20.783v10.023H13.827
              c-0.199,0-0.394,0.06-0.559,0.17L7.48,33.586c-0.275,0.187-0.441,0.497-0.441,0.83s0.166,0.644,0.441,0.83l5.788,3.894
              c0.165,0.11,0.359,0.17,0.559,0.17h14.995V58h-8.499c-0.553,0-1,0.447-1,1s0.447,1,1,1h9.499h4.355h9.499c0.553,0,1-0.447,1-1
              s-0.447-1-1-1h-8.499V39.31h20.783c0.553,0,1-0.447,1-1v-7.787C56.961,29.97,56.514,29.522,55.961,29.522z M30.822,6h2.355v3.712
              h-2.355V6z M9.039,17.499v-5.787h20.773c0.003,0,0.006,0.002,0.01,0.002s0.006-0.002,0.01-0.002h4.336
              c0.003,0,0.006,0.002,0.01,0.002s0.006-0.002,0.01-0.002h15.681l4.301,2.894l-4.301,2.894H9.039z M33.178,19.499v10.023h-2.355
              V19.499H33.178z M33.178,58h-2.355V39.31h2.355V58z M54.961,37.31H14.132l-4.301-2.894l4.301-2.894h40.829V37.31z"
          />
        </svg>
        <span>Get Directions</span>
      </button>
      <QuoteModalForm ref={childRef} />
    </div>
  );
}

export default tab;
