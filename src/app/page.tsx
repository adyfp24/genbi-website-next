'use client'
import ProkerSection from '@/components/fragments/proker-section';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar'
import React from 'react'
import 'animate.css'
import lootieFile from '../../public/lootie/Ease-In-Animation-About-GenBI.json';
import LootieAnimation from '@/components/fragments/lootie-animation';
import TestimonialSection from '@/components/fragments/testimonial-section';
import FaqSection from '@/components/fragments/faq-section';
import CountUp from 'react-countup';
import BlogSection from '@/components/fragments/blog-section';
import AnimationObserver from '@/components/layouts/animation-observer';
import dynamic from 'next/dynamic';
const AnimationOnScroll = dynamic(
    () => import('react-animation-on-scroll').then(mod => mod.AnimationOnScroll),
    { ssr: false }
  );

/*************  ✨ Codeium Command ⭐  *************/
/**
 * This is the main landing page of the website.
 * It contains the hero section, introduction to GenBI, and benefits of joining GenBI.
 * It also includes a call-to-action button to register for the program.
 */
/******  ec976ccb-00d0-429d-9c47-e97d0de2fa49  *******/const LandingPage: React.FC = () => {

    return (
        <div className='w-full'>
            <Navbar />

            <section id="hero-section" className="relative w-full pb-12 md:pb-24 pt-20 md:pt-28">
                {/* Background Color Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-pr50 to-white"></div>

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute right-0 top-0 h-full w-full transform">
                        {/* Gradient Line 1 */}
                        <div className="absolute top-2/3 h-20 w-full -skew-y-12 right-0 flex">
                            {/* Left side (bg-pr50) */}
                            <div className="w-1/2 h-full bg-transparent"></div>
                            {/* Right side (bg-pr300) */}
                            <div className="w-1/2 h-full bg-pr300"></div>
                        </div>
                        {/* Gradient Line 2 */}
                        <div className="absolute top-2/3 h-20 w-full bg-pr200 -skew-y-12 translate-y-[5rem]"></div>
                        {/* Gradient Line 3 */}
                        <div className="absolute top-2/3 h-20 w-full bg-pr100 -skew-y-12 translate-y-[10rem]"></div>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 pt-10 text-center">
                    <a href="" className="max-w-7xl text-center mx-4 inline-flex items-center text-pr700 px-1 pr-1 md:pr-2 py-1 bg-pr100 rounded-3xl text-xs md:text-base">
                        <span className="px-1 md:px-2 bg-pr50 rounded-2xl mr-1 md:mr-2 text-xs md:text-base">Pendaftaran GenBI 2025 dibuka!</span>
                        Daftar disini
                        <svg className="w-3.5 h-3.5 ms-2 me-2 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                    <h1
                        style={{ fontWeight: 450 }}
                        className="text-start md:text-center mb-5 mt-5 mx-6 font-normal tracking-tight text-pr900 leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[86px]"
                    >
                        Jadilah bagian dari Generasi Baru <br /> Indonesia Jember!
                    </h1>
                    <p className="text-justify mb-6 md:mb-10 text-base mx-6 md:mx-36 text-pr700 lg:text-xl font-normal sm:px-16 lg:px-50">
                        Bersama GenBI Jember wujudkan mimpi dan kontribusi nyata untuk negeri. Ayo bergabung dengan komunitas mahasiswa inspiratif yang
                        siap membuat perubahan! Dukung indonesia lebih maju, mulai dari langkah kecilmu disini.
                    </p>
                    <div className="mx-6 flex flex-col-reverse space-y-reverse space-y-2 md:flex-row md:justify-center">
                        <a
                            href="#"
                            className="inline-flex bg-white hover:bg-gray-200 justify-center items-center py-2 md:py-4 px-7 text-lg border border-gray-300 font-medium md:font-semibold text-center text-dark rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            <img className="w-5 mr-2" src="/images/icon/play-circle.png" alt="" />
                            Tonton Video
                        </a>
                        <a
                            href="#"
                            className="text-center justify-center inline-flex text-lg py-2 md:py-4 px-7 sm:ms-4 font-medium md:font-semibold text-white focus:outline-none bg-pr500 rounded-lg border border-gray-200 hover:bg-pr700 hover:text-white focus:z-10 dark:hover:bg-gray-70"
                        >
                            Tentang GenBI
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="animate__animated animate__fadeInUp z-10 mt-6 md:mt-10 w-full flex justify-center items-center relative">
                    <img className="w-full md:w-2/3 h-auto flex justify-center rounded-3xl" src="/images/hero-image.png" alt="" />
                </div>
            </section>


            <section id='matrics-section' className='my-10'>
                <div className='max-w-7xl flex flex-wrap items-center justify-between mx-auto px-5 md:px-12'>
                    <AnimationOnScroll animateIn='animate__fadeInLeft'>
                        <div className='w-full md:w-2/3'>
                            <h2 className='text-pr900 text-4xl font-semibold mb-4 md:mr-24'>Kerja Sama Bank Indonesia dengan Perguruan Tinggi Negeri di Jember</h2>
                            <p className='text-xl md:mr-20 text-left'>Kantor Perwakilan Bank Indonesia Jember bekerja sama dengan beberapa perguruan tinggi negeri
                                untuk mendukung generasi muda melalui program Beasiswa Bank Indonesia. Dengan total 175 penerima dari Universitas Jember,
                                Politeknik Negeri Jember, dan UIN KHAS Jember.
                            </p>
                        </div>
                    </AnimationOnScroll>
                    <div className='flex flex-col md:flex-row w-full justify-between mt-12 md:mt-20'>
                        <AnimationOnScroll animateIn='animate__fadeIn' className='w-full md:w-1/2 mb-12 md:mb-0'>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>

                                <div className='p-4 border rounded-3xl w-full'>
                                    <img className='mb-3' src="/images/unej-logo.png" alt="" />
                                    <h2 className='text-5xl mb-3 font-bold text-pr500'>
                                        <CountUp enableScrollSpy={true} start={0} end={126} duration={2.0} />
                                    </h2>
                                    <h6 className='font-semibold'>Universitas Jember</h6>
                                    <p>Jumlah penerima beasiswa Bank Indonesia</p>
                                </div>

                                <div className='p-4 border rounded-3xl'>
                                    <img className='mb-3' src="/images/polije-logo.png" alt="" />
                                    <h2 className='text-5xl mb-3 font-bold text-pr500'>
                                        <CountUp enableScrollSpy={true} start={0} end={110} duration={2.0} />
                                    </h2>
                                    <h6 className='font-semibold'>Politeknik Negeri Jember</h6>
                                    <p>Jumlah penerima beasiswa Bank Indonesia</p>
                                </div>

                                <div className='p-4 border rounded-3xl'>
                                    <img className='mb-3' src="/images/uin-logo.png" alt="" />
                                    <h2 className='text-5xl mb-3 font-bold text-pr500'>
                                        <CountUp enableScrollSpy={true} start={0} end={75} duration={2.0} />
                                    </h2>
                                    <h6 className='font-semibold'>UIN KHAS Jember</h6>
                                    <p>Jumlah penerima beasiswa Bank Indonesia</p>
                                </div>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn='animate__fadeInUp' className='w-full md:w-1/2'>
                            <div className=''>
                                <img className='md:ml-3' src="/images/genbi-pengurus.png" alt="" />
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </section>

            <TestimonialSection />

            <section id='benefit-section' className='mt-22'>
                <div className='max-w-7xl px-5 md:px-12 w-full h-full flex flex-col mx-auto mb-14 md:mb-28'>
                    <AnimationOnScroll animateIn='animate__fadeIn'>
                        <div className='flex flex-col w-5/6 md:w-4/5 mx-auto items-center justify-center text-center'>
                            <h4 className='font-semibold text-pr900 text-4xl mb-5'>Benefit yang akan kamu dapatkan jika menjadi penerima Beasiswa Bank Indonesia</h4>
                            <p className='text-gray-700 text-xl'>Dapatkan banyak keuntungan saat menjadi bagian dari Generasi Baru Indonesia Jember.
                                Mulai dari bantuan pendidikan hingga pengembangan diri, semuanya disiapkan untuk mendukung masa depanmu.
                            </p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__fadeInUp' >
                        <div className='flex flex-col md:flex-row w-full mt-12 md:mt-22 justify-between'>
                            <div className='w-full md:w-1/3 p-6 rounded-xl flex flex-col items-center justify-center text-center'>
                                <img className='mb-5' src="/images/benefit-1.png" alt="" />
                                <h6 className='font-semibold mb-2 text-lg'>Total Bantuan Biaya Pendidikan Dengan Total 24 Juta</h6>
                                <p className='text-gray-700'>Bantuan dana pendidikan sebesar 24 juta untuk mendukung perjalanan akademismu</p>
                            </div>
                            <div className='w-full md:w-1/3 p-6 rounded-xl flex flex-col items-center justify-center text-center'>
                                <img className='mb-5' src="/images/benefit-2.png" alt="" />
                                <h6 className='font-semibold mb-2 text-lg'>Menjadi Anggota Aktif Komunitas Generasi Baru Indonesia Jember</h6>
                                <p className='text-gray-700'>Tempat kamu berkolaborasi dan berbagi ide dengan sesama mahasiswa bervisi-misi besar</p>
                            </div>
                            <div className='w-full md:w-1/3 p-6 rounded-xl flex flex-col items-center justify-center text-center'>
                                <img className='mb-5' src="/images/benefit-3.png" alt="" />
                                <h6 className='font-semibold mb-2 text-lg'>Pembinaan Softskill dan Leadership bagi Seluruh Penerima Beasiswa</h6>
                                <p className='text-gray-700'>Pelatihan softskill dan leadership yang dirancang khusus untuk penerima beasiswa</p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </section>

            <section id="about-us-section">
                <div className='max-w-7xl px-12 flex flex-col sm:flex-row mx-auto p-4 items-center mb-14 md:mb-28 justify-between'>
                    <div className='w-full md:w-1/2 md:pr-12 md:mb-12 md:pb-12'>
                        <h4 className='mb-8 text-4xl font-semibold text-pr900'>Tentang Program Beasiswa Bank Indonesia - GenBI Jember</h4>
                        <p className='mb-8 text-xl text-gray-600'>Beasiswa Bank Indonesia adalah program dukungan pendidikan bagi mahasiswa berprestasi di seluruh Indonesia.
                            Selain bantuan finansial, penerima beasiswa juga mendapatkan pembinaan softskill dan leadership untuk mempersiapkan
                            mereka menjadi pemimpin masa depan yang mampu berkontribusi bagi negeri.
                        </p>
                        <button className='bg-pr600 text-white py-2 px-4 rounded-lg font-semibold w-full md:w-1/3'>Selengkapnya</button>
                    </div>
                    <div className='h-10'>

                    </div>
                    <div className='md:w-[600px] w-[300px] flex md:justify-end md:mt-8 md:pt-8'>
                        <AnimationObserver threshold={0.5}>
                            <LootieAnimation
                                animationData={lootieFile}
                                width="100%"
                                height="100%"
                                loop={false}
                            />
                        </AnimationObserver>
                    </div>


                </div>
            </section>

            <ProkerSection />

            <div className=" mt-16">
                {/* Header Section */}
                <header className="p-4">
                    <div className="max-w-7xl px-5 md:px-12 mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="text-blue-600 font-medium">Insight GenBI</div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Lihat semua
                            </button>
                        </div>

                        <div className="mt-8 flex justify-between items-end">
                            <div className='max-w-3xl'>
                                <h1 className="text-4xl font-bold text-navy-900 mb-4">
                                    Dapatkan informasi terbaru dari Generasi Baru Indonesia Jember
                                </h1>
                                <p className="text-gray-600">
                                    Ikuti kabar terbaru dari kegiatan dan program kerja GenBI Jember. Dari pelatihan hingga aksi sosial, temukan cerita inspiratif dan update penting yang tidak boleh kamu lewatkan.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* News Cards Section */}
                <BlogSection />

                {/* FAQ Section */}
                <FaqSection />

                {/* Footer */}
                <Footer />
            </div>
        </div>

    )
}

export default LandingPage