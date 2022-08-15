import Image from "next/image";
import { FaBeer, FaListUl } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react";
import logo from '../public/image/logo.png';
import tablet from '../public/image/tablet.jpg';

export default function Navbar() {

    const [open, setOpen] = useState(false);

  return (
    <nav className="p-5 bg-cyan-600 shadow-md md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center z-20">
            <span className="flex items-center text-2xl cursor-pointer text-white">
                <Image src={logo} classname="h-10 inline"  width={50} height={30} />Tailwind 
            </span>
            <span className="text-3xl cursor-pointer md:hidden block">
                {open ? <AiOutlineClose onClick={() => setOpen(false)} /> : <FaListUl onClick={() => setOpen(true)} />}
            </span>
        </div>
        <ul className={`md:flex md:items-center md:z-auto md:static absolute bg-cyan-200 md:bg-inherit w-full left-0 md:w-auto md:opacity-100 ${open? 'top-20' : 'top-[-200px]'} transition-all duration-500 ease-in`}>
            <li className="mx-4 my-5 md:my-0">
                <a href="#" className="text-xl hover:text-cyan-50 duration-500 ">Home</a>
            </li>
            <li className="mx-4 my-5 md:my-0">
                <a href="#" className="text-xl hover:text-cyan-50 duration-500 ">About</a>
            </li>
            <button className="mx-4 mb-5 md:my-0 bg-cyan-50 px-3 py-1 rounded-md text-cyan-600 cursor-pointer hover:bg-cyan-500 hover:text-cyan-50 duration-500">
                Get Started
            </button>
        </ul>
    </nav>
  )
}
