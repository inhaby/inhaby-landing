import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, BookOpen, Clock, Calendar, ArrowRight, Mail, Share2, 
  Copy, Check, ChevronRight, Sparkles, Star, Flame, User, 
  Award, Tag, Compass, Shield, ArrowUpRight, Bookmark, X,
  FileText, ArrowLeft, Send
} from "lucide-react";

// Curated high-EEAT editorial articles list with modern luxury architecture images
const EDITORIAL_ARTICLES = [
  {
    id: "scams-guide",
    slug: "the-zero-brokerage-revolution",
    title: "The Zero Brokerage Revolution: How to Rent a House in India Safely and Avoid Common Scams",
    category: "Safety",
    description: "Ditch the traditional broker. Learn the exact step-by-step security checks, land deed verifications, and red flags needed to rent in major Indian metros safely without paying a single rupee in commission.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Ishan Sharma",
      role: "Chief of Trust & Security",
      avatar: "IS",
    },
    publishedDate: "June 15, 2026",
    readingTime: "8 min read",
    trending: true,
    popular: true,
    tags: ["No Brokerage", "Rental Scams", "Legal Safeguards"]
  },
  {
    id: "legal-deeds",
    slug: "the-zero-brokerage-revolution",
    title: "How to Legally Verify a Rental Property: Vetting Land Deeds and Ownership",
    category: "Legal",
    description: "Discover the critical legal checks: how to verify Municipal Property Tax receipts, Registered Sale Deeds, and Power of Attorney documents before signing any tenancy contract in India.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Meera Nair",
      role: "Senior Legal Counsel",
      avatar: "MN",
    },
    publishedDate: "June 20, 2026",
    readingTime: "6 min read",
    trending: true,
    popular: true,
    tags: ["Land Deeds", "Property Verification", "Legal Checklists"]
  },
  {
    id: "move-in-tech",
    slug: "the-zero-brokerage-revolution",
    title: "Relocating to Bangalore or Pune? The Ultimate Tech-Tenant Move-In Checklist",
    category: "Rental Guides",
    description: "From optical fiber internet speed guarantees and green-certified solar energy meters to piped gas installations and society NOC regulations, here is a complete guide tailored for tech professionals.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Rohan Das",
      role: "Tenant Relations Manager",
      avatar: "RD",
    },
    publishedDate: "June 12, 2026",
    readingTime: "5 min read",
    trending: false,
    popular: true,
    tags: ["Co-living", "Move-in Checklist", "Smart Homes"]
  },
  {
    id: "model-tenancy",
    slug: "the-zero-brokerage-revolution",
    title: "Understanding the Model Tenancy Act: Your Fundamental Eviction & Repair Rights",
    category: "Legal",
    description: "An in-depth analysis of the new federal Model Tenancy Act. Understand your core rights regarding sudden rent hikes, emergency eviction procedures, and mandatory landlord maintenance obligations.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Ishan Sharma",
      role: "Chief of Trust & Security",
      avatar: "IS",
    },
    publishedDate: "May 28, 2026",
    readingTime: "10 min read",
    trending: true,
    popular: false,
    tags: ["Model Tenancy Act", "Tenant Rights", "Eviction Law"]
  },
  {
    id: "co-living-student",
    slug: "the-zero-brokerage-revolution",
    title: "Student Housing Secrets: Co-Living Hubs vs. Traditional Flatshares",
    category: "Student Housing",
    description: "We weigh the legal flexibility, utility overheads, security deposit rules, and community amenities of premium student co-living spaces against traditional group apartment shares.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Meera Nair",
      role: "Senior Legal Counsel",
      avatar: "MN",
    },
    publishedDate: "May 15, 2026",
    readingTime: "7 min read",
    trending: false,
    popular: false,
    tags: ["Student Living", "Flatsharing", "Co-Living"]
  },
  {
    id: "deposit-negotiation",
    slug: "the-zero-brokerage-revolution",
    title: "How to Negotiate Your Security Deposit Down in Premium Society Complexes",
    category: "Budgeting",
    description: "Avoid paying a massive 10-month rental advance. Use these three legal negotiation scripts to cap your security deposit to a standard 2 to 3 months and secure paint deduction clauses.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Rohan Das",
      role: "Tenant Relations Manager",
      avatar: "RD",
    },
    publishedDate: "April 30, 2026",
    readingTime: "6 min read",
    trending: false,
    popular: true,
    tags: ["Security Deposit", "Negotiation Scripts", "Financial Tips"]
  }
];

