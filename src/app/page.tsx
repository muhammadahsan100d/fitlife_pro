"use client";

import { useState } from "react";
import Image from "next/image";

// Inline SVG Icons for clean, zero-dependency rendering
const DumbbellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m15 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM7.5 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12h3M19.5 12h3" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

const CheckIcon = ({ className = "w-5 h-5 text-lime-400" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// Sample Data
const FEATURES = [
  {
    icon: <ShieldCheckIcon />,
    title: "Elite Personal Trainers",
    desc: "Work 1-on-1 with certified specialists who design personalized fitness roadmaps based on your anatomy and specific goals."
  },
  {
    icon: <DumbbellIcon />,
    title: "State-of-the-Art Gear",
    desc: "Train with top-of-the-line Biostrength® selectors, hammer strength machines, and premium free weight compounds."
  },
  {
    icon: <ClockIcon />,
    title: "24/7 Smart Gym Access",
    desc: "Fit training into your busy schedule. Lock and unlock the gym via our secure mobile app anytime, day or night."
  },
  {
    icon: <HeartIcon />,
    title: "Nutrition & Recovery Spa",
    desc: "Maximize results at our wellness hub. Equipped with cryotherapy chambers, infrared saunas, and custom diet coaches."
  }
];

const CLASSES = [
  {
    name: "Power HIIT",
    category: "Cardio",
    duration: "45 mins",
    intensity: "High",
    desc: "Intense bursts of high-impact cardio combined with short rest periods to torch calories and build stamina."
  },
  {
    name: "Barbell Hypertrophy",
    category: "Strength",
    duration: "60 mins",
    intensity: "Very High",
    desc: "Focused on compound lifting mechanics to trigger muscular growth, density, and functional posture strength."
  },
  {
    name: "Zen Flow Yoga",
    category: "Recovery",
    duration: "50 mins",
    intensity: "Low",
    desc: "Incorporate deep breathing techniques, physical alignment poses, and myofascial recovery to rebalance your system."
  },
  {
    name: "Championship Boxing",
    category: "Cardio",
    duration: "45 mins",
    intensity: "High",
    desc: "Learn heavy bag strikes, glove combinations, and core evasion patterns in a high-octane aerobic session."
  },
  {
    name: "Olympic Weightlifting",
    category: "Strength",
    duration: "75 mins",
    intensity: "Elite",
    desc: "Master clean & jerk and snatch progressions. Improve explosive speed, coordination, and athletic mobility."
  },
  {
    name: "Active Mobility & Stretch",
    category: "Recovery",
    duration: "30 mins",
    intensity: "Low",
    desc: "Alleviate joints compression, recover tight hamstrings/hips, and accelerate muscle soreness drainage."
  }
];

const TESTIMONIALS = [
  {
    quote: "FitLife Pro completely reshaped my view of fitness. The trainers are highly educated, and the equipment is outstanding. The 24/7 keyless entry is a game-changer for my hectic schedule.",
    author: "Alexander K.",
    role: "Member since 2024",
    initials: "AK"
  },
  {
    quote: "The clean atmosphere, the infrared sauna recovery, and the community energy make this gym unique. Worth every single dollar of the monthly fee. Highly recommended!",
    author: "Samantha R.",
    role: "Member since 2025",
    initials: "SR"
  }
];

const FAQS = [
  {
    q: "Can I try out the gym before purchasing a membership?",
    a: "Absolutely! We offer a complimentary 3-day guest pass for local residents. You can sign up using the button in the Hero section or message our automated chat assistant in the corner."
  },
  {
    q: "What recovery features are included in the Pro tier?",
    a: "The Pro tier includes unlimited access to our active recovery classes, steam rooms, saunas, and 2 sessions per month in our compression therapy suites."
  },
  {
    q: "How do I book sessions with a personal trainer?",
    a: "You can book sessions directly inside our mobile member app, at the front desk, or request a booking through our digital chat assistant right on this page."
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isYearly, setIsYearly] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const filteredClasses = activeFilter === "All" 
    ? CLASSES 
    : CLASSES.filter(c => c.category === activeFilter);

  // Pricing values
  const prices = {
    basic: isYearly ? 39 : 49,
    pro: isYearly ? 79 : 99,
    elite: isYearly ? 159 : 199
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-lime-400 selection:text-neutral-900">
      
      {/* Sticky Header with Backdrop Blur */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">
              FITLIFE PRO
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#features" className="transition-colors hover:text-white">Features</a>
            <a href="#classes" className="transition-colors hover:text-white">Classes</a>
            <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
            <a href="#faqs" className="transition-colors hover:text-white">FAQs</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#pricing" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-lime-400 to-emerald-500 hover:from-lime-300 hover:to-emerald-400 transition-all duration-300 transform hover:scale-[1.03] shadow-md shadow-lime-950/20"
            >
              Join Club
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-900 bg-neutral-950 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <nav className="flex flex-col gap-4 text-base font-medium text-neutral-400">
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="transition-colors hover:text-white"
              >
                Features
              </a>
              <a 
                href="#classes" 
                onClick={() => setMobileMenuOpen(false)}
                className="transition-colors hover:text-white"
              >
                Classes
              </a>
              <a 
                href="#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="transition-colors hover:text-white"
              >
                Pricing
              </a>
              <a 
                href="#faqs" 
                onClick={() => setMobileMenuOpen(false)}
                className="transition-colors hover:text-white"
              >
                FAQs
              </a>
            </nav>
            <div className="pt-4 border-t border-neutral-900">
              <a 
                href="#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-lime-400 to-emerald-500 hover:from-lime-300 hover:to-emerald-400 transition-colors"
              >
                Join Club
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-24 md:py-32">
          {/* Accent Glow Background */}
          <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-lime-500/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-[140px]" />
          
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-lime-400 bg-lime-950/20 border border-lime-500/20 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-ping" />
                Premium fitness destination
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight">
                Redefine Your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-emerald-500">
                  Physical limits
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto md:mx-0">
                FitLife Pro is an elite fitness sanctuary designed to push boundaries. Train on cutting-edge equipment, access luxury recovery suites, and work with world-class coaches.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
                <a 
                  href="#pricing"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-lime-400 to-emerald-500 hover:from-lime-300 hover:to-emerald-400 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-lime-500/10"
                >
                  Start Free Pass
                </a>
                <a 
                  href="#classes"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-white border border-neutral-800 hover:border-neutral-600 hover:bg-white/[0.02] transition-colors"
                >
                  Explore Classes
                </a>
              </div>

              {/* Quick stats panel */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-900 max-w-md mx-auto md:mx-0 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">15k+</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">Members</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">50+</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">Pro Coaches</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">Availability</div>
                </div>
              </div>
            </div>

            {/* Right Media representation */}
            <div className="md:col-span-5 relative w-full h-[320px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-900 group">
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10" />
              <Image 
                src="/gym_hero.png" 
                alt="FitLife Pro Gym Luxury Interior"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Interactive Badge */}
              <div className="absolute bottom-6 left-6 z-25 bg-neutral-900/90 backdrop-blur-md border border-white/5 rounded-xl p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-400">
                  <DumbbellIcon />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">Next Group Class</p>
                  <p className="text-sm font-bold text-white">Power HIIT at 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Services Section */}
        <section id="features" className="py-20 border-t border-neutral-900 bg-neutral-950/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400">Premium Standards</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">Designed for performance</h2>
              <p className="text-sm sm:text-base text-neutral-400">
                Enjoy amenities that amplify your workouts, help you recover faster, and offer seamless accessibility.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl border border-neutral-900 bg-neutral-900/20 hover:bg-neutral-900/40 hover:border-neutral-800 transition-all duration-300 group"
                >
                  <div className="h-12 w-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-6 group-hover:bg-lime-400 group-hover:text-neutral-950 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Classes Section with Filter */}
        <section id="classes" className="py-20 border-t border-neutral-900">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-lime-400">Signature Classes</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">Train with intent</h2>
              </div>
              
              {/* Category Filter tabs */}
              <div className="flex flex-wrap gap-2 bg-neutral-900/50 p-1.5 rounded-full border border-neutral-900 max-w-max">
                {["All", "Strength", "Cardio", "Recovery"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-205 ${
                      activeFilter === filter 
                        ? "bg-lime-400/20 text-lime-400 border border-lime-400/20" 
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col justify-between p-6 rounded-2xl border border-neutral-900 bg-neutral-900/10 hover:border-neutral-800 transition-all duration-300 group hover:shadow-lg hover:shadow-lime-950/5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10">
                        {item.category}
                      </span>
                      <span className="text-xs text-neutral-500 font-medium">
                        {item.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors">{item.name}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs">
                    <span className="text-neutral-500">Intensity Level</span>
                    <span className="font-bold text-neutral-300 uppercase tracking-wider">{item.intensity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 border-t border-neutral-900 bg-neutral-950/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400">Membership Plans</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">Flexible options for you</h2>
              <p className="text-sm sm:text-base text-neutral-400">
                Choose the level of access that aligns with your active routine. No hidden fees or registration contracts.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <span className={`text-sm font-semibold ${!isYearly ? "text-white" : "text-neutral-500"}`}>Monthly Billing</span>
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className="w-12 h-6 bg-neutral-800 rounded-full p-0.5 transition-colors focus:outline-none relative"
                  aria-label="Toggle pricing mode"
                >
                  <div className={`w-5 h-5 bg-lime-400 rounded-full shadow-md transform transition-transform duration-205 ${isYearly ? "translate-x-6" : ""}`} />
                </button>
                <span className={`text-sm font-semibold flex items-center gap-1.5 ${isYearly ? "text-white" : "text-neutral-500"}`}>
                  Yearly Billing
                  <span className="text-[10px] font-bold text-neutral-950 bg-lime-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Save 20%
                  </span>
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
              
              {/* Basic tier */}
              <div className="p-8 rounded-2xl border border-neutral-900 bg-neutral-900/10 flex flex-col justify-between hover:border-neutral-800 transition-colors">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">Base Access</h3>
                    <p className="text-xs text-neutral-400">Core essentials for routine trainers.</p>
                  </div>
                  <div className="flex items-baseline text-white">
                    <span className="text-4xl font-black">${prices.basic}</span>
                    <span className="text-sm font-semibold text-neutral-500 ml-1">/month</span>
                  </div>
                  <ul className="space-y-3.5 text-sm text-neutral-300 pt-4 border-t border-neutral-900">
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Full cardio & weight facilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Locker rooms & shower access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Standard 5AM - 11PM entry</span>
                    </li>
                    <li className="flex items-center gap-2 text-neutral-500">
                      <CheckIcon className="w-5 h-5 text-neutral-700" />
                      <span>Group classes not included</span>
                    </li>
                  </ul>
                </div>
                <button className="mt-8 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-neutral-800 hover:border-neutral-600 hover:bg-white/[0.02] transition-all">
                  Get Started
                </button>
              </div>

              {/* Pro tier (Featured) */}
              <div className="p-8 rounded-2xl border-2 border-lime-400 bg-neutral-900/40 flex flex-col justify-between relative shadow-xl shadow-lime-950/5">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-neutral-950 bg-lime-400">
                  Most Popular
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">Pro Athlete</h3>
                    <p className="text-xs text-neutral-400">Full access, classes, and wellness perks.</p>
                  </div>
                  <div className="flex items-baseline text-white">
                    <span className="text-4xl font-black">${prices.pro}</span>
                    <span className="text-sm font-semibold text-neutral-500 ml-1">/month</span>
                  </div>
                  <ul className="space-y-3.5 text-sm text-neutral-300 pt-4 border-t border-neutral-900">
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>24/7 keyless mobile app access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Unlimited group classes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Infrared sauna & steam rooms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>1 Trainer orientation session</span>
                    </li>
                  </ul>
                </div>
                <button className="mt-8 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-lime-400 to-emerald-500 hover:from-lime-300 hover:to-emerald-400 transition-all duration-300 shadow-md shadow-lime-950/20">
                  Join Pro Now
                </button>
              </div>

              {/* Elite tier */}
              <div className="p-8 rounded-2xl border border-neutral-900 bg-neutral-900/10 flex flex-col justify-between hover:border-neutral-800 transition-colors">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white">Elite Coaching</h3>
                    <p className="text-xs text-neutral-400">For those demanding maximum support.</p>
                  </div>
                  <div className="flex items-baseline text-white">
                    <span className="text-4xl font-black">${prices.elite}</span>
                    <span className="text-sm font-semibold text-neutral-500 ml-1">/month</span>
                  </div>
                  <ul className="space-y-3.5 text-sm text-neutral-300 pt-4 border-t border-neutral-900">
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>All Pro Athlete features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>4 Coach training sessions/mo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Personal nutrition profile & planner</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      <span>Unlimited recovery suite entry</span>
                    </li>
                  </ul>
                </div>
                <button className="mt-8 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-neutral-800 hover:border-neutral-600 hover:bg-white/[0.02] transition-all">
                  Contact Elite
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 border-t border-neutral-900">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-lime-400">Success Stories</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">Approved by our athletes</h2>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  Read testimonials from dedicated members who have radically transformed their physical composition and energy limits at FitLife Pro.
                </p>
              </div>
              
              <div className="md:col-span-7 grid gap-6 sm:grid-cols-2">
                {TESTIMONIALS.map((t, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-neutral-900 bg-neutral-900/10 flex flex-col justify-between">
                    <p className="text-neutral-300 text-sm leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-6">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-lime-400 to-emerald-500 text-neutral-950 font-bold flex items-center justify-center text-xs">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{t.author}</h4>
                        <p className="text-[10px] text-neutral-500 uppercase tracking-wider">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-20 border-t border-neutral-900 bg-neutral-950/40">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-lime-400">Common Questions</span>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight">Frequently Asked</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-neutral-900 rounded-xl bg-neutral-900/10 overflow-hidden transition-colors duration-200"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="font-bold text-white text-sm sm:text-base">{faq.q}</span>
                      <span className={`text-lime-400 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-neutral-400 leading-relaxed border-t border-neutral-900/50 pt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-12">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <span className="text-xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500">
              FITLIFE PRO
            </span>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Premium physical training environments dedicated to boosting human athletic performance.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Location & Hours</h4>
            <ul className="text-xs text-neutral-400 space-y-2.5">
              <li>100 Fitness Boulevard, Suite A</li>
              <li>New York, NY 10001</li>
              <li className="pt-2 text-lime-400">Open 24 Hours / 7 Days a week</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="text-xs text-neutral-400 space-y-2.5">
              <li><a href="#features" className="hover:text-white">Benefits</a></li>
              <li><a href="#classes" className="hover:text-white">Classes</a></li>
              <li><a href="#pricing" className="hover:text-white">Memberships</a></li>
              <li><a href="#faqs" className="hover:text-white">Support FAQs</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Get Gym News</h4>
            <p className="text-xs text-neutral-500">Subscribe for free trial offers and class updates.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email"
                className="bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-lime-400 w-full"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase bg-lime-400 text-neutral-950 hover:bg-lime-300 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-neutral-600">&copy; {new Date().getFullYear()} FitLife Pro. All rights reserved. Mock Page created for chatbot widget testing.</p>
          <div className="flex gap-4 text-[10px] text-neutral-600">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
