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
  Warehouse,
  HardHat,
  Scale,
  ThermometerSun
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
    { name: 'Products', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 kinetic-gradient flex items-center justify-center rounded-lg architect-shadow group-hover:scale-110 transition-transform">
            <Boxes className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`font-headline font-bold text-xl leading-none ${isScrolled ? 'text-secondary' : 'text-white'}`}>TELANGANA</span>
            <span className={`font-headline font-semibold text-xs tracking-[0.2em] ${isScrolled ? 'text-primary' : 'text-primary'}`}>PALLET SOLUTIONS</span>
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
            Request Quote
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
              Request Quote
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
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
      </div>
      
      {/* Industrial Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6">
            <ThermometerSun size={16} />
            <span>ISPM-15 Certified Heat Treatment</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 uppercase">
            Heavy-Duty <span className="text-primary">Pallets</span> for Global Trade
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Precision-engineered wooden pallets and skids designed to withstand the rigors of international shipping and automated warehousing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 kinetic-gradient text-white font-bold rounded-sharp architect-shadow flex items-center gap-2 group">
              Get Industrial Pricing <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-sharp transition-all border border-white/10">
              Product Catalog
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">500k+</div>
              <div className="text-white/50 text-xs uppercase tracking-widest">Annual Capacity</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">ISPM-15</div>
              <div className="text-white/50 text-xs uppercase tracking-widest">Global Standard</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">2.5T</div>
              <div className="text-white/50 text-xs uppercase tracking-widest">Max Load Cap</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden architect-shadow aspect-square md:aspect-auto md:h-[650px] border-4 border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1000" 
              alt="Stacked Wooden Pallets" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent"></div>
          </div>
          
          {/* Technical Overlay */}
          <div className="absolute top-10 -left-10 bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 z-20 hidden lg:block">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-mono">TIMBER QUALITY: GRADE A</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-mono">MOISTURE CONTENT: &lt;18%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductCard = ({ icon: Icon, title, description, image, specs }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-2xl overflow-hidden architect-shadow group border border-gray-100"
  >
    <div className="h-56 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/30 transition-colors"></div>
      <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
        Heavy Duty
      </div>
    </div>
    <div className="p-8">
      <div className="w-14 h-14 kinetic-gradient rounded-xl flex items-center justify-center text-white mb-6 -mt-14 relative z-10 architect-shadow border-4 border-white">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold text-secondary mb-3 uppercase tracking-tight">{title}</h3>
      <p className="text-neutral-dark/70 leading-relaxed mb-6 text-sm">
        {description}
      </p>
      <div className="grid grid-cols-2 gap-2 mb-6">
        {specs.map((spec: string, i: number) => (
          <div key={i} className="text-[10px] font-mono bg-gray-50 p-2 rounded border border-gray-100 text-secondary/60">
            {spec}
          </div>
        ))}
      </div>
      <Link to="/contact" className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all text-sm uppercase tracking-wider">
        Technical Specs <ChevronRight size={16} />
      </Link>
    </div>
  </motion.div>
);

