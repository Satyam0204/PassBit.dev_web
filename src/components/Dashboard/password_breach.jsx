import React from "react";

function PassBreachInfo() {
  return (
    <>
      <div className="  w-screen flex flex-col lg:flex-row py-4 lg:my-14  my-5 text-white">
        <div className=" w-screen lg:w-5/12 my-4 flex justify-center">
          
          <img
            src="/assets/password-breach.png"
            style={{ height: "35vh" }}
            alt=""
          />
        </div>
        <div className=" w-screen lg:w-6/12 px-5 lg:mx-5 ">
          <div className=" text-xl lg:text-3xl my-6">
            
            <span className="text-3xl lg:text-5xl text-red-500">
              Unlocking the Truth: <br />
            </span>
            <br /> Why Passwords are Getting Hacked in Today's  Digital
            Maze ?
          </div>
          <div className="py-5 text-sm lg:text-lg">
            Passwords can be hacked for various reasons, primarily due to
            vulnerabilities in their creation and management. Weak passwords,
            such as those that are short, easily guessable, or commonly used,
            provide an easy entry point for hackers. <br /> <br />
            Additionally,
            password reuse across multiple accounts amplifies the risk, as a
            compromised password from one site can grant access to other
            platforms. Human error, such as falling victim to phishing attacks
            or inadvertently sharing passwords, also plays a role in password
            breaches.
          </div>
        </div>
      </div>
    </>
  );
}

export default PassBreachInfo;
