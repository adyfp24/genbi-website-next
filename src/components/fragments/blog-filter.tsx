import React from 'react'

const BlogFilter: React.FC = () => {
    return (
        <>
            <div className='flex mx-auto max-w-7xl p-4'>

                {/* Dropdown button */}
                <button id="button-kategori" data-dropdown-toggle="dropdown" className="relative w-1/6 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Kategori
                    <svg className="absolute w-2.5 h-2.5 right-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {/* Dropdown menu */}
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>

                <div id='overflow-button' className='flex space-x-2 ml-4'>
                    <button className='text-white w-1/7 text-dark bg-pr500 hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Semua</button>
                    <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Pelatihan</button>
                    <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Webinar</button>
                    <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Relawan</button>
                    <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Mentoring</button>
                    <button className='text-dark w-1/7 text-dark bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Kewirausahaan</button>
                </div>

                <div className="relative flex-grow ml-4">
                    <input
                        type="text"
                        className="w-full text-sm text-gray-900 bg-white border border-gray-400 rounded-lg pl-10 pr-5 py-2.5 focus:ring-blue-500 focus:border-blue-500"
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

                {/* Search button */}
                <button className='ml-2 text-dark w-fit bg-white hover:bg-blue-200 border border-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'>Cari</button>

        </div >

        </>
    )
}

export default BlogFilter