// App.jsx/router.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Ingredients from "@/pages/Ingredients";
import ProductDetail from "@/pages/ProductDetail";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Your layout wraps all children
    errorElement: <NotFound />, // renders if route not found or loader throws
    children: [
      { index: true, element: <Home /> }, // "/" route
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "ingredients", element: <Ingredients /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "*", element: <NotFound /> }, // Catch-all 404
    ],
  },
]);
