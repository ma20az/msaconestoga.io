export default function Footer() {
  return (
    <footer className="bg-[#0F1C2E] text-gray-300 mt-20">
      <div className="grid gap-8 px-6 py-12 mx-auto max-w-7xl md:grid-cols-3">
        {/* Column 1: About */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Conestoga MSA
          </h3>
          <p className="text-sm leading-relaxed">
            The Muslim Students’ Association at Conestoga College is dedicated
            to fostering faith, unity, and community through events, education,
            and service.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#C9A24D] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-[#C9A24D] transition">
                Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#C9A24D] transition">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://linktr.ee/msaconestoga"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C9A24D] transition"
              >
                Linktree
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📧 csistudentexperience@conestogac.on.ca</li>
            <li>📍 Conestoga College, Doon</li>
            <li>📸 Instagram: @conestogamsa</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-4 text-sm text-center border-t border-white/10">
        © {new Date().getFullYear()} Conestoga MSA. All rights reserved.
      </div>
    </footer>
  );
}
