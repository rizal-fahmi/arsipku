import { Link } from 'react-router-dom';

export default function Statistik() {
  const statistikList = [
    {
      judul: 'Peserta Pelatihan per Tahun',
      path: '/statistik/peserta',
    },
    {
      judul: 'Kejuruan Terpopuler',
      path: '/statistik/populer',
    },
    {
      judul: 'Kelulusan & Penempatan Kerja',
      path: '/statistik/penempatan',
    },
    {
      judul: 'Jenis Pelatihan',
      path: '/statistik/jenis-pelatihan',
    },
    {
      judul: 'Berdasarkan Jenis Kelamin',
      path: '/statistik/gender',
    },
    {
      judul: 'Berdasarkan Usia',
      path: '/statistik/usia',
    },
    {
      judul: 'Berdasarkan Pendidikan',
      path: '/statistik/pendidikan',
    },
    {
      judul: 'Penyandang Disabilitas',
      path: '/statistik/disabilitas',
    },
    {
      judul: 'Peserta Berdasarkan Wilayah',
      path: '/statistik/wilayah',
    },
    {
      judul: 'Alumni Wirausaha',
      path: '/statistik/wirausaha',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Data Statistik
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-white text-left text-md">
              <th className="px-6 py-3 w-3/4">Judul</th>
              <th className="px-6 py-3">Detail</th>
            </tr>
          </thead>
          <tbody>
            {statistikList.map((stat, index) => (
              <tr
                key={index}
                className="border-t hover:bg-blue-50 transition-colors"
              >
                <td className="px-6 py-4">{stat.judul}</td>
                <td className="px-6 py-4">
                  <Link
                    to={stat.path}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Lihat Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
