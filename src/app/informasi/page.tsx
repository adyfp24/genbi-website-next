"use client"

import RulesSection from '@/components/fragments/rules-section'
import Footer from '@/components/layouts/footer'
import Navbar from '@/components/layouts/navbar'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const InformasiPage: React.FC = () => {
    return (
        <>
            <Navbar bgColor='bg-pr50' />
            <section id='jumbotron' className='w-full flex flex-col pt-4 md:px-16 bg-pr50'>
                <div className='flex flex-col max-w-7xl px-5 md:px-12 mx-auto mt-12'>
                    <h1 className='text-4xl md:text-6xl font-medium text-pr900 mb-8'>Bersama Bank Indonesia, Wujudkan Impian Pendidikanmu!</h1>
                    <h3 className='text-xl text-pr600 mb-10'>Raih kesempatan beasiswa prestisius untuk mahasiswa berprestasi di seluruh Indonesia. Dapatkan dukungan finansial, bimbingan, dan akses jaringan yang luas untuk berkembang bersama generasi terbaik bangsa.</h3>
                    <div className="mb-10 flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
                        <a href="#" className="inline-flex bg-white hover:bg-gray-200 justify-center rounded-lg items-center py-4 px-7 text-lg border border-gray-300 font-semibold text-center text-dark rounded-lgfocus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            <img className='w-5 mr-2' src="/images/icon/play-circle.png" alt="" />
                            Selengkapnya
                        </a>
                        <a href="#" className="inline-flex justify-center items-center text-lg py-4 px-7 sm:ms-4 font-semibold text-white focus:outline-none bg-pr100 rounded-lg  hover:bg-pr700 hover:text-white focus:z-10 dark:hover:bg-gray-70">
                            Daftar Sekarang
                        </a>
                    </div>
                </div>
                <div className='flex w-full'>
                    <img className='w-full' src="/images/head-scholar.png" alt="" />
                </div>
            </section>

            <section id='daftar-instansi' className='mt-16'>
                <div className='max-w-7xl mx-auto px-12 flex flex-col justify-center items-center'>
                    <h5 className='text-lg mb-10 text-gray-600'>Daftar mitra beasiswa Perguruan Tinggi dibawang naungan Kantor Perwakilan Bank Indonesia Jember</h5>
                    <div className='flex justify-around items-center w-full text-pr900 font-semibold'>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-5' src="/images/unej-logo.png" alt="" />
                            <h3 className='text-xl'>Universitas Jember</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-5' src="/images/polije-logo.png" alt="" />
                            <h3 className='text-xl'>Politeknik Negeri Jember</h3>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='mb-5' src="/images/uin-logo.png" alt="" />
                            <h3 className='text-xl'>UIN KHAS Jember</h3>
                        </div>
                    </div>
                </div>  
            </section>

            <div className='max-w-7xl px-12 mx-auto h-0.5 bg-gray-200 mt-16'></div>

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

           <RulesSection />

            <section id='alur-penerimaan' className=''>
                <div className='max-w-full mx-auto flex flex-col px-32 bg-pr900 py-32 justify-center items-center'>
                    <h4 className='text-white text-4xl text-center font-semibold mb-8'>Bagaimana Alur Penerimaan Beasiswa Generasi Baru Indonesia?</h4>
                    <p className='text-gray-200 text-xl text-center mb-12'>Ikuti setiap tahap seleksi dengan seksama untuk meraih kesempatan menjadi penerima Beasiswa Bank Indonesia. 
                        Mulai dari seleksi berkas hingga pengumuman hasil, pastikan kamu selalu siap di setiap langkahnya!</p>
                    <div className="w-full flex sm:flex-row flex-col justify-center items-center h-96 bg-[url('/images/bg-alur.png')] bg-cover">
                        <img className='w-90 px-3' src="/images/alur1.png" alt="" />
                        <img className='w-90 px-3' src="/images/alur2.png" alt="" />
                        <img className='w-90 px-3' src="/images/alur-3.png" alt="" />
                    </div>
                </div>
            </section>

            <section id='kontak' className='pb-48 mt-16'>
                <div className='max-w-7xl px-12 w-full h-full flex flex-col mx-auto text-pr900'>
                    <h6 className='mb-5 text-xl font-semibold'>Masih memiliki pertanyaan?</h6>
                    <h4 className='mb-5 text-4xl font-semibold'>Kamu butuh info lebih lanjut? kami siap membantu!</h4>
                    <p className='text-gray-600 text-xl mb-8'>Jika kamu adalah mahasiswa Perguruan Tinggi dan membutuhkan informasi lebih lanjut mengenai alur seleksi penerimaan 
                        Beasiswa Bank Indonesia dapat menghubungi contact person dibawah ini</p>
                    <img className='flex w-full mb-8' src="/images/behind-scholar.png" alt="" />
                </div>
                <div className='grid grid-cols-3 px-32'>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='mb-3' src="/images/unej-logo.png" alt="" />
                        <h3 className='mb-3 font-semibold'>Universitas Jember</h3>
                        <h6>+1 555 666 888 </h6>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='mb-3' src="/images/polije-logo.png" alt="" />
                        <h3 className='mb-3 font-semibold'>Politeknik Negeri Jember</h3>
                        <h6>+1 555 666 888 </h6>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='mb-3' src="/images/uin-logo.png" alt="" />
                        <h3 className='mb-3 font-semibold'>UIN KHAS Jember</h3>
                        <h6>+1 555 666 888 </h6>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default InformasiPage 