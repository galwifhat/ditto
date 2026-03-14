import { Leaf, Heart, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const milestones = [
  { year: "2018", event: "DITTO was founded in a small kitchen with a single body butter recipe." },
  { year: "2020", event: "Expanded to 6 product lines after overwhelming customer demand." },
  { year: "2022", event: "Achieved cruelty-free certification and launched sustainable packaging." },
  { year: "2024", event: "Reached 50,000+ happy customers across 30+ countries." },
];

const team = [
  { name: "Amara Osei", role: "Founder & CEO", img: "https://picsum.photos/seed/team1/200/200" },
  { name: "Dr. Priya Rao", role: "Head of Formulation", img: "https://picsum.photos/seed/team2/200/200" },
  { name: "Zara Ahmed", role: "Creative Director", img: "https://picsum.photos/seed/team3/200/200" },
];

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-amber-50 via-ditto-cream to-rose-50/40 pt-28 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-5">
            Skincare Born From{" "}
            <span className="text-primary">Nature & Necessity</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            DITTO was created by someone who couldn&apos;t find skincare that worked — so she made her own. Today, we share those formulas with the world.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Making Natural Skincare Accessible to Everyone
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                We believe beautiful skin shouldn&apos;t require a chemistry degree or a luxury budget. DITTO was built on the idea that the best ingredients come from nature — and nature doesn&apos;t charge a premium.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every product is crafted in small batches, dermatologist-tested, and made without the nasties you&apos;ll find in conventional skincare. We&apos;re not trying to be the biggest brand — we&apos;re trying to be the best one for you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Leaf, label: "100% Natural", color: "text-ditto-sage bg-ditto-sage-light" },
                  { icon: Heart, label: "Cruelty-Free", color: "text-rose-600 bg-rose-50" },
                  { icon: Globe, label: "Sustainably Sourced", color: "text-emerald-600 bg-emerald-50" },
                  { icon: Award, label: "Derm Tested", color: "text-blue-600 bg-blue-50" },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className={`flex items-center gap-3 p-3 rounded-xl ${color.split(" ")[1]}`}>
                    <Icon className={`w-5 h-5 ${color.split(" ")[0]}`} />
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square bg-accent">
              <img
                src="https://picsum.photos/seed/about-hero/600/600"
                alt="DITTO founder in lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-ditto-cream/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              From Kitchen to <span className="text-primary">50K Customers</span>
            </h2>
          </div>
          <div className="space-y-6">
            {milestones.map(({ year, event }, i) => (
              <div key={year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <span className="text-xs font-bold text-primary-foreground">{year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-10 bg-border mt-2" />
                  )}
                </div>
                <div className="pt-2.5">
                  <p className="text-foreground leading-relaxed">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-3 block">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 tracking-tight">
            The Humans Behind <span className="text-primary">DITTO</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map(({ name, role, img }) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <img
                  src={img}
                  alt={name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{name}</p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
            Ready to Meet Your New Skincare Ritual?
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            Explore our full collection and find your perfect match.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-2xl font-semibold hover:bg-white transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
