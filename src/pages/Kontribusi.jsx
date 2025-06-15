import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Kontribusi() {
  const kontribusi = [
    'Mengadakan pelatihan gratis bagi masyarakat prasejahtera, pelajar, dan penyandang disabilitas.',
    'Program CSR untuk pelatihan UMKM lokal dalam keuangan dan pemasaran online.',
    'Beberapa alumni berhasil membuka usaha sendiri dan bekerja di perusahaan ternama.',
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Kontribusi
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
        {kontribusi.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <CheckCircleIcon className="w-6 h-6 text-blue-500 mt-1" />
            <p className="text-gray-700 text-lg">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
