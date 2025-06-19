import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Select from 'react-select';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import dataMap from '../data/dataMap';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

export default function StatistikDetail() {
  const { slug } = useParams();
  const chartConfig = dataMap[slug];

  const [selectedYear, setSelectedYear] = useState('2024');

  const colors = [
    '#3b82f6',
    '#10b981',
    '#f59e0b',
    '#ef4444',
    '#6366f1',
    '#ec4899',
    '#14b8a6',
    '#8b5cf6',
    '#f97316',
    '#1e8449',
  ];

  if (!chartConfig) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-red-600">
          Data statistik tidak ditemukan.
        </h1>
      </div>
    );
  }

  let barData;
  let tahunList = [];
  let total = 0;
  let kategoriTotals = [];

  if (chartConfig.dynamicByYear) {
    const dataByYear = chartConfig.data;
    tahunList = Object.keys(dataByYear).sort();

    const combinedData = {};
    if (selectedYear === 'all') {
      tahunList.forEach((tahun) => {
        const data = dataByYear[tahun];
        for (const [key, val] of Object.entries(data)) {
          combinedData[key] = (combinedData[key] || 0) + val;
        }
      });
    }

    const currentData =
      selectedYear === 'all' ? combinedData : dataByYear[selectedYear];

    total = Object.values(currentData).reduce((sum, val) => sum + val, 0);

    barData = {
      labels: Object.keys(currentData),
      datasets: [
        {
          label:
            selectedYear === 'all' ? 'Semua Tahun' : `Tahun ${selectedYear}`,
          data: Object.values(currentData),
          backgroundColor: colors.slice(0, Object.keys(currentData).length),
        },
      ],
    };
  } else {
    barData = chartConfig.data;

    kategoriTotals = chartConfig.data.datasets.map((dataset) => {
      const sum = dataset.data.reduce((acc, val) => acc + val, 0);
      return { label: dataset.label, total: sum };
    });

    total = kategoriTotals.reduce((sum, item) => sum + item.total, 0);
    barData.kategoriTotals = kategoriTotals;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
        {chartConfig.title}
      </h1>

      {chartConfig.dynamicByYear && (
        <div className="flex justify-end mb-6 items-center gap-3 sm:gap-4">
          <label className="text-sm sm:text-base">Pilih Tahun:</label>
          <Select
            className="w-32 text-sm sm:text-base"
            value={{
              value: selectedYear,
              label: selectedYear === 'all' ? 'Semua' : selectedYear,
            }}
            onChange={(selected) => setSelectedYear(selected.value)}
            options={[
              { value: 'all', label: 'Semua' },
              ...tahunList.map((year) => ({ value: year, label: year })),
            ]}
          />
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 overflow-x-auto">
        <div style={{ minWidth: '500px' }}>
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display:
                    chartConfig.dynamicByYear && barData.datasets.length > 1,
                  position: 'top',
                  labels: {
                    color: '#4b5563',
                    font: { size: 14 },
                    boxWidth: 20,
                  },
                },
                title: {
                  display: true,
                  text: `${chartConfig.title.replace(
                    'Statistik ',
                    'Jumlah '
                  )} ${
                    chartConfig.dynamicByYear
                      ? selectedYear === 'all'
                        ? '(Semua Tahun)'
                        : `(Tahun ${selectedYear})`
                      : ''
                  }`,
                  font: { size: 20 },
                  color: '#374151',
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: '#4b5563',
                    font: { size: 12 },
                    maxRotation: 45,
                    minRotation: 30,
                  },
                },
                y: {
                  beginAtZero: true,
                  grace: '50%',
                  ticks: {
                    color: '#4b5563',
                    font: { size: 12 },
                  },
                },
              },
            }}
            height={540}
          />
        </div>

        {/* Total dan Manual Legend */}
        {chartConfig.dynamicByYear ? (
          <p className="mt-4 ml-5 text-left text-xl text-gray-700">
            Total:{' '}
            <span className="font-semibold">{total.toLocaleString()}</span>{' '}
            orang
          </p>
        ) : (
          <div className="mt-6 text-sm text-gray-700 space-y-3">
            {/* Manual Legend */}
            <div className="flex flex-wrap gap-6 items-center mb-3">
              {barData.datasets.map((ds, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span
                    className="inline-block w-4 h-4 rounded-sm"
                    style={{ backgroundColor: ds.backgroundColor }}
                  ></span>
                  <span className="font-medium">{ds.label}</span>
                </div>
              ))}
            </div>

            {/* Total per kategori */}
            <div className="border-t pt-3">
              {barData.kategoriTotals?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b py-1 px-1 sm:px-2"
                >
                  <span>
                    Total <span className="font-medium">{item.label}</span>
                  </span>
                  <span className="font-semibold">
                    {item.total.toLocaleString()} orang
                  </span>
                </div>
              ))}

              {/* Grand Total */}
              <div className="flex justify-between mt-3 font-bold text-gray-800 px-1 sm:px-2">
                <span>Total Keseluruhan</span>
                <span>{total.toLocaleString()} orang</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
