"use client"

import BlogFilter from '@/components/fragments/blog-filter'
import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import { useBlog } from '@/context/blogContext'
import { useRouter } from 'next/navigation'
import { parseDate } from '@/lib/helper'
import React from 'react'

const BlogPage = () => {
    const { blogs, loading, error } = useBlog();
    const router = useRouter();

    return (
        <>
            <Navbar bgColor='bg-white' />

            <section id='blog-filter' className='mt-4'>
                <BlogFilter />
            </section>

            <section id='blog-highlight' className='mt-6 mb-8'>
                <div className="max-w-7xl mx-auto flex p-4">
                    <div onClick={() => { router.push('/blog/1') }} className='w-1/2 mr-3 hover:cursor-pointer'>
                        <div className=''>
                            <img className='w-full h-full' src="/images/blog-sample.png" alt="" />
                        </div>
                        <div className='py-4'>
                            <div className="text-sm text-gray-500 mb-2">
                                20 Januari 2024
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                "GenBI Jember Mengadakan Lomba Kampanye QRIS"
                            </h3>
                            <h3 className="text-base font-thin mb-2">
                                "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                                    Kampus
                                </span>
                                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                                    QRIS
                                </span>
                                <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                                    Sosialisasi
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex-col ml-3'>
                        <div onClick={() => { router.push('/blog/2') }} className='flex mb-6 hover:cursor-pointer'>
                            <div className='w-1/2'>
                                <img className='w-full h-full' src="/images/blog-sample.png" alt="" />
                            </div>
                            <div className='p-4 w-1/2'>
                                <div className="text-sm text-gray-500 mb-2">
                                    20 Januari 2024
                                </div>
                                <h3 className="text-base font-semibold mb-2">
                                    "GenBI Jember Mengadakan Lomba Kampanye QRIS"
                                </h3>
                                <h3 className="text-base font-thin mb-2">
                                    "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk ..."
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                                        Kampus
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                                        QRIS
                                    </span>
                                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                                        Sosialisasi
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => { router.push('/blog/3') }} className='flex hover:cursor-pointer'>
                            <div className='w-1/2'>
                                <img className='w-full h-full' src="/images/blog-sample.png" alt="" />
                            </div>
                            <div className='p-4 w-1/2'>
                                <div className="text-sm text-gray-500 mb-2">
                                    20 Januari 2024
                                </div>
                                <h3 className="text-base font-semibold mb-2">
                                    "GenBI Jember Mengadakan Lomba Kampanye QRIS"
                                </h3>
                                <h3 className="text-base font-thin mb-2">
                                    "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk..."
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                                        Kampus
                                    </span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                                        QRIS
                                    </span>
                                    <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                                        Sosialisasi
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='blog-list' className="p-4 mb-20">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        {blogs.map((blog) => (
                            <div onClick={() => { router.push('/blog/1') }} key={blog.id} className="bg-white rounded-lg overflow-hidden hover:cursor-pointer">
                                <div className=" ">
                                    <img className='w-full h-full' src="/images/blog-sample.png" alt="" />
                                </div>
                                <div className="py-4">
                                    <div className="flex justify-between">
                                        <h6 className='text-sm font-semibold text-pr600'>
                                            {blog.Category.title}
                                        </h6>
                                        <h6 className="text-sm text-gray-500 mb-2">
                                            {parseDate(blog.createdAt)}
                                        </h6>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {blog.title}
                                    </h3>
                                    <h3 className="text-lg font-thin mb-2">
                                        {blog.caption}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {blog.BlogKeyword.map((keyword) => (
                                            <span key={keyword.id} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                                                {keyword.Keyword.name}
                                            </span>
                                        ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            <section id='pagination' className='pb-40'>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">1</span> sampai <span className="font-semibold text-gray-900 dark:text-white">10</span> dari <span className="font-semibold text-gray-900 dark:text-white">100</span> Artikel
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">

                        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                            Prev
                        </button>
                        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default BlogPage