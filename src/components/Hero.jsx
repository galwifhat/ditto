import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const floatingCards = [
  { top: "10%", left: "5%", label: "Shea Butter", sub: "Body Butter", delay: "0s", img: "https://picsum.photos/seed/ditto-bb1/120/160" },
  { top: "55%", left: "2%", label: "Rosehip Oil", sub: "Face Serum", delay: "1.5s", img: "https://picsum.photos/seed/ditto-face/120/160" },
  { top: "8%", right: "3%", label: "Honey Lip Balm", sub: "Lip Care", delay: "1s", img: "https://picsum.photos/seed/ditto-lip/120/160" },
  { top: "60%", right: "5%", label: "Body Lotion", sub: "Daily Ritual", delay: "2s", img: "https://picsum.photos/seed/ditto-lotion/120/160" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-ditto-cream to-rose-50/40" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-ditto-sage/10 blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-rose-100/40 blur-2xl" />

      {/* Floating product cards */}
      {floatingCards.map((card, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex flex-col overflow-hidden rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm border border-white/60 animate-float"
          style={{
            top: card.top,
            left: card.left,
            right: card.right,
            width: 120,
            animationDelay: card.delay,
          }}
        >
          <img
            src={card.img}
            alt={card.label}
            className="w-full h-24 object-cover"
          />
          <div className="p-2">
            <p className="text-xs font-semibold text-foreground leading-tight">{card.label}</p>
            <p className="text-xs text-muted-foreground">{card.sub}</p>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6 animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5" />
          100% Natural Ingredients
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Nourish Your{" "}
          <span className="relative inline-block">
            <span className="text-primary">Skin</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 Q50 2 100 7 Q150 12 198 6"
                stroke="oklch(0.75 0.09 42)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Naturally
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Discover DITTO&apos;s premium collection of moisturizers for every part of
          your body — crafted with ingredients you can trust.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Shop Best Sellers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-foreground rounded-2xl text-base font-semibold border border-border hover:bg-white hover:shadow-md transition-all duration-200"
          >
            Our Story
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-14 pt-8 border-t border-border/50 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "6", label: "Product Lines" },
            { value: "100%", label: "Natural Ingredients" },
            { value: "4.9★", label: "Avg. Rating" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,40 Q360,80 720,40 Q1080,0 1440,40 L1440,80 L0,80 Z" fill="white" fillOpacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
