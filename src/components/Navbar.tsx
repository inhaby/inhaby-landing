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
    </nav>
  );
}
