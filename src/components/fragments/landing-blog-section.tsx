import { useBlog } from '@/context/blogContext'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Spinner from '../elements/spinner'
import 'animate.css'
import { parseDate } from '@/lib/helper'

const LandingBlogSection = () => {
    const { loading, error, blogs } = useBlog()
    const [latestBlogIndex, setLatestBlogIndex] = useState<number>(0)
    const router = useRouter()

    const disablePrevButton = latestBlogIndex === 0
    const disableNextButton = latestBlogIndex === blogs.length - 1

    const handlePrevButton = () => {
        if (latestBlogIndex > 0) {
            setLatestBlogIndex(latestBlogIndex - 1)
        }
    }

    const handleNextButton = () => {
        if (latestBlogIndex < blogs.length - 1) {
            setLatestBlogIndex(latestBlogIndex + 1)
        }
    }

    useEffect(() => {
        if (blogs.length > 0) {
            setLatestBlogIndex(0)
        }
    }, [blogs])

    return (
        <>
            <section id="blog-list" className="mb-10">
                <div className="max-w-7xl px-5 md:px-12 mx-auto">
                    {blogs.length > 0 && (
                        <div className="grid grid-cols-1 gap-8 md:hidden">
                            <div
                                onClick={() => {
                                    router.push('/blog/' + blogs[latestBlogIndex].slug)
                                }}
                                key={blogs[latestBlogIndex].slug}
                                className="bg-white rounded-lg overflow-hidden hover:cursor-pointer"
                            >
                                <div>
                                    <img
                                        className="w-full h-full"
                                        src="/images/blog-sample.png"
                                        alt=""
                                    />
                                </div>
                                <div className="py-4">
                                    <div className="flex justify-between">
                                        <h6 className="text-sm font-semibold text-pr600">
                                            {blogs[latestBlogIndex].Category.title}
                                        </h6>
                                        <h6 className="text-sm text-gray-500 mb-2">
                                            {parseDate(blogs[latestBlogIndex].createdAt)}
                                        </h6>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {blogs[latestBlogIndex].title}
                                    </h3>
                                    <h3 className="text-lg font-thin mb-2 line-clamp-3">
                                        {blogs[latestBlogIndex].caption}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {blogs[latestBlogIndex].BlogKeyword.map((keyword) => (
                                            <span
                                                key={keyword.id}
                                                className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                                            >
                                                {keyword.Keyword.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className='flex flex-col md:hidden'>
                        <div className="flex space-x-4">
                            <button onClick={handlePrevButton}>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.954545" y="0.954545" width="33.0909" height="33.0909" rx="16.5455" transform="matrix(-1 0 0 1 33.0909 0)" fill="white" />
                                    <rect x="-0.954545" y="0.954545" width="33.0909" height="33.0909" rx="16.5455" transform="matrix(-1 0 0 1 33.0909 0)" stroke={`${disablePrevButton ? '#9DC1FF' : '#11336B'}`} strokeWidth="1.90909" />
                                    <mask id="mask0_3216_14778" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="7" width="21" height="21">
                                        <rect width="20.5454" height="20.5454" transform="matrix(-1 0 0 1 28 7)" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_3216_14778)">
                                        <path d="M21.1381 25.5368L22.353 24.3218L15.3038 17.2726L22.353 10.2234L21.1381 9.00842L12.8739 17.2726L21.1381 25.5368Z" fill={`${disablePrevButton ? '#9DC1FF' : '#11336B '}`} />
                                    </g>
                                </svg>
                            </button>
                            <button onClick={handleNextButton}>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.954545" y="0.954545" width="33.0909" height="33.0909" rx="16.5455" fill="white" />
                                    <rect x="0.954545" y="0.954545" width="33.0909" height="33.0909" rx="16.5455" stroke={`${disableNextButton ? '#9DC1FF' : '#11336B'}`} strokeWidth="1.90909" />
                                    <mask id="mask0_3216_14782" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="6" width="22" height="22">
                                        <rect x="7.54297" y="6.90686" width="20.55" height="20.55" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_3216_14782)">
                                        <path d="M14.4062 25.4478L13.1909 24.2325L20.2417 17.1817L13.1909 10.1309L14.4062 8.91571L22.6722 17.1817L14.4062 25.4478Z" fill={`${disableNextButton ? '#9DC1FF' : '#11336B '}`} />
                                    </g>
                                </svg>
                            </button>
                        </div>

                        <button onClick={() => router.push('/blog')} className="w-full md:hidden bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                            Lihat semua
                        </button>
                    </div>

                    <div className="md:grid md:grid-cols-3 gap-8 mb-10 hidden">
                        {loading && <Spinner />}
                        {error && <p>Error: {error}</p>}
                        {blogs
                            .sort(
                                (a, b) =>
                                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                            )
                            .slice(0, 3)
                            .map((blog) => (
                                <div
                                    onClick={() => {
                                        router.push('/blog/' + blog.slug)
                                    }}
                                    key={blog.slug}
                                    className="bg-white rounded-lg overflow-hidden hover:cursor-pointer"
                                >
                                    <div>
                                        <img
                                            className="w-full h-full"
                                            src="/images/blog-sample.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="py-4">
                                        <div className="flex justify-between">
                                            <h6 className="text-sm font-semibold text-pr600">
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
                                                <span
                                                    key={keyword.id}
                                                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                                                >
                                                    {keyword.Keyword.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingBlogSection
