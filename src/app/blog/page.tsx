"use client"

import BlogFilter from '@/components/fragments/blog-filter'
import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import { useBlog } from '@/context/blogContext'
import { useRouter } from 'next/navigation'
import { parseDate } from '@/lib/helper'
import { MdArrowBackIosNew } from "react-icons/md";
import React from 'react'
import Spinner from '@/components/elements/spinner'
import KeywordBadge from '@/components/elements/keyword-badge'

const BlogPage = () => {
    const { blogs, highlightedBlogs, loading, error } = useBlog();
    const router = useRouter();
    const blogsData = blogs.filter((blog) => blog.isHighlight === false);

    if (loading) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <Spinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center border border-red-500">
                    <svg
                        className="w-16 h-16 text-red-500 mx-auto mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728zm-4.95 7.071l2.122-2.122m0 0l-2.122-2.121m2.122 2.121L12 12m0 0l-2.121 2.122m2.121-2.122L9.879 9.878"
                        />
                    </svg>
                    <h2 className="text-2xl font-semibold text-red-600 mb-2">Error</h2>
                    <p className="text-gray-700">Oops, something went wrong:</p>
                    <p className="text-gray-600 mt-2">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar bgColor='bg-white' />

            <section id='blog-filter' className='pt-20'>
                <BlogFilter />
            </section>

            <section id='blog-highlight' className='md:mt-6'>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row px-5 md:px-12">
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
                                    <h3 className="text-base font-thin mb-2 line-clamp-2">
                                        {highlightedBlogs[0]?.caption || "No Caption"}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {highlightedBlogs[0]?.BlogKeyword.map((keyword) => (
                                            <KeywordBadge key={keyword.id} name={keyword.Keyword.name} />
                                        ))}
                                    </div>
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
                                                <h3 className="text-base font-thin mb-2 line-clamp-2">
                                                    {blog.caption || "No Caption"}
                                                </h3>
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {blog.BlogKeyword.map((keyword) => (
                                                        <KeywordBadge key={keyword.id} name={keyword.Keyword.name} />
                                                    ))}
                                                </div>
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
                <div className="max-w-7xl mx-auto py-5 px-5 md:px-12">
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
                                    <h3 className="text-base font-semibold mb-2">
                                        {blog.title}
                                    </h3>
                                    <h3 className="text-base font-thin mb-2 line-clamp-2">
                                        {blog.caption}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {blog.BlogKeyword.map((keyword) => (
                                            <KeywordBadge key={keyword.id} name={keyword.Keyword.name} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            <section id='pagination' className='pb-70 md:pb-40'>
                <div className="flex flex-col items-center">
                    <div className="inline-flex items-center space-x-4 mt-2 xs:mt-0">
                        <button className="">
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 9.16683L7.33333 5.00016L11.5 0.833496M5.66667 9.16683L1.5 5.00016L5.66667 0.833496" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 15L8 10L13 5" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <span className="text-sm text-gray-700 dark:text-gray-400">
                            <span className="font-semibold text-gray-900 dark:text-white">1</span> dari <span className="font-semibold text-gray-900 dark:text-white">10</span>
                        </span>
                        <button className="">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15L13 10L8 5" stroke="#2979FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 14.1668L9.66667 10.0002L5.5 5.8335M11.3333 14.1668L15.5 10.0002L11.3333 5.8335" stroke="#2979FF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
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