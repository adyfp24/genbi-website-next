"use client"

import React, { useState } from 'react'

const BlogFilter: React.FC = () => {
    const [dropdownKategoriOpen, setDropdownKategoriOpen] = useState<boolean>(false);

    const handleDropdownKategori = () => {
        setDropdownKategoriOpen(!dropdownKategoriOpen)
    }

    const keywordList: string[] = [
        'Pelatihan',
        'Webinar',
        'Relawan',
        'Mentoring',
        'Kewirausahaan',
        'Edukasi',
        'Lomba',
        'Pemberdayaan',
        'Sosialisasi',
        'Penghijauan',
        'Karier',
        'Literasi',
        'Kepemimpinan',
    ]

    const kategoriList: string[] = [
        'GenBI Mengajar',
        'GenBI Peduli Lingkungan',
        'GenBI Sosial Action',
        'GenBI QRIS',
        'GenBI Intelektual',
        'GenBI Personality Development',
        'GenBI Farming',
        'GenBI Goes to Campus',
        'GenBI Preneur',
        'GenBI PDD',
        'GenBI Humas',
    ]

    return (
        <>
            <div className="font-thin text-gray-600 flex mx-auto max-w-7xl py-5 px-5 md:px-12 space-x-2 relative">
                <div className="md:w-5/6 w-1/3 flex flex-col md:flex-row">
                    <div className="relative flex flex-col w-full md:w-1/3">
                        {/* Dropdown button */}
                        <button
                            onClick={handleDropdownKategori}
                            id="button-kategori"
                            data-dropdown-toggle="dropdown"
                            className="z-0 relative w-full text-dark bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none inline-flex font-medium rounded-lg text-base px-5 py-2.5 text-center  items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                        >
                            Kategori
                            <svg
                                className="absolute w-2.5 h-2.5 right-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {/* Dropdown menu */}
                        <div
                            id="dropdown"
                            className={`absolute top-full mt-1 z-20 ${dropdownKategoriOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 w-full h-50 overflow-y-auto`}
                        >
                            <ul className="py-2 text-base text-gray-700 dark:text-gray-200 w-full" aria-labelledby="dropdownDefaultButton">
                                {kategoriList.map((kategori, index) => (
                                    <li key={index} className="block px-4 py-2 hover:cursor-pointer hover:bg-pr50 hover:text-pr500 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        {kategori}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Overflow Section with Scroll Button */}
                    <div className="relative hidden md:flex space-x-2 ml-4 overflow-x-auto">
                        <div id="scroll-container" className="flex space-x-2 overflow-x-auto scrollbar-hide">
                            <button className="text-white  text-dark bg-pr500 hover:bg-gray-100 border border-gray-200  focus:outline-none font-medium rounded-lg text-base px-5  text-center inline-flex items-center">
                                Semua
                            </button>
                            {keywordList.map((keyword, index) => (
                                <button key={index} className="text-dark  bg-white hover:bg-gray-100 border border-gray-200 focus:outline-none font-medium rounded-lg text-base px-5 text-center inline-flex items-center">
                                    {keyword}
                                </button>

                            ))}
                        </div>

                        {/* Scroll Button */}
                        <button
                            onClick={() => {
                                const container = document.getElementById('scroll-container');
                                container?.scrollBy({ left: 100, behavior: 'smooth' });
                            }}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pr50 p-1 rounded-lg border border-gray-100 hover:bg-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 text-pr500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="md:w-1/6 w-2/3 flex items-center">
                    <div className="relative w-full flex md:ml-4">
                        <input
                            type="text"
                            className="w-full text-base font-medium text-dark bg-white border border-gray-200 rounded-lg pl-10 md:pr-5 py-2.5"
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