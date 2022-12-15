import React from "react";
import Map from "./map";

function Contact() {
  return (
    <div id="contact" className="">
      <hr class="my-2 mx-auto w-16 h-[2px] bg-pricol rounded border-0 dark:bg-gray-700"></hr>
      <h1 className="text-center text-xl font-semibold text-pricol">
        CONTACT US
      </h1>

      <Map />
      <div className="w-full flex justify-center">
        <div className="flex justify-center flex-wrap w-[900px] ">
          <div className="w-[300px] ">
            <h1 className="text-xl font-bold p-3">Contact</h1>
            <button
              onClick={() => {
                document.location = "tel:+919820500609";
              }}
              class="mb-6 inline-flex items-center justify-center h-12 gap-2 px-10 text-sm font-medium tracking-wide text-white transition duration-300 rounded-none focus-visible:outline-none whitespace-nowrap bg-pricol hover:bg-pricol focus:bg-pricol disabled:cursor-not-allowed disabled:border-pricol disabled:bg-pricol disabled:shadow-none"
            >
              <span>CALL NOW</span>
            </button>
            <h1 className="text-sm tracking-wide">098205 00609</h1>
          </div>
          <div className="w-[300px]">
            <h1 className="text-xl font-bold p-3">Address</h1>
            <button
              onClick={() => {
                document.location = "https://goo.gl/maps/UqMf9yvouxt214k87";
              }}
              class="mb-6 inline-flex items-center justify-center h-12 gap-2 px-10 text-sm font-medium tracking-wide text-white transition duration-300 rounded-none focus-visible:outline-none whitespace-nowrap bg-pricol hover:bg-pricol focus:bg-pricol disabled:cursor-not-allowed disabled:border-pricol disabled:bg-pricol disabled:shadow-none"
            >
              <span>GET DIRECTIONS</span>
            </button>

            <div className="">Gala no.101-105, 1st Floor, Phase-1</div>
            <div className="">Munisuvrat Compound</div>
            <div className="">Anjurphata</div>
            <div className="">Bhiwandi, Maharashtra 421302</div>
            <div className="">India</div>
          </div>
          <div className="w-[300px]">
            <h1 className="text-xl font-bold p-3">Business Hours</h1>
            <table>
              <tr>
                <td>Mon:</td>
                <td>Open 24 hours</td>
              </tr>
              <tr>
                <td>Tue:</td>
                <td>Open 24 hours</td>
              </tr>
              <tr>
                <td>Wed:</td>
                <td>Open 24 hours</td>
              </tr>
              <tr>
                <td>Thu:</td>
                <td>Open 24 hours</td>
              </tr>
              <tr>
                <td>Fri:</td>
                <td>Open 24 hours</td>
              </tr>
              <tr>
                <td>Sat:</td>
                <td>Open 24 hours</td>
              </tr>
              <tr>
                <td>Sun:</td>
                <td>Open 24 hours</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
