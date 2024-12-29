'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const AnimationOnScroll = dynamic(
    () => import('react-animation-on-scroll').then(mod => mod.AnimationOnScroll),
    { ssr: false }
  );


interface iProkerDetail {
  title: string;
  description: string;
  image: string;
  listKegiatan: string[];
}

const dummyProkerList = [
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
  'Humas GenBI',
];

const dummyProkerDetails: Record<string, iProkerDetail> = {
  'GenBI Mengajar': {
    title: 'GenBI Mengajar',
    description:
      'GenBI Mengajar (BIJAR) merupakan program kerja yang bergerak dalam dunia pendidikan untuk meningkatkan kualitas literasi dan kreativitas anak-anak.',
    image: 'images/proker-mengajar.png',
    listKegiatan: [
      'BIJAR Creative Study',
      'BIJAR Childrens Day',
      'BIJAR Creative Home',
      'Buku Untuk Semua',
      'One Step After',
      'Happy Tummy',
    ],
  },
  'Peduli Lingkungan': {
    title: 'Peduli Lingkungan',
    description:
      'Program kerja ini fokus pada pelestarian lingkungan melalui kegiatan seperti penanaman pohon dan pengelolaan sampah.',
    image: 'images/proker-lingkungan.png',
    listKegiatan: ['Penanaman Pohon', 'Pengelolaan Sampah', 'Kampanye Go Green'],
  },
};

interface iProkerBadgeProps {
  data: {
    nama_proker: string;
  };
  onSelect: (prokerName: string) => void;
  isActive: boolean;
}

const ProkerBadge: React.FC<iProkerBadgeProps> = ({
  data,
  onSelect,
  isActive,
}) => {
  return (
    <button
      onClick={() => onSelect(data.nama_proker)}
      className={`p-3 font-semibold block border whitespace-nowrap ${isActive ? 'bg-white text-pr900' : 'border-pr200 text-white'
        }  my-2 mx-2 rounded`}
    >
      {data.nama_proker}
    </button>
  );
};

const ProkerSection: React.FC = () => {
  const [prokerList, setProkerList] = useState<string[]>(dummyProkerList);
  const [prokerDetail, setProkerDetail] = useState<iProkerDetail | null>(null);
  const [selectedProker, setSelectedProker] = useState<string>(dummyProkerList[0]);

  useEffect(() => {
    const detail = dummyProkerDetails[selectedProker];
    setProkerDetail(detail);
  }, [selectedProker]);

  const handleSelectProker = (prokerName: string) => {
    setSelectedProker(prokerName);
  };

  return (
    <div>
      <section id="work-program-section">
        <div className="w-full text-white mx-auto  flex flex-col items-center bg-pr800 pt-20">
          <h2 className="text-center mx-3 text-3xl md:text-4xl font-bold mb-5">Program Kerja GenBI Jember</h2>
          <p className="text-center text-pr200 w-full px-5 md:w-2/3  mb-5">
            GenBI Jember aktif dalam berbagai program yang mendukung pengembangan diri dan kontribusi
            sosial. Dari kegiatan sosial hingga pelatihan leadership, setiap program dirancang
            untuk mendorong anggotanya menjadi agen perubahan bagi masyarakat.
          </p>
          <div className="px-5 md:px-10 flex md:flex-wrap overflow-x-auto md:overflow-visible w-full max-w-screen-xl mx-auto mb-10 scrollbar-none md:justify-center">
            {prokerList.map((proker) => (
              <AnimationOnScroll animateIn="animate__zoomIn" key={proker}>
                <ProkerBadge
                  data={{ nama_proker: proker }}
                  onSelect={handleSelectProker}
                  isActive={proker === selectedProker}
                />
              </AnimationOnScroll>
            ))}
          </div>
          {prokerDetail && (
            <div className="flex flex-col md:flex-row flex-wrap w-full justify-between max-w-7xl px-5 md:px-12 mx-auto mb-10">
              <AnimationOnScroll animateIn="animate__fadeInLeft" className="w-full md:w-3/5">
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-5">{prokerDetail.title}</h2>
                  <p className="text-white md:pr-24 mb-5">{prokerDetail.description}</p>
                  <div className="flex w-full">
                    <ul className="w-full grid grid-cols-2 gap-4">
                      {prokerDetail.listKegiatan.map((data, index) => (
                        <li key={index} className="my-1 flex items-center">
                          <img src="images/icon/check-icon.png" alt="" />
                          <p className="ml-2">{data}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInRight" className="w-full md:w-2/5 mt-8 md:mt-0">
                <div className="">
                  <img className="w-full" src={prokerDetail.image} alt="" />
                </div>
              </AnimationOnScroll>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProkerSection;
