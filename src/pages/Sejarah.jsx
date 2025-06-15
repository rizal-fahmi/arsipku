// src/pages/Sejarah.jsx
export default function Sejarah() {
  const sejarah = [
    {
      tahun: '1978',
      judul: 'Didirikan',
      deskripsi:
        'Atas bantuan Bank Dunia (IBRD) melalui Kementerian Tenaga Kerja dan Transmigrasi R.I., pembangunan BLK dilakukan di 7 kota: Banda Aceh, Jambi, Padang, Semarang, Surabaya, Pontianak, dan Denpasar Bali.',
    },
    {
      tahun: '1985',
      judul: 'Diresmikan',
      deskripsi:
        'BLKI Banda Aceh diresmikan pada tanggal 04 Januari 1985 oleh Menteri Tenaga Kerja dan Transmigrasi R.I., Bapak Sudomo.',
    },
    {
      tahun: '2004',
      judul: 'Perubahan Status UPTP ke UPTD',
      deskripsi:
        'Melalui surat Menteri Tenaga Kerja dan Transmigrasi R.I. Nomor: 120/2490/SJ/2004, tanggal 16 September 2004, BLK Banda Aceh berubah status menjadi UPTD daerah sesuai amanat UU No. 22 Tahun 1999 tentang Pemerintah Daerah.',
    },
    {
      tahun: '2006',
      judul: 'Dikembalikan ke Pusat',
      deskripsi:
        'Karena tidak berjalannya fungsi BLK di daerah secara optimal, pada tahun 2006 Balai Latihan dan Pengembangan Produktivitas Tenaga Kerja (BLP2TK) dikembalikan ke pusat dan kembali menjadi UPTP dengan nama BLKI Banda Aceh.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Sejarah BLK Banda Aceh
      </h1>

      <div className="relative border-l-4 border-blue-500 pl-10">
        {sejarah.map((item, index) => (
          <div key={index} className="mb-12 relative">
            {/* Bulatan tahun */}
            <div className="absolute left-[-2.25rem] top-0 w-12 h-12 bg-blue-600 rounded-full border-2 border-white text-white flex items-center justify-center text-sm font-semibold shadow-lg">
              {item.tahun}
            </div>

            {/* Konten */}
            <div className="ml-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-1">
                {item.judul}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
