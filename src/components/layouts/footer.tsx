import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="relative">
      {/* CTA Section */}
      <section
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pr800 py-14 text-white p-10 w-4/5 rounded-2xl shadow-lg"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-4/5">
              <h2 className="text-2xl font-bold mb-2">Siap Jadi Bagian dari GenBI Jember?</h2>
              <p>
                Jangan lewatkan kesempatan untuk bergabung mahasiswa inspiratif dan dapatkan beasiswa Bank Indonesia! Mulai perjalananmu bersama GenBI Jember!
              </p>
            </div>
            <div className="w-1/5 flex justify-end">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">
                Hubungi kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pr900 text-gray-400 p-8 pt-48 pb-48 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="mr-20">
              <h3 className="font-bold mb-4">GenBI</h3>
              <p className="text-gray-400">
                GenBI adalah sebuah komunitas penerima beasiswa Bank Indonesia yang telah berdiri sejak tanggal 11 November 2011 dan tersebar di setiap perguruan tinggi negeri terpilih pada tiap provinsi di Indonesia.
              </p>
            </div>

            {/* Footer Links */}
            <div>
              <h3 className="font-bold mb-4">BERANDA</h3>
              <ul className="space-y-2">
                <li>Tentang Beasiswa</li>
                <li>Naungan Universitas</li>
                <li>Testimoni</li>
                <li>Benefit Beasiswa</li>
                <li>Program Kerja</li>
                <li>Artikel</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">BEASISWA</h3>
              <ul className="space-y-2">
                <li>Persyaratan Beasiswa</li>
                <li>Jurusan & Universitas</li>
                <li>Berkas dan Persyaratan</li>
                <li>Ketentuan Video</li>
                <li>Format Pengumuman</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">ARTIKEL</h3>
              <ul className="space-y-2">
                <li>Informasi</li>
                <li>Berita</li>
                <li>Edukasi</li>
                <li>Tips & Tricks</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
            <p className="text-gray-400">© 2024 GenBI Jember. Supported by Kantor Perwakilan Bank Indonesia Jember</p>
            <div className="flex space-x-4">
              {/* <Instagram className="w-6 h-6" />
              <Facebook className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Linkedin className="w-6 h-6" />
              <Youtube className="w-6 h-6" /> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
