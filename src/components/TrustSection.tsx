import { motion } from "motion/react";
import { Camera, ShieldCheck, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const trustCards = [
  {
    title: "Real Photos",
    description: "Every listing is verified with high-quality, actual photos of the property. No misleading wide-angle shots.",
    icon: Camera,
    color: "bg-primary-soft text-primary",
    link: "/photos"
  },
  {
    title: "Verified Owners",
    description: "We verify every landlord and property manager to ensure you're dealing with trusted individuals.",
    icon: ShieldCheck,
    color: "bg-primary-soft text-primary",
    link: "/verified-owners"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or surprise maintenance costs. What you see is exactly what you pay.",
    icon: Tag,
    color: "bg-primary-soft text-primary",
    link: "/pricing"
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-muted">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Homes you can trust
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We've built INHABY to solve the biggest problems in rental markets: trust and transparency.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible no-scrollbar">
          {trustCards.map((card, index) => {
            const CardWrapper = card.link ? Link : "div";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] md:w-full"
              >
                <CardWrapper 
                  to={card.link || ""} 
                  className={`block h-full p-8 bg-background rounded-3xl shadow-sm border border-border hover:shadow-xl transition-all duration-300 group ${card.link ? "cursor-pointer hover:border-primary/30" : ""}`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center">
                    {card.title}
                    {card.link && <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  {card.link && (
                    <div className="mt-6 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      View Gallery
                    </div>
                  )}
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
