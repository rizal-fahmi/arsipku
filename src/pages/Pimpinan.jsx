import { useState } from 'react';

const dataPimpinan = [
  {
    nama: 'Drs. Ahmad Santoso',
    periode: '1978–1985',
    foto: 'https://picsum.photos/200',
    bio: 'Pimpinan pertama yang mendirikan BLK Banda Aceh dan memimpin masa awal pembangunan.',
  },
  {
    nama: 'Ir. Rina Kartika',
    periode: '1985–1990',
    foto: 'https://picsum.photos/200',
    bio: 'Membawa transformasi awal pada sistem pelatihan dan memperluas program kejuruan.',
  },
  {
    nama: 'Budi Prasetya, M.T.',
    periode: '1990–1995',
    foto: 'https://picsum.photos/200',
    bio: 'Mengembangkan kemitraan industri dan menerapkan sistem pelatihan berbasis kompetensi.',
  },
  {
    nama: 'Dewi Ramadhani, S.Sos',
    periode: '1995–2000',
    foto: 'https://picsum.photos/200',
    bio: 'Fokus pada pemberdayaan perempuan dan pelatihan kewirausahaan.',
  },
  {
    nama: 'Dr. Zainal Abidin',
    periode: '2000–2005',
    foto: 'https://picsum.photos/200',
    bio: 'Memodernisasi fasilitas dan memperkenalkan teknologi digital.',
  },
  {
    nama: 'Ir. Sari Meutia',
    periode: '2005–2010',
    foto: 'https://picsum.photos/200',
    bio: 'Menekankan pentingnya pelatihan ramah lingkungan dan efisiensi energi.',
  },
  {
    nama: 'H. M. Yusuf, M.Si.',
    periode: '2010–2012',
    foto: 'https://picsum.photos/200',
    bio: 'Meningkatkan kerjasama regional dengan BLK lain di Sumatera.',
  },
  {
    nama: 'Faridah Lestari, ST',
    periode: '2012–2015',
    foto: 'https://picsum.photos/200',
    bio: 'Membuka pelatihan khusus industri kreatif dan digital marketing.',
  },
  {
    nama: 'Fauzan Hakim, S.Kom',
    periode: '2015–2020',
    foto: 'https://picsum.photos/200',
    bio: 'Digitalisasi seluruh arsip pelatihan dan sistem informasi peserta.',
  },
  {
    nama: 'Nadia Zahra, M.Pd',
    periode: '2020–sekarang',
    foto: 'https://picsum.photos/200',
    bio: 'Mengembangkan program pelatihan hybrid dan memperkuat branding nasional.',
  },
];

export default function Pimpinan() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Pimpinan dari Masa ke Masa
      </h1>

      {/* Timeline garis tengah */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full border-l-4 border-blue-500 transform -translate-x-1/2 z-0"></div>

        <div className="space-y-8 relative z-10">
          {dataPimpinan.map((p, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2"></div>
                <div
                  className={`relative w-full md:w-1/2 p-4`}
                  onClick={() => setSelected(p)}
                >
                  <div
                    className={`bg-white border-2 border-blue-500 shadow-lg rounded-lg px-6 py-6 cursor-pointer transition hover:shadow-xl w-full mx-auto md:max-w-md`}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={p.foto}
                        alt={p.nama}
                        className="w-24 h-24 rounded-full object-cover text-sm border-blue-500 border-2"
                      />
                      <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                          {p.nama}
                        </h2>
                        <p className="text-gray-600 text-md">{p.periode}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center px-4"
          onClick={() => setSelected(null)} // klik di luar modal untuk menutup
        >
          <div
            className="bg-white rounded-lg p-10 max-w-3xl w-full shadow-xl relative"
            onClick={(e) => e.stopPropagation()} // cegah modal tertutup saat klik di dalam
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ✖
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selected.foto}
                alt={selected.nama}
                className="w-60 h-60 object-cover rounded-lg border-2 border-blue-500 shadow mb-6"
              />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {selected.nama}
              </h2>
              <p className="text-gray-600 text-lg mb-4">{selected.periode}</p>
              <p className="text-gray-700 text-base leading-relaxed text-center max-w-2xl">
                {selected.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
