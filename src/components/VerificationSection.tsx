import { motion } from "motion/react";
import { CheckCircle2, Shield, Upload, FileText, Camera, UserCheck, Award, Eye, ArrowRight } from "lucide-react";

const verificationSteps = [
  {
    title: "1. Property Submitted",
    desc: "Landlord initiates upload including details, rent amount, and original photos.",
    icon: Upload,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    title: "2. Owner Identity Verification",
    desc: "Government IDs, ownership history, and contact numbers are thoroughly cross-checked.",
    icon: UserCheck,
    color: "text-purple-500 bg-purple-500/10",
  },
  {
    title: "3. Document Verification",
    desc: "Verification of title deeds, society NOCs, and municipal records to confirm legal rights.",
    icon: FileText,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    title: "4. Property Review",
    desc: "Our verification team reviews safety, layout pricing reasonableness, and history.",
    icon: Shield,
    color: "text-orange-500 bg-orange-500/10",
  },
  {
    title: "5. Photo Verification",
    desc: "Original photos are inspected or physically captured to guarantee 100% room match.",
    icon: Camera,
    color: "text-sky-500 bg-sky-500/10",
  },
  {
    title: "6. Approved",
    desc: "The property matches all trust checklist requirements and is stamped as a trusted listing.",
    icon: Award,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    title: "7. Published as Verified",
    desc: "Goes live to thousands of renters with direct connection, zero brokerage, and locked pricing.",
    icon: Eye,
    color: "text-primary bg-primary/10",
  },
];

export default function VerificationSection() {
  return (
    <section className="py-24 bg-muted/50 border-t border-b border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Section Left Content - Sticky Info Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-6">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase bg-primary-soft rounded-full border border-primary/10">
              The Gold Standard
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl leading-[1.15]">
              How we verify every single home
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              We do not believe in unchecked property listings. Every home listed on INHABY undergoes our rigorous 7-step physical and document verification protocol.
            </p>
            
            <div className="p-6 rounded-2xl bg-background border border-border/60 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Complete Owner Guarantee</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  If any listing proves to be inaccurate during your scheduled visit, we reimburse your travel costs. That is how confident we are in our verified listings.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-xs font-bold text-primary">
              <span>Why trust us? Read our guarantee</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Section Right Content - Interactive Workflow Steps */}
          <div className="lg:col-span-7 relative">
            {/* Connected track line */}
            <div className="absolute left-[34px] top-6 bottom-6 w-[2px] bg-border" />
            
            <div className="space-y-8">
              {verificationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative flex items-start space-x-6 group"
                >
                  {/* Step Icon and Outer ring wrapper */}
                  <div className="relative z-10 w-[70px] h-[70px] bg-background border border-border rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/20 group-hover:shadow-md transition-all duration-300">
                    {/* Animated Pulse Ring on active/last steps */}
                    {index === 5 && (
                      <span className="absolute -inset-1 rounded-2xl bg-emerald-500/10 animate-ping opacity-60" />
                    )}
                    <div className={`p-3 rounded-xl ${step.color}`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step details content */}
                  <div className="pt-2 bg-background/50 hover:bg-background/80 p-5 rounded-2xl border border-transparent hover:border-border hover:shadow-sm transition-all duration-300 w-full">
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
