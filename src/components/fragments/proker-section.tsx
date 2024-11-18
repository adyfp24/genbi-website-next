'use client'
import React, { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// Dummy data for now
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
  'Humas GenBI'
];

const dummyProkerDetail: iProkerDetail = {
  title: 'GenBI Mengajar',
  description: 'GenBI Mengajar (BIJAR) merupakan program kerja yang bergerak dalam dunia pendidikan...',
  image: 'images/proker-mengajar.png',
  listKegiatan: [
    'BIJAR Creative Study',
    'BIJAR Childrens Day',
    'BIJAR Creative Home',
    'Buku Untuk Semua',
    'One Step After',
    'Happy Tummy'
  ]
};

interface iProkerDetail {
  title: string,
  description: string,
  image: string,
  listKegiatan: string[]
}

// ProkerBadge component
interface iProkerBadgeProps {
  data: {
    nama_proker: string
  }
}

const ProkerBadge: React.FC<iProkerBadgeProps> = ({ data }) => {
  return (
    <div>
      <a className='p-3 block border border-pr200 text-white my-2 mx-2 rounded' href="/proker">{data.nama_proker}</a>
    </div>
  );
};

// ProkerSection component
const ProkerSection: React.FC = () => {
  const [prokerList, setProkerList] = useState<string[]>([]);
  const [prokerDetail, setProkerDetail] = useState<iProkerDetail>({
    title: '',
    description: '',
    image: '',
    listKegiatan: []
  });

  // Fetch data on component mount
  useEffect(() => {
    // Simulating an API call with dummy data
    setProkerList(dummyProkerList);
    setProkerDetail(dummyProkerDetail);
  }, []);

  return (
    <div>
      <section id='work-program-section'>
        <div className='w-full text-white mx-auto flex flex-col items-center bg-pr800 pt-20'>
          <h2 className='text-5xl font-bold mb-5'>Program Kerja GenBI Jember</h2>
          <p className='text-pr200 w-2/3 text-center mb-5'>
            GenBI Jember aktif dalam berbagai program yang mendukung pengembangan diri dan kontribusi sosial. Dari kegiatan sosial hingga pelatihan leadership, setiap program dirancang untuk mendorong anggotanya menjadi agen perubahan bagi masyarakat.
          </p>
          <div className='flex flex-wrap justify-center max-w-screen-xl mx-auto mb-10'>
            {prokerList.map((proker) => (
              <AnimationOnScroll animateIn='animate__zoomIn'>
                <ProkerBadge key={proker} data={{ nama_proker: proker }} />
              </AnimationOnScroll>
            ))}
          </div>
          <div className='flex flex-wrap w-full justify-between max-w-7xl px-12 mx-auto mb-10'>
            <AnimationOnScroll animateIn='animate__fadeInLeft' className='w-3/5'>
              <div className='flex flex-col justify-center'>
                <h2 className='text-5xl font-bold mb-5'>{prokerDetail.title}</h2>
                <p className='text-white pr-24 mb-5'>{prokerDetail.description}</p>
                <div className='flex w-full'>
                  <ul className='w-full grid grid-cols-2 gap-4'>
                    {prokerDetail.listKegiatan.map((data, index) => (
                      <li key={index} className='my-1 flex items-center'>
                        <img src="images/icon/check-icon.png" alt="" />
                        <p className='ml-2'>{data}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInRight' className='w-2/5'>
              <div className=''>
                <img className='w-full' src={prokerDetail.image} alt="" />
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProkerSection;
