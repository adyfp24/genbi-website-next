"use client"

import Navbar from '@/components/layouts/navbar'
import { useParams } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'

const BlogDetail = () => {
  const blogId = useParams().id;
  const [blogDetail, setBlogDetail] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <>
      <Navbar bgColor='bg-white' />
      <section id='blog-head' className='mt-6'>
        <div className="max-w-7xl mx-auto p-4">
          <h1 className='font-semibold text-5xl mb-6'>GenBI Jember  Mengadakan Lomba Kampanye QRIS </h1>
          <div className='flex mt-4 justify-between mb-6'>
            <div className='flex gap-16'>
              <div className=''>
                <h5 className='text-pr600'>Dilaporkan oleh</h5>
                <h4>Humas Genbi Jember</h4>
              </div>
              <div className=''>
                <h5 className='text-pr600'>Dipublish pada</h5>
                <h4>20 Januari 2024</h4>
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
          <img className='w-full h-auto' src="/images/blog-sample.png" alt="blog-header" />
        </div>
      </section>

      <section id='blog-caption' className='mt-8'>
        <div className='max-w-7xl mx-auto p-4'>
          <p className='text-gray-600'>Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk foto pada saat melakukan metode transaksi QRIS menggunakan ide se-kreatif serta se-menarik
            mungkin yang diupload di platform social media yang dimiliki. Kegiatan ini dibuka untuk umum, dan wajib bagi anggota GenBI Jember. Bertujuan untuk memperluas jaringan pengguna QRIS
            oleh konsumen dalam bertransaksi.</p>
        </div>
      </section>

      <section id='blog-section' className='mt-6'>
        <div className='max-w-7xl mx-auto p-4'>
          <h3 className='font-semibold text-xl mb-6'>Introduction</h3>
          <p className='text-gray-600 mb-6'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
          <img className='w-full h-auto mb-6' src="/images/blog-content.png" alt="" />
          <p className='text-gray-600 mb-6'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
          <h3 className='font-semibold text-xl mb-6'>Main</h3>
          <p className='text-gray-600 mb-6'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. </p>
          <img className='w-full h-auto mb-6' src="/images/blog-content2.png" alt="" />
          <h3 className='font-semibold text-xl mb-6'>Closing</h3>
          <p className='text-gray-600 mb-6'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id. 
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id. 
          </p>
        </div>
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
  )
}

export default BlogDetail