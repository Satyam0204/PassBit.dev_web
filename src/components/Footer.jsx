"use client"

import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <div className='w-screen absolute bottom-0    flex flex-col md:flex-row justify-between bg-slate-800'>
    <div className="md:w-4/12 w-screen  flex flex-col items-start mx-4 py-2">
                <a className="text-xl font-semibold my-2 mx-8" href="/"><Image src="/assets/passbit-website-navbar.png" width={170} height={170}/></a>
               <div className='flex flex-row'>
               <a className="text-xs text-white font-medium my-4 mx-1" href="/about" >
                    All Passwords |
                </a>
                <a className="text-xs text-white font-medium my-4 mx-1" href="/about" >
                    Generate Password |
                </a>
                <a className="text-xs text-white font-medium my-4 mx-1" href="/about" >
                    Privacy Terms |
                </a>
                <a className="text-xs text-white font-medium my-4 mx-1" href="/contact" >
                    Developer Contact |
                </a>
               </div>
               <div className=' text-lg text-white'>
                Passbit Securities © 2023
               </div>
      </div>
      <div className=' w-screen md:w-6/12 flex flex-col '>
       <Image  src="/assets/getonplaystore.png" width={170} height={170}/>
      </div>
      <div className=' w-screen md:w-3/12 py-3 flex flex-col text-white'>
        <div className='text-xl'>
            About The Company
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
        <div className='flex flex-row w-10 h-10 my-4' >
        <Image src="/assets/icons/facebook.png" className='mx-3'  width={50} height={50}/> 
        <Image src="/assets/icons/linkedin.png" className='mx-3' width={50} height={50}/> 
        <Image src="/assets/icons/twitter.png" className='mx-3' width={50} height={50}/> 
        <Image src="/assets/icons/github.png" className='mx-3' width={50} height={50}/> 
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer