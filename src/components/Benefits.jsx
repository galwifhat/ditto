import { Leaf, Shield, FlaskConical, Recycle, Heart, Droplets } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Every formula starts with plant-based ingredients sourced from trusted farms around the world.",
    color: "text-ditto-sage bg-ditto-sage-light",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "No animal testing — ever. DITTO is certified cruelty-free and proudly vegan across all product lines.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Shield,
    title: "Dermatologist Tested",
    description: "Every product is dermatologist tested and approved for sensitive skin before it reaches your hands.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Recycle,
    title: "Sustainable Packaging",
    description: "All packaging is recycled or biodegradable. Beautiful products shouldn't cost the earth — literally.",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: FlaskConical,
    title: "Clean Formula",
    description: "Free from parabens, sulfates, artificial fragrances, and over 1,400 EU-banned ingredients.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: Droplets,
    title: "Deeply Hydrating",
    description: "Our formulas penetrate multiple layers of skin for lasting hydration — not just surface moisture.",
    color: "text-cyan-600 bg-cyan-50",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-ditto-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
            Why DITTO
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Skincare You Can{" "}
            <span className="text-primary">Trust</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We hold ourselves to the highest standards — because your skin deserves nothing less.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, description, color }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
