import React, { useState } from 'react';

const RulesSection: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState<string>('unej');
    const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0);

    const universities = [
        {
            id: 'unej',
            name: 'Universitas Jember',
            description: 'Syarat khusus bagi kamu, mahasiswa Universitas Jember!',
            logo: '/images/unej-logo.png',
            rulesImage: [
                '/images/persyaratan/unej/Slide1.png',
                '/images/persyaratan/unej/Slide2.png',
                '/images/persyaratan/unej/Slide3.png',
            ],
            url: 'https://www.instagram.com/genbi_jember'
        },
        {
            id: 'polije',
            name: 'Politeknik Negeri Jember',
            description: 'Simak syarat-syarat berikut bagi mahasiswa Politeknik Negeri Jember!',
            logo: '/images/polije-logo.png',
            rulesImage: [
                '/images/persyaratan/polije/Slide1.png',
                '/images/persyaratan/polije/Slide2.png',
                '/images/persyaratan/polije/Slide3.png',
            ],
            url: 'https://www.instagram.com/genbi_jember'
        },
        {
            id: 'uin',
            name: 'UIN KHAS Jember',
            description: 'Pastikan kamu memenuhi syarat sebagai mahasiswa UIN KHAS Jember!',
            logo: '/images/uin-logo.png',
            rulesImage: [
                '/images/persyaratan/uin/Slide1.png',
                '/images/persyaratan/uin/Slide2.png',
                '/images/persyaratan/uin/Slide3.png',
            ],
            url: 'https://www.instagram.com/genbi_jember'
        },
        {
            id: 'unmuh',
            name: 'UNMUH Jember',
            description: 'Simak syarat-syarat berikut bagi mahasiswa UNMUH Jember!',
            logo: '/images/unmuh-logo.png',
            rulesImage: [
                '/images/persyaratan/unmuh/slide1.jpg',
                '/images/persyaratan/unmuh/slide2.jpg',
                '/images/persyaratan/unmuh/slide3.jpg',
                '/images/persyaratan/unmuh/slide4.jpg',
                '/images/persyaratan/unmuh/slide5.jpg',
            ],
            url: 'https://www.instagram.com/genbi_jember'
        },
    ];

    const handleCardClick = (id: string) => {
        setSelectedCard(id);
        setSelectedSlideIndex(0); // Reset slide index saat universitas berubah
    };

    const selectedUniversity = universities.find((university) => university.id === selectedCard);

    const handleNextSlide = () => {
        if (selectedUniversity) {
            setSelectedSlideIndex((prevIndex) =>
                prevIndex < selectedUniversity.rulesImage.length - 1 ? prevIndex + 1 : 0
            );
        }
    };

    const handlePreviousSlide = () => {
        if (selectedUniversity) {
            setSelectedSlideIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : selectedUniversity.rulesImage.length - 1
            );
        }
    };

    return (
        <section id="syarat-penerimaan" className="w-full bg-gray-100 py-20">
            <div className="max-w-7xl px-5 md:px-12 flex flex-col mx-auto">
                <h3 className="text-4xl font-medium md:font-semibold text-pr900 mb-5">
                    Cek Syarat Beasiswa Sesuai Kampusmu!
                </h3>
                <p className="w-full md:w-2/3 text-gray-600 text-xl mb-10">
                    Setiap perguruan tinggi memiliki persyaratan khusus untuk Beasiswa Bank Indonesia. Pilih universitas atau institusimu dan temukan syarat lengkapnya, agar kamu siap mendaftar dan meraih kesempatan ini.
                </p>
                <div className="flex w-full flex-col-reverse md:flex-row">
                    <div className="w-full md:w-1/2 overflow-y-auto">
                        {universities.map((university) => (
                            <div
                                key={university.id}
                                onClick={() => handleCardClick(university.id)}
                                className={`cursor-pointer w-full flex flex-col justify-center h-1/3 border-l-4 pl-4 py-2 md:py-0 ${selectedCard === university.id ? 'border-pr500' : 'border-gray-200'
                                    }`}
                            >
                                <img className="w-8 mb-4" src={university.logo} alt={`${university.name} logo`} />
                                <h4 className="mb-2 text-xl font-medium">{university.name}</h4>
                                <p className="mb-4 text-gray-600">{university.description}</p>
                                <a
                                    href={university.url}
                                    className="inline-flex text-lg font-medium text-pr700 focus:outline-none rounded-lg focus:z-10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Selengkapnya <i className="fa fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Bagian Kanan: Carousel Gambar */}
                    <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
                        {selectedUniversity && (
                            <>
                                <img
                                    className="w-full mb-4 rounded-lg shadow-md"
                                    src={selectedUniversity.rulesImage[selectedSlideIndex]}
                                    alt={`Slide ${selectedSlideIndex + 1}`}
                                />
                                <button
                                    onClick={handlePreviousSlide}
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2  p-3 z-10"
                                >
                                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_b_3722_27589)">
                                            <rect width="44" height="44" rx="22" fill="black" fillOpacity="0.9" />
                                            <path d="M25 28L19 22L25 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_b_3722_27589" x="-8" y="-8" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3722_27589" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3722_27589" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                </button>
                                <button
                                    onClick={handleNextSlide}
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2  p-3 z-10"
                                >
                                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_b_3722_27592)">
                                            <rect width="44" height="44" rx="22" fill="black" fillOpacity="0.9" />
                                            <path d="M19 28L25 22L19 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_b_3722_27592" x="-8" y="-8" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3722_27592" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3722_27592" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </button>
                                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 rounded-xl bg-neutral-950 px-4 py-2">
                                    {selectedUniversity.rulesImage.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-3 h-3 rounded-full ${index === selectedSlideIndex ? 'bg-white' : 'bg-gray-400'}`}
                                        ></div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RulesSection;