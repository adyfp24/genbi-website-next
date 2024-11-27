'use client'

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Navbar: React.FC<{ bgColor?: string }> = ({ bgColor = "bg-pr50" }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const { data: session } = useSession();

  return (
    <div>
      <nav className={bgColor}>
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-12 p-4">

          <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className="hidden w-full md:flex md:w-auto" id="navbar-multi-level">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse mr-10">
              <img src="/images/GenBI-logo.png" className="w-24 h-auto" alt="GenBI Logo" />
            </a>

            <ul className="flex flex-col text-dark text-lg font-medium p-4 md:p-0 mt-4 border md:space-x-7 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li onClick={() => router.push('/')} className={`block py-2 px-2 ${currentPath === '/' ? 'text-pr500' : 'text-pr900'} md:dark:bg-transparent hover:cursor-pointer hover:text-pr500`}>
                Beranda
              </li>
              <li onClick={() => router.push('/informasi')} className={`block py-2 px-2 ${currentPath === '/informasi' ? 'text-pr500' : 'text-pr900'} md:dark:bg-transparent hover:cursor-pointer hover:text-pr500`}>
                Informasi Beasiswa
              </li>
              <li onClick={() => router.push('/about')} className={`block py-2 px-2 ${currentPath === '/about' ? 'text-pr500' : 'text-pr900'} md:dark:bg-transparent hover:cursor-pointer hover:text-pr500`}>
                Tentang
              </li>
              <li onClick={() => router.push('/blog')} className={`block py-2 px-2 ${currentPath === '/blog' ? 'text-pr500' : 'text-pr900'} md:dark:bg-transparent hover:cursor-pointer hover:text-pr500`}>
                Artikel
              </li>
            </ul>

          </div>

          <div className=''>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-pr500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-pr500 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar 