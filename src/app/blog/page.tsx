"use client"

import BlogFilter from '@/components/fragments/blog-filter'
import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import { useBlog } from '@/context/blogContext'
import { useRouter } from 'next/navigation'
import { parseDate } from '@/lib/helper'
import React from 'react'

const BlogPage = () => {
    const { blogs, highlightedBlogs, loading, error } = useBlog();
    const router = useRouter();
    const blogsData = blogs.filter((blog) => blog.isHighlight === false);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Navbar bgColor='bg-white' />

            <section id='blog-filter' className='pt-20'>
                <BlogFilter />
            </section>

            <section id='blog-highlight' className='md:mt-6'>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row p-5">
                    {highlightedBlogs.length > 0 ? (
                        <>
                            <div
                                onClick={() => router.push('/blog/' + highlightedBlogs[0]?.slug)}
                                className='w-full md:w-1/2 mr-3 hover:cursor-pointer'
                            >
                                <img
                                    className='w-full h-56 md:h-96'
                                    src={highlightedBlogs[0]?.bannerImg}
                                    alt={highlightedBlogs[0]?.title || "No Title"}
                                />
                                <div className='py-4'>
                                    <div className="text-sm text-gray-500 mb-2">
                                        {parseDate(highlightedBlogs[0]?.createdAt)}
                                    </div>
                                    <h3 className="text-lg font-medium md:font-semibold mb-2">
                                        {highlightedBlogs[0]?.title || "No Title"}
                                    </h3>
                                    <h3 className="text-base font-thin mb-2">
                                        {highlightedBlogs[0]?.caption || "No Caption"}
                                    </h3>
                                </div>
                            </div>

                            {highlightedBlogs.length > 1 && (
                                <div className='w-full md:w-1/2 flex flex-row md:flex-col md:space-x-0 space-x-3 md:ml-3'>
                                    {highlightedBlogs.slice(1).map((blog, index) => (
                                        <div
                                            key={blog.slug}
                                            onClick={() => router.push('/blog/' + blog.slug)}
                                            className='flex flex-col md:flex-row mb-6 hover:cursor-pointer '
                                        >
                                            <div className='w-full rounded-xl'>
                                                <img
                                                    className='w-full h-full'
                                                    src={blog.bannerImg}
                                                    alt={blog.title || "No Title"}
                                                />
                                            </div>
                                            <div className='pt-4 md:p-4 w-full'>
                                                <div className="text-sm text-gray-500 mb-2">
                                                    {parseDate(blog.createdAt)}
                                                </div>
                                                <h3 className="text-base font-semibold mb-2">
                                                    {blog.title || "No Title"}
                                                </h3>
                                                <h3 className="text-base font-thin mb-2">
                                                    {blog.caption || "No Caption"}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <p className="text-center text-gray-500">Tidak ada blog yang di-highlight.</p>
                    )}
                </div>
            </section>


            <section id='blog-list'>
                <div className="max-w-7xl mx-auto p-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-5 md:mb-10">
                        {blogsData.map((blog) => (
                            <div onClick={() => { router.push('/blog/' + blog.slug) }} key={blog.id} className="bg-white rounded-lg overflow-hidden hover:cursor-pointer">
                                <div className=" ">
                                    <img className='w-full h-full' src={blog.bannerImg} alt={blog.title} />
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


            <section id='pagination' className='pb-70 md:pb-40'>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">1</span> dari <span className="font-semibold text-gray-900 dark:text-white">10</span> 
                    </span>
                    <div className="inline-flex space-x-2 mt-2 xs:mt-0">
                        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                            </svg>
                        </button>
                        <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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