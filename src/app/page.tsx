'use client'
import ProkerSection from '@/components/fragments/proker-section';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar'
import { title } from 'process';
import React, { useState } from 'react'
import 'animate.css'
import { ArrowRight, ArrowLeft, ChevronDown, Instagram, Facebook, Twitter, Linkedin, Youtube, ChevronUp } from 'lucide-react';
import lootieFile from '../../public/lootie/Ease-In-Animation-About-GenBI.json';
import LootieAnimation from '@/components/fragments/lootie-animation';
import TestimonialSection from '@/components/fragments/testimonial-section';
import FaqSection from '@/components/fragments/faq-section';
import CountUp from 'react-countup';
import BlogSection from '@/components/fragments/blog-section';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AnimationObserver from '@/components/layouts/animation-observer';

const LandingPage: React.FC = () => {

    return (
        <div className='w-full'>
            <Navbar />

            <section id='hero-section' className="bg-pr50">
                {/* <AnimationOnScroll animateIn='animate__fadeIn' animatePreScroll={true}> */}
                <div className="pt-10 text-center animate__animated animate__fadeIn">
                    <a href="" className="inline-flex items-center text-pr700 px-1 pr-2 py-1 bg-pr100 rounded-3xl"><span className='px-2 bg-pr50 rounded-2xl mr-2'>Pendaftaran GenBI 2025 dibuka!</span> Daftar disini
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <h1
                        style={{ fontWeight: 450 }}
                        className="mb-6 mt-5 font-normal tracking-tight text-pr900 leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[86px]"
                    >
                        Jadilah bagian dari Generasi Baru <br /> Indonesia Jember!
                    </h1>

                    <p className="mb-10 text-base mx-36 text-pr700 lg:text-xl font-light sm:px-16 lg:px-50">Bersama GenBI Jember wujudkan mimpi dan kontribusi nyata untuk negeri. Ayo bergabung dengan komunitas
                        mahasiswa inspiratif yang siap membuat perubahan! Dukung indonesia lebih maju, mulai dari langkah kecilmu disini.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" className="inline-flex bg-white hover:bg-gray-200 justify-center rounded-lg items-center py-4 px-7 text-lg border border-gray-300 font-semibold text-center text-dark rounded-lgfocus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            <img className='w-5 mr-2' src="/images/icon/play-circle.png" alt="" />
                            Tonton Video
                        </a>
                        <a href="#" className="inline-flex text-lg py-4 px-7 sm:ms-4 font-semibold text-white focus:outline-none bg-pr500 rounded-lg border border-gray-200 hover:bg-pr700 hover:text-white focus:z-10 dark:hover:bg-gray-70">
                            Tentang GenBI
                        </a>
                    </div>
                </div>
                {/* </AnimationOnScroll> */}
                <div className='animate__animated animate__fadeInUp z-10 mt-10 w-full flex justify-center items-center'>
                    <img className='w-2/3 h-auto flex justify-center rounded-3xl' src="/images/hero-image.png" alt="" />
                </div>
            </section>

            <section id='matrics-section' className='my-10'>
                <div className='max-w-7xl flex flex-wrap items-center justify-between mx-auto px-12'>
                    <AnimationOnScroll animateIn='animate__fadeInLeft'>
                        <div className='w-2/3'>
                            <h2 className='text-pr900 text-4xl font-semibold mb-4 mr-24'>Kerja Sama Bank Indonesia dengan Perguruan Tinggi Negeri di Jember</h2>
                            <p className='text-xl mr-20 text-left'>Kantor Perwakilan Bank Indonesia Jember bekerja sama dengan beberapa perguruan tinggi negeri
                                untuk mendukung generasi muda melalui program Beasiswa Bank Indonesia. Dengan total 175 penerima dari Universitas Jember,
                                Politeknik Negeri Jember, dan UIN KHAS Jember.
                            </p>
                        </div>
                    </AnimationOnScroll>
                    <div className='flex w-full justify-between mt-20'>
                        <AnimationOnScroll animateIn='animate__fadeIn' className='w-1/2'>
                            <div className='grid grid-cols-2 gap-2'>

                                <div className='p-4 border rounded-3xl w-full'>
                                    <img className='mb-3 w-1/2' src="/images/unej-logo.png" alt="" />
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
                        <AnimationOnScroll animateIn='animate__fadeInUp' className='w-1/2'>
                            <div className=''>
                                <img className='ml-3' src="/images/genbi-pengurus.png" alt="" />
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </section>

            <TestimonialSection />

            <section id='benefit-section' className='mt-22'>
                <div className='max-w-7xl px-12 w-full h-full flex flex-col mx-auto mb-28'>
                    <AnimationOnScroll animateIn='animate__fadeIn'>
                        <div className='flex flex-col w-4/5 mx-auto items-center justify-center text-center'>
                            <h4 className='font-semibold text-pr900 text-4xl mb-5'>Benefit yang akan kamu dapatkan jika menjadi penerima Beasiswa Bank Indonesia</h4>
                            <p className='text-gray-700 text-xl'>Dapatkan banyak keuntungan saat menjadi bagian dari Generasi Baru Indonesia Jember.
                                Mulai dari bantuan pendidikan hingga pengembangan diri, semuanya disiapkan untuk mendukung masa depanmu.
                            </p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__fadeInUp' >
                        <div className='flex w-full mt-22 justify-between'>
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
                    </AnimationOnScroll>
                </div>
            </section>

            <section id="about-us-section">
                <div className='max-w-7xl px-12 flex mx-auto p-4 items-center mb-28 justify-between'>
                    <div className='w-1/2 pr-12'>
                        <h4 className='mb-8 text-4xl font-semibold text-pr900'>Tentang Program Beasiswa Bank Indonesia - GenBI Jember</h4>
                        <p className='mb-8 text-xl text-gray-600'>Beasiswa Bank Indonesia adalah program dukungan pendidikan bagi mahasiswa berprestasi di seluruh Indonesia.
                            Selain bantuan finansial, penerima beasiswa juga mendapatkan pembinaan softskill dan leadership untuk mempersiapkan
                            mereka menjadi pemimpin masa depan yang mampu berkontribusi bagi negeri.
                        </p>
                        <button className='bg-pr600 text-white py-2 px-4 rounded-lg font-semibold'>Selengkapnya</button>
                    </div>
                    <div className='w-1/2 flex justify-end'>
                        <AnimationObserver threshold={0.5}>
                            <LootieAnimation
                                animationData={lootieFile}
                                width="550px"
                                height="550px"
                                loop={false}
                            />
                        </AnimationObserver>
                    </div>
                </div>
            </section>

            <ProkerSection />

            <div className="font-sans mt-16">
                {/* Header Section */}
                <header className="p-4">
                    <div className="max-w-7xl px-12 mx-auto">
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

                            <div className="flex justify-center mt-6 gap-4">
                                <button className="p-2 rounded-full border border-blue-500">
                                    <ArrowLeft className="w-6 h-6 text-blue-500" />
                                </button>
                                <button className="p-2 rounded-full border border-blue-500">
                                    <ArrowRight className="w-6 h-6 text-blue-500" />
                                </button>
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