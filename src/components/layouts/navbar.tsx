'use client'

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Navbar: React.FC<{ bgColor?: string }> = ({ bgColor = "bg-pr50" }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <div>
      <nav className={`${bgColor} fixed w-full top-0 left-0 z-50`}>
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-6 md:px-12 p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse mr-10 md:hidden">
            <img src="/images/GenBI-logo.png" className="w-24 h-auto" alt="GenBI Logo" />
          </a>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pr900 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className={`w-full md:flex md:w-auto ${isDropdownOpen ? 'block' : 'hidden'}`} id="navbar-multi-level">
            <a href="#" className="md:flex items-center space-x-3 rtl:space-x-reverse mr-10 hidden">
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
              <li onClick={() => router.push('/')} className={`block py-2 px-2 ${currentPath === '/about' ? 'text-pr500' : 'text-pr900'} md:dark:bg-transparent hover:cursor-pointer hover:text-pr500`}>
                Program Kerja
              </li>
              <li onClick={() => router.push('/blog')} className={`block py-2 px-2 ${currentPath === '/blog' ? 'text-pr500' : 'text-pr900'} md:dark:bg-transparent hover:cursor-pointer hover:text-pr500`}>
                Artikel
              </li>
            </ul>
          </div>
        
        </div>
      </nav>
    </div>
  )
}

export default Navbar 