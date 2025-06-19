import peserta from './peserta';
import gender from './gender';
import penempatan from './penempatan';
import populer from './populer';
import usia from './usia';

const dataMap = {
  peserta: {
    title: 'Statistik Peserta per Workshop',
    data: peserta, // object per tahun
    dynamicByYear: true,
  },
  gender: {
    title: 'Statistik Berdasarkan Jenis Kelamin',
    data: gender, // langsung chart.js format
    dynamicByYear: false,
  },
  penempatan: {
    title: 'Statistik Kelulusan & Penempatan Kerja Tahun 2020-2024',
    data: penempatan,
    dynamicByYear: false,
  },
  populer: {
    title: 'Statistik Kejuruan Terpopuler',
    data: populer,
    dynamicByYear: true,
  },
  usia: {
    title: 'Statistik Berdasarkan Usia',
    data: usia,
    dynamicByYear: true,
  },
};

export default dataMap;
