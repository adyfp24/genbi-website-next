import BlogFilter from '@/components/fragments/blog-filter'
import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import React from 'react'

const BlogPage = () => {

    return (
        <>
            <Navbar bgColor='bg-white' />

            <section id='blog-filter' className='mt-8'>
                <BlogFilter />
            </section>

            <section id='blog-highlight' className='mt-10 mb-8'>
                <div className="max-w-7xl mx-auto flex">
                    <div className='w-1/2 mr-3'>
                        <div className=''>
                            <img className='w-full h-full' src="/images/blog-sample.png" alt="" />
                        </div>
                        <div className='p-4'>
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
                        <div className='flex mb-6'>
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
                        <div className='flex'>
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

            <section id='blog-list' className="p-4 mb-60">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden">
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
                                        {index === 2 && "GenBI Goes to School Mendatangi UNEJ"}
                                    </h3>
                                    <h3 className="text-lg font-thin mb-2">
                                        {index === 0 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
                                        {index === 1 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
                                        {index === 2 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden">
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
                                        {index === 2 && "GenBI Goes to School Mendatangi UNEJ"}
                                    </h3>
                                    <h3 className="text-lg font-thin mb-2">
                                        {index === 0 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
                                        {index === 1 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
                                        {index === 2 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden">
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
                                        {index === 2 && "GenBI Goes to School Mendatangi UNEJ"}
                                    </h3>
                                    <h3 className="text-lg font-thin mb-2">
                                        {index === 0 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
                                        {index === 1 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
                                        {index === 2 && "Lomba Kampanye QRIS merupakan sebuah ajang perlombaan untuk mengunggah karya dalam bentuk..."}
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
            </section>

            <Footer />
        </>
    )
}

export default BlogPage