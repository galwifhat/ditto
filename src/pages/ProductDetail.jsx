import { useParams, Link } from "react-router-dom";
import { Star, ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

function StarRating({ rating, size = "w-5 h-5" }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`${size} ${s <= Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`} />
      ))}
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));
  const related = products.filter((p) => p.id !== product?.id && p.category === product?.category).slice(0, 3);

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center pt-20">
        <p className="text-2xl font-bold text-foreground mb-4">Product Not Found</p>
        <Link to="/shop" className="text-primary hover:underline">← Back to Shop</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden bg-accent/30 aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            {product.tag && (
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 self-start">
                {product.tag}
              </span>
            )}

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            <p className="text-3xl font-bold text-foreground mb-6">${product.price.toFixed(2)}</p>

            {/* Ingredients */}
            {product.ingredients && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-foreground mb-2">Key Ingredients</p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-ditto-sage-light/60 text-foreground border border-ditto-sage/20">
                      <Check className="w-3 h-3 text-ditto-sage" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Cruelty-Free", "Natural", "Derm Tested", "Vegan"].map((b) => (
                <span key={b} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                  {b}
                </span>
              ))}
            </div>

            <button
              onClick={() => addToCart(product)}
              className="flex items-center justify-center gap-2 w-full sm:w-auto sm:px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-base hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 tracking-tight">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
