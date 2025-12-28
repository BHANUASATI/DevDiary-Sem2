import { useEffect, useState } from "react";
import {
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/HouseCrewLogo.png";

const searchTexts = [
  "Search for facial services",
  "Search for home cleaning",
  "Search for electricians",
  "Search for workers",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  
  useEffect(() => {
    const typing = setInterval(() => {
      setPlaceholder(searchTexts[textIndex].slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex === searchTexts[textIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % searchTexts.length);
        }, 1200);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [charIndex, textIndex]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-md font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="font-extrabold text-xl tracking-wide text-gray-800">
              HouseCrew
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {["Home", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative text-gray-700 font-medium hover:text-blue-600 transition
                after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex relative group">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition" />
            <input
              type="text"
              placeholder={placeholder}
              className="pl-11 pr-4 py-2 w-64 rounded-full border border-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
              hover:shadow-md transition text-sm"
            />
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full
              bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
              <FaUserCircle />
              Sign In
            </button>

            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="flex flex-col items-center gap-6 px-6 py-8 text-center">

            {["Home", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
              >
                {item}
              </a>
            ))}

            {/* Mobile Search */}
            <div className="relative w-full max-w-xs">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={placeholder}
                className="w-full pl-11 pr-4 py-2 rounded-full border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Auth (ONLY Sign In) */}
            <button className="flex items-center justify-center gap-2 px-6 py-2 rounded-full
              bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
              <FaUserCircle />
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
