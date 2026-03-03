import { useState, useEffect } from "react";
import logo from "./assets/logo/logob.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#Sobre" },
    { label: "Datas", href: "#datas" },
    { label: "Apoiadores", href: "#apoiadores" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg border-b border-yellow-200"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            alt="Logo Batutinhas"
            src={logo}
            className="w-32 h-16 object-contain"
          />
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {menu.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-4 py-2 rounded-full text-gray-700 font-semibold text-sm
                           hover:bg-yellow-400 hover:text-white transition-all duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="ml-2 px-5 py-2 bg-emerald-500 text-white font-bold text-sm
                         rounded-full hover:bg-emerald-600 transition-all duration-200 shadow-md"
            >
              Fale Conosco
            </a>
          </li>
        </ul>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10
                     rounded-full hover:bg-yellow-100 transition-colors duration-200"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col bg-white border-t border-yellow-100 px-6 py-4 gap-1">
          {menu.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-3 px-4 text-gray-700 font-semibold rounded-xl
                           hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contato"
              className="block text-center py-3 bg-emerald-500 text-white font-bold
                         rounded-xl hover:bg-emerald-600 transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
