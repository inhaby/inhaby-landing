import { motion } from "motion/react";
import { Link } from "react-router-dom";
import AppBadge from "./AppBadge";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
          <div className="max-w-2xl lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-primary uppercase bg-primary-soft rounded-full">
                Introducing INHABY
              </span>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Find trusted homes with <span className="text-primary">total clarity</span>
              </h1>
              <p className="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl">
                The premium rental platform for modern living. Discover verified apartments, PGs, and rooms without the clutter of traditional listings.
              </p>
              
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start mb-8">
                <Link 
                  to="/listings" 
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 transition-all text-center"
                >
                  Browse Listings
                </Link>
                <div className="flex space-x-4 justify-center">
                  <AppBadge type="apple" />
                  <AppBadge type="google" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative mt-16 lg:mt-0 lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[320px] md:max-w-[400px]"
            >
              {/* iPhone Mockup Frame */}
              <div className="relative z-10 p-4 bg-slate-900 rounded-[3rem] shadow-2xl border-[8px] border-slate-800">
                <div className="overflow-hidden bg-white rounded-[2rem] aspect-[9/19.5] relative">
                  {/* App UI Placeholder */}
                  <div className="absolute inset-0 bg-white">
                    {/* Status Bar */}
                    <div className="h-10 px-6 flex justify-between items-end pb-2">
                      <div className="text-[10px] font-bold text-slate-900">9:41</div>
                      <div className="flex space-x-1">
                        <div className="w-3 h-2 bg-slate-900 rounded-sm"></div>
                        <div className="w-3 h-2 bg-slate-900 rounded-sm"></div>
                        <div className="w-5 h-2 bg-slate-900 rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-8">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">H</div>
                        <div className="w-10 h-10 bg-slate-50 rounded-full border border-slate-100"></div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <div className="h-6 w-3/4 bg-slate-900 rounded-md"></div>
                          <div className="h-3 w-1/2 bg-slate-300 rounded-md"></div>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="h-12 w-full bg-slate-50 border border-slate-100 rounded-xl flex items-center px-4">
                          <div className="w-4 h-4 bg-slate-300 rounded-full mr-3"></div>
                          <div className="h-2 w-24 bg-slate-200 rounded"></div>
                        </div>

                        {/* Property Card */}
                        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                          <div className="aspect-[4/3] bg-slate-100 relative">
                             <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full"></div>
                          </div>
                          <div className="p-4 space-y-2 text-slate-900">
                            <div className="flex justify-between">
                              <div className="h-4 w-24 bg-slate-900 rounded"></div>
                              <div className="h-4 w-12 bg-primary rounded"></div>
                            </div>
                            <div className="h-3 w-32 bg-slate-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tab Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-100 px-8 flex justify-between items-center">
                      <div className="w-6 h-6 bg-primary rounded-md"></div>
                      <div className="w-6 h-6 bg-slate-200 rounded-md"></div>
                      <div className="w-6 h-6 bg-slate-200 rounded-md"></div>
                      <div className="w-6 h-6 bg-slate-200 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl opacity-50 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
