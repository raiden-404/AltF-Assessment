import { useState } from "react";
import { Search } from "lucide-react";
import SearchModal from "./SearchModel";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";


const BuildSection = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  
  const { t } = useLanguage();
  const { theme } = useTheme();


  // Images and Tool Data (Static content, fine to keep here)
  const topRowTools = [
    { id: 1, name: "PDF Converter", image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&q=80" },
    { id: 2, name: "Age Calculator", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80" },
    { id: 3, name: "QR Generator", image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&q=80" },
    { id: 4, name: "Word Counter", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80" },
    { id: 5, name: "Color Picker", image: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=600&q=80" },
    { id: 6, name: "JSON Formatter", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80" },
  ];

  const bottomRowTools = [
    { id: 7, name: "Base64 Encoder", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80" },
    { id: 8, name: "URL Shortener", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80" },
    { id: 9, name: "Image Resizer", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80" },
    { id: 10, name: "Hash Generator", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" },
    { id: 11, name: "Markdown Editor", image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80" },
    { id: 12, name: "Unit Converter", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80" },
  ];

  const ToolCard = ({ tool }) => (
    <div className="group relative flex-shrink-0 mx-3 cursor-pointer overflow-hidden rounded-2xl">
      <div className="h-[220px] w-[270px] overflow-hidden rounded-2xl bg-muted shadow-md transition-all duration-300 hover:shadow-xl">
        <img 
          src={tool.image} 
          alt={tool.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay: Only visible on hover */}
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="w-full p-4 text-center text-lg font-bold text-white">
            {tool.name}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 60s linear infinite; /* Slowed down for better viewing */
        }
        .animate-marquee-right {
          animation: marquee-right 60s linear infinite;
        }
      `}</style>

      <section className="bg-background py-12 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className={`${theme === "dark" ? "text-white" : ""} mb-4 text-3xl font-bold text-foreground lg:text-4xl`}>
              {t.build.title}
            </h2>
            <p className="mb-8 text-[#9DA3AF] text-xl text-muted-foreground">
              {t.build.subtitle}
            </p>

            {/* Search Bar */}
            <div className="relative mx-auto max-w-md">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={t.build.searchPlaceholder}
                onClick={() => setSearchOpen(true)}
                readOnly
                className="h-12 bg-[#F2F3F5] w-full cursor-pointer rounded-xl border border-border bg-background pl-12 pr-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Animated Marquee Rows */}
          <div className="space-y-8">
            
            {/* Top Row - Left to Right */}
            <div className="relative flex overflow-hidden mask-gradient">
              <div className="flex animate-marquee-left hover:[animation-play-state:paused]">
                {/* Triple duplication to ensure smooth infinite scroll on wide screens */}
                {[...topRowTools, ...topRowTools, ...topRowTools].map((tool, index) => (
                  <ToolCard key={`top-${tool.id}-${index}`} tool={tool} />
                ))}
              </div>
            </div>

            {/* Bottom Row - Right to Left */}
            <div className="relative flex overflow-hidden mask-gradient">
              <div className="flex animate-marquee-right hover:[animation-play-state:paused]">
                {[...bottomRowTools, ...bottomRowTools, ...bottomRowTools].map((tool, index) => (
                  <ToolCard key={`bottom-${tool.id}-${index}`} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SearchModal open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default BuildSection;