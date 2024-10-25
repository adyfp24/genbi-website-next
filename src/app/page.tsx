import ProkerSection from '@/components/fragments/proker-section';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar'
import { title } from 'process';
import React from 'react'
import { ArrowRight, ArrowLeft, ChevronDown, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const LandingPage: React.FC = () => {

    const prokerList = [
        'GenBI Mengajar',
        'Peduli Lingkungan',
        'Healthy Care',
        'Sosial Action',
        'QRIS',
        'Intelektual',
        'Personality Development',
        'Farming',
        'Goes to Campus',
        'Preneur',
        'PDD GenBI',
        'Humas GenBI'
    ]

    const prokerDetail = {
        title: 'GenBI Mengajar',
        description: 'GenBI Mengajar (BIJAR) merupakan program kerja yang bergerak dalam dunia pendidikan.Berdirinya BIJAR bertujuan untuk menjawab keresahan-keresahan dalam dunia pendidikan dengan harapan kontribusi dari BIJAR dapat membantu target sasaran serta bermanfaat bagi internal GenBI maupun eksternal GenBI atau masyarakat luas. Ini adalah beberapa program kerja yang ada pada GenBI Mengajar',
        image: 'images/proker-mengajar.png',
        listKegiatan: [
            'BIJAR Creative Study',
            'BIJAR Childrens Day',
            'BIJAR Creative Home',
            'Buku Untuk Semua',
            'One Step After',
            'Happy Tummy'
        ]
    }

    return (
        <div className='w-full'>
            <Navbar />

            <section id='hero-section' className="bg-pr50">
                <div className="pt-20 text-center">
                    <a href="" className="inline-flex items-center text-pr700 px-2 py-1 bg-pr200 rounded-3xl"><span className='px-1.5 bg-pr100 rounded-xl mr-2'>Pendaftaran GenBI Jember 2025 dibuka!</span> Daftar disini
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <h1 className="mb-7 mt-7 text-7xl font-semibold tracking-tight text-pr900 leading-none">Jadi bagian dari Generasi <br /> Baru Indonesia Jember!</h1>
                    <p className="mb-7 text-base mx-40 text-pr700 lg:text-xl sm:px-16 lg:px-48">Bersama GenBI Jember wujudkan mimpi dan kontribusi nyata untuk negeri. Ayo bergabung dengan komunitas
                        mahasiswa inspiratif yang siap membuat perubahan! dukung indonesia lebih maju, mulai dari langkah kecilmu disini.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex bg-white justify-center rounded-lg items-center py-3 px-5 text-base font-medium text-center text-dark rounded-lgfocus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            <img className='w-5 mr-2' src="/images/icon/play-circle.png" alt="" />
                            Pelajari lebih lanjut
                        </a>
                        <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-semibold text-white focus:outline-none bg-pr500 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 dark:hover:bg-gray-70">
                            Tentang GenBI Jember
                        </a>
                    </div>
                </div>
                <div className='z-10 mt-10 w-full flex justify-center items-center'>
                    <img className='w-2/3 h-auto flex justify-center rounded-3xl' src="/images/hero-image.png" alt="" />
                </div>
            </section>

            <section id='matrics-section' className='my-10'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
                    <div className='w-2/3'>
                        <h2 className='text-pr700 text-4xl font-semibold mb-4'>Kerja Sama Beasiswa Bank Indonesia dengan Perguruan Tinggi di Jember</h2>
                        <p className=''>GenBI Jember bekerja sama dengan berbagai perguruan tinggi untuk mendukung generasi muda melalui program beasiswa Bank Indonesia.
                            Dengan total 179 penerima dari Universitas Jember, Politeknik Negeri Jember, dan UIN KHAS Jember.
                        </p>
                    </div>
                    <div className='flex w-full justify-between mt-20'>
                        <div className='w-1/2 flex flex-col'>
                            <div className='flex w-full'>
                                <div className='w-max py-4'>
                                    <img className='mb-3' src="/images/unej-logo.png" alt="" />
                                    <h2 className='text-5xl mb-3 font-bold text-pr500'>75</h2>
                                    <h6 className='font-semibold'>Universitas Jember</h6>
                                    <p>Jumlah penerima beasiswa Bank Indonesia</p>
                                </div>
                                <div className='w-max py-4'>
                                    <img className='mb-3' src="/images/polije-logo.png" alt="" />
                                    <h2 className='text-5xl mb-3 font-bold text-pr500'>64</h2>
                                    <h6 className='font-semibold'>Politeknik Negeri Jember</h6>
                                    <p>Jumlah penerima beasiswa Bank Indonesia</p>
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='w-1/2 py-4'>
                                    <img className='mb-3' src="/images/uin-logo.png" alt="" />
                                    <h2 className='text-5xl mb-3 font-bold text-pr500'>56+</h2>
                                    <h6 className='font-semibold'>UIN KHAS Jember</h6>
                                    <p>Jumlah penerima beasiswa Bank Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img className='ml-3' src="/images/genbi-pengurus.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id='testimonial-section' className='mb-32'>
                <div className='max-w-screen-xl w-full h-full flex flex-wrap mx-auto bg-pr800 rounded-3xl text-white'>
                    <div className='w-3/5 flex flex-col justify-around p-12'>
                        <div className=''>
                            <img src="images/icon/5-star.png" alt="" />
                        </div>
                        <p className='text-4xl'>“Beasiswa Bank Indonesia ngebantu banget kuliah saya! Lewat GenBI, saya dapet banyak pengalaman seru.”</p>
                        <div className='flex'>
                            <img className='w-12 h-auto mr-6' src="images/unej-logo.png" alt="" />
                            <div className=''>
                                <h4 className='font-semibold text-xl'>- Rizki Dwi Putra</h4>
                                <h6>Penerima Beasiswa Bank Indonesia Universitas Jember</h6>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <ul className='flex'>
                                <li className='w-3 h-3 bg-pr300 mr-2 rounded-full'></li>
                                <li className='w-3 h-3 bg-white mr-2 rounded-full'></li>
                                <li className='w-3 h-3 bg-white rounded-full'></li>
                            </ul>
                            <div className='flex'>
                                <img className='mr-4' src="images/icon/arrow-left.png" alt="" />
                                <img src="images/icon/arrow-right.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5'>
                        <img className='w-full rounded-r-3xl' src="/images/testi-image.png" alt="" />
                    </div>
                </div>
            </section>

            <section id='benefit-section'>
                <div className='max-w-screen-xl w-full h-full flex flex-col mx-auto mb-32'>
                    <div className='flex flex-col w-3/5 mx-auto items-center justify-center text-center'>
                        <h4 className='font-bold text-pr900 text-3xl mb-2'>Benefit yang akan kamu dapatkan jika tergabung dalam Generasi Bank Indonesia</h4>
                        <p className='text-gray-700'>Dapatkan banyak keuntungan saat menjadi bagian dari Generasi Baru Indonesia Jember.
                            Mulai dari bantuan pendidikan hingga pengembangan diri, semuanya disiapkan untuk mendukung masa depanmu.
                        </p>
                    </div>
                    <div className='flex w-full mt-12 justify-between'>
                        <div className='w-1/3 p-6 rounded-xl flex flex-col items-center justify-center text-center'>
                            <img className='mb-5' src="/images/benefit-1.png" alt="" />
                            <h6 className='font-semibold mb-2 text-lg'>Total Bantuan Biaya Pendidikan Dengan Total 24 Juta</h6>
                            <p className='text-gray-700'>Bantuan dana pendidikan sebesar 24 juta untuk mendukung perjalanan akademismu</p>
                        </div>
                        <div className='w-1/3 p-6 rounded-xl flex flex-col items-center justify-center text-center'>
                            <img className='mb-5' src="/images/benefit-2.png" alt="" />
                            <h6 className='font-semibold mb-2 text-lg'>Menjadi Anggota Aktif Komunitas Generasi Baru Indonesia Jember</h6>
                            <p className='text-gray-700'>Tempat kamu berkolaborasi dan berbagi ide dengan sesama mahasiswa bervisi-misi besar</p>
                        </div>
                        <div className='w-1/3 p-6 rounded-xl flex flex-col items-center justify-center text-center'>
                            <img className='mb-5' src="/images/benefit-3.png" alt="" />
                            <h6 className='font-semibold mb-2 text-lg'>Pembinaan Softskill dan Leadership bagi Seluruh Penerima Beasiswa</h6>
                            <p className='text-gray-700'>Pelatihan softskill dan leadership yang dirancang khusus untuk penerima beasiswa</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-us-section">
                <div className='max-w-screen-xl w-full flex mx-auto items-center mb-32'>
                    <div className='w-1/2 pr-12'>
                        <h4 className='mb-5 text-3xl font-bold text-pr900'>Tentang Program Beasiswa Bank Indonesia - GenBI Jember</h4>
                        <p className='mb-5'>Beasiswa Bank Indonesia adalah program dukungan pendidikan bagi mahasiswa berprestasi di seluruh Indonesia.
                            Selain bantuan finansial, penerima beasiswa juga mendapatkan pembinaan softskill dan leadership untuk mempersiapkan
                            mereka menjadi pemimpin masa depan yang mampu berkontribusi bagi negeri.
                        </p>
                        <button className='bg-pr600 text-white p-3 rounded-lg'>Selengkapnya</button>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full' src="" alt="" />
                    </div>
                </div>
            </section>

            <div className="font-sans">
                {/* Header Section */}
                <header className="p-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="text-blue-600 font-medium">Insight GenBI</div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Lihat semua
                            </button>
                        </div>

                        <div className="mt-8">
                            <h1 className="text-4xl font-bold text-navy-900 mb-4">
                                Dapatkan informasi terbaru dari Generasi Baru Indonesia Jember
                            </h1>
                            <p className="text-gray-600">
                                Ikuti kabar terbaru dari kegiatan dan program kerja GenBI Jember. Dari pelatihan hingga aksi sosial, temukan cerita inspiratif dan update penting yang tidak boleh kamu lewatkan.
                            </p>
                        </div>
                    </div>
                </header>

                {/* News Cards Section */}
                <section className="p-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Map through news items */}
                            {[1, 2, 3].map((_, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="h-48 bg-gray-200"></div>
                                    <div className="p-4">
                                        <div className="text-sm text-gray-500 mb-2">
                                            {20 - index} Januari 2024
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            {index === 0 && "GenBI Jember Mengadakan Lomba Kampanye QRIS"}
                                            {index === 1 && "Talkshow Entrepreneurship Jadi Ujung Tombak Inflasi"}
                                            {index === 2 && "GenBI Goes to School Mendatangi UNEJ"}
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

                        <div className="flex justify-center mt-6 gap-4">
                            <button className="p-2 rounded-full border border-blue-500">
                                <ArrowLeft className="w-6 h-6 text-blue-500" />
                            </button>
                            <button className="p-2 rounded-full border border-blue-500">
                                <ArrowRight className="w-6 h-6 text-blue-500" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="p-4 bg-gray-50 pb-56">
                    <div className="max-w-7xl mx-auto flex">
                        <div className='w-1/3'>
                            <h2 className="text-4xl text-pr900 font-bold mb-4">Pertanyaan yang Sering Ditanyakan</h2>
                            <p className="text-gray-600 mb-6 mr-10">
                                Punya pertanyaan tentang Beasiswa Bank Indonesia atau GenBI Jember? Temukan jawabannya di sini!
                            </p>
                        </div>

                        <div className="space-y-4 w-2/3 ml-10">
                            {[
                                "Apa itu Beasiswa Bank Indonesia?",
                                "Siapa yang bisa mendaftar Beasiswa Bank Indonesia?",
                                "Bagaimana cara mendaftar Beasiswa Bank Indonesia?",
                                "Apa manfaat bergabung dengan GenBI Jember?",
                                "Berapa besar dana yang diberikan dalam Beasiswa Bank Indonesia?",
                                "Apa saja kegiatan yang dilakukan oleh GenBI Jember?"
                            ].map((question, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg flex justify-between items-center">
                                    <span>{question}</span>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
               </div>
        </div>

    )
}

export default LandingPage