import React from "react";
import Card from "../../widgets/cards";

function Features() {
  return (
    <>
     <div className=" lg:my-20  my-10">
     <div
        className="w-screen text-4xl lg:text-6xl  text-white text-center  "
        style={{ fontFamily: "Monaco" }}
      >
        Why to use <span className=" text-red-700">PassBit</span> ?
      </div>
      <div className=" my-3 flex flex-col lg:flex-row flex-wrap justify-evenly">
        <Card
          imgUrl="/assets/opensource.png"
          cardTitle="Open Source "
          cardBody="Empowering Collaboration and Innovation in the Digital World. The open nature of the code allows for continuous development and updates, ensuring compatibility with evolving technologies and reducing the risk of obsolescence."
        />
        <Card
          imgUrl="/assets/encryption.png"
          cardTitle="XChaCha20  Encryption"
          cardBody="Fortifying Your Data with Unbreakable Digital Armor. XChaCha20 is the future of encryption, designed to be highly efficient and performant."
        />
        <Card
          imgUrl="/assets/certified.png"
          cardTitle="Certified "
          cardBody="Ensuring Trust and Reliability in an Uncertain Digital Landscape.  Users can have confidence that the certified software has met stringent criteria and has been independently verified by recognized authorities or certification bodies."
        />
        {/* <Card imgUrl="/assets/opensource.png" cardTitle=" " cardBody="" /> */}
      </div>
     </div>
    </>
  );
}

export default Features;
