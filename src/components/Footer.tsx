import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Wave curve — sits above the dark footer background on all pages */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
          style={{ height: '40px' }}
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#0a1120"
          />
        </svg>
      </div>

      <footer className="bg-[#0a1120] text-gray-300 pt-5 pb-6 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-4 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-5 space-y-3">
              <Link to="/" className="flex items-center gap-2 text-white">
                <img
                  src="https://res.cloudinary.com/dzorbbb7s/image/upload/v1760597632/Solby_Logo_rzhueo.png"
                  alt="Solby Logo"
                  className="h-8 md:h-10 brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
                Empowering businesses with innovative SaaS solutions to streamline operations, automate workflows, and drive sustainable growth in a digital-first world.
              </p>
              <div className="flex space-x-4 pt-2">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/solby-erp/", label: "LinkedIn" },
                  { icon: Instagram, href: "https://www.instagram.com/solby.io", label: "Instagram" },
                ].map(({ icon: Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1a3ee8] hover:text-white transition-all duration-300 group hover:-translate-y-1"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-white font-semibold text-lg tracking-wide">Quick Links</h3>
              <ul className="space-y-1.5 text-sm">
                {[
                  { name: "Features", href: "/features" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Industries", href: "/industries" },
                  { name: "Blog", href: "/blog" },
                  { name: "Careers", href: "/careers" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="hover:text-[#1a3ee8] transition-colors block py-1 hover:translate-x-1 duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-white font-semibold text-lg tracking-wide">Legal</h3>
              <ul className="space-y-1.5 text-sm">
                {[
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms of Service", href: "/terms" },
                  { name: "Cookie Policy", href: "/cookies" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="hover:text-[#1a3ee8] transition-colors block py-1 hover:translate-x-1 duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-white font-semibold text-lg tracking-wide">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 mt-0.5 text-[#1a3ee8] group-hover:text-blue-400 transition-colors shrink-0" />
                  <a href="mailto:info@solby.io" className="hover:text-white transition-colors">info@solby.io</a>
                </li>
                <li className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 mt-0.5 text-[#1a3ee8] group-hover:text-blue-400 transition-colors shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+254115588872" className="hover:text-white transition-colors">+254 115 588872</a>
                    <a href="tel:+254100933316" className="hover:text-white transition-colors">+254 100 933316</a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 mt-0.5 text-[#1a3ee8] group-hover:text-blue-400 transition-colors shrink-0" />
                  <span className="leading-relaxed">Eldoret Eastern Avenue</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Solby. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-gray-300 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
