import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Menu, X, Globe, Sun, Moon, Languages } from "lucide-react";
import SearchModal from "./SearchModel";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // New states for the UI demo
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Close language dropdown if clicking outside
  const langMenuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const t = {
    nav: {
      tools: "Tools",
      categories: "Categories",
      resources: "Resources",
      about: "About",
      searchTools: "Search tools...",
      getStarted: "Get Started"
    }
  };

  const navItems = [
    { label: t.nav.tools, hasDropdown: true, options: ["PDF Tools", "Image Tools", "Text Tools"] },
    { label: t.nav.categories, hasDropdown: true, options: ["Productivity", "Design", "Development"] },
    { label: t.nav.resources, hasDropdown: true, options: ["Documentation", "Blog", "Support"] },
    { label: t.nav.about, hasDropdown: false },
  ];

  const languages = ["English", "Español", "Français", "Deutsch"];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                    <button className="flex items-center gap-1 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {/* Hover Dropdown */}
                    <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                      <div className="w-48 rounded-md border border-border bg-background p-1 shadow-lg">
                        {item.options?.map((option) => (
                          <a
                            key={option}
                            href="#"
                            className="block rounded-sm px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
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
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
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
              className="flex h-9 items-center text-[#9BA2AE] gap-2 rounded-md border border-border bg-background px-4 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:bg-muted/50"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">{t.nav.searchTools}</span>
            </button>

            {/* Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex border h-9 text-[#9BA2AE] py-1 px-2 items-center justify-center rounded-md text-foreground/80 hover:bg-muted hover:text-foreground"
                aria-label="Select Language"
              >
                <Languages className='h-4 w-4' />&nbsp;En
              </button>
              
              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <div className="absolute bg-white right-0 top-full mt-2 w-32 rounded-md border border-border bg-background p-1 shadow-lg">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setIsLangMenuOpen(false)}
                      className="block w-full rounded-sm px-3 py-2 text-left text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex border h-9 w-9 items-center justify-center rounded-md text-foreground/80 hover:bg-muted hover:text-foreground"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Get Started Button */}
            <button className="hidden h-9 items-center justify-center rounded-md bg-primary px-4 text-sm text-white font-medium text-primary-foreground transition-colors bg-[#2563EB] sm:flex">
              {t.nav.getStarted}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted lg:hidden"
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
          <div className="fixed bg-white inset-y-0 left-0 w-full max-w-xs border-r border-border bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">Alt F</span>
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
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg py-2 text-sm font-medium text-foreground/80 hover:text-foreground">
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-1 flex flex-col gap-1 pl-4">
                        {item.options?.map((option) => (
                          <a
                            key={option}
                            href="#"
                            className="block rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <a href="#" className="block rounded-lg py-2 text-sm font-medium text-foreground/80 hover:text-foreground">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="mt-6 sm:hidden flex flex-col gap-4 border-t border-border pt-6">
                <button className="w-full bg-[#2563EB] text-white rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
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