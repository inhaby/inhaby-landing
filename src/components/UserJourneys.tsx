import { motion } from "motion/react";
import { ArrowRight, Home, Building2, CheckCircle2, Sparkles } from "lucide-react";

export default function UserJourneys() {
  return (
    <section id="user-journeys" className="py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Soft abstract lighting */}
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] bg-primary/4 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-primary/4 rounded-full blur-[90px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full border border-primary/25 mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Dual Gateways</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground font-sans leading-tight">
            How do you want to use INHABY?
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg font-medium">
            Select your specific path. We have custom-built systems designed for both sides of India's rental market.
          </p>
        </div>

        {/* Two Equal-Width Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Journey 1: Looking for a Home (Slightly more emphasized) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-background border-[2px] border-primary rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(var(--primary),0.12)] shadow-primary/10 flex flex-col justify-between group overflow-hidden"
          >
            {/* Visual background gradient for active emphasis */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div>
              {/* Premium Badge indicating active emphasis */}
              <div className="flex justify-between items-center mb-8">
                <div className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                  <Home className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 bg-primary/15 text-primary text-[10px] font-extrabold rounded-full uppercase tracking-wider">
                  Primary Pathway
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 tracking-tight flex items-center">
                <span className="mr-2">🏠</span>
                <span>Looking for a Home</span>
              </h3>
              <p className="text-muted-foreground text-sm font-semibold leading-relaxed mb-8">
                Skip the agent fees. Discover thousands of verified flats, PGs, and houses. Communicate directly with deed-verified owners.
              </p>

              {/* Requirement Bullet Points */}
              <ul className="space-y-4 mb-10">
                {[
                  "Browse verified listings.",
                  "Connect directly with owners.",
                  "Book visits.",
                  "Move in confidently."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-semibold text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://inhaby.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-14 bg-primary hover:opacity-90 text-primary-foreground font-extrabold text-center flex items-center justify-center space-x-2 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </motion.div>

          {/* Journey 2: Want to Rent Out Your Property */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative bg-background border border-primary/20 rounded-[2.5rem] p-8 md:p-12 shadow-md hover:border-primary transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="px-3.5 py-1 bg-primary/15 text-primary text-[10px] font-extrabold rounded-full uppercase tracking-wider">
                  Landlords
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 tracking-tight flex items-center">
                <span className="mr-2">🏡</span>
                <span>List Your Property</span>
              </h3>
              <p className="text-muted-foreground text-sm font-semibold leading-relaxed mb-8">
                Publish listings to a massive pre-verified tenant base. Keep track of lead verifications, coordinate walkthroughs, and create legal digital leases.
              </p>

              {/* Requirement Bullet Points */}
              <ul className="space-y-4 mb-10">
                {[
                  "Create listings.",
                  "Manage enquiries.",
                  "Track verification.",
                  "Reach trusted tenants."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-semibold text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70 mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://owner.inhaby.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-14 bg-background border border-primary/30 text-primary hover:text-primary-foreground hover:bg-primary font-extrabold text-center flex items-center justify-center space-x-2 rounded-2xl transition-all hover:-translate-y-0.5"
            >
              <span>Go to Owner Portal</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
