import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { name: 'Sejarah', path: '/sejarah' },
  { name: 'Pimpinan', path: '/pimpinan' },
  { name: 'Workshop', path: '/workshop' },
  { name: 'Kontribusi', path: '/kontribusi' },
  { name: 'Statistik', path: '/statistik' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo = Link ke Home */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-gray-600 hover:text-blue-700 transition duration-200"
        >
          ArsipKu
        </NavLink>

        {/* Hamburger icon (mobile) */}
        <button
          className="sm:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu (desktop) */}
        <div className="hidden sm:flex space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-200 px-2 py-1 pb-1 font-medium ${
                  isActive
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Menu (mobile) */}
      {isOpen && (
        <div className="sm:hidden bg-white px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block transition-colors duration-200 font-medium pb-1 ${
                  isActive
                    ? 'text-blue-600 underline'
                    : 'text-gray-700 hover:text-blue-600 hover:underline'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
