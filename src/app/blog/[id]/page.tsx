"use client"

import RelatedBlog from '@/components/fragments/related-blog'
import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import { useBlog } from '@/context/blogContext'
import { useParams } from 'next/navigation'
import { parseDate } from '@/lib/helper'
import Spinner from '@/components/elements/spinner'
import React, { use, useEffect, useState } from 'react'

const BlogDetail = () => {
  const params = useParams();
  const blogId = typeof params.id === 'string' ? params.id : params.id?.[0];
  const { getBlogById, blog, error, loading } = useBlog();

  useEffect(() => {
    if (blogId) {
      getBlogById(blogId);
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
          <section id='blog-head' className='mt-6'>
            <div className="max-w-7xl mx-auto p-4">
              <h1 className='font-semibold text-5xl mb-6'>{blog.title}</h1>
              <div className='flex mt-4 justify-between mb-6'>
                <div className='flex gap-16'>
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
                  <button className='py-2 px-4 border border-gray-200 rounded-lg'>Salin link</button>
                  <ul className='flex gap-3'>
                    <li className='py-2 px-6 border border-gray-200 rounded-lg'></li>
                    <li className='py-2 px-6 border border-gray-200 rounded-lg'></li>
                    <li className='py-2 px-6 border border-gray-200 rounded-lg'></li>
                  </ul>
                </div>
              </div>
              <img className='w-full h-auto' src={blog.bannerImg || "/images/blog-sample.png"} alt="blog-header" />
            </div>
          </section>

          <section id='blog-caption' className='mt-8'>
            <div className='max-w-7xl mx-auto p-4'>
              <p className='text-gray-600'>{blog.caption}</p>
            </div>
          </section>

          <section id='blog-section' className='mt-6'>
            <div className='max-w-7xl mx-auto p-4' dangerouslySetInnerHTML={{ __html: blog.content }} />
          </section>

          <section id='blog-footer' className='mt-6'>
            <div className="max-w-7xl mx-auto p-4">
              <div className='flex mt-4 justify-between mb-6 items-center'>
                <div className='flex gap-4 items-center'>
                  <div className='rounded-full bg-pr700 w-10 h-10'>

                  </div>
                  <div className=''>
                    <h5 className='text-pr600'>Humas GenBI Jember</h5>
                    <h4>Administrator, GenBI Jember</h4>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <button className='py-2 px-4 border border-gray-200 rounded-lg'>Salin link</button>
                  <ul className='flex gap-3'>
                    <li className='py-2 px-6 border border-gray-200 rounded-lg'></li>
                    <li className='py-2 px-6 border border-gray-200 rounded-lg'></li>
                    <li className='py-2 px-6 border border-gray-200 rounded-lg'></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <section id='related-blog' className='mt-10 pb-44'>
        <RelatedBlog blogKategoriId='1' />
      </section>

      <Footer />
    </>
  )
}

export default BlogDetail