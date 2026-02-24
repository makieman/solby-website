import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-solby-black text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company */}
          <div>
            <img
              src="https://res.cloudinary.com/dzorbbb7s/image/upload/v1760597632/Solby_Logo_rzhueo.png"
              alt="Solby Logo"
              className="h-8 mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Empowering businesses with innovative SaaS solutions to streamline operations and drive growth.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/solby-erp/" },
                { icon: Instagram, href: "https://www.instagram.com/solby.io" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-solby-blue flex items-center justify-center transition-colors"
                  aria-label={Icon.displayName}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "Features", href: "/features" },
                { name: "Pricing", href: "/pricing" },
                { name: "Industries", href: "/industries" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "Security", href: "/security" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 text-solby-blue shrink-0" />
                <a href="mailto:info@solby.io" className="hover:text-white transition-colors">info@solby.io</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 mt-0.5 text-solby-blue shrink-0" />
                <a href="tel:+254115588872" className="hover:text-white transition-colors">+254 115 588872</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-solby-blue shrink-0" />
                <span>Karen Mosque, Langata Road, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2025 Solby. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
