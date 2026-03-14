import { ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : star - 0.5 <= rating
              ? "fill-amber-200 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { id, name, price, image, rating, reviews, tag, description } = product;

  return (
    <div className="group bg-card border border-border rounded-2xl overflow-hidden card-hover flex flex-col">
      {/* Image */}
      <Link to={`/product/${id}`} className="block relative overflow-hidden bg-accent/30 aspect-[4/5]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {tag && (
          <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-sm">
            {tag}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/product/${id}`}>
          <h3 className="font-semibold text-foreground text-sm leading-snug mb-1 hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={rating} />
          <span className="text-xs text-muted-foreground">
            {rating} ({reviews})
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-base font-bold text-foreground">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-xl hover:bg-primary/90 active:scale-95 transition-all duration-150 shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
