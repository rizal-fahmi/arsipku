const workshops = [
  {
    nama: 'Teknik Manufaktur',
    gambar: '/img/manufaktur.jpg',
    slug: 'teknik-manufaktur',
    warna: 'bg-indigo-600',
    deskripsi:
      'Pelatihan ini membekali peserta dengan keterampilan teknis di bidang manufaktur dan pengoperasian mesin industri.',
    kejuruan: [
      {
        nama: 'Penggambaran Model 3D dengan CAD',
        deskripsi:
          'Mengajarkan pembuatan desain model 3D menggunakan perangkat lunak CAD untuk kebutuhan manufaktur.',
      },
      {
        nama: 'Operator Mesin Bubut',
        deskripsi:
          'Melatih keterampilan dalam mengoperasikan mesin bubut untuk produksi komponen teknik.',
      },
    ],
  },
  {
    nama: 'Fashion Technology',
    gambar: '/img/fashion.jpg',
    slug: 'fashion-technology',
    warna: 'bg-pink-500',
    deskripsi:
      'Pelatihan ini fokus pada desain busana dan keterampilan menjahit baik secara manual maupun dengan teknologi.',
    kejuruan: [
      {
        nama: 'Desain Busana Kreasi',
        deskripsi:
          'Mempelajari proses perancangan busana dari konsep hingga pola siap jahit.',
      },
      {
        nama: 'Hiasan Busana Bordir Komputer',
        deskripsi:
          'Pelatihan bordir menggunakan mesin bordir komputer untuk menghasilkan karya berkualitas tinggi.',
      },
      {
        nama: 'Pembuatan Bed Cover',
        deskripsi:
          'Melatih keterampilan menjahit produk rumah tangga seperti bed cover dengan teknik profesional.',
      },
      {
        nama: 'Hiasan Busana Bordir Manual',
        deskripsi:
          'Mengembangkan kemampuan menghias busana dengan bordir tangan yang artistik dan presisi.',
      },
      {
        nama: 'Penjahitan Pakaian dengan Mesin',
        deskripsi:
          'Pelatihan menjahit pakaian menggunakan mesin jahit industri dengan teknik dasar dan lanjutan.',
      },
    ],
  },
  {
    nama: 'Las | Welder',
    gambar: '/img/las.jpg',
    slug: 'las-welder',
    warna: 'bg-red-600',
    deskripsi:
      'Pelatihan ini mengembangkan keterampilan pengelasan berbagai posisi dan teknik fabrikasi logam.',
    kejuruan: [
      {
        nama: 'Juru Las SMAW 6G',
        deskripsi:
          'Mengajarkan teknik pengelasan dengan posisi tersulit (6G) untuk kebutuhan industri berat.',
      },
      {
        nama: 'Juru Las SMAW 3G',
        deskripsi:
          'Pelatihan pengelasan dengan posisi vertikal (3G) untuk penguatan struktur logam.',
      },
      {
        nama: 'Juru Las SMAW 2G',
        deskripsi:
          'Fokus pada teknik las posisi horizontal (2G) yang umum dalam konstruksi ringan.',
      },
      {
        nama: 'Fabrikasi',
        deskripsi:
          'Mengembangkan kemampuan dalam proses pembuatan struktur logam dari bahan mentah hingga produk akhir.',
      },
    ],
  },
  {
    nama: 'Teknologi Informasi dan Komunikasi (TIK)',
    gambar: '/img/tik.jpg',
    slug: 'tik',
    warna: 'bg-blue-600',
    deskripsi:
      'Pelatihan ini bertujuan untuk meningkatkan keterampilan peserta dalam teknologi digital dan komunikasi.',
    kejuruan: [
      {
        nama: 'Pemasangan Jaringan Komputer',
        deskripsi:
          'Mengajarkan instalasi, konfigurasi, dan pemeliharaan jaringan komputer skala kecil hingga menengah.',
      },
      {
        nama: 'Practical Office',
        deskripsi:
          'Pelatihan keterampilan dasar aplikasi perkantoran seperti pengolahan kata, spreadsheet, dan presentasi.',
      },
      {
        nama: 'Web Programmer',
        deskripsi:
          'Mengembangkan kemampuan membangun situs web dinamis menggunakan HTML, CSS, JavaScript, dan bahasa backend.',
      },
      {
        nama: 'Pelatihan Multimedia',
        deskripsi:
          'Melatih peserta membuat konten multimedia seperti video, animasi, dan desain interaktif.',
      },
      {
        nama: 'Pembuatan Desain Grafis',
        deskripsi:
          'Mengajarkan penggunaan software desain grafis untuk menciptakan visual branding dan media promosi.',
      },
    ],
  },
  {
    nama: 'Otomotif',
    gambar: '/img/otomotif.jpg',
    slug: 'otomotif',
    warna: 'bg-green-600',
    deskripsi:
      'Pelatihan ini memberikan keterampilan dalam pemeliharaan dan perbaikan kendaraan bermotor.',
    kejuruan: [
      {
        nama: 'Service Sepeda Motor Konvensional',
        deskripsi:
          'Pelatihan perawatan dan perbaikan sepeda motor sistem konvensional.',
      },
      {
        nama: 'Pemeliharaan Kendaraan Ringan Sistem Injeksi',
        deskripsi:
          'Mengajarkan teknik perawatan kendaraan dengan sistem bahan bakar injeksi modern.',
      },
      {
        nama: 'Service Sepeda Motor Injeksi',
        deskripsi:
          'Fokus pada diagnosa dan perbaikan sepeda motor dengan teknologi injeksi.',
      },
    ],
  },
  {
    nama: 'Bisnis & Manajemen',
    gambar: '/img/manajemen.jpg',
    slug: 'bisnis-manajemen',
    warna: 'bg-yellow-500',
    deskripsi:
      'Pelatihan ini bertujuan untuk membekali peserta dengan keterampilan sesuai kebutuhan industri.',
    kejuruan: [
      {
        nama: 'Administrasi Perkantoran',
        deskripsi:
          'Pelatihan ini membekali peserta dengan keterampilan administrasi, dokumentasi, dan pengelolaan kantor modern.',
      },
      {
        nama: 'Junior Administrative Assistant',
        deskripsi:
          'Fokus pada tugas-tugas administrasi tingkat dasar seperti pengarsipan, penjadwalan, dan pengelolaan data.',
      },
      {
        nama: 'Pelayanan Pelanggan',
        deskripsi:
          'Melatih peserta dalam keterampilan komunikasi dan teknik pelayanan untuk menghadapi pelanggan secara profesional.',
      },
    ],
  },
  {
    nama: 'Listrik',
    gambar: '/img/listrik.jpg',
    slug: 'listrik',
    warna: 'bg-orange-500',
    deskripsi:
      'Pelatihan ini memberikan keterampilan instalasi dan pengendalian sistem kelistrikan rumah dan industri.',
    kejuruan: [
      {
        nama: 'Kontrol Sistem Kelistrikan dan Pneumatik Berbasis PLC',
        deskripsi:
          'Pelatihan penggunaan Programmable Logic Controller (PLC) untuk mengontrol sistem listrik dan pneumatik.',
      },
      {
        nama: 'Instalasi Listrik Bangunan Sederhana',
        deskripsi:
          'Melatih peserta untuk melakukan instalasi listrik rumah tinggal atau bangunan sederhana dengan aman dan efisien.',
      },
    ],
  },
  {
    nama: 'Elektronika',
    gambar: '/img/elektronika.jpg',
    slug: 'elektronika',
    warna: 'bg-purple-600',
    deskripsi:
      'Pelatihan ini fokus pada keterampilan dasar dan lanjutan dalam bidang peralatan elektronik.',
    kejuruan: [
      {
        nama: 'Teknisi Telepon Seluler',
        deskripsi:
          'Melatih peserta dalam perbaikan dan perawatan perangkat telepon seluler secara profesional.',
      },
    ],
  },
  {
    nama: 'Refrigerasi',
    gambar: '/img/refrigerasi.jpg',
    slug: 'refrigerasi',
    warna: 'bg-cyan-600',
    deskripsi:
      'Pelatihan ini membekali peserta dengan keterampilan dalam sistem pendingin dan perawatan AC.',
    kejuruan: [
      {
        nama: 'Teknisi AC Residensial',
        deskripsi:
          'Fokus pada pemasangan, pemeliharaan, dan perbaikan AC rumah tangga.',
      },
      {
        nama: 'Teknisi Refrigerasi Domestik',
        deskripsi:
          'Pelatihan penguasaan sistem pendingin seperti kulkas dan freezer untuk kebutuhan rumah tangga.',
      },
    ],
  },
  {
    nama: 'Bangunan',
    gambar: '/img/bangunan.jpg',
    slug: 'bangunan',
    warna: 'bg-stone-600',
    deskripsi:
      'Pelatihan ini mengajarkan keterampilan konstruksi bangunan dan penggunaan perangkat lunak desain teknik.',
    kejuruan: [
      {
        nama: 'Juru Ukur (Surveyor)',
        deskripsi:
          'Pelatihan keterampilan pengukuran lahan, perhitungan volume, dan pembuatan peta konstruksi.',
      },
      {
        nama: 'Cost Estimator',
        deskripsi:
          'Mengajarkan cara menyusun estimasi biaya proyek konstruksi secara akurat dan efisien.',
      },
      {
        nama: 'Penggambaran Model 2D dengan CAD',
        deskripsi:
          'Membekali peserta dengan kemampuan membuat gambar teknik 2D menggunakan perangkat lunak CAD.',
      },
    ],
  },
  {
    nama: 'Pariwisata',
    gambar: '/img/pariwisata.jpg',
    slug: 'pariwisata',
    warna: 'bg-rose-500',
    deskripsi:
      'Pelatihan ini membekali peserta dengan keterampilan dasar di bidang pelayanan dan hospitality.',
    kejuruan: [
      {
        nama: 'Barista',
        deskripsi:
          'Mengajarkan teknik pembuatan kopi dan keterampilan barista profesional untuk industri kafe.',
      },
    ],
  },
  {
    nama: 'Processing',
    gambar: '/img/processing.jpg',
    slug: 'processing',
    warna: 'bg-teal-500',
    deskripsi:
      'Pelatihan ini fokus pada teknik pengolahan makanan khususnya pembuatan roti dan kue.',
    kejuruan: [
      {
        nama: 'Pembuatan Roti dan Kue',
        deskripsi:
          'Pelatihan teknik dasar dan lanjutan dalam membuat aneka roti dan kue dengan standar industri.',
      },
    ],
  },
];

export default workshops;
