import { ArrowUpRight } from "lucide-react";
// 1. Import hook
import { useLanguage } from "../contexts/LanguageContext";

const CategoriesSection = () => {
  // 2. Get translation object
  const { t } = useLanguage();

  // 3. Construct categories using dynamic names from 't'
  const categories = [
    { 
      id: 1, 
      name: t.categories.items.prod, // "Productivity"
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80",
      count: "12"
    },
    { 
      id: 2, 
      name: t.categories.items.dev, // "Development"
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
      count: "8"
    },
    { 
      id: 3, 
      name: t.categories.items.design, // "Design"
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
      count: "15"
    },
    { 
      id: 4, 
      name: t.categories.items.math, // "Math"
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80",
      count: "6"
    },
    { 
      id: 5, 
      name: t.categories.items.security, // "Security"
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80",
      count: "4"
    },
  ];

  return (
    <section className="py-12 lg:py-20">
      <div className="container flex justify-center mx-auto px-4 lg:px-8">
        
        {/* Main Dark Card Container */}
        <div className="relative flex flex-col gap-6 max-w-[1350px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8 lg:p-12 shadow-2xl">
          
          <div className="grid items-center gap-8 lg:grid-cols-2">
            
            {/* Left Content (Text) */}
            <div className="relative z-10">
              <span className="mb-4 inline-block rounded-lg bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                {/* 4. Dynamic Badge */}
                {t.categories.badge}
              </span>
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                {/* 5. Dynamic Title */}
                {t.categories.title}
              </h2>
              <p className="max-w-md text-zinc-400">
                {/* 6. Dynamic Subtitle */}
                {t.categories.subtitle}
              </p>
            </div>

            {/* Right Content - Featured Visual (Remains Same) */}
            <div className="flex justify-end">
              <div className="relative w-[70%] max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-lg backdrop-blur-sm">
                <img 
                   src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&q=80" 
                   alt="Featured Workflow" 
                   className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section: Scrollable Reduced Cards */}
          <div className="mt-10 w-full lg:max-w-3xl">
            
            {/* Horizontal Scroll Container */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none]">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="group relative flex-shrink-0 snap-start cursor-pointer overflow-hidden rounded-xl bg-zinc-800/50 border border-white/5 transition-all duration-300 hover:border-white/20 hover:bg-zinc-800"
                  style={{ width: '180px' }} // Fixed small width
                >
                  {/* Reduced Image Height */}
                  <div className="h-28 w-full overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Compact Text Content */}
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white group-hover:text-primary transition-colors truncate">
                      {category.name}
                    </h3>
                    <div className="mt-1 flex items-center justify-between">
                      {/* 7. Dynamic "Tools" label appended to count */}
                      <p className="text-[10px] text-zinc-500">{category.count} {t.nav.tools}</p>
                      <ArrowUpRight className="h-3 w-3 text-zinc-600 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;