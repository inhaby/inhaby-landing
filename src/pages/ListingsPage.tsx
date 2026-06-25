import { useState } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  MapPin, 
  Home, 
  ShieldCheck, 
  Zap, 
  Droplets, 
  Car, 
  Lock, 
  MessageCircle, 
  Phone,
  Star,
  Clock,
  User
} from "lucide-react";
import { Link } from "react-router-dom";

const listings = [
  {
    id: 1,
    title: "Modern 2BHK in HSR Layout",
    location: "Sector 2, HSR Layout, Bangalore",
    price: "₹35,000",
    deposit: "2 Months",
    type: "2 BHK",
    size: "1,200 sqft",
    tag: "No Brokerage",
    verified: true,
    ownerType: "Owner",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    amenities: ["Power Backup", "24/7 Water", "Parking", "Security"],
    proximity: "500m from HSR BDA Complex",
    postedAt: "2 days ago"
  },
  {
    id: 2,
    title: "Luxury 3BHK with Balcony",
    location: "Indiranagar, Bangalore",
    price: "₹65,000",
    deposit: "3 Months",
    type: "3 BHK",
    size: "1,850 sqft",
    tag: "Premium",
    verified: true,
    ownerType: "Managed by INHABY",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
    amenities: ["Gym", "Pool", "Parking", "CCTV"],
    proximity: "200m from Indiranagar Metro",
    postedAt: "5 hours ago"
  },
  {
    id: 3,
    title: "Cozy Studio for Bachelors",
    location: "Koramangala 4th Block, Bangalore",
    price: "₹18,000",
    deposit: "1 Month",
    type: "Studio",
    size: "450 sqft",
    tag: "No Brokerage",
    verified: true,
    ownerType: "Owner",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
    amenities: ["24/7 Water", "Wifi", "Security"],
    proximity: "Walking distance to Sony Signal",
    postedAt: "1 day ago"
  },
  {
    id: 4,
    title: "Spacious 3BHK Penthouse",
    location: "Whitefield, Bangalore",
    price: "₹45,000",
    deposit: "2 Months",
    type: "3 BHK",
    size: "2,100 sqft",
    tag: "Family Only",
    verified: true,
    ownerType: "Owner",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
    amenities: ["Power Backup", "Clubhouse", "Parking", "Garden"],
    proximity: "Near ITPL Main Gate",
    postedAt: "3 days ago"
  }
];

const amenityIcons: Record<string, any> = {
  "Power Backup": Zap,
  "24/7 Water": Droplets,
  "Parking": Car,
  "Security": Lock,
  "CCTV": Lock,
  "Gym": Home,
  "Pool": Droplets,
  "Wifi": Zap,
  "Clubhouse": Home,
  "Garden": Home
};

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-muted/30 pt-24 pb-16">
      <div className="container px-6 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-4">
              Verified Listings in <span className="text-primary">Bangalore</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Hand-picked homes with <span className="font-bold text-foreground">Zero Brokerage</span> and total transparency.
            </p>
          </motion.div>
          
          <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground bg-background px-4 py-2 rounded-full border border-border shadow-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>Updated 12 mins ago</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="bg-background rounded-[2rem] p-4 shadow-xl border border-border flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by locality, landmark or BHK..."
                className="w-full pl-14 pr-6 py-4 bg-muted/50 rounded-2xl border-none focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex w-full lg:w-auto gap-4">
              <button className="flex-1 lg:flex-none px-10 py-4 bg-foreground text-background rounded-2xl font-bold hover:bg-foreground/90 transition-all shadow-lg">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 gap-8">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-[2.5rem] overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row"
            >
              {/* Image Section */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 min-h-[300px]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <Link 
                    to="/verify" 
                    className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-lg flex items-center hover:scale-105 transition-transform"
                  >
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    Verified Listing
                  </Link>
                  <div className="px-4 py-1.5 bg-green-500 text-white rounded-full text-xs font-bold shadow-lg">
                    {listing.tag}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-2xl flex items-center space-x-2 shadow-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-slate-900">{listing.rating}</span>
                  <span className="text-xs text-slate-500 font-medium">(24 reviews)</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 md:p-10 flex flex-col">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {listing.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground font-medium">
                      <MapPin className="w-4 h-4 mr-1 text-primary" />
                      {listing.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-foreground">{listing.price}</div>
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Deposit: {listing.deposit}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-muted/50 rounded-3xl border border-border">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Type</p>
                    <p className="text-base font-bold text-foreground">{listing.type}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Area</p>
                    <p className="text-base font-bold text-foreground">{listing.size}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Listed by</p>
                    <div className="flex items-center text-base font-bold text-foreground">
                      <User className="w-3 h-3 mr-1 text-primary" />
                      {listing.ownerType}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Landmark</p>
                    <p className="text-xs font-bold text-foreground leading-tight">{listing.proximity}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">Key Amenities</h4>
                  <div className="flex flex-wrap gap-3">
                    {listing.amenities.map(amenity => {
                      const Icon = amenityIcons[amenity] || Home;
                      return (
                        <div key={amenity} className="flex items-center px-4 py-2 bg-background border border-border rounded-xl text-sm font-bold text-foreground">
                          <Icon className="w-4 h-4 mr-2 text-primary" />
                          {amenity}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </button>
                  <button className="flex-1 flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Owner
                  </button>
                  <button className="px-6 py-4 bg-muted text-foreground rounded-2xl font-bold hover:bg-border transition-all">
                    View Details
                  </button>
                  <Link 
                    to="/verify" 
                    className="flex items-center justify-center px-6 py-4 bg-primary/10 text-primary rounded-2xl font-bold hover:bg-primary/20 transition-all border border-primary/20"
                  >
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    Verify Status
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-primary rounded-[3rem] text-center text-primary-foreground relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Didn't find what you're looking for?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
              Our team adds 50+ verified listings every day. Set an alert and we'll notify you as soon as a home matches your criteria.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
               <button className="px-10 py-4 bg-white text-primary rounded-2xl font-bold hover:shadow-xl transition-all">
                 Set Property Alert
               </button>
               <Link to="/photos" className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all">
                 View Real Photos
               </Link>
            </div>
          </div>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
}
