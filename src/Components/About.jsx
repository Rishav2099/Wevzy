import React from "react";

const About = () => {
  return (
    <>
      <p className="w-full h-1 bg-[#ff2d2d]"></p>
      <div className="pt-5  flex justify-center">
        <h1 className=" text-white bg-black text-3xl font-bold border  mb-5 border-white p-3 rounded-md">
          About <span className="text-[#ff2d2d]">Wevzy</span>
        </h1>
      </div>
      <div className="para max-w-[90vw] mx-auto py-4 text-xl font-semibold">
        <p className="text-2xl font-bold">
          {" "}
          Welcome to Wevzy, where innovation meets design in the world of web
          development. Our mission is to empower businesses with cutting-edge
          web solutions that drive growth and success.
        </p>

        <ul className="list-disc mt-5 ">
          <li className="mb-4">
            Our Philosophy: At Wevzy, we believe in creating value through
            excellence. Our approach combines technical prowess with creative
            flair, ensuring your digital presence is not just functional but
            also visually compelling.
          </li>
          <li className="mb-4">
            Our Expertise: With a team of seasoned professionals, we specialize
            in e-commerce solutions, responsive design . We are committed to
            staying ahead of the curve, utilizing the latest technologies to
            deliver top-notch web experiences.
          </li>
          <li className="mb-4">
            Our Commitment: Your vision is our blueprint. We collaborate closely
            with our clients to understand their goals and translate them into
            digital realities. From initial concept to final launch, we are
            dedicated to your satisfaction.
          </li>
          <li className="mb-4">
            Our Journey: Founded in 2024, Wevzy has grown from a passionate
            idea into a thriving agency. Our portfolio showcases a range of
            successful projects, reflecting our ability to adapt and excel in a
            dynamic industry.
          </li>
          <li className="">
            Connect with Us: Let’s build something amazing together. <a href="/contact" className="text-[#ff2d2d]">Contact us</a> to start your web development journey with
            Wevzy.
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
