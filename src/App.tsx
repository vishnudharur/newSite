import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Package, 
  Truck, 
  ShieldCheck, 
  Globe, 
  Menu, 
  X, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Factory,
  Boxes,
  Warehouse
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 kinetic-gradient flex items-center justify-center rounded-lg architect-shadow group-hover:scale-110 transition-transform">
            <Package className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`font-headline font-bold text-xl leading-none ${isScrolled ? 'text-secondary' : 'text-white'}`}>TELANGANA</span>
            <span className={`font-headline font-semibold text-xs tracking-[0.2em] ${isScrolled ? 'text-primary' : 'text-primary'}`}>PACKING INDUSTRY</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-secondary' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2.5 kinetic-gradient text-white font-semibold rounded-sharp architect-shadow hover:opacity-90 transition-all hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-secondary' : 'text-white'} /> : <Menu className={isScrolled ? 'text-secondary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-secondary p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-medium border-b border-white/10 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full py-3 kinetic-gradient text-white text-center font-bold rounded-sharp"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Kinetic Shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 border-[40px] border-primary/20 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border-[60px] border-tertiary/30 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
            <ShieldCheck size={16} />
            <span>ISO 9001:2015 Certified Packing</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
            Precision <span className="text-primary">Packing</span> for Global Logistics
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            We engineer custom packaging solutions that safeguard your assets across the most demanding supply chains worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 kinetic-gradient text-white font-bold rounded-sharp architect-shadow flex items-center gap-2 group">
              Start Your Project <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-sharp transition-all border border-white/10">
              View Solutions
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">10k+</div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Safety Record</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden architect-shadow aspect-square md:aspect-auto md:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
              alt="Industrial Packing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
          </div>
          
          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl architect-shadow z-20 hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Truck size={24} />
              </div>
              <div>
                <div className="font-bold text-secondary">Global Shipping</div>
                <div className="text-sm text-neutral-dark/60">Real-time tracking enabled</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, image }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-2xl overflow-hidden architect-shadow group"
  >
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors"></div>
    </div>
    <div className="p-8">
      <div className="w-14 h-14 kinetic-gradient rounded-xl flex items-center justify-center text-white mb-6 -mt-14 relative z-10 architect-shadow">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold text-secondary mb-3">{title}</h3>
      <p className="text-neutral-dark/70 leading-relaxed mb-6">
        {description}
      </p>
      <Link to="/contact" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
        Learn More <ChevronRight size={18} />
      </Link>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Industrial Crating",
      description: "Heavy-duty wooden crates engineered for machinery, aerospace components, and industrial equipment.",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Boxes,
      title: "Custom Corrugated",
      description: "High-strength corrugated solutions tailored for sensitive electronics and consumer goods.",
      image: "https://images.unsplash.com/photo-1549194388-2469d59ec75c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Warehouse,
      title: "Warehouse Logistics",
      description: "End-to-end storage and inventory management integrated with our custom packing lines.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h2 className="text-4xl md:text-5xl font-black text-secondary">Integrated Packing Solutions</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-secondary text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 kinetic-gradient flex items-center justify-center rounded-lg">
            <Package className="text-white w-5 h-5" />
          </div>
          <span className="font-headline font-bold text-lg tracking-tight uppercase">TELANGANA PACKING</span>
        </div>
        <p className="text-white/60 leading-relaxed mb-6">
          Setting the gold standard in industrial packing and global logistics since 2001.
        </p>
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
            <Globe size={18} />
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
        <ul className="space-y-4 text-white/60">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
          <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-6">Services</h4>
        <ul className="space-y-4 text-white/60">
          <li>Industrial Crating</li>
          <li>Dangerous Goods</li>
          <li>Export Packing</li>
          <li>On-site Services</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
        <ul className="space-y-4 text-white/60">
          <li className="flex items-start gap-3">
            <MapPin className="text-primary shrink-0" size={20} />
            <span>Plot No. 45, Industrial Area, Hyderabad, Telangana - 500037</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-primary shrink-0" size={20} />
            <span>+91 99497 88537</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="text-primary shrink-0" size={20} />
            <span>info@telanganapacking.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
      <p>© 2026 Telangana Packing Industry. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => (
  <main>
    <Hero />
    <Services />
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden architect-shadow">
            <img 
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1000" 
              alt="Team working" 
              className="w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 kinetic-gradient rounded-2xl -z-10 hidden md:block opacity-20"></div>
        </div>
        <div>
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
          <h2 className="text-4xl font-black text-secondary mb-6 leading-tight">Engineered for the Long Haul</h2>
          <p className="text-neutral-dark/70 text-lg mb-8 leading-relaxed">
            We don't just pack boxes; we engineer security. Our team combines traditional craftsmanship with modern logistics technology to ensure your cargo arrives in pristine condition, regardless of the destination.
          </p>
          <div className="space-y-4 mb-10">
            {[
              "Custom-built wooden crates and pallets",
              "Moisture and corrosion protection (VCI)",
              "Shock and vibration monitoring systems",
              "International ISPM-15 compliance"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck size={14} />
                </div>
                <span className="font-semibold text-secondary">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
            Learn More About Our Process <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

const ServicesPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-5xl font-black text-secondary mb-8">Our Solutions</h1>
      <Services />
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-5xl font-black text-secondary mb-8">About Us</h1>
      <div className="prose prose-lg max-w-none text-neutral-dark/70">
        <p className="mb-6">
          Telangana Packing Industry has been a leader in industrial packaging for over two decades. Founded in Hyderabad, we have grown from a local crating service to a comprehensive logistics partner for global industries.
        </p>
        <p className="mb-6">
          Our mission is to provide precision-engineered packing solutions that guarantee the safety and integrity of our clients' assets. We specialize in heavy industrial machinery, sensitive electronics, and high-value exports.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 bg-gray-50 rounded-xl">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
            <p>To be the most trusted name in industrial packing globally, recognized for innovation, reliability, and excellence.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Values</h3>
            <p>Integrity, Precision, Safety, and Customer-Centric Innovation drive everything we do at Telangana Packing.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-black text-secondary mb-6">Get in Touch</h1>
          <p className="text-neutral-dark/70 text-lg mb-10">
            Ready to secure your next shipment? Our experts are here to help you design the perfect packing solution.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 kinetic-gradient rounded-lg flex items-center justify-center text-white shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">Our Office</h4>
                <p className="text-neutral-dark/60">Plot No. 45, Industrial Area, Hyderabad, Telangana - 500037</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 kinetic-gradient rounded-lg flex items-center justify-center text-white shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">Call Us</h4>
                <p className="text-neutral-dark/60">+91 99497 88537</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 kinetic-gradient rounded-lg flex items-center justify-center text-white shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">Email Us</h4>
                <p className="text-neutral-dark/60">info@telanganapacking.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-2xl architect-shadow">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-sharp border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-sharp border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Service Required</label>
              <select className="w-full px-4 py-3 rounded-sharp border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                <option>Industrial Crating</option>
                <option>Custom Corrugated</option>
                <option>Warehouse Logistics</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-sharp border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 kinetic-gradient text-white font-bold rounded-sharp architect-shadow hover:opacity-90 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col scroll-smooth">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
