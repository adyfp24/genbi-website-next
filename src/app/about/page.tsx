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

      <section id="history-section">
        <h2 className="text-3xl font-semibold text-pr900 text-center my-10">Sejarah GenBI Jember</h2>
        <div className="flex max-w-7xl mx-auto">
          <div className="w-1/3">
            <img src="/images/about-1.png" alt="" />
          </div>
          <div className="w-2/3 flex flex-col justify-center items-center">
            <div className="ml-14 border-l-4 relative border-pr200">
              {genbiHistory.map((item, index) => (
                <div key={index} className="mb-12 ml-8 relative">
                  <div className="absolute -left-12 top-5 w-6 h-6 bg-pr50 outline-2 outline-pr500 rounded-full border border-white"></div>
                  <div className="text-sm text-gray-500">{item.date}</div>
                  <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
