"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const RelatedBlog: React.FC<{ blogKategoriId: string }> = ({ blogKategoriId }) => {

    const router = useRouter();
    const [relatedBlog, setRelatedBlog] = useState([]);

    useEffect(() => {
        //  const blog = getRelatedBlog(blogKategoriId);
        //  setRelatedBlog(blog)
    }, [blogKategoriId])

    return (
        <>
            <div className='flex mx-auto max-w-7xl p-4 justify-between'>
                <div className='w-1/3'>
                    <h3 className='text-5xl font-semibold text-pr900 mb-2'>Artikel terkait buatmu</h3>
                    <h6 className='text-=gray-600 mb-6 text-lg font-light'>Bacaan seru cuma buat kamu.</h6>
                    <button className='py-2 px-4 border bg-pr600 text-lg rounded-lg text-white font-semibold'>
                        Lihat semua
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 w-2/3">
                        {[1, 2].map((_, index) => (
                            <div onClick={() => { router.push('/blog/1') }} key={index} className="bg-white rounded-lg overflow-hidden hover:cursor-pointer">
                                <div className=" ">
                                    <img className='w-full h-full' src="/images/blog-sample.png" alt="" />
                                </div>
                                <div className="p-4">
                                    <div className="text-sm text-gray-500 mb-2">
                                        {20 - index} Januari 2024
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {index === 0 && "GenBI Jember Mengadakan Lomba Kampanye QRIS"}
                                        {index === 1 && "Talkshow Entrepreneurship Jadi Ujung Tombak Inflasi"}
                                    </h3>
                                    <h3 className="text-lg font-thin mb-2">
                                        {index === 0 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
                                        {index === 1 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                                            {index === 0 ? 'Preneur' : index === 1 ? 'Seminar' : 'Kampus'}
                                        </span>
                                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                                            QRIS
                                        </span>
                                        <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                                            {index === 0 ? 'Lomba' : index === 1 ? 'Preneur' : 'Sosialisasi'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
            </div>
        </>
    )
}

export default RelatedBlog