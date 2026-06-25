<<<<<<< HEAD
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowRight, ShieldCheck, Home } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all">
      <div className="container px-6 py-4 mx-auto flex justify-between items-center">
        {/* Left: INHABY Logo */}
        <Link to="/" className="hover:opacity-90 transition-opacity flex items-center">
          <Logo className="h-9 md:h-10" />
        </Link>
        
        {/* Center: Main Links */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-muted-foreground">
          <Link to="/listings" className="hover:text-primary transition-colors">Browse Listings</Link>
          <a href="/#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
          <a href="/#trust" className="hover:text-primary transition-colors">Trust</a>
          <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <a href="/#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        
        {/* Right: Portal CTAs */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://owner.inhaby.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground border border-border rounded-xl hover:bg-muted transition-all"
          >
            List Your Property
          </a>
          <motion.a
            href="https://inhaby.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 text-xs font-bold text-primary-foreground bg-primary rounded-xl shadow-md shadow-primary/10 hover:bg-primary/90 transition-all flex items-center space-x-1"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-6 flex flex-col">
              {/* Menu Links */}
              <div className="flex flex-col space-y-4">
                <Link
                  to="/listings"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-foreground hover:text-primary py-1 transition-colors"
                >
                  Browse Listings
                </Link>
                <a
                  href="/#how-it-works"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-foreground hover:text-primary py-1 transition-colors"
                >
                  How it Works
                </a>
                <a
                  href="/#trust"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-foreground hover:text-primary py-1 transition-colors"
                >
                  Trust
                </a>
                <Link
                  to="/pricing"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-foreground hover:text-primary py-1 transition-colors"
                >
                  Pricing
                </Link>
                <a
                  href="/#faq"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-foreground hover:text-primary py-1 transition-colors"
                >
                  FAQ
                </a>
              </div>

              {/* Action Buttons Stack (optimized for 48px touch targets) */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <a
                  href="https://inhaby.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full h-12 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg shadow-primary/10 hover:bg-primary/90 transition-all text-sm"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://owner.inhaby.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-12 bg-background border border-border text-muted-foreground hover:text-foreground font-bold rounded-xl hover:bg-muted transition-all text-sm"
                >
                  List Your Property
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
=======
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-6 py-4 mx-auto flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo className="h-10" />
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
          <Link to="/listings" className="hover:text-primary transition-colors font-bold text-foreground">Browse Listings</Link>
          <Link to="/verify" className="hover:text-primary transition-colors">Verify Listing</Link>
          <a href="/#trust" className="hover:text-primary transition-colors">Trust</a>
          <a href="/#how-it-works" className="hover:text-primary transition-colors">How it works</a>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 text-sm font-semibold text-primary-foreground bg-primary rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
        >
          Get the App
        </motion.button>
      </div>
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
    </nav>
  );
}
