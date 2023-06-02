import React from 'react'

function Landing() {
  return (
    <>
    <div className='w-screen flex flex-col md:flex-row md:my-14  my-4 py-3 '>
        <div className='w-screen md:w-6/12  my-4 hidden md:inline-block'>
            <img src="/assets/mockup2-l.png" className='absolute md:ml-80' style={{"height" : "55vh"}} alt="" />
            <img src="/assets/mockup1l.png" className='absolute md:ml-60 ' style={{"height" : "55vh"}} alt="" />
           
        </div>
        <div className='inline-block  w-screen md:w-6/12 px-5  my-2'>
            <div className='text-white  text-5xl md:text-7xl my-6' style={{"fontFamily" : "Monaco"}}>
            Your Password  is<br />- Your <span className=' text-red-700'>Password.</span>
            </div>
            
            <div className='text-white text-sm md:text-xl my-3 '>
                Take control of your Digital Security with our Password Manager. Keep your passwords <br /> secure and simple access them with one click from all your devices.
            </div>
            <div className='flex flex-col md:flex-row justify-center my-10  md:text-xl text-base' >
             <button class="bg-transparent hover:bg-blue-500 text-blue-700 my-3  w-6/12  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Get Started
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white w-6/12 my-3   font-bold py-2 px-4 rounded md:mx-4">
                    View Pricing
             </button>
            </div>
        </div>
        <div className='w-screen relative z-10 my-2 md:hidden inline-block pl-6'>
            <img src="/assets/mockup1l.png" className='absolute ' style={{"height" : "45vh"}} alt="" />
            <img src="/assets/mockup2-l.png" className=' z-10 ' style={{"height" : "45vh"}} alt="" />
           
        </div>
    </div>
    </>
  )
}

export default Landing