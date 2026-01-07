import { PencilRuler, LockKeyhole, CircleOff, DatabaseZap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const features = [
    {
      icon: PencilRuler,
      title: t.hero.features.tools.title,
      description: t.hero.features.tools.desc,
      style: "bg-[#FA913C] text-white", 
    },
    {
      icon: LockKeyhole,
      title: t.hero.features.secure.title,
      description: t.hero.features.secure.desc,
      style: "bg-[#3B81F5] text-white",
    },
    {
      icon: CircleOff,
      title: t.hero.features.ads.title,
      description: t.hero.features.ads.desc,
      style: "bg-[#22C45E] text-white",
    },
    {
      icon: DatabaseZap,
      title: t.hero.features.powerful.title,
      description: t.hero.features.powerful.desc,
      style: "bg-[#EE4444] text-white",
    },
  ];

  return (
    <section className="relative z-10 flex justify-center px-8 md:px-14 lg:px-20 overflow-hidden bg-background pb-8 pt-12 lg:pb-16 lg:pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="max-w-xl animate-fade-in-up">
            <h1 className="mb-6 text-[#2563EB] text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t.hero.titlePart1}{" "}
              <span className="text-primary">{t.hero.titlePart2}</span>
            </h1>
            <p className="mb-8 text-[#9DA3AF] text-xl text-muted-foreground md:text-xl">
              {t.hero.subtitle}
            </p>
            
            {/* Native Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors bg-[#2563EB] text-white">
                {t.hero.try}
              </button>
              
              <button className="inline-flex text-[#2563EB] h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                {t.hero.explore}
              </button>
            </div>
          </div>

          {/* Right Content - Robot Mascot */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <img
                src="/images/robot.png"
                alt="Alt F Robot Mascot"
                className="h-auto w-full max-w-md animate-float drop-shadow-2xl"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 transform-gpu">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`flex items-center gap-3 rounded-xl p-3 transition-colors ${
                  theme === "dark" ? "bg-gray-800 text-white" : "bg-[#F8F9FA] text-foreground"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div
                  className={`grid place-items-center h-12 w-12 shrink-0 rounded-xl ${feature.style}`}
                >
                  <Icon className="h-6 w-6 block" />
                </div>
                
                <div className="min-w-0 flex-1">
                  <h3 className={`font-semibold truncate ${theme === "dark" ? "text-white" : "text-foreground"}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-tight ${theme === "dark" ? "text-gray-300" : "text-muted-foreground"}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;