const Products = () => {
  const products = [
    {
      icon: Truck,
      title: "Four-Way Pallets",
      description: "Optimized for forklift and pallet jack entry from all sides. Ideal for high-density storage and complex logistics.",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800",
      specs: ["LOAD: 1500KG", "ENTRY: 4-WAY", "TIMBER: PINE/HARDWOOD", "ISPM-15: YES"]
    },
    {
      icon: Globe,
      title: "Euro & CP Pallets",
      description: "Standardized dimensions for international trade. Fully compliant with European and global shipping regulations.",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
      specs: ["SIZE: 800x1200", "LOAD: 1200KG", "CERT: EPAL/CP", "ISPM-15: YES"]
    },
    {
      icon: Factory,
      title: "Custom Skids & Crates",
      description: "Bespoke wooden structures for oversized machinery and sensitive industrial equipment protection.",
      image: "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=80&w=800",
      specs: ["LOAD: CUSTOM", "DESIGN: BESPOKE", "PROTECTION: VCI/FOAM", "ISPM-15: YES"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Industrial Inventory</h2>
            <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase leading-none">Engineered Shipping Platforms</h2>
          </div>
          <p className="text-neutral-dark/50 text-sm max-w-xs font-medium">
            All our products are manufactured using sustainably sourced timber and undergo rigorous quality control.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => <ProductCard key={i} {...p} />)}
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
            <Boxes className="text-white w-5 h-5" />
          </div>
          <span className="font-headline font-bold text-lg tracking-tight uppercase">TELANGANA PALLETS</span>
        </div>
        <p className="text-white/40 text-sm leading-relaxed mb-6">
          The preferred industrial timber partner for heavy-duty logistics and global supply chain security since 2001.
        </p>
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer border border-white/10">
            <Globe size={18} />
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-primary">Solutions</h4>
        <ul className="space-y-4 text-white/50 text-sm">
          <li><Link to="/services" className="hover:text-white transition-colors">Wooden Pallets</Link></li>
          <li><Link to="/services" className="hover:text-white transition-colors">Industrial Crates</Link></li>
          <li><Link to="/services" className="hover:text-white transition-colors">Export Packaging</Link></li>
          <li><Link to="/services" className="hover:text-white transition-colors">Heat Treatment</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-primary">Company</h4>
        <ul className="space-y-4 text-white/50 text-sm">
          <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">Certifications</Link></li>
          <li><Link to="/about" className="hover:text-white transition-colors">Sustainability</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-primary">Contact</h4>
        <ul className="space-y-4 text-white/50 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="text-primary shrink-0" size={18} />
            <span>Plot No. 45, Industrial Area, Hyderabad, Telangana - 500037</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-primary shrink-0" size={18} />
            <span>+91 99497 88537</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="text-primary shrink-0" size={18} />
            <span>sales@telanganapallets.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] uppercase tracking-widest font-bold">
      <p>© 2026 Telangana Pallet Solutions. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const Industries = () => {
  const industries = [
    { name: "Automotive", icon: Truck },
    { name: "Pharmaceuticals", icon: ShieldCheck },
    { name: "Aerospace", icon: Globe },
    { name: "Manufacturing", icon: Factory },
    { name: "Logistics", icon: Warehouse },
    { name: "Agriculture", icon: Boxes }
  ];

  return (
    <section className="py-24 bg-secondary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Global Reach</h2>
          <h2 className="text-4xl md:text-5xl font-black uppercase">Industries We Serve</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <industry.icon size={24} />
              </div>
              <span className="font-bold text-xs uppercase tracking-widest text-center">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Timber Sourcing", desc: "Selection of high-grade pine and hardwood from sustainable forests.", icon: Factory },
    { title: "Precision Cutting", desc: "Automated sawing for exact dimensional consistency.", icon: Scale },
    { title: "Heat Treatment", desc: "ISPM-15 compliant kiln drying to eliminate pests.", icon: ThermometerSun },
    { title: "Assembly", desc: "Heavy-duty pneumatic nailing for structural integrity.", icon: HardHat }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Workflow</h2>
          <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase">Precision Manufacturing</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full kinetic-gradient flex items-center justify-center text-white architect-shadow mb-6 border-4 border-white">
                <step.icon size={28} />
              </div>
              <h3 className="text-lg font-black text-secondary uppercase mb-3">{step.title}</h3>
              <p className="text-neutral-dark/60 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <main>
    <Hero />
    <Products />
    <Industries />
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden architect-shadow border-8 border-gray-50">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
              alt="Forklift Loading Pallets" 
              className="w-full h-[550px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </div>
        <div>
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Quality Assurance</h2>
          <h2 className="text-4xl font-black text-secondary mb-6 leading-tight uppercase">Built for Extreme <br/>Load Conditions</h2>
          <p className="text-neutral-dark/70 text-lg mb-8 leading-relaxed">
            Our pallets aren't just timber and nails. They are engineered platforms designed using advanced structural analysis to ensure maximum safety for your high-value cargo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              { label: "ISPM-15 Certified", icon: ShieldCheck },
              { label: "Kiln Dried Timber", icon: ThermometerSun },
              { label: "Load Tested", icon: Scale },
              { label: "Precision Cut", icon: Factory }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary architect-shadow">
                  <item.icon size={18} />
                </div>
                <span className="font-bold text-secondary text-xs uppercase tracking-tight">{item.label}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all uppercase text-sm tracking-widest">
            Our Manufacturing Process <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

const ServicesPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-secondary mb-4 uppercase">Product Range</h1>
        <p className="text-neutral-dark/50 max-w-2xl">Explore our comprehensive catalog of industrial shipping platforms and custom timber solutions.</p>
      </div>
      <Products />
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <h1 className="text-5xl md:text-6xl font-black text-secondary mb-8 uppercase">Industrial <br/>Legacy</h1>
          <div className="prose prose-lg max-w-none text-neutral-dark/70">
            <p className="mb-6 font-medium text-secondary">
              Telangana Pallet Solutions has been the backbone of industrial logistics in South India for over 25 years.
            </p>
            <p className="mb-6 text-sm leading-relaxed">
              Founded in the heart of Hyderabad's industrial belt, we recognized early on that the safety of global trade depends on the reliability of the humblest component: the pallet. We invested in state-of-the-art heat treatment facilities and precision timber processing to become the region's first ISPM-15 certified manufacturer.
            </p>
            <p className="mb-6 text-sm leading-relaxed">
              Today, we serve Fortune 500 companies across aerospace, automotive, and pharmaceutical sectors, providing them with the peace of mind that their products are supported by the best engineering in the industry.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600" className="rounded-xl architect-shadow h-64 w-full object-cover" referrerPolicy="no-referrer" alt="Wooden Pallet Inventory" />
          <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=600" className="rounded-xl architect-shadow h-64 w-full object-cover mt-12" referrerPolicy="no-referrer" alt="Standardized Wooden Pallets" />
        </div>
      </div>

      <Process />

      <div className="grid md:grid-cols-3 gap-8 mt-24">
        {[
          { title: "Sustainability", desc: "100% of our timber is sourced from managed forests with full traceability.", icon: Globe },
          { title: "Precision", desc: "Automated cutting lines ensure dimensional accuracy within +/- 2mm.", icon: Factory },
          { title: "Compliance", desc: "Full ISPM-15 documentation provided with every export shipment.", icon: ShieldCheck }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-secondary rounded-2xl text-white architect-shadow">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-6xl font-black text-secondary mb-6 uppercase">Request <br/>Pricing</h1>
          <p className="text-neutral-dark/70 text-lg mb-10 leading-relaxed">
            Our technical sales team is ready to provide you with detailed quotes and structural analysis for your specific pallet requirements.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 kinetic-gradient rounded-lg flex items-center justify-center text-white shrink-0 architect-shadow">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg uppercase tracking-tight">Industrial Plant</h4>
                <p className="text-neutral-dark/60 text-sm">Plot No. 45, Industrial Area, Hyderabad, Telangana - 500037</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 kinetic-gradient rounded-lg flex items-center justify-center text-white shrink-0 architect-shadow">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg uppercase tracking-tight">Direct Line</h4>
                <p className="text-neutral-dark/60 text-sm">+91 99497 88537</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 kinetic-gradient rounded-lg flex items-center justify-center text-white shrink-0 architect-shadow">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg uppercase tracking-tight">Sales Email</h4>
                <p className="text-neutral-dark/60 text-sm">sales@telanganapallets.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-2xl architect-shadow border border-gray-100">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black text-secondary mb-2 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-sharp border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-secondary mb-2 uppercase tracking-widest">Company Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-sharp border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" placeholder="john@company.com" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black text-secondary mb-2 uppercase tracking-widest">Pallet Type</label>
                <select className="w-full px-4 py-3 rounded-sharp border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white text-sm">
                  <option>Four-Way Pallet</option>
                  <option>Euro Pallet</option>
                  <option>Custom Skid</option>
                  <option>Wooden Crate</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black text-secondary mb-2 uppercase tracking-widest">Monthly Quantity</label>
                <input type="number" className="w-full px-4 py-3 rounded-sharp border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" placeholder="e.g. 500" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black text-secondary mb-2 uppercase tracking-widest">Technical Requirements</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-sharp border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm" placeholder="Dimensions, load capacity, timber preference..."></textarea>
            </div>
            <button type="submit" className="w-full py-4 kinetic-gradient text-white font-black rounded-sharp architect-shadow hover:opacity-90 transition-all uppercase tracking-[0.2em] text-xs">
              Submit RFQ
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
