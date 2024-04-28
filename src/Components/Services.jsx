import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div className="">
      <div className="heading pt-5  flex justify-center">
        <p className="text-white bg-black text-3xl font-bold border  mb-5 border-white p-3 rounded-md">
          OUR SERVICES
        </p>
      </div>
      <div className="services max-w-[93vw] mx-auto py-10 md:flex md:justify-evenly  gap-10">
        {/* use wrap when you have more services to offer */}

        {/* starts here */}
        <div className="display md:max-w-[28vw]  md:mt-3 my-6 shadow-2xl  hover:shadow-none ">
          <div className="heading flex justify-center items-center w-full border-y border-y-black">
            <h2 className="text-2xl font-bold  p-3">WEBSITE DEVELOPMENT</h2>
          </div>
          <div className="description flex text-center">
            <p className="py-4 text-xl font-semibold">
              Custom Web Design: From sleek portfolios to robust e-commerce
              platforms, we create visually stunning websites that captivate
              your audience.
            </p>
          </div>
          <div className="btn flex justify-center">
            <button className="text-white font-bold border hover:text-[#ff2d2d] border-white py-3 px-2 text-xl rounded-lg bg-black mb-2 hover:shadow-2xl">
              {" "}
              <NavLink
                className={(e) => {
                  return;
                }}
                to="/contact"
              >
                Build Your Dream Website
              </NavLink>
            </button>
          </div>
        </div>
        {/* ends here */}
        {/* starts here */}
        <div className="display md:max-w-[28vw]  md:mt-3 my-6 shadow-2xl hover:shadow-none ">
          <div className="heading flex justify-center items-center w-full border-y border-y-black">
            <h2 className="text-2xl font-bold  p-3">WEBSITE DESIGN</h2>
          </div>
          <div className="description flex text-center">
            <p className="py-4 text-xl font-semibold">
              We specialize in crafting visually stunning websites that
              captivate your audience and elevate your brand. Our approach is to
              create a seamless user experience that not only looks great but
              also functions flawlessly.
            </p>
          </div>
          <div className="btn flex justify-center">
            <button className="text-white font-bold border hover:text-[#ff2d2d] border-white py-3 px-2 text-xl rounded-lg bg-black mb-2 hover:shadow-2xl">
              {" "}
              <NavLink
                className={(e) => {
                  return;
                }}
                to="/contact"
              >
                Transform Your Website
              </NavLink>
            </button>
          </div>
        </div>
        {/* ends here */}
      </div>
    </div>
  );
};

export default Services;
