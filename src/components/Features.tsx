import { motion } from 'motion/react';
import {
  HeartPulse,
  TrendingUp,
  MapPin,
  Check,
  Zap,
  Calendar,
  Layers,
  PhoneCall
} from 'lucide-react';

export default function Features() {
  const items = [
    {
      id: "ai-herd",
      icon: HeartPulse,
      title: "AI Herd Monitoring",
      tagline: "Preventative diagnostics & cycle tracking",
      desc: "Keeps a continuous digital pulse on your herd. It assists farmers in tracking vaccination schedules, identifying optimal breeding cycles, and detecting early signs of common regional diseases.",
      bullets: [
        "Real-time vital anomaly logs",
        "Automated vaccination alert notifications",
        "Breeding period cycle recommendations"
      ],
      badge: "Smart Diagnostics",
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-600 bg-emerald-50"
    },
    {
      id: "prod-analytics",
      icon: TrendingUp,
      title: "Production Analytics",
      tagline: "Turn-key tracking for milk & feed",
      desc: "Optimizes daily milk yield output. Log milk yields and receive automated insights on feed rations customized to maximize cattle health while managing expenses.",
      bullets: [
        "Interactive daily milk yield graphs",
        "Local feed recipe ingredient optimizations",
        "Cattle fat content metrics tracking"
      ],
      badge: "Profit Optimization",
      color: "from-amber-400 to-amber-600",
      accent: "text-amber-600 bg-amber-50"
    },
    {
      id: "vet-index",
      icon: MapPin,
      title: "Regional Vet Indexing",
      tagline: "Verified doctors only a single click away",
      desc: "Ensures immediate veterinary access. Search through the complete verified directory of local veterinarians, animal welfare clinics, and state assistance services in 14 districts.",
      bullets: [
        "Direct chat & audio call capability",
        "Verified PMDC & local veterinary credentials",
        "Offline maps capability for rural areas"
      ],
      badge: "Emergency Connection",
      color: "from-blue-500 to-emerald-500",
      accent: "text-emerald-600 bg-emerald-50"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background embellishments */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-mono text-xs uppercase tracking-widest font-bold bg-amber-100 px-3 py-1.5 rounded-full inline-block mb-3">
            Core Agri-Portal Modules 
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-950 tracking-tight mb-4">
            Maximize Herd Yield with Modern Smart Protocols.
          </h2>
          <p className="text-slate-650 text-md sm:text-lg">
            Pak LiveStock Care compiles critical diagnostics, dairy statistics, and emergency medical connections in an intuitive offline-first app tailored directly to agricultural environments.
          </p>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-150 rounded-2xl p-6 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <div className={`p-4 rounded-xl ${item.accent} transition-transform duration-350 group-hover:scale-110 shadow-sm`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase py-1 px-2.5 rounded bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-xl text-emerald-950 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-600 font-semibold mb-3 uppercase tracking-wide">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="border-t border-slate-100 pt-5 space-y-2.5">
                  <p className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider mb-2">
                    Key Functionalities
                  </p>
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-250 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="h-2.5 w-2.5 text-emerald-600" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Section Footer Callout */}
        <div className="mt-16 bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-850">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-lg text-white">
              A healthier, technology-driven livestock infrastructure
            </h4>
            <p className="text-emerald-250 text-xs sm:text-sm font-sans max-w-xl">
              Pak LiveStock Care relies on curated agricultural indexes. This repository lists animal husbandry data fully aligned with the Pakistan Agricultural Research Council protocols.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('hero');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-5 py-3 rounded-xl text-xs transition-all uppercase tracking-wider shrink-0 cursor-pointer"
          >
            Join Early Beta Now
          </button>
        </div>

      </div>
    </section>
  );
}
