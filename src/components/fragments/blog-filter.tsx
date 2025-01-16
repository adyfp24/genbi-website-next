"use client"

import React, { useState } from 'react'

const BlogFilter: React.FC = () => {
    const [dropdownKategoriOpen, setDropdownKategoriOpen] = useState<boolean>(false);

    const handleDropdownKategori = () => {
        setDropdownKategoriOpen(!dropdownKategoriOpen)
    }

    return (
        <>
            <div className='font-thin text-gray-600 flex mx-auto max-w-7xl py-5 px-5 md:px-12 space-x-2'>
                <div className='md:w-5/6 w-1/3 flex flex-col md:flex-row'>
                    <div className='relative flex flex-col w-full md:w-1/3'>
                        {/* Dropdown button */}
                        <button onClick={handleDropdownKategori} id="button-kategori" data-dropdown-toggle="dropdown" className="z-0 relative w-full text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Kategori
                            <svg className="absolute w-2.5 h-2.5 right-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        <div id="dropdown" className={`absolute top-full mt-2 z-20 ${dropdownKategoriOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 w-full`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Genbi Mengajar</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Genbi QRIS</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Intelektual</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">GPD</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id='overflow-button' className='hidden md:flex space-x-2 ml-4 overflow-x-auto'>
                        <button className='text-white w-1/7 text-dark bg-pr500 hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Semua</button>
                        <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Pelatihan</button>
                        <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Webinar</button>
                        <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Relawan</button>
                        <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Mentoring</button>
                        <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Kewirausahaan</button>
                        <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Kewirausahaan</button>
                    </div>
                </div>
                <div className="md:w-1/6 w-2/3 flex items-center">
                    <div className="relative w-full flex md:ml-4">
                        <input
                            type="text"
                            className="w-full text-sm text-gray-900 bg-white border border-gray-400 rounded-lg pl-10 md:pr-5 py-2.5 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Cari"
                        />
                        <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div >

        </>
    )
}

export default BlogFilter