import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Menu, X, Languages, Sun, Moon } from "lucide-react";
import SearchModal from "./SearchModel";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const { t, language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const langMenuRef = useRef(null);

  const languagesList = [
    { code: "en", label: "English", short: "En" },
    { code: "es", label: "Español", short: "Es" },
    { code: "fr", label: "Français", short: "Fr" },
    { code: "de", label: "Deutsch", short: "De" }
  ];

  const currentLangLabel = languagesList.find(l => l.code === language)?.short || "En";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { label: t.nav.tools, hasDropdown: true, options: ["PDF Tools", "Image Tools", "Text Tools"] },
    { label: t.nav.categories, hasDropdown: true, options: ["Productivity", "Design", "Development"] },
    { label: t.nav.resources, hasDropdown: true, options: ["Documentation", "Blog", "Support"] },
    { label: t.nav.about, hasDropdown: false },
  ];

  const headerClass = theme === 'dark' 
    ? "sticky top-0 z-50 w-full bg-black border-b border-zinc-800 text-white" 
    : "sticky top-0 z-50 w-full bg-white border-b border-gray-200 text-black";

  const buttonClass = theme === 'dark'
    ? "flex border border-zinc-700 h-9 w-9 items-center justify-center rounded-md hover:bg-zinc-800 text-white"
    : "flex border border-gray-200 h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100 text-gray-600";
    
  const searchButtonClass = theme === 'dark'
    ? "flex h-9 items-center text-gray-400 gap-2 rounded-md border border-zinc-700 bg-black px-4 text-sm hover:border-blue-500 hover:bg-zinc-900"
    : "flex h-9 items-center text-[#9BA2AE] gap-2 rounded-md border border-gray-200 bg-white px-4 text-sm hover:border-primary/30 hover:bg-muted/50";

  return (
    <>
      <header className={headerClass}>
        <div className="container mx-auto max-w-[1350px] flex h-16 items-center justify-between gap-16 px-4 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#2563EB]">Alt F</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-blue-500 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {/* Hover Dropdown */}
                    <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                      <div className={`w-48 rounded-md border p-1 shadow-lg ${theme === 'dark' ? 'bg-black border-zinc-800' : 'bg-white border-gray-200'}`}>
                        {item.options?.map((option) => (
                          <a
                            key={option}
                            href="#"
                            className={`block rounded-sm px-3 py-2 text-sm hover:text-blue-500 ${theme === 'dark' ? 'text-gray-300 hover:bg-zinc-900' : 'text-gray-700 hover:bg-gray-100'}`}
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href="#"
                    className={`text-sm font-medium transition-colors hover:text-blue-500 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className={searchButtonClass}
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">{t.nav.searchTools}</span>
            </button>

            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`${buttonClass} w-auto px-3`}
                aria-label="Select Language"
              >
                <Languages className='h-4 w-4' />&nbsp;{currentLangLabel}
              </button>
              
              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <div className={`absolute right-0 top-full mt-2 w-32 rounded-md border p-1 shadow-lg ${theme === 'dark' ? 'bg-black border-zinc-800' : 'bg-white border-gray-200'}`}>
                  {languagesList.map((langItem) => (
                    <button
                      key={langItem.code}
                      onClick={() => {
                        changeLanguage(langItem.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`block w-full rounded-sm px-3 py-2 text-left text-sm ${
                        language === langItem.code ? "text-[#2563EB] font-bold" : (theme === 'dark' ? "text-gray-300 hover:bg-zinc-900" : "text-gray-700 hover:bg-gray-100")
                      }`}
                    >
                      {langItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={buttonClass}
              aria-label="Toggle Theme"
            >
              {/* Show Icon based on Context Theme */}
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Get Started Button */}
            <button className="hidden h-9 items-center justify-center rounded-md bg-[#2563EB] px-4 text-sm text-white font-medium hover:bg-blue-600 transition-colors sm:flex">
              {t.nav.getStarted}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`${buttonClass} lg:hidden`}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className={`fixed inset-y-0 left-0 w-full max-w-xs border-r p-6 shadow-lg ${theme === 'dark' ? 'bg-black border-zinc-800 text-white' : 'bg-white border-gray-200 text-black'}`}>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-[#2563EB]">Alt F</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-sm opacity-70 hover:opacity-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <nav className="mt-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <details className="group">
                      <summary className={`flex cursor-pointer list-none items-center justify-between rounded-lg py-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-1 flex flex-col gap-1 pl-4">
                        {item.options?.map((option) => (
                          <a
                            key={option}
                            href="#"
                            className={`block rounded-lg px-2 py-2 text-sm ${theme === 'dark' ? 'text-gray-400 hover:bg-zinc-900 hover:text-white' : 'text-gray-500 hover:bg-gray-100 hover:text-black'}`}
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <a href="#" className={`block rounded-lg py-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              <div className={`mt-6 sm:hidden flex flex-col gap-4 border-t pt-6 ${theme === 'dark' ? 'border-zinc-800' : 'border-gray-200'}`}>
                <button className="w-full bg-[#2563EB] text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-blue-600">
                  {t.nav.getStarted}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default Header;