import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="logo_Suh.jpg"
              alt="SUH TECH"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-lg font-bold text-white">SUH TECH</h2>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
            <a href="mailto:info@suhtech.top" className="hover:text-[var(--accent-primary)]">
              info@suhtech.top
            </a>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Delivering innovative, high-quality digital solutions with excellence, 
            creativity, and timely delivery since 2024.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[var(--accent-primary)]">Web Development</a></li>
            <li><a href="#" className="hover:text-[var(--accent-primary)]">Mobile Applications</a></li>
            <li><a href="#" className="hover:text-[var(--accent-primary)]">AI Solutions</a></li>
            <li><a href="#" className="hover:text-[var(--accent-primary)]">Cloud Services</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[var(--accent-primary)]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[var(--accent-primary)]">Our Story</a></li>
          </ul>
        </div>

        {/* Social & Address */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Profiles</h3>
          <div className="flex gap-3 mb-4">
            <a href="#" className="p-2 rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent-primary)] hover:text-white transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent-primary)] hover:text-white transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent-primary)] hover:text-white transition">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg border border-[var(--border-color)] hover:bg-[var(--accent-primary)] hover:text-white transition">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            <span className="text-white font-medium">Address:</span><br />
            Habitech Crystal Mall,<br />
            Knowledge Park III,<br />
            4th Floor, D-8, Greater Noida,<br />
            India
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border-color)] text-center py-4 text-xs text-[var(--text-secondary)]">
        © 2025 SUH TECH PRIVATE LIMITED. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
