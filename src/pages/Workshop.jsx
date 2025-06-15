import { Link } from 'react-router-dom';
import workshops from '../data/workshops';

export default function Workshop() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Sejarah BLK Banda Aceh
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshops.map((item, idx) => (
          <Link to={`/workshop/${item.slug}`} key={idx} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 h-full">
              <img
                // src={item.gambar}
                src={'https://picsum.photos/seed/picsum/200/300'}
                // alt={item.nama}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold hover:text-blue-700 mb-2">
                  {item.nama}
                </h2>
                {/* <ul className="text-gray-600 text-sm space-y-1">
                  {item.kejuruan.map((k, i) => (
                    <li key={i}>• {k}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
