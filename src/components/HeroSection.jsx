import { PencilRuler, LockKeyhole, CircleOff, DatabaseZap } from "lucide-react";

const HeroSection = () => {
  const features = [
    {
      icon: PencilRuler,
      title: "100+ Tools",
      description: "Works for everyone",
      style: "bg-[#FA913C] text-white", 
    },
    {
      icon: LockKeyhole,
      title: "Secure & Private",
      description: "Your data stays private",
      style: "bg-[#3B81F5] text-white",
    },
    {
      icon: CircleOff,
      title: "Ad-Free",
      description: "No ads, no distractions",
      style: "bg-[#22C45E] text-white",
    },
    {
      icon: DatabaseZap,
      title: "Powerful",
      description: "Small tools, big impact",
      style: "bg-[#EE4444] text-white",
    },
  ];

  return (
    // Added 'z-10' to ensure this sits above any background artifacts
    <section className="relative z-10 flex justify-center px-20 overflow-hidden bg-background pb-8 pt-12 lg:pb-16 lg:pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="max-w-xl animate-fade-in-up">
            <h1 className="mb-6 text-[#2563EB] text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              All Your Daily Tools.{" "}
              <span className="text-primary">One Powerful Platform.</span>
            </h1>
            <p className="mb-8 text-[#9DA3AF] text-xl text-muted-foreground md:text-xl">
              Convert, calculate, analyze, and get things done faster with clean,
              ad-free micro tools.
            </p>
            
            {/* Native Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors bg-[#2563EB] text-white">
                Try Now
              </button>
              
              <button className="inline-flex text-[#2563EB] h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Explore Tools
              </button>
            </div>
          </div>

          {/* Right Content - Robot Mascot */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* FIXED: Path changed from relative to root absolute path for React */}
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
        {/* FIXED: Added 'transform-gpu' to force a clean rendering layer */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6 transform-gpu">
          {features.map((feature, index) => {
            // FIXED: Extract Icon component to a variable
            const Icon = feature.icon;
            
            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 rounded-xl bg-[#F8F9FA] p-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* FIXED: Changed 'flex' to 'grid place-items-center' to stop sub-pixel bleeding */}
                <div
                  className={`grid place-items-center h-12 w-12 shrink-0 rounded-xl ${feature.style}`}
                >
                  {/* FIXED: Added 'block' to SVG to kill inline whitespace */}
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