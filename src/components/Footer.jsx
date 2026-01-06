import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
// 1. Import hook
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  // 2. Get translation object
  const { t } = useLanguage();

  // 3. Map categories to context translations
  const categories = [
    t.categories.items.prod,   // Productivity
    t.categories.items.dev,    // Development
    t.categories.items.design, // Design
    t.categories.items.util,   // Utilities
    t.categories.items.track,  // Trackers
  ];

  // 4. Map company links to context translations
  const company = [
    t.footer.links.home,    // Home
    t.footer.links.about,   // About Us
    t.footer.links.contact, // Contact Us (Link)
    t.footer.links.all      // All Tools
  ];

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
              {/* 5. Dynamic Description */}
              {t.footer.desc}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                  aria-label={`Visit our social page`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              {/* 6. Dynamic Header */}
              {t.footer.cats}
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
              {/* 7. Dynamic Header */}
              {t.footer.comp}
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
              {/* 8. Dynamic Header */}
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>{contacts.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>{contacts.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>{contacts.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 bg-zinc-950">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-zinc-500 md:flex-row lg:px-8">
          {/* 9. Dynamic Rights */}
          <p>{t.footer.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              {/* 10. Dynamic Terms */}
              {t.footer.terms}
            </a>
            <span className="text-zinc-700">|</span>
            <a href="#" className="transition-colors hover:text-white">
              {/* 11. Dynamic Privacy */}
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;