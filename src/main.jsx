// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";
import "./index.css";
import { router } from "./router.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: "'Geist Variable', sans-serif",
            fontSize: "14px",
            borderRadius: "12px",
          },
        }}
      />
    </CartProvider>
  </StrictMode>,
);