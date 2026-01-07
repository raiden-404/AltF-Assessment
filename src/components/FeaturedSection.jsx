import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const FeaturedSection = () => {
  const scrollRef = useRef(null);
  const { t } = useLanguage();

  const tools = [
    { id: 1, name: "PDF Converter", image: "/images/featured1.png" }, // Fixed paths
    { id: 2, name: "Age Calculator", image: "/images/featured2.png" },
    { id: 3, name: "QR Generator", image: "/images/featured3.png" },
    { id: 4, name: "Image Compressor", image: "/images/featured4.png" },
    { id: 5, name: "Color Picker", image: "/images/featured5.png" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const itemWidth = current.children[0].clientWidth;
      const scrollAmount = direction === "left" ? -(itemWidth + 16) : (itemWidth + 16);
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-6 lg:px-24 max-w-[1350px]">
        
        <div className="bg-gradient-to-b text-white from-[#0068FF] to-[#00A3FF] relative overflow-hidden rounded-3xl p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="text-primary-foreground z-10">
              <span className="mb-4 inline-block rounded-full bg-[#B9CFFF63] px-4 py-1 text-sm font-medium backdrop-blur-sm">
                {t.featured.badge}
              </span>
              <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
                {t.featured.title}
              </h2>
              <p className="text-lg text-[#E4E6EA]">
                {t.featured.subtitle}
              </p>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="relative">
              
              <div 
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none]"
              >
                {tools.map((tool) => (
                  <div 
                    key={tool.id} 
                    className="min-w-full shrink-0 snap-start sm:min-w-[calc(50%-8px)]"
                  >
                    {/* Fixed Height Container */}
                    <div className="group relative h-64 w-full overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-lg">
                      
                      {/* Image with Object Cover */}
                      <img 
                        src={tool.image} 
                        alt={tool.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentNode.style.backgroundColor = '#ccc';
                        }}
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                      
                      {/* Tool Name */}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <p className="font-semibold text-white tracking-wide">{tool.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="mt-6 flex justify-center gap-3">
                <button 
                  onClick={() => scroll("left")}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => scroll("right")}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;