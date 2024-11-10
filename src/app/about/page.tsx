import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";

const AboutPage: React.FC = () => {

  const genbiHistory = [
    { date: '11 November 2011', title: 'Penyusunan Rancangan Konstitusi Organisasi', description: 'Komunitas GenBI terbentuk melalui kesepakatan yang mencakup penetapan nama dan lambang yaitu Generasi Baru Indonesia (GenBI). Selain itu, tim perumus dan kelompok kerja dibentuk untuk menyusun rencana pertemuan umum dan deklarasi yang direncanakan pada 11 November 2011 (11-11-11) serta menyusun rancangan konstitusi organisasi, termasuk statuta, AD, dan ART.' },
    { date: '17 Agustus 2017', title: 'Peluncuran Sosial Media Pertama', description: 'GenBI memanfaatkan berbagai cara untuk membangun komunikasi dan melakukan sosialisasi ke seluruh negeri, salah satunya melalui media sosial Facebook dengan meluncurkan FanPage Generasi Baru Indonesia (GenBI) pada 17 Agustus 2011. Semangat pembentukan komunitas ini menyebar ke berbagai daerah, ditandai dengan pertemuan umum yang disertai forum belajar dalam bentuk dialog dan diskusi terbuka, membahas isu-isu terkini di bidang ekonomi makro dan mikro serta sosial-politik, dengan menghadirkan narasumber yang ahli di bidangnya. Komunitas ini berkembang di seluruh perguruan tinggi yang memiliki penerima beasiswa Bank Indonesia. GenBI menjadi wadah pengembangan kepemimpinan mahasiswa berbasis kampus, dikelola oleh mahasiswa penerima beasiswa tersebut, dengan tujuan mempercepat dan mengoptimalkan potensi generasi muda Indonesia yang unggul di berbagai bidang, serta diharapkan mampu melahirkan pemimpin masa depan yang memiliki wawasan luas dan kemampuan yang lebih baik.' }
  ]

  return (
    <>
      <Navbar bgColor="bg-white" />
      <div className="w-full h-96 bg-pr500 flex flex-col justify-center items-center">
        <h1 className="text-7xl font-semibold text-white mb-5">Tentang GenBI</h1>
        <p className="font-normal text-xl text-white w-2/3 text-center">Generasi Baru Indonesia atau yang biasa disebut GenBI adalah sebuah komunitas penerima beasiswa Bank Indonesia yang berperan aktif dalam pembangunan Indonesia sebagai generasi bangsa.
          GenBI terdiri dari mahasiswa berprestasi yang tersebar di berbagai perguruan tinggi negeri terpilih di seluruh provinsi Indonesia.</p>
      </div>

      <section id="history-section" className="mb-16">
        <h2 className="text-3xl font-semibold text-pr900 text-center my-10">Sejarah GenBI Jember</h2>
        <div className="flex max-w-7xl mx-auto">
          <div className="w-1/3">
            <img className="w-full h-auto" src="/images/about-1.png" alt="" />
          </div>
          <div className="w-2/3 flex flex-col justify-center items-center">
            <div className="ml-14 border-l-4 relative border-pr200">
              {genbiHistory.map((item, index) => (
                <div key={index} className="mb-12 ml-8 relative rounded-xl p-4 drop-shadow-2xl shadow-2">
                  <div className="absolute -left-12 top-5 w-6 h-6 bg-pr50 rounded-full border-4 border-pr500"></div>
                  <div className="text-sm text-gray-500">{item.date}</div>
                  <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="visi-section" className="mb-16 bg-pr50">
        <div className="max-w-7xl flex mx-auto py-14">
          <div className="w-2/3 flef flex-col items-end justify-end pr-50">
            <h2 className="text-3xl font-semibold text-pr900 text-center mb-10">Visi Misi GenBI</h2>
            <h6 className="text-xl text-pr900 font-semibold mb-6">Visi</h6>
            <p className="mb-8">Menjadikan kaum muda Indonesia sebagai generasi yang kompeten dalam berbagai bidang keilmuan
              serta dapat membawa perubahan positif dan menjadi inspirasi bagi bangsa dan negara.</p>
            <h6 className="text-xl text-pr900 font-semibold mb-6">Visi</h6>
            <ul>
              <li><span className="font-semibold">Initiate,</span> Menggagas berbagai kegiatan pemberdayaan masyarakat untuk Indonesia yang lebih baik</li>
              <li><span className="font-semibold">Act,</span> Menjadi garda terdepan dalam melakukan aksi nyata untuk pembangunan bangsa</li>
              <li><span className="font-semibold">Share,</span> Peduli dan berkontribusi untuk pemberdayaan masyarakat</li>
              <li><span className="font-semibold">Inspire,</span> Berbagi inspirasi dan motivasi untuk menjadi energi bagi negeri</li>
            </ul>
          </div>
          <div className="w-1/3">
            <img className="w-full h-auto" src="/images/about-1.png" alt="" />
          </div>
        </div>
      </section>

      <section id="goals-section" className="mb-16">
        <h2 className="text-3xl font-semibold text-pr900 text-center mb-10">Visi Misi GenBI</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-pr25 flex flex-col items-start justify-center p-6 rounded-3xl shadow-sm border border-pr50 shadow-gray-300">
              <div className="mb-3 h-12 w-12 bg-pr100"></div>
              <h6 className="font-semibold mb-3">Frontliners Bank Indonesia</h6>
              <p>Berperan dalam mengkomunikasikan kelembagaan dan berbagai kebijakan Bank Indonesia kepada sesama mahasiswa dan masyarakat umum,
                sekaligus menciptakan generasi muda yang tangguh dan siap menjadi ujung tombak perubahan,</p>
            </div>
            <div className="bg-pr25 flex flex-col items-start justify-center p-6 rounded-3xl shadow-sm border border-pr50 shadow-gray-300">
              <div className="mb-3 h-12 w-12 bg-pr100"></div>
              <h6 className="font-semibold mb-3">Frontliners Bank Indonesia</h6>
              <p>Berperan dalam mengkomunikasikan kelembagaan dan berbagai kebijakan Bank Indonesia kepada sesama mahasiswa dan masyarakat umum,
                sekaligus menciptakan generasi muda yang tangguh dan siap menjadi ujung tombak perubahan,</p>
            </div>
            <div className="bg-pr25 flex flex-col items-start justify-center p-6 rounded-3xl shadow-sm border border-pr50 shadow-gray-300">
              <div className="mb-3 h-12 w-12 bg-pr100"></div>
              <h6 className="font-semibold mb-3">Frontliners Bank Indonesia</h6>
              <p>Berperan dalam mengkomunikasikan kelembagaan dan berbagai kebijakan Bank Indonesia kepada sesama mahasiswa dan masyarakat umum,
                sekaligus menciptakan generasi muda yang tangguh dan siap menjadi ujung tombak perubahan,</p>
            </div>
          </div>
        </div>
      </section>

      <section id="awardee-section" className="mb-16 bg-pr900 py-16">
        <div className="text-white flex justify-center items-center max-w-6xl mx-auto">
          <div className="w-1/3 flex flex-col justify-center items-center mx-6">
            <img className="w-12 mb-2" src="/images/icon/school.png" alt="" />
            <h4 className="mb-4 text-6xl font-bold">3</h4>
            <h4 className="mb-4 text-3xl font-semibold">Komisariat</h4>
            <p className="text-center font-thin">GenBI Jember memiliki 3 komisariat dari Perguruan Tinggi Negeri yang ada di Jember</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center mx-6">
            <img className="w-12 mb-2" src="/images/icon/group.png" alt="" />
            <h4 className="mb-4 text-6xl font-bold">175</h4>
            <h4 className="mb-4 text-3xl font-semibold">Anggota</h4>
            <p className="text-center font-thin">GenBI Jember memiliki 175 anggota dari 3 Perguruan Tinggi Negeri yang ada di Jember</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center mx-6">
            <img className="w-12 mb-2" src="/images/icon/hub.png" alt="" />
            <h4 className="mb-4 text-6xl font-bold">20+</h4>
            <h4 className="mb-4 text-3xl font-semibold">Program Kerja</h4>
            <p className="text-center font-thin">GenBI Jember memiliki lebih dari 20 program kerja untuk internal maupun eksternal</p>
          </div>
        </div>
      </section>

      <section id="structur-section" className="pb-40">
        <div className="max-w-6xl mx-auto flex">
          <div className="w-1/2 flex flex-col justify-center items-start">
              <h2 className="text-pr900 text-5xl mb-8 font-semibold">Keanggotaan dan Susunan Kepengurusan GenBI Jember</h2>
              <p className="mb-8">GenBI Jember telah memiliki anggota aktif sebanyak 175 mahasiswa yang tersebar dari tiga Perguruan Tinggi besar di 
                Jember meliputi Universitas Jember, Politeknik Negeri Jember, dan UIN KHAS Jember.</p>
              <button className="p-4 bg-pr500 rounded-xl text-white hover:bg-pr200 font-semibold">
                  Selengkapnya
              </button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-full mx-5 h-80 bg-gray-200 rounded-2xl">

            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  );
};

export default AboutPage;
