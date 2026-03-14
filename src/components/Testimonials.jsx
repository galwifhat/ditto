import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/products";

function StarRow({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="py-24 bg-gradient-to-b from-ditto-cream/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
            Real Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Loved by{" "}
            <span className="text-primary">Thousands</span>
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-sm">
            {/* Quote icon */}
            <div className="absolute -top-5 left-10 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Quote className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Avatar */}
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
              />

              <div className="flex-1">
                <StarRow rating={t.rating} />
                <p className="text-foreground text-lg leading-relaxed mt-3 mb-4 italic">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.location} · {t.date}
                  </p>
                  <p className="text-xs text-primary mt-1 font-medium">
                    Verified purchase: {t.product}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-accent hover:border-primary/30 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border bg-card hover:bg-accent hover:border-primary/30 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mini testimonial cards row */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mt-12">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setCurrent(i)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                i === current
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-semibold text-foreground truncate">{item.name}</p>
                  <StarRow rating={item.rating} />
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {item.review.substring(0, 60)}...
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
