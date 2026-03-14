import { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, Send } from "lucide-react";
import toast from "react-hot-toast";

const faqs = [
  {
    q: "Are all DITTO products safe for sensitive skin?",
    a: "Yes! All our products are dermatologist-tested and formulated to be gentle on sensitive skin. We avoid common irritants like parabens, sulfates, and artificial fragrances.",
  },
  {
    q: "Are your products safe to use during pregnancy?",
    a: "Our Belly & Beyond Stretch Mark Cream is specifically formulated to be pregnancy-safe. For other products, we recommend checking with your healthcare provider. We avoid retinoids and salicylic acid in our pregnancy-safe line.",
  },
  {
    q: "What's your shipping policy?",
    a: "We offer free standard shipping on all orders over $50. Orders typically ship within 1-2 business days and arrive in 5-7 business days for standard shipping.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes! We ship to over 30 countries. International shipping rates and times vary by destination. Orders over $75 qualify for free international shipping.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day satisfaction guarantee. If you're not happy with your product for any reason, contact us and we'll make it right — exchange, store credit, or full refund.",
  },
  {
    q: "Are your products tested on animals?",
    a: "Never. DITTO is proudly cruelty-free and certified by Leaping Bunny. We will never test on animals, and neither do our ingredient suppliers.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-accent/50 transition-colors"
      >
        <span className="font-medium text-foreground text-sm">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border bg-accent/20">
          <div className="pt-4">{a}</div>
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent! We'll get back to you within 24 hours. 💌", {
      style: {
        background: "oklch(0.57 0.13 42)",
        color: "#fff",
        borderRadius: "12px",
      },
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-50 via-ditto-cream to-rose-50/40 pt-28 pb-16 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            We&apos;d Love to <span className="text-primary">Hear From You</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Questions, feedback, or just want to say hi? Our team usually responds within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">Contact Info</h2>
            {[
              { icon: Mail, label: "Email", value: "dittobodycream@gmail.com" },
              { icon: Phone, label: "Phone", value: "+254 723 277 604" },
              { icon: MapPin, label: "Address", value: "Kahawa Sukari, Nairobi, Kenya" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">{label}</p>
                  <p className="text-sm text-foreground">{value}</p>
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-ditto-sage-light/50 border border-ditto-sage/20 mt-6">
              <p className="text-sm font-semibold text-foreground mb-1">Business Hours</p>
              <p className="text-sm text-muted-foreground">Mon – Fri: 9am – 6pm (GMT)</p>
              <p className="text-sm text-muted-foreground">Sat: 10am – 2pm (GMT)</p>
              <p className="text-sm text-muted-foreground">Sun: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-3xl p-8">
              <h2 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us more..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-sm hover:bg-primary/90 disabled:opacity-60 transition-all shadow-lg shadow-primary/20"
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20" id="faq">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
