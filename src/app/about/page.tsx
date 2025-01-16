"use client"

import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { useEffect, useState } from "react";

const AboutPage: React.FC = () => {

  const genbiHistory: IHistoryDetail[] = [
    { date: '11 November 2011', title: 'Penyusunan Rancangan Konstitusi Organisasi', description: 'Komunitas GenBI terbentuk melalui kesepakatan yang mencakup penetapan nama dan lambang yaitu Generasi Baru Indonesia (GenBI). Selain itu, tim perumus dan kelompok kerja dibentuk untuk menyusun rencana pertemuan umum dan deklarasi yang direncanakan pada 11 November 2011 (11-11-11) serta menyusun rancangan konstitusi organisasi, termasuk statuta, AD, dan ART.' },
    { date: '17 Agustus 2017', title: 'Peluncuran Sosial Media Pertama', description: 'GenBI memanfaatkan berbagai cara untuk membangun komunikasi dan melakukan sosialisasi ke seluruh negeri, salah satunya melalui media sosial Facebook dengan meluncurkan FanPage Generasi Baru Indonesia (GenBI) pada 17 Agustus 2011. Semangat pembentukan komunitas ini menyebar ke berbagai daerah, ditandai dengan pertemuan umum yang disertai forum belajar dalam bentuk dialog dan diskusi terbuka, membahas isu-isu terkini di bidang ekonomi makro dan mikro serta sosial-politik, dengan menghadirkan narasumber yang ahli di bidangnya. Komunitas ini berkembang di seluruh perguruan tinggi yang memiliki penerima beasiswa Bank Indonesia. GenBI menjadi wadah pengembangan kepemimpinan mahasiswa berbasis kampus, dikelola oleh mahasiswa penerima beasiswa tersebut, dengan tujuan mempercepat dan mengoptimalkan potensi generasi muda Indonesia yang unggul di berbagai bidang, serta diharapkan mampu melahirkan pemimpin masa depan yang memiliki wawasan luas dan kemampuan yang lebih baik.' }
  ]

  const [historiList, setHistoriList] = useState<IHistoryDetail[]>(genbiHistory)
  const [selectedHistory, setSelectedHistory] = useState<IHistoryDetail>(genbiHistory[0]);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState<number>(0);

  const disablePrevButton = selectedHistoryIndex === 0;
  const disableNextButton = selectedHistoryIndex === genbiHistory.length - 1;

  useEffect(() => {
    setSelectedHistory(historiList[selectedHistoryIndex])
  }, [selectedHistoryIndex])

  const handlePrevButton = () => {
    if (selectedHistoryIndex > 0) {
      setSelectedHistoryIndex(selectedHistoryIndex - 1);
    }
  }

  const handleNextButton = () => {
    if (selectedHistoryIndex < genbiHistory.length - 1) {
      setSelectedHistoryIndex(selectedHistoryIndex + 1)
    }
  }

  return (
    <>
      <Navbar bgColor="bg-white" />
      <div
        className="w-full h-full bg-[url('/images/Tentang.png')] bg-cover bg-center flex flex-col justify-center items-center py-28 mt-20 px-5"
      >
        <h1 className="text-5xl md:text-6xl font-medium md:font-semibold text-white mb-6">Tentang GenBI</h1>
        <p className="font-light text-lg md:text-xl text-white md:w-2/3 w-full text-center">
          Generasi Baru Indonesia atau yang biasa disebut GenBI adalah sebuah komunitas penerima beasiswa Bank Indonesia yang berperan aktif dalam pembangunan Indonesia sebagai generasi bangsa. GenBI terdiri dari mahasiswa berprestasi yang tersebar di berbagai perguruan tinggi negeri terpilih di seluruh provinsi Indonesia.
        </p>
      </div>

      <section id="history-section" className="mb-8 max-w-7xl mx-auto md:px-12 px-5">
        <h2 className="text-2xl md:text-3xl font-semibold text-pr900 text-center md:text-start my-10">Sejarah GenBI Jember</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="md:col-span-1">
            <img className="w-full h-auto" src="/images/about-1.png" alt="" />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="">
              <div className="mb-12 relative">
                <div className="text-sm font-semibold text-pr900 mb-2">{selectedHistory.date}</div>
                <h3 className="text-lg font-semibold text-pr900 mb-2">{selectedHistory.title}</h3>
                <p className="text-pr900">{selectedHistory.description}</p>
              </div>
              <div className="flex space-x-4">
                <button onClick={handlePrevButton}>
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-0.954545" y="0.954545" width="33.0909" height="33.0909" rx="16.5455" transform="matrix(-1 0 0 1 33.0909 0)" fill="white" />
                    <rect x="-0.954545" y="0.954545" width="33.0909" height="33.0909" rx="16.5455" transform="matrix(-1 0 0 1 33.0909 0)" stroke={`${disablePrevButton ? '#9DC1FF' : '#11336B'}`} strokeWidth="1.90909" />
                    <mask id="mask0_3216_14778" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="7" width="21" height="21">
                      <rect width="20.5454" height="20.5454" transform="matrix(-1 0 0 1 28 7)" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3216_14778)">
                      <path d="M21.1381 25.5368L22.353 24.3218L15.3038 17.2726L22.353 10.2234L21.1381 9.00842L12.8739 17.2726L21.1381 25.5368Z" fill={`${disablePrevButton ? '#9DC1FF' : '#11336B '}`} />
                    </g>
                  </svg>
                </button>
                <button onClick={handleNextButton}>
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.954545" y="0.954545" width="33.0909" height="33.0909" rx="16.5455" fill="white" />
                    <rect x="0.954545" y="0.954545" width="33.0909" height="33.0909" rx="16.5455" stroke={`${disableNextButton ? '#9DC1FF' : '#11336B'}`} strokeWidth="1.90909" />
                    <mask id="mask0_3216_14782" mask-type="alpha" maskUnits="userSpaceOnUse" x="7" y="6" width="22" height="22">
                      <rect x="7.54297" y="6.90686" width="20.55" height="20.55" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_3216_14782)">
                      <path d="M14.4062 25.4478L13.1909 24.2325L20.2417 17.1817L13.1909 10.1309L14.4062 8.91571L22.6722 17.1817L14.4062 25.4478Z" fill={`${disableNextButton ? '#9DC1FF' : '#11336B '}`} />
                    </g>
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section >


      <section id="visi-section" className="mb-8 bg-pr50">
        <h2 className="md:hidden block text-2xl md:text-3xl font-semibold text-pr900 text-center pt-8">Visi Misi GenBI</h2>
        <div className="max-w-7xl flex md:flex-row flex-col-reverse md:space-y-8 mx-auto py-6 md:py-14 px-5 md:px-12">
          <div className="w-full md:w-2/3 flex flex-col items-star justify-center space-y-3 pt-5 md:pt-0 md:pr-8">
            <h2 className="hidden md:block text-2xl md:text-3xl font-semibold text-pr900 md:mb-6">Visi Misi GenBI</h2>
            <h6 className="text-lg md:text-xl text-pr900 font-semibold md:mb-6">Visi</h6>
            <p className="mb-8 text-pr900">Menjadikan kaum muda Indonesia sebagai generasi yang kompeten dalam berbagai bidang keilmuan
              serta dapat membawa perubahan positif dan menjadi inspirasi bagi bangsa dan negara.</p>
            <h6 className="text-lg md:text-xl text-pr900 font-semibold mb-6">Misi</h6>
            <ul className="text-pr900">
              <li><span className="font-semibold">Initiate,</span> Menggagas berbagai kegiatan pemberdayaan masyarakat untuk Indonesia yang lebih baik</li>
              <li><span className="font-semibold">Act,</span> Menjadi garda terdepan dalam melakukan aksi nyata untuk pembangunan bangsa</li>
              <li><span className="font-semibold">Share,</span> Peduli dan berkontribusi untuk pemberdayaan masyarakat</li>
              <li><span className="font-semibold">Inspire,</span> Berbagi inspirasi dan motivasi untuk menjadi energi bagi negeri</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <img className="w-full h-auto" src="/images/about-1.png" alt="" />
          </div>
        </div>
      </section>


      <section id="goals-section" className="mb-16">
        <h2 className="text-3xl font-semibold text-pr900 text-center mb-10">Tujuan GenBI</h2>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-pr25 flex flex-col items-start justify-center p-6 rounded-3xl shadow-sm border border-pr50 shadow-gray-300">
              <div className="mb-3 h-12 w-12 bg-pr100"></div>
              <h6 className="font-semibold mb-3">Frontliners Bank Indonesia</h6>
              <p>
                Berperan dalam mengkomunikasikan kelembagaan dan berbagai kebijakan Bank Indonesia kepada sesama mahasiswa dan masyarakat umum,
                sekaligus menciptakan generasi muda yang tangguh dan siap menjadi ujung tombak perubahan,
              </p>
            </div>
            <div className="bg-pr25 flex flex-col items-start justify-center p-6 rounded-3xl shadow-sm border border-pr50 shadow-gray-300">
              <div className="mb-3 h-12 w-12 bg-pr100"></div>
              <h6 className="font-semibold mb-3">Frontliners Bank Indonesia</h6>
              <p>
                Berperan dalam mengkomunikasikan kelembagaan dan berbagai kebijakan Bank Indonesia kepada sesama mahasiswa dan masyarakat umum,
                sekaligus menciptakan generasi muda yang tangguh dan siap menjadi ujung tombak perubahan,
              </p>
            </div>
            <div className="bg-pr25 flex flex-col items-start justify-center p-6 rounded-3xl shadow-sm border border-pr50 shadow-gray-300">
              <div className="mb-3 h-12 w-12 bg-pr100"></div>
              <h6 className="font-semibold mb-3">Frontliners Bank Indonesia</h6>
              <p>
                Berperan dalam mengkomunikasikan kelembagaan dan berbagai kebijakan Bank Indonesia kepada sesama mahasiswa dan masyarakat umum,
                sekaligus menciptakan generasi muda yang tangguh dan siap menjadi ujung tombak perubahan,
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id="awardee-section" className="mb-16 bg-pr900 py-16">
        <div className="text-white flex flex-col md:flex-row justify-center items-center px-5 max-w-6xl mx-auto">
          <div className="w-full sm:w-1/3 flex flex-col justify-center items-center mx-6 mb-6 sm:mb-0">
            <img className="w-12 mb-2" src="/images/icon/school.png" alt="" />
            <h4 className="mb-4 text-6xl font-bold">4</h4>
            <h4 className="mb-4 text-3xl font-semibold">Komisariat</h4>
            <p className="text-center font-thin">GenBI Jember memiliki 4 komisariat dari Perguruan Tinggi Negeri yang ada di Jember</p>
          </div>
          <div className="w-full sm:w-1/3 flex flex-col justify-center items-center mx-6 mb-6 sm:mb-0">
            <img className="w-12 mb-2" src="/images/icon/group.png" alt="" />
            <h4 className="mb-4 text-6xl font-bold">225</h4>
            <h4 className="mb-4 text-3xl font-semibold">Anggota</h4>
            <p className="text-center font-thin">GenBI Jember memiliki 225 anggota dari 4 Perguruan Tinggi Negeri yang ada di Jember</p>
          </div>
          <div className="w-full sm:w-1/3 flex flex-col justify-center items-center mx-6">
            <img className="w-12 mb-2" src="/images/icon/hub.png" alt="" />
            <h4 className="mb-4 text-6xl font-bold">20+</h4>
            <h4 className="mb-4 text-3xl font-semibold">Program Kerja</h4>
            <p className="text-center font-thin">GenBI Jember memiliki lebih dari 20 program kerja untuk internal maupun eksternal</p>
          </div>
        </div>
      </section>


      <section id="structur-section" className="pb-64 md:pb-50">
        <div className="max-w-7xl mx-auto flex md:space-x-8 justify-center items-center flex-col-reverse sm:flex-row px-5 md:px-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mb-6 sm:mb-0">
            <h2 className="text-pr900 text-3xl sm:text-4xl mb-5 md:mb-8 font-medium md:font-semibold text-center md:text-start">Keanggotaan dan Susunan Kepengurusan GenBI Jember</h2>
            <p className="mb-8 text-justify">GenBI Jember telah memiliki anggota aktif sebanyak 175 mahasiswa yang tersebar dari tiga Perguruan Tinggi besar di
              Jember meliputi Universitas Jember, Politeknik Negeri Jember, dan UIN KHAS Jember.</p>
            <button className="w-2/3 md:w-1/3 px-4 py-2 bg-pr500 text-center rounded-lg text-white hover:bg-pr200 font-medium">
              Lihat Selengkapnya
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mb-5">
            <div>
              <img className="w-full h-90" src="/images/about-1.png" alt="" />
            </div>
          </div>
        </div>
      </section>


      <Footer />

    </>
  );
};

export default AboutPage;
