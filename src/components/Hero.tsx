import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShieldCheck, Star, Shield, Home, Sparkles, Check, ChevronRight } from "lucide-react";

const stats = [
  { value: "15,000+", label: "Verified Homes", desc: "No fake listings" },
  { value: "98%", label: "Verification Accuracy", desc: "Manual deed matched" },
  { value: "50+", label: "Cities", desc: "Across India" },
  { value: "Zero", label: "Brokerage", desc: "No hidden charges" },
];

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden md:pt-32 md:pb-24 lg:pt-36 lg:pb-28">
      {/* Decorative blurred green glow and geometric circles behind the hero */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] -z-10 pointer-events-none opacity-80" />
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between gap-16 lg:gap-8">
          
          {/* Hero Left Content */}
          <div className="max-w-2xl lg:w-[55%] shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary uppercase bg-primary-soft rounded-full border border-primary/10">
                <span>Currently live in Metro Cities</span>
              </div>
              
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-sans">
                Find trusted homes <br className="hidden sm:inline" />
                with{" "}
                <span className="text-primary relative inline-block">
                  total clarity.
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-primary/20 rounded-full" />
                </span>
              </h1>
              
              <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-xl font-medium max-w-xl">
                Discover verified homes, connect directly with verified owners, and rent with confidence—without brokerage or hidden surprises.
              </p>
              
              <div className="space-y-4 mb-8 max-w-md mx-auto lg:mx-0">
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                  <a 
                    href="https://inhaby.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 h-[52px] bg-primary text-primary-foreground rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center flex items-center justify-center text-sm shadow-md"
                  >
                    Get Started
                    <ChevronRight className="w-5 h-5 ml-1.5" />
                  </a>
                  
                  <a 
                    href="https://owner.inhaby.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 h-[52px] bg-background border border-primary/35 text-primary hover:bg-primary-soft hover:border-primary rounded-2xl font-bold hover:-translate-y-0.5 active:translate-y-0 transition-all text-center flex items-center justify-center text-sm shadow-xs"
                  >
                    List Your Property
                  </a>
                </div>

                {/* Already own a property? subtle text link */}
                <div className="text-center lg:text-left">
                  <a 
                    href="https://owner.inhaby.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span>Already own a property? List it in minutes →</span>
                  </a>
                </div>
              </div>

              {/* Trust Badge Indicators right under CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 mb-12 text-xs font-semibold text-muted-foreground border-t border-border pt-6">
                <div className="flex items-center space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                  <span className="flex items-center"><Shield className="w-3.5 h-3.5 mr-1 text-primary" /> Every listing manually verified</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="flex items-center"><Check className="w-3.5 h-3.5 mr-1 text-primary" /> Zero brokerage. Zero surprises.</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="flex items-center"><Star className="w-3.5 h-3.5 mr-1 text-amber-500 fill-amber-500" /> Rent directly from verified owners</span>
                </div>
              </div>

              {/* Trust Indicators Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-4 bg-background/40 backdrop-blur-md rounded-2xl border border-border/80 hover:border-primary/20 hover:bg-background/80 transition-colors"
                  >
                    <div className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">{stat.value}</div>
                    <div className="text-xs font-bold text-muted-foreground mt-1 uppercase tracking-wide">{stat.label}</div>
                    <div className="text-[10px] text-muted-foreground/80 mt-0.5">{stat.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hero Right Content - Mobile Mockup and Premium Floating Cards */}
          <div className="relative lg:w-[45%] flex justify-center items-center">
            
            {/* Soft blurred green glow behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/15 rounded-full blur-[80px] -z-10 pointer-events-none" />
            
            {/* Low-opacity geometric concentric circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-primary/5 -z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-primary/3 -z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-primary/2 -z-10 pointer-events-none" />
            
            {/* Vertical Slow Floating Phone Wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[280px] xs:max-w-[320px] md:max-w-[380px] z-10"
            >
              {/* Phone Body with premium shadow depth */}
              <div className="relative p-3 bg-slate-950 rounded-[48px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] border-slate-900 overflow-hidden">
                {/* Dynamic Island style header notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-full z-20 flex items-center justify-between px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-950/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950/40" />
                </div>

                <div className="overflow-hidden bg-background rounded-[38px] aspect-[9/19.5] relative">
                  {/* Real-looking iOS / Inhaby App UI */}
                  <div className="absolute inset-0 flex flex-col bg-background">
                    
                    {/* App Header Status Line */}
                    <div className="h-12 px-6 pt-3 flex justify-between items-center text-[11px] font-bold text-foreground">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2.5 h-2 bg-foreground rounded-sm opacity-90" />
                        <span className="w-3.5 h-2.5 bg-foreground rounded-sm opacity-90" />
                      </div>
                    </div>
                    
                    {/* App Body */}
                    <div className="flex-1 p-5 overflow-hidden flex flex-col justify-between">
                      <div>
                        {/* Custom App Header */}
                        <div className="flex justify-between items-center mb-6">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-extrabold text-sm shadow-md shadow-primary/20">I</div>
                            <span className="font-bold text-sm tracking-tight">Inhaby Portal</span>
                          </div>
                          <div className="w-8 h-8 bg-muted rounded-full border border-border flex items-center justify-center">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          </div>
                        </div>

                        {/* Search Title */}
                        <div className="space-y-1 mb-4">
                          <h3 className="text-lg font-extrabold tracking-tight text-foreground leading-tight">Find Verified Homes</h3>
                          <p className="text-[10px] text-muted-foreground font-medium">Direct connection with real owners</p>
                        </div>

                        {/* Search Mockup */}
                        <div className="h-10 w-full bg-muted border border-border rounded-xl flex items-center px-3.5 mb-5">
                          <div className="w-3 h-3 border-2 border-muted-foreground rounded-full mr-2.5" />
                          <div className="text-[10px] text-muted-foreground font-semibold">Search PGs, Rooms, Flats...</div>
                        </div>

                        {/* Premium Property Listing Mockup inside app */}
                        <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
                          <div className="aspect-[4/3] bg-muted relative">
                            <img 
                              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80" 
                              alt="Premium Verified Room" 
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                            {/* Verified listing badge */}
                            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-primary text-[8px] font-extrabold text-primary-foreground rounded-full flex items-center space-x-1 shadow-sm uppercase tracking-wider">
                              <ShieldCheck className="w-2.5 h-2.5 fill-current text-primary-foreground" />
                              <span>Verified</span>
                            </div>
                            <div className="absolute top-2.5 right-2.5 w-6 h-6 bg-background/85 backdrop-blur-sm rounded-full flex items-center justify-center text-[10px] font-bold text-foreground">
                              ⭐4.9
                            </div>
                          </div>
                          <div className="p-3.5 space-y-1.5">
                            <div className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-muted-foreground">Koramangala, Bangalore</span>
                              <span className="text-xs font-extrabold text-primary">₹18,500/mo</span>
                            </div>
                            <h4 className="text-[11px] font-extrabold text-foreground truncate">Luxury 1BHK • No Brokerage</h4>
                            <div className="flex items-center space-x-2 pt-1 border-t border-border">
                              <div className="w-4 h-4 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[8px] font-extrabold">✓</div>
                              <span className="text-[9px] text-muted-foreground font-semibold">Direct Owner Verified</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* App Navigation Tabbar */}
                      <div className="h-14 border-t border-border flex justify-between items-center px-4 -mx-5 -mb-5 bg-background">
                        <div className="flex flex-col items-center space-y-0.5">
                          <Home className="w-4 h-4 text-primary" />
                          <span className="text-[8px] font-bold text-primary">Explore</span>
                        </div>
                        <div className="flex flex-col items-center space-y-0.5 opacity-40">
                          <Shield className="w-4 h-4 text-foreground" />
                          <span className="text-[8px] font-bold text-foreground">Verify</span>
                        </div>
                        <div className="flex flex-col items-center space-y-0.5 opacity-40">
                          <Star className="w-4 h-4 text-foreground" />
                          <span className="text-[8px] font-bold text-foreground">Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING UI CARD 1: ✓ Verified Owner */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] -left-[10%] md:-left-[18%] bg-background/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-primary/20 shadow-xl hidden sm:flex items-center space-x-2 z-20"
              >
                <div className="w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-extrabold text-foreground">Verified Owner</div>
                  <div className="text-[9px] text-muted-foreground font-medium">Deed Matched</div>
                </div>
              </motion.div>

              {/* FLOATING UI CARD 2: No Brokerage */}
              <motion.div
                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[20%] -left-[12%] md:-left-[20%] bg-background/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-primary/20 shadow-xl hidden sm:flex items-center space-x-2 z-20"
              >
                <div className="w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-extrabold text-foreground">No Brokerage</div>
                  <div className="text-[9px] text-muted-foreground font-medium">Direct Contract</div>
                </div>
              </motion.div>

              {/* FLOATING UI CARD 3: ⭐ 4.9 User Rating */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, -3, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-[30%] -right-[8%] md:-right-[14%] bg-background/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-primary/10 shadow-xl hidden sm:flex items-center space-x-2 z-20"
              >
                <div className="w-7 h-7 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                  ⭐
                </div>
                <div>
                  <div className="text-xs font-extrabold text-foreground">4.9 User Rating</div>
                  <div className="text-[9px] text-muted-foreground font-medium">Verified Reviews</div>
                </div>
              </motion.div>

              {/* FLOATING UI CARD 4: ✓ Verified Listing */}
              <motion.div
                animate={{ y: [0, 7, 0], x: [0, 5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-[12%] -right-[10%] md:-right-[16%] bg-background/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-primary/20 shadow-xl hidden sm:flex items-center space-x-2.5 z-20"
              >
                <div className="w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-extrabold text-foreground">Verified Listing</div>
                  <div className="text-[9px] text-muted-foreground font-medium">Manual Check</div>
                </div>
              </motion.div>

              {/* FLOATING UI CARD 5: Verified Today */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[3%] right-[10%] bg-primary text-primary-foreground px-3.5 py-1.5 rounded-full shadow-lg hidden sm:flex items-center space-x-1.5 z-30 text-[10px] font-extrabold uppercase tracking-wider"
              >
                <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-ping" />
                <span>Verified Today</span>
              </motion.div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
