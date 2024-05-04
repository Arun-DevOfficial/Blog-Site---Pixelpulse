// import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="text-white flex justify-between items-center w-full lg:w-[80%] lg:mx-auto">
        <h1 className="font-semibold text-2xl uppercase">
          Pixel<span className="text-[#15bfae]">-Pulse</span>
        </h1>
        <div className="space-x-4 hidden lg:flex divide-x-2 divide-slate-100/60 items-center">
          <ul className="flex space-x-4 items-center lg:text-xl">
            <li className="hover:border-b hover:border-white cursor-pointer">
              Home
            </li>
            <li className="hover:border-b hover:border-white cursor-pointer">
              About
            </li>
            <li className="hover:border-b hover:border-white cursor-pointer">
              Articles
            </li>
            <li className="hover:border-b hover:border-white cursor-pointer">
              Contact Us
            </li>
          </ul>
          <div className="pl-4">hi</div>
          <div className="pl-4">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}
