import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import PetalCanvas from "@/components/PetalCanvas";
import ScrollToTop from "@/components/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <PetalCanvas />
      <Navbar />
      <div className="flex-1">
        <Outlet /> {/* Nested routes render here */}
      </div>
      <Footer />
      <CartSidebar />
    </div>
  );
}
