"use client"

import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const InformasiPage: React.FC = () => {
    return (
        <>
            <Navbar bgColor='bg-pr50' />
            <section id='jumbotron' className='max-w-full mx-auto flex flex-col pt-4 px-32 bg-pr50'>
                <div className='flex flex-col max-w-5xl mt-12'>
                    <h1 className='text-6xl font-light text-pr400 mb-8'>Bersama Bank Indonesia, Wujudkan Impian Pendidikanmu!</h1>
                    <h3 className='italic text-gray-400 mb-10'>Raih kesempatan beasiswa prestisius untuk mahasiswa berprestasi di seluruh Indonesia. Dapatkan dukungan finansial, bimbingan, dan akses jaringan yang luas untuk berkembang bersama generasi terbaik bangsa.</h3>
                    <div className="mb-10 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
                        <a href="#" className="inline-flex bg-white hover:bg-gray-200 justify-center rounded-lg items-center py-4 px-7 text-lg border border-gray-300 font-semibold text-center text-dark rounded-lgfocus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            <img className='w-5 mr-2' src="/images/icon/play-circle.png" alt="" />
                            Selengkapnya
                        </a>
                        <a href="#" className="inline-flex text-lg py-4 px-7 sm:ms-4 font-semibold text-white focus:outline-none bg-pr500 rounded-lg border border-gray-200 hover:bg-pr700 hover:text-white focus:z-10 dark:hover:bg-gray-70">
                            Daftar Sekarang
                        </a>
                    </div>
                </div>
                <div className='w-full'>
                    <img className='w-full' src="/images/head-scholar.png" alt="" />
                </div>
            </section>

            <section id='daftar-instansi' className='mt-12'>
                <div className='max-w-7xl mx-auto px-12 flex flex-col justify-center items-center'>
                    <h5 className='mb-8'>Daftar mitra beasiswa Perguruan Tinggi dibawang naungan Kantor Perwakilan Bank Indonesia Jember</h5>
                    <div className='flex justify-around items-center w-full text-pr900 font-semibold'>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-4' src="/images/unej-logo.png" alt="" />
                            <h3 className=''>Universitas Jember</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-4' src="/images/polije-logo.png" alt="" />
                            <h3>Politeknik Negeri Jember</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-4' src="/images/uin-logo.png" alt="" />
                            <h3>UIN KHAS Jember</h3>
                        </div>
                    </div>
                </div>  
            </section>

            <section id='benefit-section' className='mt-12'>
                <div className='max-w-7xl px-12 w-full h-full flex flex-col mx-auto mb-28'>
                    <AnimationOnScroll animateIn='animate__fadeIn'>
                        <div className='flex flex-col w-3/5 mx-auto items-center justify-center text-center'>
                            <h4 className='font-bold text-pr900 text-3xl mb-2'>Benefit yang akan kamu dapatkan jika tergabung dalam Generasi Bank Indonesia</h4>
                            <p className='text-gray-700'>Dapatkan banyak keuntungan saat menjadi bagian dari Generasi Baru Indonesia Jember.
                                Mulai dari bantuan pendidikan hingga pengembangan diri, semuanya disiapkan untuk mendukung masa depanmu.
                            </p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__fadeInUp' >
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
                    </AnimationOnScroll>
                </div>
            </section>

            <div className='h-32 mb-32'>
            </div>
            <Footer />
        </>
    )
}

export default InformasiPage 