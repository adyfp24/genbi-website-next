import { useBlog } from '@/context/blogContext'
import { parseDate } from '@/lib/helper'
import { useRouter } from 'next/navigation'
import React from 'react'
import Spinner from '../elements/spinner'

const BlogSection = () => {
  const {loading, error, blogs} = useBlog()
  const router = useRouter()

  return (
    <>
      <section id='blog-list' className="p-4 mb-10">
        <div className="max-w-7xl px-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {loading && <Spinner />}
          {error && <p>Error: {error}</p>}
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
    </>
  )
}

export default BlogSection