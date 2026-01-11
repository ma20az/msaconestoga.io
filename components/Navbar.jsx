import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    const shouldBeDark = saved ? saved === "dark" : !!prefersDark;

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const linkClass = ({ isActive }) =>
    `transition hover:text-[#C9A24D] ${
      isActive ? "text-[#C9A24D]" : "text-white/90"
    }`;

  return (
    <nav className="bg-[#0F1C2E] text-white px-4 sm:px-6 py-4 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        {/* Left: Logo (click takes home because it's a NavLink) */}
        <NavLink to="/" className="flex items-center gap-3 transition hover:opacity-90">
          <img
            src={logo}
            alt="MSA Logo"
            className="object-cover w-10 h-10 rounded-full ring-2 ring-white/20"
          />
          <span className="text-lg font-semibold">Conestoga MSA</span>
        </NavLink>

        {/* Right: Desktop links + Linktree (hidden on mobile) */}
        <div className="items-center hidden gap-6 md:flex">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/events" className={linkClass}>
            Events
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <a
            href="https://linktr.ee/msaconestoga"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A24D] text-[#0F1C2E] px-5 py-2 rounded-full font-semibold
                       hover:bg-[#b8923f] transition shadow-sm"
          >
            Linktree
          </a>
        </div>

        {/* Far right: Toggle (always visible, separate) */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 transition rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/10"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center justify-center w-10 h-10 transition rounded-full md:hidden bg-white/10 hover:bg-white/20 ring-1 ring-white/10"
            aria-label="Toggle menu"
            title="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="p-4 mx-auto mt-4 border md:hidden max-w-7xl rounded-2xl bg-white/5 border-white/10">
          <div className="flex flex-col gap-3">
            <NavLink onClick={() => setMenuOpen(false)} to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/events" className={linkClass}>
              Events
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/contact" className={linkClass}>
              Contact
            </NavLink>

            <a
              href="https://linktr.ee/msaconestoga"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center bg-[#C9A24D] text-[#0F1C2E]
                         px-5 py-2 rounded-full font-semibold hover:bg-[#b8923f] transition shadow-sm"
            >
              Linktree
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
