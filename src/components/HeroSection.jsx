import { PencilRuler, LockKeyhole, CircleOff, DatabaseZap } from "lucide-react";
// 1. Import the hook
import { useLanguage } from "../contexts/LanguageContext";

const HeroSection = () => {
  // 2. Get the translation object
  const { t } = useLanguage();

  const features = [
    {
      icon: PencilRuler,
      // 3. Replace hardcoded strings with context keys
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
    <section className="relative z-10 flex justify-center px-20 overflow-hidden bg-background pb-8 pt-12 lg:pb-16 lg:pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="max-w-xl animate-fade-in-up">
            <h1 className="mb-6 text-[#2563EB] text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {/* 4. Use dynamic title parts */}
              {t.hero.titlePart1}{" "}
              <span className="text-primary">{t.hero.titlePart2}</span>
            </h1>
            <p className="mb-8 text-[#9DA3AF] text-xl text-muted-foreground md:text-xl">
              {/* 5. Use dynamic subtitle */}
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
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 transform-gpu">
          {features.map((feature, index) => {
            // Extract Icon to variable (Technical Fix)
            const Icon = feature.icon;
            
            return (
              <div
                key={index} // Using index is safer here as title changes with language
                className="flex items-center gap-4 rounded-xl bg-[#F8F9FA] p-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Grid Place Items (Technical Fix) */}
                <div
                  className={`grid place-items-center h-12 w-12 shrink-0 rounded-xl ${feature.style}`}
                >
                  {/* Block Display (Technical Fix) */}
                  <Icon className="h-6 w-6 block" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
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