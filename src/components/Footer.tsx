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
    ],
  },
  {
    title: "Company",
    links: [
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
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" },
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
                </button>
              </form>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center text-center lg:text-right">
            <h3 className="text-3xl font-bold text-foreground mb-6 max-w-[280px] lg:max-w-none">
              Feel free to reach us at:
            </h3>
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-muted border border-border rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer group">
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold text-foreground">support@inhaby.com</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
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
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2 }}
                className="w-9 h-9 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary-soft transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
