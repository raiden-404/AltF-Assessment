import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, X } from "lucide-react";

const Footer = () => {
  const categories = [
    "Productivity",
    "Development",
    "Design",
    "Utilities",
    "Trackers",
  ];

  const company = ["Home", "About Us", "Contact Us", "All Tools"];

  const contacts = {
    email: "we@anslation.com",
    phone: "012-345-6789",
    location: "Betul | Gurugram",
  };

  const XLogo = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: XLogo, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-zinc-950 px-6 lg:px-14 text-zinc-100">
      <div className="container flex justify-center mx-auto px-4 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-1">
            <a href="/" className="mb-6 inline-block">
              <span className="text-2xl font-bold text-white">Alt F</span>
            </a>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-zinc-400">
              A comprehensive collection of micro tools designed to make your
              workflow easier and more efficient.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                  aria-label={`Visit our ${social.icon.displayName}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 transition-colors hover:text-primary hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 transition-colors hover:text-primary hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <span>{contacts.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <span>{contacts.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <span>{contacts.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 bg-zinc-950">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-zinc-500 md:flex-row lg:px-8">
          <p>Copyright © 2025 MicroToolHub. All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Terms and Conditions
            </a>
            <span className="text-zinc-700">|</span>
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;