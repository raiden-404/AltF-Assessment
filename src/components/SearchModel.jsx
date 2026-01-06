import { useState, useEffect } from "react";
import { Search, Clock, TrendingUp, X } from "lucide-react";

// Removed TypeScript interface
// Removed external imports for Dialog and LanguageContext

const SearchModal = ({ open, onOpenChange }) => {
  const [filter, setFilter] = useState("Free");

  // Mocked translation object to replace useLanguage hook
  const t = {
    common: {
      searchPlaceholder: "Search tools...",
      recent: "Recent",
      clear: "Clear",
      popular: "Popular",
      featured: "Featured",
    },
  };

  const recentTools = [
    { name: "PDF Converter", icon: Clock },
    { name: "Age Calculator", icon: Clock },
    { name: "PNR Checker", icon: Clock },
  ];

  const popularTools = [
    { name: "PDF Converter", icon: TrendingUp },
    { name: "Age Calculator", icon: TrendingUp },
    { name: "PNR Checker", icon: TrendingUp },
    { name: "Example tool", icon: TrendingUp },
  ];

  const featuredTools = [
    { name: "PDF Converter", icon: TrendingUp },
    { name: "Age Calculator", icon: TrendingUp },
    { name: "PNR Checker", icon: TrendingUp },
    { name: "Example tool", icon: TrendingUp },
  ];

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    // Modal Overlay Container
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-32">
      
      {/* Backdrop (Click to close) */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={() => onOpenChange(false)}
      />

      {/* Modal Content */}
      <div className="relative bg-white z-50 w-full max-w-2xl transform rounded-xl border border-border bg-background shadow-2xl transition-all mx-4">
        
        {/* Hidden Title for Accessibility */}
        <h2 className="sr-only">Search Tools</h2>

        {/* Search Input Section */}
        <div className="flex items-center border-b border-border px-4 py-1">
          <Search className="h-5 w-5 text-muted-foreground mr-2" />
          <input
            type="text"
            placeholder={t.common.searchPlaceholder}
            className="flex-1 bg-transparent py-4 text-base outline-none placeholder:text-muted-foreground"
            autoFocus
          />
          
          <div className="flex items-center gap-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="cursor-pointer rounded-md border-0 bg-transparent px-2 py-1 text-sm text-foreground outline-none hover:bg-muted"
            >
              <option value="Free">Free</option>
              <option value="Premium">Premium</option>
              <option value="All">All</option>
            </select>
            
            {/* Close Button (Optional, but good UX for custom modals) */}
            <button 
              onClick={() => onOpenChange(false)}
              className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground sm:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Search Results / Lists */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          
          {/* Recent */}
          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">{t.common.recent}</span>
              <button className="text-sm text-muted-foreground hover:text-foreground">
                {t.common.clear}
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentTools.map((tool, index) => (
                <button
                  key={`${tool.name}-${index}`}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-muted"
                >
                  <tool.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  {tool.name}
                </button>
              ))}
            </div>
          </div>

          {/* Popular */}
          <div className="mb-6">
            <span className="mb-3 block text-sm font-semibold text-foreground">
              {t.common.popular}
            </span>
            <div className="flex flex-wrap gap-2">
              {popularTools.map((tool, index) => (
                <button
                  key={`${tool.name}-${index}`}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-muted"
                >
                  <tool.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  {tool.name}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          <div>
            <span className="mb-3 block text-sm font-semibold text-foreground">
              {t.common.featured}
            </span>
            <div className="flex flex-wrap gap-2">
              {featuredTools.map((tool, index) => (
                <button
                  key={`${tool.name}-${index}`}
                  className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/30 hover:bg-muted"
                >
                  <tool.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  {tool.name}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchModal;