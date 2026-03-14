import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }) {
  const { id, name, description, icon, badge } = category;

  return (
    <Link
      to={`/shop?category=${id}`}
      className="group block bg-card border border-border rounded-2xl overflow-hidden card-hover"
    >
      {/* Gradient top strip */}
      <div className="h-32 bg-gradient-to-br from-amber-50 via-orange-50/60 to-rose-50/40 flex items-center justify-center relative">
        <span className="text-5xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
        {badge && (
          <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center gap-1.5 text-sm font-medium text-primary">
          Shop Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
