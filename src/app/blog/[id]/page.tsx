"use client"

import RelatedBlog from '@/components/fragments/related-blog'
import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import { useBlog } from '@/context/blogContext'
import { useParams } from 'next/navigation'
import { parseDate } from '@/lib/helper'
import Skeleton from 'react-loading-skeleton'
import React, { useEffect } from 'react'

const BlogDetail = () => {
  const params = useParams();
  const blogSlug = typeof params.id === 'string' ? params.id : params.id?.[0];
  const { getBlogById, blog } = useBlog();

  useEffect(() => {
    if (blogSlug) {
      getBlogById(blogSlug);
    }
  }, [])

  return (
    <>
      <Navbar bgColor='bg-white' />

      {/* <div className="max-w-7xl mx-auto p-4 flex justify-center items-center">
        {loading && <Spinner />}
        {error && <p>Error: {error}</p>}
      </div> */}

      {blog !== null && (
        <>
          <section id='blog-head' className='mt-6 pt-12 md:pt-20'>
            <div className="max-w-7xl mx-auto p-5">
              <h1 className='font-semibold text-3xl md:text-4xl mb-6 text-start'>{blog.title || <Skeleton count={2} />}</h1>
              <div className='flex md:flex-row flex-col mt-4 justify-between mb-7'>
                <div className='flex mb-4 gap-6 md:gap-16'>
                  <div className=''>
                    <h5 className='text-pr600'>Dilaporkan oleh</h5>
                    <h4>Humas Genbi Jember</h4>
                  </div>
                  <div className=''>
                    <h5 className='text-pr600'>Dipublish pada</h5>
                    <h4>{parseDate(blog.createdAt)}</h4>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <button className='py-2 px-4 border border-gray-200 text-pr900 font-medium rounded-lg'>Salin link</button>
                  <ul className='flex gap-3'>
                    <li className='flex items-center justify-center py-2 px-6 border border-gray-200 rounded-lg'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55016 19.7502C16.6045 19.7502 21.5583 12.2469 21.5583 5.74211C21.5583 5.53117 21.5536 5.31554 21.5442 5.1046C22.5079 4.40771 23.3395 3.5445 24 2.55554C23.1025 2.95484 22.1496 3.21563 21.1739 3.32898C22.2013 2.71315 22.9705 1.74572 23.3391 0.606011C22.3726 1.1788 21.3156 1.58286 20.2134 1.80085C19.4708 1.01181 18.489 0.48936 17.4197 0.314295C16.3504 0.13923 15.2532 0.321295 14.2977 0.832341C13.3423 1.34339 12.5818 2.15495 12.1338 3.14156C11.6859 4.12816 11.5754 5.23486 11.8195 6.29054C9.86249 6.19233 7.94794 5.68395 6.19998 4.79834C4.45203 3.91274 2.90969 2.66968 1.67297 1.14976C1.0444 2.23349 0.852057 3.51589 1.13503 4.73634C1.418 5.95678 2.15506 7.02369 3.19641 7.72023C2.41463 7.69541 1.64998 7.48492 0.965625 7.10617V7.1671C0.964925 8.30439 1.3581 9.40683 2.07831 10.287C2.79852 11.1672 3.80132 11.7708 4.91625 11.9952C4.19206 12.1934 3.43198 12.2222 2.69484 12.0796C3.00945 13.0577 3.62157 13.9131 4.44577 14.5266C5.26997 15.14 6.26512 15.4808 7.29234 15.5015C5.54842 16.8714 3.39417 17.6144 1.17656 17.6109C0.783287 17.6103 0.390399 17.5861 0 17.5387C2.25286 18.984 4.87353 19.7516 7.55016 19.7502Z" fill="#98A2B3" />
                      </svg>
                    </li>
                    <li className='flex items-center justify-center py-2 px-6 border border-gray-200 rounded-lg'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#98A2B3" />
                      </svg>
                    </li>
                    <li className='flex items-center justify-center py-2 px-6 border border-gray-200 rounded-lg'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#98A2B3" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              <img className='w-full h-auto' src={blog.bannerImg || "/images/blog-sample.png"} alt="blog-header" />
            </div>
          </section>

          <section id='blog-caption' className='mt-2'>
            <div className='max-w-7xl mx-auto p-5'>
              <p className='text-gray-600'>{blog.caption || <Skeleton count={5} />}</p>
            </div>
          </section>

          <section id='blog-section' className='mt-2'>
            <div className='max-w-7xl mx-auto p-5' dangerouslySetInnerHTML={{ __html: blog.content || <Skeleton count={2} /> }} />
          </section>

          <section id='blog-footer' className='mt-2'>
            <div className="max-w-7xl mx-auto p-5">
              <div className='flex md:flex-row flex-col items-start mt-4 md:justify-between mb-6 md:items-center space-y-4'>
                <div className='flex gap-4 items-center'>
                  <div className='rounded-full bg-pr700 w-10 h-10'>

                  </div>
                  <div className=''>
                    <h5 className='text-pr600'>Humas GenBI Jember</h5>
                    <h4>Administrator, GenBI Jember</h4>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <button className='py-2 px-4 border border-gray-200 text-pr900 font-medium rounded-lg'>Salin link</button>
                  <ul className='flex gap-3'>
                    <li className='flex items-center justify-center py-2 px-6 border border-gray-200 rounded-lg'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.55016 19.7502C16.6045 19.7502 21.5583 12.2469 21.5583 5.74211C21.5583 5.53117 21.5536 5.31554 21.5442 5.1046C22.5079 4.40771 23.3395 3.5445 24 2.55554C23.1025 2.95484 22.1496 3.21563 21.1739 3.32898C22.2013 2.71315 22.9705 1.74572 23.3391 0.606011C22.3726 1.1788 21.3156 1.58286 20.2134 1.80085C19.4708 1.01181 18.489 0.48936 17.4197 0.314295C16.3504 0.13923 15.2532 0.321295 14.2977 0.832341C13.3423 1.34339 12.5818 2.15495 12.1338 3.14156C11.6859 4.12816 11.5754 5.23486 11.8195 6.29054C9.86249 6.19233 7.94794 5.68395 6.19998 4.79834C4.45203 3.91274 2.90969 2.66968 1.67297 1.14976C1.0444 2.23349 0.852057 3.51589 1.13503 4.73634C1.418 5.95678 2.15506 7.02369 3.19641 7.72023C2.41463 7.69541 1.64998 7.48492 0.965625 7.10617V7.1671C0.964925 8.30439 1.3581 9.40683 2.07831 10.287C2.79852 11.1672 3.80132 11.7708 4.91625 11.9952C4.19206 12.1934 3.43198 12.2222 2.69484 12.0796C3.00945 13.0577 3.62157 13.9131 4.44577 14.5266C5.26997 15.14 6.26512 15.4808 7.29234 15.5015C5.54842 16.8714 3.39417 17.6144 1.17656 17.6109C0.783287 17.6103 0.390399 17.5861 0 17.5387C2.25286 18.984 4.87353 19.7516 7.55016 19.7502Z" fill="#98A2B3" />
                      </svg>
                    </li>
                    <li className='flex items-center justify-center py-2 px-6 border border-gray-200 rounded-lg'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#98A2B3" />
                      </svg>
                    </li>
                    <li className='flex items-center justify-center py-2 px-6 border border-gray-200 rounded-lg'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="#98A2B3" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <section id='related-blog' className='mt-2 md:mt-10 pb-44'>
        <RelatedBlog blogKategoriId='1' />
      </section>

      <Footer />
    </>
  )
}

export default BlogDetail