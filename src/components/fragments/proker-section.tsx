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
  'GenBI Peduli Lingkungan',
  'GenBI Sosial Action',
  'GenBI QRIS',
  'GenBI Intelektual',
  'GenBI Personality Development',
  'GenBI Farming',
  'GenBI Goes to Campus',
  'GenBI Preneur',
  'GenBI PDD',
  'GenBI Humas',
];

const dummyProkerDetails: Record<string, iProkerDetail> = {
  'GenBI Mengajar': {
    title: 'GenBI Mengajar',
    description:
      'GenBI Mengajar (BIJAR) merupakan program kerja yang bergerak dalam dunia pendidikan. Berdirinya BIJAR bertujuan untuk menjawab keresahan-keresahan dalam dunia pendidikan dengan harapan kontribusi dari BIJAR dapat membantu target sasaran serta bermanfaat bagi internal GenBI maupun eksternal GenBI atau masyarakat luas. Ini adalah beberapa program kerja yang ada pada GenBI Mengajar :',
    image: 'images/proker-mengajar.png',
    listKegiatan: [
      'Semarak Kemerdekaan',
      'Gema Literasi',
      'MIMPI',
      'BIJAR X GGTC',
    ],
  },
  'GenBI Peduli Lingkungan': {
    title: 'GenBI Peduli Lingkungan',
    description:
      'GenBI Peduli Lingkungan (GPL) adalah program yang berfokus pada pengelolaan sampah, penghijauan, pengurangan plastik, dan teknologi ramah lingkungan untuk mendukung keberlanjutan. Dengan semangat kebersamaan, program ini bertujuan mengajak masyarakat menciptakan perubahan positif dan hidup ramah lingkungan sebagai kontribusi GenBI dalam menjaga keseimbangan alam. Ini adalah beberapa program kerja yang ada pada GenBI Peduli Lingkungan :',
    image: 'images/peduli-lingkungan.png',
    listKegiatan: [
      'Empowered Village I',
      'Empowered Village III',
      'Empowered Village II',
      'Empowered Village IV',
      'GenBI Explore Wisata'
    ],
  },
  'GenBI Sosial Action': {
    title: 'GenBI Sosial Action',
    description:
      'GenBI Social Action (SOSACT) adalah program kepedulian sosial yang bertujuan memberikan kontribusi nyata kepada masyarakat kegiatan bakti sosial, pemberian bantuan, edukasi kesehatan, dan pemberdayaan komunitas. Dengan semangat gotong royong, GenBI Social Action memberikan inspirasi perubahan positif dan pemberdayaan berkelanjutan di masyarakat. Berikut beberapa program kerja yang ada pada GenBI Social Action :',
    image: 'images/sosial-action.png',
    listKegiatan: [
      'Cegah Stunting Bersama GenBI Jember X BIJAR',
      'Cegah Stunting Bersama GenBI Jember X BIJAR',
      'Ayo Donor!',
    ],
  },
  'GenBI QRIS': {
    title: 'GenBI QRIS',
    description:
      'GenBI QRIS merupakan program yang bertujuan meningkatkan literasi keuangan digital, khususnya terkait penggunaan Quick Response Code Indonesian Standard (QRIS). Melalui edukasi dan sosialisasi, program ini memperkenalkan QRIS sebagai metode pembayaran digital yang efisien, aman, dan praktis, sekaligus mendorong pelaku UMKM untuk mengadopsi teknologi ini sehingga mendukung transformasi digital di sektor keuangan, serta mempercepat pertumbuhan ekonomi yang lebih inklusif dan efisien.  Berikut beberapa program kerja yang ada pada GenBI QRIS :',
    image: 'images/genbi-qris.png',
    listKegiatan: [
      'QRIS for Charity',
      'QRIS Goes to Campus',
      'QRIS Goes to Village',
    ],
  },
  'GenBI Intelektual': {
    title: 'GenBI Intelektual',
    description:
      'GenBI Intelektual adalah program yang bertujuan meningkatkan kapasitas intelektual anggota GenBI melalui seminar, karya ilmiah, dan pelatihan bersama pakar ahli. Program ini memfasilitasi pembelajaran berbagai bidang untuk membentuk anggota yang kritis, inovatif, dan berpikiran terbuka. GenBI Intelektual mendorong anggota terlibat dalam penelitian dan pengembangan ilmu pengetahuan yang bermanfaat bagi masyarakat dan menjadi pemimpin intelektual di lingkungan akademik dan profesional. Ini adalah beberapa program kerja yang ada pada GenBI Intelektual :',
    image: 'images/intelektual.png',
    listKegiatan: [
      'Productive Writing 2.0',
      'Insightful Forum',
      'TOEFL Training',
    ],
  },
  'GenBI Personality Development': {
    title: 'GenBI Personality Development',
    description:
      'GenBI Personality Development (GPD) adalah program yang bertujuan membantu anggota GenBI tumbuh secara pribadi dan profesional melalui pelatihan, workshop, dan mentoring. Program ini fokus pada pengembangan karakter, kepercayaan diri, serta keterampilan soft skills seperti komunikasi efektif, kepemimpinan, manajemen waktu, dan berpikir kritis yang harus ada pada setiap anggota GenBI. Berikut beberapa program kerja pada GenBI Personality Development :',
    image: 'images/genbi-gpd.png',
    listKegiatan: [
      'Excel Training Class',
      'Finance Maven',
      'Next Level',
      'Career Space'
    ],
  },
  'GenBI Farming': {
    title: 'GenBI Farming',
    description:
      'GenBI Farming (GFARM) adalah program yang bertujuan memberdayakan masyarakat sekitar dalam bidang pertanian modern. Program ini memberikan edukasi dan pelatihan tentang pertanian berkelanjutan, serta solusi praktis bagi masyarakat desa binaan untuk menghadapi tantangan sektor pertanian. Selain fokus pada peningkatan produksi pangan, GenBI Farming juga mendukung pengembangan pribadi dan profesional anggotanya, menciptakan generasi muda yang peduli lingkungan dan berkontribusi positif terhadap ketahanan pangan lokal.  Berikut beberapa program kerja yang ada pada GenBI Farming :',
    image: 'images/genbi-farming.png',
    listKegiatan: [
      'Ask the Expert',
      'Ask the Expert',
      'Praktik Budidaya Magot',
    ],
  },
  'GenBI Goes to Campus': {
    title: 'GenBI Goes to Campus',
    description:
      'GenBI Go to Campus (GGTC) adalah program yang bertujuan memperluas wawasan dan jaringan mahasiswa dengan memperkenalkan Generasi Baru Indonesia (GenBI) dan Beasiswa Bank Indonesia melalui kunjungan ke Universitas yang bekerja sama. Program ini memberikan edukasi dan motivasi tentang peluang beasiswa, tips and trick lolos beasiswa, persyaratan apa saja yang dibutuhkan, dan pengembangan karier. Berikut ini adalah beberapa program kerjanya :',
    image: 'images/genbi-campuss.png',
    listKegiatan: [
      'GGTC UNEJ',
      'GGTC UIN KHAS JEMBER',
      'GGTC POLIJE',
      'GGTS'
    ],
  },
  'GenBI Preneur': {
    title: 'GenBI Preneur',
    description:
      'GenBI Preneur adalah program kewirausahaan yang bertujuan memberdayakan anggota dan para UMKM dalam entrepreneurship. Program ini membuka UMKM untuk mendapat edukasi, pelatihan, dan pendampingan terkait pengembangan usaha, manajemen bisnis, pemasaran, serta inovasi produk, dengan bimbingan langsung dari praktisi berpengalaman yang dihadirkan oleh GenBI. Hal ini diharapkan dapat melahirkan wirausahawan muda yang mandiri, tangguh, dan berkontribusi pada pertumbuhan ekonomi masyarakat. Berikut beberapa program kerja yang ada pada GenBI Preneur :',
    image: 'images/genbi-preneur.png',
    listKegiatan: [
      'Kelas Marketing UMKM',
      'Kelas Marketing UMKM'
    ],
  },
  'GenBI PDD': {
    title: 'GenBI PDD',
    description:
      'GenBI PDD merupakan bagian dari GenBI Jember yang memiliki tugas pokok dan fungsi yakni melakukan controlling desain dari seluruh desain yang berhubungan dengan GenBI Jember yang akan digunakan atas nama GenBI Jember, pembuatan desain (hari besar maupun hari spesial), video kegiatan yang akan di publikasikan ke sosial media GenBI Jember mulai dari Instagram, Twitter, Facebook, Youtube, dan Tiktok. Ini adalah kegiatan yang ada pada GenBI PDD :',
    image: 'images/genbi-pdd.png',
    listKegiatan: [
      'Workshop Integrated Digital Creation',
      'Team Instagram',
      'Team YouTube',
      'Team Facebook & Twitter',
      'Team TikTok',
      'Team Website'
    ],
  },
  'GenBI Humas': {
    title: 'GenBI Humas',
    description:
      'GenBI HUMAS (Hubungan Masyarakat) sebagai bagian dari GenBI Jember yang bertugas menjalin komunikasi yang efektif dengan publik, baik melalui komunikasi satu arah maupun dua arah.HUMAS bertanggung jawab untuk mengoptimalkan publikasi press release terkait setiap program kerja yang telah dilaksanakan serta membangun hubungan kerja sama dengan stakeholder untuk menyukseskan program yang dijalankan. Ini adalah beberapa kegiatan yang ada pada GenBI HUMAS :',
    image: 'images/genbi-humas.png',
    listKegiatan: [
      'Workshop Kepenulisan dan Jurnalistik',
      'GenBI PACAPA',
    ],
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
        }  my-2 mx-2 rounded-lg`}
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
        <div className="w-full text-white mx-auto flex flex-col items-center bg-pr800 py-20">
          <AnimationOnScroll animateIn="animate__fadeIn" className='flex flex-col'>
            <h2 className="text-center mx-3 text-4xl font-medium md:font-semibold mb-5">Program Kerja GenBI Jember</h2>
            <div className='flex justify-center'>
              <p className="text-center text-lg text-white w-full px-5 md:w-2/3  mb-5">
                GenBI Jember aktif dalam berbagai program yang mendukung pengembangan diri dan kontribusi
                sosial. Dari kegiatan sosial hingga pelatihan leadership, setiap program dirancang
                untuk mendorong anggotanya menjadi agen perubahan bagi masyarakat.
              </p>
            </div>
          </AnimationOnScroll>
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
                  <h2 className="text-3xl md:text-4xl font-medium md:font-semibold mb-5">{prokerDetail.title}</h2>
                  <p className="text-white md:pr-24 mb-5">{prokerDetail.description}</p>
                  <div className="flex w-full">
                    <ul className="w-full grid grid-cols-2 gap-4 md:w-4/5">
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
