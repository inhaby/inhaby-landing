import { motion } from "motion/react";
<<<<<<< HEAD
import { Search, ShieldCheck, MessageSquare, Calendar, FileText, Home, ArrowRight, ArrowDown } from "lucide-react";

const steps = [
  {
    title: "Search Home",
    description: "Browse 100% real and verified listings with high-resolution actual photos.",
    icon: Search,
    badge: "Browse",
  },
  {
    title: "Property Verification",
    description: "Our team verifies documents and physically inspects listings.",
    icon: ShieldCheck,
    badge: "Verified",
  },
  {
    title: "Chat With Owner",
    description: "Connect directly with verified landlords without intermediate agents.",
    icon: MessageSquare,
    badge: "Direct",
  },
  {
    title: "Book Visit",
    description: "Schedule visits easily on dates that work for you.",
    icon: Calendar,
    badge: "Tours",
  },
  {
    title: "Digital Agreement",
    description: "Complete paperless, legal lease agreements within the app.",
    icon: FileText,
    badge: "Legal",
  },
  {
    title: "Move In",
    description: "Collect keys and move into your clean, trusted home.",
    icon: Home,
    badge: "Unpack",
=======
import { Search, MessageCircle, Home } from "lucide-react";

const steps = [
  {
    title: "Search",
    description: "Browse curated homes that match your lifestyle and budget with ease.",
    icon: Search,
  },
  {
    title: "Connect",
    description: "Chat directly with verified owners and schedule visits instantly.",
    icon: MessageCircle,
  },
  {
    title: "Move In",
    description: "Sign digital agreements and move into your new home with total peace of mind.",
    icon: Home,
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
  },
];

export default function HowItWorks() {
  return (
<<<<<<< HEAD
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-background">
      {/* Living background circles inside the section */}
      <div className="absolute top-[30%] left-[5%] w-72 h-72 bg-primary/3 rounded-full blur-[90px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-80 h-80 bg-primary/2 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
=======
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary-soft rounded-full">
            E2E Seamless Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            A beautiful, connected visual journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From the moment you start searching to the day you unlock your front door, we back your rental journey with complete transparency.
          </p>
        </motion.div>

        {/* 6-Step Visual Journey Timeline */}
        <div className="relative">
          {/* Animated Connecting Timeline line (Desktop horizontal line) */}
          <div className="hidden xl:block absolute top-[68px] left-[10%] right-[10%] h-[3px] bg-border -z-10">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="h-full bg-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Visual Step bubble */}
                <div className="relative w-28 h-28 bg-background border-2 border-border rounded-[2rem] flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-300">
                  {/* Step number badge */}
                  <div className="absolute -top-1.5 -right-1.5 w-7 h-7 bg-muted text-muted-foreground rounded-xl flex items-center justify-center text-xs font-bold border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Outer circle spin effect on hover */}
                  <div className="absolute inset-2 border border-dashed border-muted-foreground/10 rounded-[1.5rem] group-hover:border-primary/20 group-hover:rotate-45 transition-all duration-700" />
                  
                  <step.icon className="w-9 h-9 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Badge */}
                <span className="text-[10px] font-extrabold tracking-widest text-primary bg-primary-soft px-2.5 py-0.5 rounded-full mb-3 uppercase opacity-90">
                  {step.badge}
                </span>

                {/* Step Text Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">{step.description}</p>
                
                {/* Connector Arrow for Mobile / Tablet */}
                {index < steps.length - 1 && (
                  <div className="xl:hidden mt-6 text-muted-foreground/30 animate-bounce">
                    <ArrowDown className="w-5 h-5 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emotionally reinforcing message banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 rounded-3xl bg-primary-soft/40 border border-primary/10 text-center max-w-3xl mx-auto"
        >
          <p className="text-base md:text-lg font-semibold text-foreground italic">
            "Every home deserves complete honesty. We guide you along a path built on verification and direct landlord transparency—so you never have to sign an agreement with uncertainty."
          </p>
        </motion.div>
=======
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            How it works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-border -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-background border-2 border-border rounded-full flex items-center justify-center mb-8 shadow-sm relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
      </div>
    </section>
  );
}
