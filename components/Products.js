import Link from 'next/link';
import { BsBoxArrowRight } from 'react-icons/bs';
 
export default function Products() {
  return (
    <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col border border-slate-200 bg-white shadow-lg p-8 rounded-2xl">
            <h3 className="text-lg leading-5 font-semibold">New arrivals</h3>
            <p className="text-sm  leading-6 mt-4 text-slate-700">Enjoy free in-game offers and games with Amazon</p>
            <div className="mt-4 bg-slate-100 -mx-6 rounded-lg">
                <p className="flex items-center p-6 text-sm font-semibold text-slate-500">
                    <span>USD</span>
                    <span className="ml-3 text-4xl text-slate-800">$24</span>
                    <span>/month</span>
                </p>
            </div>
            <ul className="flex-1 mt-6 space-y-4">
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Advertise Your Products</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Returns And Replacements</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Sell globally, start with Saudi Arabia</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Find, attract, and engage customers</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Download Audio Books</li>
            </ul>
            <a href="/" className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white text-center px-6 py-4 mt-6 text-sm font-semibold leading-4 shadow-md rounded-lg block">More Information</a>
        </div>
        <div className="flex flex-col relative border border-slate-200 bg-white shadow-lg p-8 rounded-2xl">
            <h3 className="text-lg leading-5 font-semibold">New arrivals</h3>
            <p className="absolute bg-cyan-500 text-whit shadow-md top-0  -translate-y-1/2 rounded-full text-sm font-semibold px-3 py-1 tracking-wide ">Most Popular</p>
            <p className="text-sm  leading-6 mt-4 text-slate-700">Enjoy free in-game offers and games with Amazon</p>
            <div className="mt-4 bg-slate-100 -mx-6 rounded-lg">
                <p className="flex items-center p-6 text-sm font-semibold text-slate-500">
                    <span>USD</span>
                    <span className="ml-3 text-4xl text-slate-800">$24</span>
                    <span>/month</span>
                </p>
            </div>
            <ul className="flex-1 mt-6 space-y-4">
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Advertise Your Products</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Returns And Replacements</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Sell globally, start with Saudi Arabia</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Find, attract, and engage customers</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Download Audio Books</li>
            </ul>
            <a href="/" className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white text-center px-6 py-4 mt-6 text-sm font-semibold leading-4 shadow-md rounded-lg block">More Information</a>
        </div>
        <div className="flex flex-col border border-slate-200 bg-white shadow-lg p-8 rounded-2xl">
            <h3 className="text-lg leading-5 font-semibold">New arrivals</h3>
            <p className="text-sm  leading-6 mt-4 text-slate-700">Enjoy free in-game offers and games with Amazon</p>
            <div className="mt-4 bg-slate-100 -mx-6 rounded-lg">
                <p className="flex items-center p-6 text-sm font-semibold text-slate-500">
                    <span>USD</span>
                    <span className="ml-3 text-4xl text-slate-800">$24</span>
                    <span>/month</span>
                </p>
            </div>
            <ul className="flex-1 mt-6 space-y-4">
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Advertise Your Products</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Returns And Replacements</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Sell globally, start with Saudi Arabia</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Find, attract, and engage customers</li>
                <li className="flex items-center text-sm leading-6 text-slate-700 "><BsBoxArrowRight className="h-5 w-5 text-cyan-500 mr-2 shrink-0" /> Download Audio Books</li>
            </ul>
            <a href="/" className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white text-center px-6 py-4 mt-6 text-sm font-semibold leading-4 shadow-md rounded-lg block">More Information</a>
        </div>
    </div>
  )
}
