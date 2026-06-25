<<<<<<< HEAD
import { useState } from "react";
import { motion } from "motion/react";
import { Twitter, Instagram, Linkedin, Github, Mail, Globe, Sun, Moon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Logo from "./Logo";

const footerColumns = [
  {
    title: "Products",
    links: [
      { name: "Tenant Portal", href: "https://inhaby.com", external: true },
      { name: "Owner Portal", href: "https://owner.inhaby.com", external: true },
      { name: "Verification", href: "/verify", external: false },
      { name: "Pricing", href: "/pricing", external: false },
      { name: "Support Desk", href: "mailto:support@inhaby.com", external: true },
=======
import { motion } from "motion/react";
import { Twitter, Instagram, Linkedin, Github, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Rent Homes", href: "/listings" },
      { name: "List Property", href: "#" },
      { name: "Verify Listing", href: "/verify" },
      { name: "Verified Owners", href: "/verified-owners" },
      { name: "Pricing", href: "/pricing" },
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
    ],
  },
  {
    title: "Company",
    links: [
<<<<<<< HEAD
      { name: "About Inhaby", href: "#", external: false },
      { name: "Our Mission", href: "#", external: false },
      { name: "Careers (Hiring!)", href: "#", external: false },
      { name: "Press Room", href: "#", external: false },
      { name: "Contact Verification", href: "#", external: false },
=======
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "News", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Safety Guide", href: "#" },
      { name: "Rental Tips", href: "#" },
      { name: "Community", href: "#" },
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
    ],
  },
  {
    title: "Legal",
    links: [
<<<<<<< HEAD
      { name: "Privacy Policy", href: "#", external: false },
      { name: "Terms of Service", href: "#", external: false },
      { name: "E-Stamp Integrity", href: "#", external: false },
      { name: "Security Protocols", href: "#", external: false },
=======
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" },
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
<<<<<<< HEAD
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState("English");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  return (
    <footer className="bg-background border-t border-border pt-20 pb-12 relative z-10">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <Logo className="h-10 mb-4" />
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-md">
                Helping people rent homes in India with complete trust, document verification, price transparency, and zero brokerage.
              </p>
              <div className="inline-flex items-center space-x-2 mt-4 text-primary font-bold text-xs tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Live Better. Stay Smarter.</span>
              </div>
            </div>
            
            {/* Newsletter form */}
            <div className="space-y-4">
              <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider">Stay Verified & Updated</h4>
              <p className="text-xs text-muted-foreground font-semibold">Join 15,000+ renters. Receive premium landlord listings and safety tips directly.</p>
              <form className="flex max-w-md bg-muted p-1 border border-border rounded-2xl" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-grow flex items-center">
                  <Mail className="absolute left-3.5 w-4 h-4 text-muted-foreground" />
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full pl-10 pr-4 py-3 bg-transparent text-sm text-foreground outline-none border-none font-semibold focus:ring-0 placeholder:text-muted-foreground/60"
                  />
                </div>
                <button className="px-6 py-3 bg-primary text-primary-foreground text-xs font-extrabold rounded-xl hover:bg-primary/90 transition-colors shadow-sm">
                  Subscribe
=======
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand and Newsletter */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <Logo className="h-12 mb-4" />
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-md">
                The premium rental platform for modern living. Finding trusted homes with total clarity and zero brokerage.
              </p>
              <p className="mt-2 text-primary font-semibold text-sm tracking-wide">
                "Live Better. Stay Smarter."
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">Get the latest rental tips and property news.</p>
              <form className="flex max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex-grow">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-l-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <button className="px-6 py-3 bg-foreground text-background text-sm font-semibold rounded-r-xl hover:bg-foreground/90 transition-colors">
                  Join
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
                </button>
              </form>
            </div>
          </div>

<<<<<<< HEAD
          {/* Contact coordinates section */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-6">
            <h3 className="text-2xl font-extrabold text-foreground max-w-sm tracking-tight leading-snug">
              Have a property to list? Let us verify it.
            </h3>
            <div className="inline-flex items-center space-x-3 px-6 py-3.5 bg-muted border border-border rounded-full hover:border-primary/20 transition-all cursor-pointer group">
              <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-extrabold text-foreground">support@inhaby.com</span>
=======
          {/* Contact Section */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center text-center lg:text-right">
            <h3 className="text-3xl font-bold text-foreground mb-6 max-w-[280px] lg:max-w-none">
              Feel free to reach us at:
            </h3>
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-muted border border-border rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-foreground">support@inhaby.com</span>
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
            </div>
          </div>
        </div>

        {/* Links Grid */}
<<<<<<< HEAD
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pt-16 border-t border-border/60">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider">{column.title}</h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
=======
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pt-16 border-t border-border/50">
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/") ? (
                      <Link 
                        to={link.href} 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
<<<<<<< HEAD

          {/* Custom Contact column in Footer */}
          <div className="space-y-4 text-left">
            <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider">Contact & Support</h4>
            <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
              Inhaby Support is active 24/7. Reach out via email or visit our offices:
            </p>
            <div className="text-xs text-foreground font-bold space-y-1">
              <p>Email: support@inhaby.com</p>
              <p>Corporate Hub: Indiranagar, Bangalore, KA</p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata row (Language, Theme Toggle, Social, Copyright) */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright, Language selector, and Theme Toggle */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs text-muted-foreground font-semibold">
            <span>© {new Date().getFullYear()} Inhaby Inc.</span>
            
            {/* Interactive Language dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1.5 cursor-pointer hover:text-primary transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-primary" />
                <span>{lang}</span>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute bottom-6 left-0 bg-background border border-border p-1.5 rounded-xl shadow-lg flex flex-col space-y-1 min-w-[100px] z-50">
                  {["English", "Hindi (हिन्दी)", "Kannada (ಕನ್ನಡ)"].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l.split(" ")[0]);
                        setIsLangDropdownOpen(false);
                      }}
                      className="text-[11px] font-semibold text-left px-2.5 py-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground w-full cursor-pointer"
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* In-Footer Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="flex items-center space-x-1.5 cursor-pointer hover:text-primary transition-colors"
              aria-label="Toggle theme appearance"
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-primary" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-primary" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Social Icons Links */}
          <div className="flex items-center space-x-4">
=======
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-6">
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} INHABY Inc. All rights reserved.
            </p>
            <div className="hidden md:flex items-center space-x-2 text-muted-foreground text-xs cursor-pointer hover:text-foreground transition-colors">
              <Globe className="w-3 h-3" />
              <span>English (US)</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2 }}
<<<<<<< HEAD
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary-soft transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>

=======
                className="w-9 h-9 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary-soft transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
>>>>>>> c1264eda7be93591894f3c675f2eb1367638f4bd
        </div>
      </div>
    </footer>
  );
}
