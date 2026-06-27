import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

export default function TrustBanner() {
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="container px-5 sm:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Verify any INHABY Listing</h3>
              <p className="text-muted-foreground">Protect yourself from fraud. Check the verification status of any property.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <Link 
              to="/verify" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center"
            >
              Verify Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/savings" 
              className="w-full sm:w-auto px-8 py-4 bg-background border border-border text-foreground rounded-2xl font-bold hover:bg-muted transition-all flex items-center justify-center"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Savings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
