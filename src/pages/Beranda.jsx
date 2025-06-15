import { NavLink } from 'react-router-dom';

export default function Beranda() {
  return (
    <div className="relative">
      {/* Gambar hero */}
      <div className="relative h-[90vh] bg-cover bg-center">
        <div className="absolute inset-0 bg-opacity-60 h-full"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Selamat Datang di Pameran Arsip Virtual
          </h1>
          <p className="max-w-2xl mb-6 text-lg text-gray-600">
            Telusuri sejarah, kontribusi, dan warisan dokumentasi kantor kami
            secara digital. Platform ini menyajikan arsip penting yang
            mendokumentasikan perjalanan lembaga, pimpinan, program kejuruan,
            dan sumbangsih terhadap masyarakat.
          </p>
          <blockquote className="italic text-gray-800 mb-8">
            "Menjaga memori institusi adalah merawat akar masa depan."
          </blockquote>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink
              to="/sejarah"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Lihat Sejarah
            </NavLink>
            <NavLink
              to="/pimpinan"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
            >
              Profil Pimpinan
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
