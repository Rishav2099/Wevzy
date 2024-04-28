import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    e.preventDefault(); // Prevent the default form submit action

    emailjs
      .sendForm(
        "service_v13simz",
        "template_4b1ge39",
        e.target,
        "h_ysF_vHMXaa-GPkF"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);

          // Redirect to the thank you page
          navigate("/thank-you");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          // You can give an error message
        }
      );
  };

  return (
    <>
      <p className="w-full h-1 bg-[#ff2d2d]"></p>
      <div className="contact top-0 bg-black text-white p-2 mt-3 ">
        <ul className="flex justify-evenly">
          <li>
           Email : contact@wevzy.com
          </li>
          <li>
            <p className="w-1 h-full bg-[#ff2d2d] mx-2"></p>
          </li>
          <li>
            Phone No : 9073344540
          </li>
        </ul>
      </div>
      <div className="pt-5  flex justify-center">
        <h1 className=" text-white bg-black text-3xl font-bold border  mb-5 border-white p-3 rounded-md">
          Get Started with <span className="text-[#ff2d2d]">Wevzy</span>
        </h1>
      </div>
      <div className="para max-w-[90vw] mx-auto  text-2xl font-semibold">
        <p>
          Share your vision with us, and let’s bring your website to life.
          Please provide your contact details and a brief description of your
          project below.
        </p>
      </div>

      <div className="form  text-white mb-5">
        {isSubmitting && <div className="loading">Loading...</div>}

        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="md:flex justify-center  bg-black flex-col lg:max-w-[60vw] max-w-[90vw] mx-auto mt-12 pt-2 lg:pt-0 rounded-md"
        >
          <h2 className="m-5 text-2xl  font-bold">Connect With Wevzy</h2>

          <div className="border-y-2 border-y-white md:flex md:justify-between">
            <div className="inputs">
              <div className="name flex flex-col ml-10 mt-3 gap-2 ">
                <span className=" text-white">Your Name</span>
                <div className="lg:flex lg:items-center">
                  <input
                    {...register("name", {
                      required: {
                        value: true,
                        message: " ⚠️ Please enter your Name ",
                      },
                    })}
                    type="text"
                    name="name"
                    placeholder="Enter Your Name "
                    className="text-white font-semibold lg:max-w-[15vw] focus:border-white focus:border-2 border-[#a7a7a7] border-2 hover:border-white hover:border-2 caret-red-700 bg-[#00000021] placeholder:text-[#a7a7a7] py-2 px-2 rounded-md placeholder:pl-5 placeholder:font-normal "
                  />{" "}
                  <p className="ml-4">
                    {errors.name && (
                      <span className="text-[#ff2d2d] ">
                        {" "}
                        {errors.name.message}{" "}
                      </span>
                    )}
                  </p>{" "}
                </div>
              </div>

              <div className="email flex flex-col ml-10 mt-3 gap-2">
                <span className=" text-white">Email Address</span>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="text-white font-semibold lg:max-w-[15vw] max-w-[55vw] focus:border-white focus:border-2 border-[#a7a7a7] border-2 hover:border-white hover:border-2 caret-red-700 bg-[#00000021] placeholder:text-[#a7a7a7] py-2 px-2 rounded-md placeholder:pl-5 placeholder:font-normal"
                />
              </div>
              <div className="number flex flex-col ml-10 mt-3 mb-3 gap-2">
                <span className=" text-white">Phone Number</span>
                <div className="box lg:flex lg:items-center ">
                  <input
                    {...register("number", {
                      required: {
                        value: true,
                        message: " ⚠️ Please enter your Phone Number ",
                      },
                      minLength: { value: 10, message: "Minn length is 10" },
                      maxLength: { value: 10, message: "Max length is 10" },
                    })}
                    className="text-white font-semibold lg:max-w-[15vw] focus:border-white focus:border-2 border-[#a7a7a7] border-2 hover:border-white hover:border-2 caret-red-700 bg-[#00000021] placeholder:text-[#a7a7a7] py-2 px-2 rounded-md placeholder:pl-5 placeholder:font-normal"
                    name="number"
                    placeholder="Enter Your Number"
                  />
                  <p className="ml-4">
                    {" "}
                    {errors.number && (
                      <span className="text-[#ff2d2d]">
                        {" "}
                        {errors.number.message}{" "}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="line md:border-x md:border-x-white  "></div>
            <div className="textArea mr-10 flex flex-col mx-5  mt-3 gap-3 mb-3 ">
              <label className="ml-5 lg:ml-0" htmlFor="textarea">
                Website Vision
              </label>
              <textarea
                {...register("textarea")}
                name="textarea"
                placeholder="Describe your ideal website, including the style, main features, target audience, and any specific functionalities you envision."
                className=" md:max-h-[25vh] mr-10 max-h-[15vh] text-white resize-none  font-semibold  focus:border-white focus:border-2 border-[#a7a7a7] border-2 hover:border-white hover:border-2 caret-red-700 bg-black placeholder:text-[#a7a7a7] py-2 px-2 rounded-md placeholder:pl-5 placeholder:font-normal "
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="btn flex justify-center">
            <input
              disabled={isSubmitting}
              type="submit"
              value="Submit"
              className="hover:cursor-pointer bg-white rounded-full px-4 text-black p-2 my-5 hover:bg-black hover:text-white hover:border-white hover:border-2 font-bold  "
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
