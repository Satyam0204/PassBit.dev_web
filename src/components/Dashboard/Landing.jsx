import React from "react";

function Landing() {
  return (
    <>
      <div className=" w-screen flex flex-col lg:flex-row lg:my-14  my-5 py-3 ">
        <div className="w-screen lg:w-5/12 inline-flex justify-center  ">
          <img
            src="/assets/mockup.png"
            className="h-auto"
            alt=""
          />
        </div>
        <div className="inline-block  w-screen lg:w-6/12 px-3 py-5 my-2">
          <div
            className="text-white text-center lg:text-left px-4 text-5xl lg:text-7xl my-5"
            style={{ fontFamily: "Monaco" }}
          >
            Your Password is
            <br />- Your <span className=" text-red-700">Password.</span>
          </div>

          <div className="text-white  text-sm lg:text-xl px-5 my-3 ">
            Take control of your Digital Security with our Password Manager.
            Keep your passwords <br /> secure and simple access them with one
            click from all your devices.
          </div>
          <div className="flex flex-col  lg:flex-row justify-center lg:justify-around my-5  lg:text-xl text-base">
            <div className="mx-8"><img src="/assets/getonplaystore.png" style={{"height" : "10vh"}} /></div>

            <a class="border border-red-500 hover:bg-red-500 text-white w-auto my-6 px-5 mx-5 py-3 h-auto text-center  font-normal   rounded-full lg:mx-4">
             Get browser Extension
            </a>
          </div>
        </div>
        {/* <div className="w-screen relative border border-white z-10 my-2 lg:hidden inline-block pl-6">
          <img src="/assets/mockup.png" style={{ height: "45vh" }} alt="" />
        </div> */}
      </div>
    </>
  );
}

export default Landing;
