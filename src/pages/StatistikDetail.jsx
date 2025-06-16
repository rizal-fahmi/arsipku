import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
} from 'chart.js';

import pesertaPerWorkshop from '../data/peserta';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

export default function StatistikDetail() {
  const { slug } = useParams();
  const [selectedYear, setSelectedYear] = useState('2024');

  if (slug !== 'peserta') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-red-600">
          Data statistik tidak ditemukan.
        </h1>
      </div>
    );
  }

  const tahunList = Object.keys(pesertaPerWorkshop).sort();

  // Gabungkan semua data jika "Semua Tahun" dipilih
  const combinedData = {};
  if (selectedYear === 'all') {
    tahunList.forEach((tahun) => {
      const data = pesertaPerWorkshop[tahun];
      for (const [workshop, jumlah] of Object.entries(data)) {
        combinedData[workshop] = (combinedData[workshop] || 0) + jumlah;
      }
    });
  }

  const currentData =
    selectedYear === 'all' ? combinedData : pesertaPerWorkshop[selectedYear];

  const colors = [
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#ef4444',
    '#8b5cf6',
    '#6366f1',
    '#ec4899',
    '#14b8a6',
    '#f97316',
    '#1e8449',
    '#f4d03f',
    '#34495e',
  ];

  const barData = {
    labels: Object.keys(currentData),
    datasets: [
      {
        data: Object.values(currentData),
        backgroundColor: colors.slice(0, Object.keys(currentData).length),
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        Statistik Peserta per Workshop
      </h1>

      <div className="flex justify-end mb-6">
				<label className="mr-3 mt-1.5 text-sm sm:text-base">Pilih Tahun:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-gray-400 rounded px-3 py-2 text-sm sm:text-base"
        >
          <option value="all">Semua</option>
          {tahunList.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
        <div style={{ minWidth: '500px' }}>
          {(() => {
            const isMobile = window.innerWidth < 640;
            const fontSize = isMobile ? 10 : 13;
            const fontColor = '#566573';
            const titleSize = isMobile ? 16 : 20;

            return (
              <Bar
                data={barData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: false },
                    title: {
                      display: true,
                      text: `Jumlah Peserta per Workshop ${
                        selectedYear === 'all'
                          ? '(Semua Tahun)'
                          : `Tahun ${selectedYear}`
                      }`,
                      font: { size: titleSize },
                      color: fontColor,
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        color: fontColor,
                        font: { size: fontSize },
                        maxRotation: 45,
                        minRotation: 30,
                      },
                    },
                    y: {
                      beginAtZero: true,
                      grace: '50%',
                      ticks: {
                        color: fontColor,
                        font: { size: fontSize },
                      },
                    },
                  },
                }}
                height={540}
              />
            );
          })()}
        </div>
      </div>
    </div>
  );
}
