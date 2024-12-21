import React, { useState } from 'react';

const RulesSection: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState<string>('unej'); 

    const universities = [
        {
            id: 'unej',
            name: 'Universitas Jember',
            description: 'Syarat khusus bagi kamu, mahasiswa Universitas Jember!',
            logo: '/images/unej-logo.png',
            rulesImage: '/images/carausel-unej.png',
        },
        {
            id: 'polije',
            name: 'Politeknik Negeri Jember',
            description: 'Simak syarat-syarat berikut bagi mahasiswa Politeknik Negeri Jember!',
            logo: '/images/polije-logo.png',
            rulesImage: '/images/carausel-unej.png',
        },
        {
            id: 'uin',
            name: 'UIN KHAS Jember',
            description: 'Pastikan kamu memenuhi syarat sebagai mahasiswa UIN KHAS Jember!',
            logo: '/images/uin-logo.png',
            rulesImage: '/images/carausel-unej.png',
        },
    ];

    const handleCardClick = (id: string) => {
        setSelectedCard(id); 
    };

    return (
        <section id="syarat-penerimaan" className="w-full bg-gray-100 py-20">
            <div className="max-w-7xl px-12 flex flex-col mx-auto">
                <h3 className="text-4xl font-semibold text-pr900 mb-5">Cek Syarat Beasiswa Sesuai Kampusmu!</h3>
                <p className="w-2/3 text-gray-600 text-xl mb-10">
                    Setiap perguruan tinggi memiliki persyaratan khusus untuk Beasiswa Bank Indonesia. Pilih universitas atau institusimu dan temukan syarat lengkapnya, agar kamu siap mendaftar dan meraih kesempatan ini.
                </p>
                <div className="flex w-full flex-row">
                    <div className="w-1/2">
                        {universities.map((university) => (
                            <div
                                key={university.id}
                                onClick={() => handleCardClick(university.id)}
                                className={`cursor-pointer w-full flex flex-col justify-center h-1/3 border-l-4 pl-4 ${
                                    selectedCard === university.id ? 'border-pr500' : 'border-gray-200'
                                }`}
                            >
                                <img className="w-12 mb-4" src={university.logo} alt={`${university.name} logo`} />
                                <h4 className="mb-2 text-2xl font-semibold">{university.name}</h4>
                                <p className="mb-4 text-gray-800">{university.description}</p>
                                <a
                                    href="#"
                                    className="inline-flex text-lg font-medium text-pr700 focus:outline-none rounded-lg focus:z-10"
                                >
                                    Selengkapnya <i className="fa fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Bagian Kanan: Gambar Universitas */}
                    <div className="w-1/2 h-full flex flex-col">
                        <img
                            className="w-full"
                            src={universities.find((university) => university.id === selectedCard)?.rulesImage}
                            alt="Rules Image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RulesSection;
