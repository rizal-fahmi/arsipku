// src/components/Footer.jsx
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Info Kontak */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Kontak Kami</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" />
              <a
                href="mailto:blkbandaaceh@kemnaker.go.id"
                className="hover:underline"
              >
                blkbandaaceh@kemnaker.go.id
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-blue-500" />
              <span>0651‑45298</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/6281390682590"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                0813‑9068‑2590
              </a>
            </li>
          </ul>
        </div>

        {/* Alamat */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Alamat</h3>
          <p>Balai Pelatihan Vokasi dan Produktivitas Banda Aceh</p>
          <p>Jl. Kesatria, Banda Aceh, Aceh, Indonesia</p>
        </div>

        {/* Tautan Cepat */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Tautan</h3>
          <ul className="space-y-2">
            <li>
              <a href="/sejarah" className="hover:underline">
                Sejarah
              </a>
            </li>
            <li>
              <a href="/workshop" className="hover:underline">
                Workshop
              </a>
            </li>
            <li>
              <a href="/kontribusi" className="hover:underline">
                Kontribusi
              </a>
            </li>
            <li>
              <a href="/kontak" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">
            Sosial Media
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/blkbandaceh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
            </a>
            <a
              href="https://facebook.com/bpvp.bandaaceh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://twitter.com/bpvpbandaaceh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://www.tiktok.com/@bpvpbandaaceh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok className="w-6 h-6 hover:text-black transition-colors" />
            </a>
            <a
              href="https://www.youtube.com/@bpvpbandaaceh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="w-6 h-6 hover:text-red-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Balai Pelatihan Vokasi dan Produktivitas
        Banda Aceh. All rights reserved.
      </div>
    </footer>
  );
}
