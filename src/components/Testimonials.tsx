import { motion } from "motion/react";
import { Star, Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    name: "Neerav Patel",
    role: "Student (Delhi University)",
    location: "New Delhi",
    quote: "As a college student moving cities, finding a PG was stressful. Every agent tried to scam me with stock photos. On Inhaby, the photos matched the room 100% when I checked in. Trusting the platform was the best decision I made.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80",
    whyTrusted: "Verified Real Photos",
  },
  {
    name: "Priya Nair",
    role: "UX Architect at TechCorp",
    location: "Koramangala, Bangalore",
    quote: "I saved over ₹45,000 in brokerage. The direct chat with Mr. Sharma (the owner) was fast, friendly, and transparent. We drafted the digital lease agreement on the app in under 10 minutes. Absolute world-class experience!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    whyTrusted: "Zero Brokerage & Direct Chat",
  },
  {
    name: "The Mukherjees",
    role: "Family of Three",
    location: "DLF Phase 3, Gurgaon",
    quote: "Renting with children is tough because of surprise landlord rules and hidden society fees. Inhaby checked the society NOCs and utility bills beforehand. The locked-in price was exactly what we paid. No surprises.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=120&q=80",
    whyTrusted: "Transparent locked Pricing",
  },
  {
    name: "Col. V.S. Rao (Retd.)",
    role: "Retired Defense Landlord",
    location: "Indiranagar, Bangalore",
    quote: "I didn't want brokers harassing me with dozens of spam calls daily. Inhaby physically verified my 2BHK flat, checked the tenant's employment documents, and connected me directly with polite working professionals. Safest way to rent.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    whyTrusted: "Verified Tenant Profiles",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Visual background accents */}
      <div className="absolute top-[20%] left-[-5%] w-80 h-80 bg-primary/3 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[350px] h-[350px] bg-primary/2 rounded-full blur-[110px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary-soft rounded-full border border-primary/10">
            Loved By Thousands
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Why our community trusts INHABY
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From students stepping out of their hometowns to families settling into premium flats—here are the real stories behind Inhaby's trusted rental revolution.
          </p>
        </motion.div>

        {/* Testimonial Bento-inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 bg-background border border-border rounded-[2rem] hover:border-primary/20 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Top Quote Icon */}
              <div className="absolute top-8 right-8 text-primary/10">
                <Quote className="w-12 h-12 stroke-[3]" />
              </div>

              <div>
                {/* Gold Rating Stars */}
                <div className="flex space-x-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-foreground text-sm font-medium leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* User Bio Card footer */}
              <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-border shrink-0">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-foreground">{t.name}</h4>
                    <p className="text-[11px] text-muted-foreground font-semibold">{t.role} • {t.location}</p>
                  </div>
                </div>

                {/* Trusted Badge sticker */}
                <div className="px-3 py-1 bg-primary-soft text-primary rounded-full text-[10px] font-extrabold uppercase tracking-wide flex items-center space-x-1">
                  <ShieldCheck className="w-3 h-3 fill-current" />
                  <span>{t.whyTrusted}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
