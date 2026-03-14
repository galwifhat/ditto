// src/components/CartSidebar.jsx
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartSidebar() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQty,
  } = useCart();

  const formatCartMessage = () => {
    // const phoneNumber = "254723277604"; // Remove spaces for URL

    // Build the cart items list
    const itemsList = cartItems
      .map(
        (item) =>
          `• ${item.name} x${item.qty} - $${(item.price * item.qty).toFixed(2)}`,
      )
      .join("\n");

    // Calculate shipping
    const shipping = cartTotal >= 50 ? 0 : 5.99;
    const grandTotal = cartTotal + shipping;

    // Create the full message
    const message = `*New Order from DITTO*

*Order Summary:*
${itemsList}

*Subtotal:* $${cartTotal.toFixed(2)}
*Shipping:* ${shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
*Total:* $${grandTotal.toFixed(2)}

Thank you for shopping with DITTO!`;

    // Encode the message for URL
    return encodeURIComponent(message);
  };

  const handleWhatsAppCheckout = () => {
    const message = formatCartMessage();
    const whatsappUrl = `https://wa.me/254723277604?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card shadow-2xl animate-in slide-in-from-right duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-foreground">
              Your Cart
              {cartCount > 0 && (
                <span className="ml-2 text-sm text-muted-foreground font-normal">
                  ({cartCount} item{cartCount !== 1 ? "s" : ""})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full hover:bg-accent flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Your cart is empty
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Add some products to get started!
                </p>
              </div>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 rounded-2xl bg-background border border-border"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover rounded-xl flex-shrink-0 bg-accent"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
                    {item.name}
                  </p>
                  <p className="text-sm font-bold text-primary mt-1">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-7 h-7 rounded-full hover:bg-destructive/10 flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-border space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-semibold text-foreground">
                ${cartTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Shipping</span>
              <span className="text-sm text-ditto-sage font-medium">
                {cartTotal >= 50 ? "Free!" : "$5.99"}
              </span>
            </div>
            {cartTotal < 50 && (
              <p className="text-xs text-muted-foreground bg-accent/60 rounded-xl px-3 py-2">
                💡 Add ${(50 - cartTotal).toFixed(2)} more for free shipping!
              </p>
            )}

            {/* Original Checkout Button - Now opens WhatsApp */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
            >
              Checkout · $
              {(cartTotal + (cartTotal >= 50 ? 0 : 5.99)).toFixed(2)}
            </button>

            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
