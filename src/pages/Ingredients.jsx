import { ingredients } from "@/data/products";
import { MapPin, Leaf, FlaskConical } from "lucide-react";

const standards = [
  {
    icon: Leaf,
    title: "Ethically Sourced",
    desc: "We work directly with farmers and co-ops to ensure fair wages and sustainable farming practices.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: FlaskConical,
    title: "Science-Backed",
    desc: "Every ingredient we use has peer-reviewed research supporting its efficacy and safety profile.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MapPin,
    title: "Transparently Traced",
    desc: "We publish the origin of every key ingredient so you know exactly what's on your skin.",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function Ingredients() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-50 via-ditto-cream to-amber-50/60 pt-28 pb-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
            What&apos;s Inside
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Ingredients You Can{" "}
            <span className="text-primary">Actually Pronounce</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe you deserve to know exactly what goes on your skin. No hidden chemicals, no confusing labels — just honest, powerful ingredients from nature.
          </p>
        </div>
      </div>

      {/* Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {standards.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="p-6 rounded-2xl border border-border bg-card">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Ingredient Cards */}
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
              Star Ingredients
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Nature&apos;s Most Powerful{" "}
              <span className="text-primary">Actives</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ingredient) => (
              <div
                key={ingredient.id}
                className={`group p-7 rounded-2xl border ${ingredient.color} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {ingredient.emoji}
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground text-lg leading-tight">{ingredient.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{ingredient.source}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Never List */}
      <section className="py-16 bg-ditto-cream/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
            Our Promise
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">
            What We <span className="text-destructive">Never</span> Use
          </h2>
          <p className="text-muted-foreground mb-10">
            DITTO is free from over 1,400 EU-banned ingredients, plus these common culprits:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Parabens", "Sulfates", "Phthalates", "Mineral Oil",
              "Artificial Fragrance", "Formaldehyde", "Triclosan",
              "Petrolatum", "Silicones", "Synthetic Dyes", "BHA / BHT",
              "Oxybenzone",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-destructive/8 text-destructive text-sm font-medium border border-destructive/20"
              >
                ✗ {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