// Available blog categories
const CATEGORIES = [
  "All Articles",
  "Safety",
  "Legal",
  "Rental Guides",
  "Student Housing",
  "Budgeting"
];

// All tag suggestions
const ALL_TAGS = [
  "No Brokerage",
  "Rental Scams",
  "Legal Safeguards",
  "Property Verification",
  "Tenant Rights",
  "Smart Homes",
  "Negotiation Scripts",
  "Co-Living"
];

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Articles");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Filter logic
  const filteredArticles = useMemo(() => {
    return EDITORIAL_ARTICLES.filter((article) => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = 
        selectedCategory === "All Articles" || 
        article.category === selectedCategory;

      const matchesTag = 
        !selectedTag || 
        article.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  // Featured Masterpiece (usually the top primary guide)
  const primaryFeatured = EDITORIAL_ARTICLES[0];

  // Popular reads sidebar list
  const popularArticles = useMemo(() => {
    return EDITORIAL_ARTICLES.filter(a => a.popular);
  }, []);

  // Trending reads list
  const trendingArticles = useMemo(() => {
    return EDITORIAL_ARTICLES.filter(a => a.trending);
  }, []);

  // Handle bookmarking toggle
  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarkedIds((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Handle link sharing copy
  const handleCopyLink = (slug: string, id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const fullUrl = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setNewsletterEmail("");
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  // Clear all filters easily
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Articles");
    setSelectedTag(null);
  };

  return (
    <div className="bg-background min-h-screen text-foreground relative pt-20">
      
      {/* Editorial Decorative Background Details */}
      <div className="absolute top-[8%] right-[5%] w-[450px] h-[450px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[50%] left-[-10%] w-[550px] h-[550px] bg-primary/3 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="container px-6 mx-auto pb-24 relative z-10">
        
        {/* BREADCRUMB NAVIGATION */}
        <nav className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">INHABY</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-black">Trust Journal & Magazine</span>
        </nav>

        {/* LARGE EDITORIAL HERO SECTION */}
        <header className="max-w-5xl mx-auto text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-primary-soft text-primary text-xs font-black uppercase tracking-widest rounded-full border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Luxury Rental Masterclass</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-sans tracking-tight leading-[1.08] text-foreground">
            The INHABY Journal
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            Unveiling direct-to-owner rental guides, complete legal document deep-dives, and landlord deed verifications built to save your security deposit.
          </p>

          {/* REAL-TIME DYNAMIC SEARCH CONTAINER */}
          <div className="max-w-xl mx-auto relative pt-4" id="search-articles-box">
            <div className="relative">
              <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search premium guides, legal deeds, or scam protection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-background border border-border rounded-full text-sm font-semibold placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-md"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </header>

        {/* HORIZONTAL CATEGORY SCROLLER & PILLS */}
        <div className="border-b border-border/60 pb-6 mb-12">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground font-extrabold uppercase tracking-wider shrink-0">
              <Compass className="w-4 h-4 text-primary" />
              <span>Browse Categories:</span>
            </div>
            
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mb-1 max-w-full">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedTag(null); // Clear active tag to avoid conflicts
                    }}
                    className={`px-4.5 py-2.5 text-xs font-bold rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                      isSelected 
                        ? "bg-primary text-primary-foreground border-primary shadow-sm scale-102" 
                        : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border-border/80"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MAIN LAYOUT: TWO COLUMNS (GRID OF STORIES + STICKY SIDEBAR) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SECTION (8 COLS): EDITORIAL STORIES AND GRIDS */}
          <main className="lg:col-span-8 space-y-16">
            
            {/* If NO SEARCH/CATEGORY active, render the main horizontal Featured masterpiece */}
            {!searchQuery && selectedCategory === "All Articles" && !selectedTag && (
              <section className="space-y-6" id="primary-featured-section">
                <div className="flex items-center space-x-2.5 text-xs text-primary font-black uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-primary" />
                  <span>Featured Cover Story</span>
                </div>

                <Link 
                  to={`/blog/${primaryFeatured.slug}`}
                  className="block group bg-background border border-border/80 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-primary/20"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Visual Card Image */}
                    <div className="md:col-span-6 relative aspect-[16/10] md:aspect-auto overflow-hidden bg-muted">
                      <img 
                        src={primaryFeatured.image} 
                        alt={primaryFeatured.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/95 text-primary-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                          {primaryFeatured.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Description and Text */}
                    <div className="md:col-span-6 p-8 md:p-10 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground font-semibold">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            <span>{primaryFeatured.publishedDate}</span>
                          </span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            <span>{primaryFeatured.readingTime}</span>
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors font-sans leading-tight">
                          {primaryFeatured.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                          {primaryFeatured.description}
                        </p>
                      </div>

                      {/* Author & Footer Elements */}
                      <div className="flex items-center justify-between border-t border-border/60 pt-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-bold text-xs">
                            {primaryFeatured.author.avatar}
                          </div>
                          <div>
                            <p className="text-xs font-black text-foreground">{primaryFeatured.author.name}</p>
                            <p className="text-[10px] text-muted-foreground font-medium">{primaryFeatured.author.role}</p>
                          </div>
                        </div>

                        {/* Direct action buttons */}
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={(e) => toggleBookmark(primaryFeatured.id, e)}
                            className="p-2 bg-muted hover:bg-primary-soft hover:text-primary rounded-xl border border-border/60 transition-colors"
                            title="Bookmark post"
                          >
                            <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(primaryFeatured.id) ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                          </button>
                          <button 
                            onClick={(e) => handleCopyLink(primaryFeatured.slug, primaryFeatured.id, e)}
                            className="p-2 bg-muted hover:bg-primary-soft hover:text-primary rounded-xl border border-border/60 transition-colors"
                            title="Copy link"
                          >
                            {copiedId === primaryFeatured.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4 text-muted-foreground" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
            )}

            {/* HORIZONTAL CAROUSEL FOR TRENDING ARTICLES */}
            {!searchQuery && selectedCategory === "All Articles" && !selectedTag && (
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-primary font-black uppercase tracking-wider">
                    <Star className="w-4 h-4 text-primary animate-pulse" />
                    <span>Trending in the Community</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-semibold">Swipe to explore →</span>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6" id="trending-horizontal-carousel">
                  {trendingArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.slug}`}
                      className="min-w-[280px] sm:min-w-[340px] max-w-[340px] bg-background border border-border rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all hover:border-primary/20 group flex flex-col justify-between shrink-0"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 bg-background/90 text-foreground text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-border">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-[10px] text-muted-foreground font-bold">
                            <span>{article.publishedDate}</span>
                            <span>•</span>
                            <span>{article.readingTime}</span>
                          </div>
                          <h4 className="text-base font-black text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                        </div>
                        <div className="flex items-center justify-between border-t border-border/40 pt-3">
                          <span className="text-xs text-primary font-black flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                            <span>Read Article</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-[10px] text-muted-foreground font-semibold">{article.author.name}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* THE LATEST ARTICLES GRID */}
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center space-x-2.5 text-xs text-primary font-black uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-primary" />
                  <span>
                    {searchQuery || selectedCategory !== "All Articles" || selectedTag
                      ? `Filtered Articles (${filteredArticles.length})` 
                      : "Latest Published Masterclasses"
                    }
                  </span>
                </div>
                {(searchQuery || selectedCategory !== "All Articles" || selectedTag) && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    Reset Filters
                  </button>
                )}
              </div>

              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" id="latest-articles-grid">
                  {filteredArticles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/blog/${article.slug}`}
                      className="group bg-background border border-border/80 rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all hover:border-primary/20 flex flex-col justify-between h-full"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span className="absolute top-4 left-4 bg-background/95 text-foreground text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-border/80 shadow-sm">
                          {article.category}
                        </span>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 text-[10px] text-muted-foreground font-semibold">
                            <span>{article.publishedDate}</span>
                            <span>•</span>
                            <span>{article.readingTime}</span>
                          </div>

                          <h4 className="text-base sm:text-lg font-black text-foreground group-hover:text-primary transition-colors font-sans line-clamp-2 leading-snug">
                            {article.title}
                          </h4>

                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 font-medium">
                            {article.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-border/40 pt-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-[10px]">
                              {article.author.avatar}
                            </div>
                            <span className="text-xs text-foreground font-bold">{article.author.name}</span>
                          </div>

                          <div className="flex items-center space-x-1">
                            <button 
                              onClick={(e) => toggleBookmark(article.id, e)}
                              className="p-1.5 hover:bg-muted hover:text-primary rounded-lg text-muted-foreground transition-colors"
                              title="Bookmark post"
                            >
                              <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(article.id) ? "fill-primary text-primary" : ""}`} />
                            </button>
                            <button 
                              onClick={(e) => handleCopyLink(article.slug, article.id, e)}
                              className="p-1.5 hover:bg-muted hover:text-primary rounded-lg text-muted-foreground transition-colors"
                              title="Copy link"
                            >
                              {copiedId === article.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/30 border border-border rounded-3xl space-y-4">
                  <FileText className="w-12 h-12 text-muted-foreground/60 mx-auto" />
                  <p className="text-sm text-muted-foreground font-semibold">
                    No articles found matching "{searchQuery || selectedCategory || selectedTag}".
                  </p>
                  <button 
                    onClick={clearFilters}
                    className="px-5 py-2 bg-primary text-primary-foreground font-bold text-xs rounded-xl"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </section>

          </main>

          {/* RIGHT SECTION (4 COLS): STICKY SIDEBAR (DESKTOP) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-8 sticky top-28" id="blog-listing-sidebar">
            
            {/* Filter tags cloud */}
            <div className="bg-background border border-border rounded-[2.5rem] p-8 shadow-xs space-y-4">
              <h3 className="text-xs font-black text-foreground uppercase tracking-wider pb-3 border-b border-border/60 flex items-center space-x-2">
                <Tag className="w-3.5 h-3.5 text-primary" />
                <span>Search By Keywords</span>
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {ALL_TAGS.map((tag) => {
                  const isActive = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      onClick={() => {
                        setSelectedTag(isActive ? null : tag);
                        setSelectedCategory("All Articles"); // Reset category to avoid filter collision
                      }}
                      className={`px-3 py-1.5 text-[10px] font-bold rounded-lg transition-all ${
                        isActive 
                          ? "bg-primary text-primary-foreground border-primary scale-102" 
                          : "bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/40"
                      }`}
                    >
                      #{tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sticky Popular reads */}
            <div className="bg-background border border-border rounded-[2.5rem] p-8 shadow-xs space-y-6">
              <h3 className="text-xs font-black text-foreground uppercase tracking-wider pb-3 border-b border-border/60 flex items-center space-x-2">
                <Star className="w-3.5 h-3.5 text-primary" />
                <span>Recommended Guides</span>
              </h3>
              <div className="space-y-4">
                {popularArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/blog/${article.slug}`}
                    className="flex items-start space-x-3.5 group"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-muted border border-border">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-primary uppercase tracking-widest">{article.category}</span>
                      <h4 className="text-xs font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-[9px] text-muted-foreground font-semibold">{article.publishedDate} • {article.readingTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Live Newsletter Form */}
            <div className="bg-muted/40 border border-border rounded-[2.5rem] p-8 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/4 rounded-full blur-xl" />
              <div className="flex items-center space-x-2 text-primary font-black text-xs uppercase tracking-widest">
                <Mail className="w-4 h-4" />
                <span>Inhaby Trust Digest</span>
              </div>
              <h4 className="text-base font-black text-foreground">Stay Protected from Rental Scams</h4>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                Unlock direct landlord negotiation checklists, rental escrow tips, and legal rent agreement guides delivered safely to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-xs text-foreground font-semibold focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button 
                  type="submit"
                  className="w-full py-3 bg-primary hover:opacity-95 text-primary-foreground font-black text-xs rounded-xl flex items-center justify-center space-x-1.5 shadow-sm transition-opacity cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Join The Dispatch</span>
                </button>
              </form>
              {newsletterSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-[11px] text-emerald-600 dark:text-emerald-500 font-bold leading-normal"
                >
                  Thank you! You have successfully subscribed to Inhaby Trust dispatch.
                </motion.div>
              )}
            </div>

          </aside>

        </div>

        {/* BOTTOM CALL TO ACTION CTA PANEL */}
        <section className="mt-20 bg-gradient-to-br from-primary-soft/40 to-muted/20 border border-primary/10 rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center space-y-8 relative overflow-hidden" id="blog-call-to-action">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans tracking-tight">
              Looking for a verified, scam-free rental home?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed max-w-lg mx-auto">
              Skip traditional brokerages and paying expensive commissions. Match directly with deed-verified landlords on INHABY.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link 
              to="/listings" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-black rounded-full text-xs hover:opacity-95 transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Browse Direct Listings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/verify" 
              className="w-full sm:w-auto px-8 py-4 bg-background border border-border hover:bg-muted text-foreground font-black rounded-full text-xs transition-all flex items-center justify-center space-x-2"
            >
              <Shield className="w-4 h-4 text-primary" />
              <span>List Your Property</span>
            </Link>
          </div>
        </section>

      </div>

    </div>
  );
}
