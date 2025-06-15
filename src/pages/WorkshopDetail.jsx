// src/pages/WorkshopDetail.jsx
import { useParams } from 'react-router-dom';
import workshops from '../data/workshops';

export default function WorkshopDetail() {
  const { slug } = useParams();

  const workshop = workshops.find((w) => w.slug === slug);

  if (!workshop) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-600">
          Workshop tidak ditemukan
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* <div className="mb-6">
        <img
          src={workshop.gambar}
          alt={workshop.nama}
          className="w-full h-64 object-cover rounded-md shadow"
        />
      </div> */}
      <div
        className={`mb-6 w-full h-64 rounded-md shadow ${workshop.warna} flex items-center justify-center`}
      >
        <span className="text-white text-3xl font-bold">{workshop.nama}</span>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-gray-800">{workshop.nama}</h1>

      <p className="text-gray-600 mb-6">
        {workshop.deskripsi ||
          'Pelatihan ini bertujuan untuk membekali peserta dengan keterampilan sesuai kebutuhan industri.'}
      </p>

      <h2 className="text-2xl font-bold mb-5 text-blue-800 border-b pb-2 border-blue-300">
        Program Kejuruan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {workshop.kejuruan.map((kejuruan, i) => (
          <div
            key={i}
            className="bg-white border-l-4 border-blue-600 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 pt-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.656 0 3-1.343 3-3S13.656 2 12 2 9 3.343 9 5s1.344 3 3 3zm0 2c-2.667 0-8 1.333-8 4v3h16v-3c0-2.667-5.333-4-8-4z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {kejuruan.nama}
                </h3>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                  {kejuruan.deskripsi}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
