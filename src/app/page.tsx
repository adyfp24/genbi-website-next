import Navbar from '@/components/layouts/navbar'
import React from 'react'

const LandingPage: React.FC = () => {
    return (

        <div className='w-full'>
            <Navbar />

            <section id='hero-section' className="bg-white">
                <div className="pt-20 text-center bg-pr100">
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
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <div className='w-2/3'>
                        <h2 className='text-pr700 text-4xl font-semibold mb-4'>Kerja Sama Beasiswa Bank Indonesia dengan Perguruan Tinggi di Jember</h2>
                        <p className=''>GenBI Jember bekerja sama dengan berbagai perguruan tinggi untuk mendukung generasi muda melalui program beasiswa Bank Indonesia.
                            Dengan total 179 penerima dari Universitas Jember, Politeknik Negeri Jember, dan UIN KHAS Jember.
                        </p>
                    </div>
                    <div className='flex w-full mt-20'>
                        <div className='w-1/2 flex flex-col'>
                            <div className='flex w-full'>
                                <div className='w-max px-4 py-4'>
                                    <img className='mb-3' src="/images/unej-logo.png" alt="" />
                                    <h2 className='text-5xl mb-3 font-bold text-pr500'>75+</h2>
                                    <h6 className='font-semibold'>Universitas Jember</h6>
                                    <p>Jumlah penerima beasiswa Bank Indonesia</p>
                                </div>
                                <div className='w-max px-4 py-4'>
                                    <img className='mb-3' src="/images/polije-logo.png" alt="" />
                                    <h2 className='text-5xl mb-3 font-bold text-pr500'>64+</h2>
                                    <h6 className='font-semibold'>Politeknik Negeri Jember</h6>
                                    <p>Jumlah penerima beasiswa Bank Indonesia</p>
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='w-1/2 px-4 py-4'>
                                    <img className='mb-3' src="/images/uin-logo.png" alt="" />
                                    <h2 className='text-5xl mb-3 font-bold text-pr500'>56+</h2>
                                    <h6 className='font-semibold'>UIN KHAS Jember</h6>
                                    <p>Jumlah penerima beasiswa Bank Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <img src="/images/genbi-pengurus.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id='testimonial-section' className='mb-32'>
                <div className='max-w-screen-xl w-full h-full flex flex-wrap items-center mx-auto bg-pr800 rounded-3xl text-white'>
                    <div className='w-2/3 flex h-full flex-col justify-between p-6'>
                        <div className=''>rating</div>
                        <p className=''>“Beasiswa Bank Indonesia ngebantu banget kuliah saya! Lewat GenBI, saya dapet banyak pengalaman seru.”</p>
                        <div className='flex'>
                            <img className='w-10 h-auto mr-6' src="images/unej-logo.png" alt="" />
                            <div className=''>
                                <h4>- Rizki Dwi Putra</h4>
                                <h6>Penerima Beasiswa Bank Indonesia Universitas Jember</h6>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <img className='max-w-full max-h-full rounded-r-3xl' src="/images/testi-image.png" alt="" />
                    </div>
                    <div>
                        <button>left</button>
                        <button>right</button>
                    </div>
                </div>
            </section>

            <section id='benefit-section'>
                <div className='max-w-screen-xl w-full h-full flex flex-col mx-auto mb-10'>
                    <div className='flex flex-col w-3/5 mx-auto items-center justify-center text-center'>
                        <h4 className='font-bold text-3xl'>Benefit yang akan kamu dapatkan jika tergabung dalam Generasi Bank Indonesia</h4>
                        <p>Dapatkan banyak keuntungan saat menjadi bagian dari Generasi Baru Indonesia Jember.
                            Mulai dari bantuan pendidikan hingga pengembangan diri, semuanya disiapkan untuk mendukung masa depanmu.
                        </p>
                    </div>
                    <div className='flex w-full mt-12 justify-between'>
                        <div className='w-1/3 p-6 rounded-xl flex flex-col items-center justify-center text-center'>
                            <img className='mb-5' src="/images/benefit-1.png" alt="" />
                            <h6 className='font-bold mb-2 text-lg'>Total Bantuan Biaya Pendidikan Dengan Total 24 Juta</h6>
                            <p>Bantuan dana pendidikan sebesar 24 juta untuk mendukung perjalanan akademismu</p>
                        </div>
                        <div className='w-1/3 p-6 rounded-xl flex flex-col items-center justify-center text-center'>
                            <img className='mb-5' src="/images/benefit-2.png" alt="" />
                            <h6 className='font-bold mb-2 text-lg'>Menjadi Anggota Aktif Komunitas Generasi Baru Indonesia Jember</h6>
                            <p>Tempat kamu berkolaborasi dan berbagi ide dengan sesama mahasiswa bervisi-misi besar</p>
                        </div>
                        <div className='w-1/3 p-6 rounded-xl flex flex-col items-center justify-center text-center'>
                            <img className='mb-5' src="/images/benefit-3.png" alt="" />
                            <h6 className='font-bold mb-2 text-lg'>Pembinaan Softskill dan Leadership bagi Seluruh Penerima Beasiswa</h6>
                            <p>Pelatihan softskill dan leadership yang dirancang khusus untuk penerima beasiswa</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default LandingPage