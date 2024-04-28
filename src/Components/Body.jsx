import React from "react";

const Body = () => {
  return (
    <div className="bg-black ">
        <div className="poster min-h-[60vh] max-h-[70vh]  bg-black flex pt-10 md:pl-10 pl-5 md:max-w-[90%] md:mx-auto justify-between overflow-auto">
      <div className="  text-white  flex flex-col justify-center max-w-[60vw]  md:max-w-[50vw] ">
        <h1 className="text-4xl text-white font-bold">
          WEB DEVELOPMENT SERVICES
        </h1>
        <p className="p-3 mt-6 rounded-md border border-white mb-1">
          Wevzy is where ideas meets web development excellence. Our team
          leverages AI to automate tasks, personalize user experiences, and
          optimize performance. From visually stunning designs to seamless
          launches, we redefine web development through the lens of AI. Let’s
          build your digital presence together!
        </p>
      </div>
      <div className="webimg pl-5 select-none pointer-events-none flex justify-center items-center flex-shrink-[2] "><img src="/assets/img/codesymbol.png" alt="" /></div>
      </div>
    </div>
  );
};

export default Body;
