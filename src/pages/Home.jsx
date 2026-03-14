import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import IngredientsSpotlight from "@/components/IngredientsSpotlight";
import { categories, products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const featuredProducts = products.filter((p) => p.featured);

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Product Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
                Collections
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                Shop by{" "}
                <span className="text-primary">Category</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products / Best Sellers */}
      <section className="py-24 bg-gradient-to-b from-white to-ditto-cream/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
                Best Sellers
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                Customer{" "}
                <span className="text-primary">Favorites</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              See Full Shop <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Benefits />

      {/* Shop by Concern */}
      <section className="py-24 bg-gradient-to-r from-amber-50 via-ditto-cream to-rose-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
              Find Your Match
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-3">
              Shop by <span className="text-primary">Concern</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Not sure where to start? We&apos;ve curated collections to address your specific skin needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { emoji: "🌵", label: "Dry Skin", desc: "Deep hydration formulas", color: "hover:border-amber-300 hover:bg-amber-50" },
              { emoji: "🌸", label: "Sensitive Skin", desc: "Gentle, fragrance-free picks", color: "hover:border-rose-300 hover:bg-rose-50" },
              { emoji: "🤰", label: "Pregnancy", desc: "Safe & bump-approved", color: "hover:border-green-300 hover:bg-green-50" },
              { emoji: "✨", label: "Anti-Aging", desc: "Firming & brightening", color: "hover:border-purple-300 hover:bg-purple-50" },
            ].map(({ emoji, label, desc, color }) => (
              <Link
                key={label}
                to="/shop"
                className={`group p-6 rounded-2xl border border-border bg-card text-center transition-all duration-200 ${color} hover:shadow-md hover:-translate-y-1`}
              >
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">
                  {emoji}
                </span>
                <p className="font-semibold text-foreground text-sm">{label}</p>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Spotlight */}
      <IngredientsSpotlight />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg max-w-xl mx-auto">
            Join 50,000+ customers who have discovered the DITTO difference. Free shipping on orders over $50.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-2xl font-semibold text-base hover:bg-white transition-colors shadow-lg"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-2xl font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
