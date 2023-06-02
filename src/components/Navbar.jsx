"use client"

import { useState } from "react";
import Image from "next/image";


function MobileNav({open,setOpen}){
    return (
        <div className={` bg-slate-900 z-20 text-white absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>

            <div className="h-20"> 
               
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    All Passwords
                </a>
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Generate Password
                </a>
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Privacy Terms
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Developer Contact
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                   Login
                </a>
            </div>  
        </div>
    )
}

function Navbar(){
    const [open, setOpen] = useState(false)
    return (
        <nav  className=" text-white flex filter drop-shadow-md  px-4 py-2 h-20.5 items-center border-solid border-b-2 border-sky-200">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-5/12 md:w-1/12 flex items-center mx-2 ">
                <a className="text-2xl font-semibold my-3" href="/">
                <img src="/assets/passbit-website-navbar.png"  style={{"height" : "3vh"}} alt="" />
                    </a>
            </div>
            <div className="w-10/12 flex justify-end md:justify-center items-center ">

                <div className="z-50 flex relative w-8 h-6 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                <a className="text-2xl font-medium my-4 mx-5" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    All Passwords
                </a>
                <a className="text-2xl font-medium my-4 mx-5" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Generate Password
                </a>
                <a className="text-2xl font-medium my-4 mx-5" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Privacy Terms
                </a>
                <a className="text-2xl font-medium my-4 mx-5" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Developer Contact
                </a>
               
                </div>
            </div>
            <div className="w-1/12 flex justify-end items-center">
            <a className="text-2xl font-medium my-4 mx-3  hidden lg:block lg:visible" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                   Login
                </a>
            </div>
            
        </nav>
    )
}


export default Navbar