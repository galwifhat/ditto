import { MapPin } from "lucide-react";
import { ingredients } from "@/data/products";

export default function IngredientsSpotlight() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
              Our Ingredients
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
              Nature&apos;s Best,{" "}
              <span className="text-primary">Bottled</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs lg:text-right">
            We obsessively source the finest natural actives from ethical suppliers worldwide.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className={`group p-6 rounded-2xl border ${ingredient.color} hover:shadow-md transition-all duration-300 cursor-default`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {ingredient.emoji}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{ingredient.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{ingredient.source}</span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{ingredient.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
