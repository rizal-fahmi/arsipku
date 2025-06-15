import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

import pesertaPerWorkshop from '../data/peserta';
import gender from '../data/gender';
import usia from '../data/usia';
import penempatan from '../data/penempatan';
import populer from '../data/populer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

export default function StatistikDetail() {
  const { slug } = useParams();
  const [selectedYear, setSelectedYear] = useState('2024');

  // KHUSUS: peserta per workshop (format object key-value biasa)
  if (slug === 'peserta') {
    const tahunList = Object.keys(pesertaPerWorkshop).sort();
    const currentData = pesertaPerWorkshop[selectedYear];

    const barData = {
      labels: Object.keys(currentData),
      datasets: [
        {
          label: `Jumlah Peserta (${selectedYear})`,
          data: Object.values(currentData),
          backgroundColor: '#3b82f6',
        },
      ],
    };

    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Statistik Peserta per Workshop
        </h1>

        <div className="flex justify-end mb-4">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            {tahunList.map((year) => (
              <option key={year} value={year}>
                Tahun {year}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <Bar
            data={barData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: {
                  display: true,
                  text: `Jumlah Peserta per Workshop Tahun ${selectedYear}`,
                },
              },
            }}
          />
        </div>
      </div>
    );
  }

  // GENERAL: untuk semua chart data tahunan (gender, usia, penempatan, populer)
  const dataMap = {
    gender: {
      title: 'Statistik Berdasarkan Jenis Kelamin',
      data: gender,
      type: 'bar',
    },
    usia: {
      title: 'Statistik Berdasarkan Usia',
      data: usia,
      type: 'bar',
    },
    penempatan: {
      title: 'Statistik Kelulusan & Penempatan Kerja',
      data: penempatan,
      type: 'bar', // ✅ Diperbaiki
    },
    populer: {
      title: 'Statistik Kejuruan Terpopuler',
      data: populer,
      type: 'bar',
    },
  };

  const chart = dataMap[slug];
  if (!chart) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold text-red-600">
          Data statistik tidak ditemukan.
        </h1>
      </div>
    );
  }

  const tahunList = Object.keys(chart.data).sort();
  const chartData = chart.data[selectedYear];
  const ChartComponent = chart.type === 'pie' ? Pie : Bar;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        {chart.title}
      </h1>

      <div className="flex justify-end mb-4">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          {tahunList.map((year) => (
            <option key={year} value={year}>
              Tahun {year}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <ChartComponent
          data={chartData.data}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: {
                display: true,
                text: chartData.title || `${chart.title} Tahun ${selectedYear}`,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
