import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Kontribusi() {
  const kontribusi = [
    'Mengadakan pelatihan gratis bagi masyarakat prasejahtera, pelajar, dan penyandang disabilitas.',
    'Program CSR untuk pelatihan UMKM lokal dalam keuangan dan pemasaran online.',
    'Beberapa alumni berhasil membuka usaha sendiri dan bekerja di perusahaan ternama.',
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        Kontribusi
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-5 sm:p-8 space-y-5 sm:space-y-6">
        {kontribusi.map((item, i) => (
          <div key={i} className="flex items-start gap-3 sm:gap-4">
            <CheckCircleIcon className="w-8 h-8 sm:w-6 sm:h-6 text-blue-500 mt-1" />
            <p className="text-gray-700 text-base sm:text-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
