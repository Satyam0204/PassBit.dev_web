import React from 'react'

function cards({imgUrl , cardBody , cardTitle}) {
  return (
    <div className="w-screen my-4  	py-2  text-white  lg:w-4/12 flex flex-col justify-center">
    <div className="flex align-middle justify-center px-7 ">
      <img
        src={imgUrl}
        style={{ height: "15vh" }}
        alt=""
      />
    </div>
    <div className='text-center text-sm lg:text-xl px-4 lg:px-20 py-4'>
      <span className=" text-center text-red-500 text-2xl lg:text-3xl my-3">{cardTitle}</span> <br />
      <br /> {cardBody}
    </div>
  </div>
  )
}

export default cards