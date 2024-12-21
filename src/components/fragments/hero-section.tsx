import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <section id='jumbotron' className="bg-white">
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
        </div>
    )
}

export default HeroSection