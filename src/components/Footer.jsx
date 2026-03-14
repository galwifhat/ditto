import { useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, Mail, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faFacebook,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";

const footerLinks = {
  Shop: [
    { label: "Body Butter", to: "/shop?category=body-butter" },
    { label: "Lotions & Creams", to: "/shop?category=lotions-creams" },
    { label: "Lip Balm", to: "/shop?category=lip-balm" },
    { label: "Hand & Foot", to: "/shop?category=hand-foot-cream" },
    { label: "Face Moisturizers", to: "/shop?category=face-moisturizer" },
    { label: "Stretch Mark Cream", to: "/shop?category=stretch-mark-cream" },
  ],
  Company: [
    { label: "About DITTO", to: "/about" },
    { label: "Our Ingredients", to: "/ingredients" },
    { label: "Sustainability", to: "/about#sustainability" },
    { label: "Press", to: "/about#press" },
  ],
  Support: [
    { label: "Contact Us", to: "/contact" },
    { label: "FAQ", to: "/contact#faq" },
    { label: "Shipping Policy", to: "/contact#shipping" },
    { label: "Returns", to: "/contact#returns" },
  ],
};

const socials = [
  { icon: faInstagram, label: "Instagram", href: "#" },
  { icon: faTiktok, label: "TikTok", href: "#" },
  { icon: faFacebook, label: "Facebook", href: "#" },
  { icon: faPinterest, label: "Pinterest", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're subscribed! Welcome to the DITTO family 🌿", {
      style: {
        background: "oklch(0.68 0.09 148)",
        color: "#fff",
        borderRadius: "12px",
      },
    });
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-1">Join the DITTO Community</h3>
              <p className="text-white/60 text-sm">
                Get 10% off your first order + skincare tips, new launches, and exclusive offers.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex gap-2 w-full max-w-md"
            >
              <div className="flex-1 flex items-center bg-white/10 border border-white/20 rounded-xl px-4">
                <Mail className="w-4 h-4 text-white/40 mr-2 flex-shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-transparent text-white placeholder-white/40 text-sm py-3 outline-none w-full"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold flex items-center gap-1.5 hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">DITTO</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Premium natural skincare for every body. Crafted with ingredients from nature, tested by dermatologists, loved by thousands.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-semibold text-sm text-white mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 mt-10 border-t border-white/10 text-xs text-white/40">
          <p>© {new Date().getFullYear()} DITTO Skincare. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
