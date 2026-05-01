import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ChevronRight, Menu, MapPin, Phone, ArrowUpRight, MousePointer2 } from "lucide-react";
import Showcase from "./components/Showcase";
import Inventory from "./components/Inventory";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Live Inventory", type: "page" },
  { name: "Our Process", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Investment", href: "#" },
];

const faqItems = [
  { q: "How are prices determined?", a: "Prices are set based on current market valuation and bank liquidation requirements. All vehicles are priced to move quickly." },
  { q: "Can I inspect the vehicle before purchase?", a: "Yes. We encourage 3rd party inspections. Please contact us to coordinate a visit to our secure facility." },
  { q: "Do you offer financing?", a: "We work with several automotive lenders specializing in high-end assets. You can also use your own financial institution." },
  { q: "What documents are required for purchase?", a: "You will need a valid government ID, proof of funds or financing approval, and a signed purchase agreement." },
  { q: "Do you handle the title transfer?", a: "Yes, our documentation team handles all title transfers and registration paperwork for a seamless transaction." },
  { q: "Is shipping available?", a: "We offer secure, enclosed transportation nationwide. International shipping can also be coordinated." },
  { q: "Are these vehicles under warranty?", a: "Most vehicles still carry their manufacturer's warranty. Supplemental extended warranties are also available." },
  { q: "What is the return policy?", a: "Due to the liquidated nature of these assets, all sales are final once the transaction is completed." },
];

const specs = [
  { val: "240+", label: "Units Available" },
  { val: "Tier 1", label: "Asset Grade" },
  { val: "MIAMI", label: "Primary Hub" },
  { val: "100%", label: "Verified Stats" },
];

export default function App() {
  const [showInventory, setShowInventory] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div className="relative bg-black font-sans selection:bg-white selection:text-black overflow-x-hidden" id="home">
      {/* Background HUD Layers */}
      <div className="fixed inset-0 z-0 bg-grid-scan opacity-20 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white opacity-[0.02]" />
      </div>

      {/* Floating HUD Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-100 flex items-center gap-6 px-10 py-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-full pointer-events-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-white border-r border-white/10 pr-6 mr-2">Bank Cars For Sale</span>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.type === "page") {
                  e.preventDefault();
                  setShowInventory(true);
                }
              }}
              className="text-[10px] uppercase tracking-widest font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button 
          onClick={() => setShowInventory(true)}
          className="ml-6 bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
        >
          Inventory
        </button>
      </nav>

      {/* HERO SECTION: ASYMMETRIC HUD LAYOUT */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-10 md:px-24 pt-32"
      >
        <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-end">
          {/* Left: Aggressive Typography */}
          <div className="relative z-20">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Vehicle Liquidation</span>
              </div>
              <h1 className="text-7xl md:text-9xl lg:text-[120px] font-bold leading-[0.9] uppercase tracking-tight mb-12">
                Pure <br/> 
                Inventory.
              </h1>
              <div className="grid grid-cols-2 gap-12 max-w-md border-t border-white/10 pt-12">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-semibold">Our Source</p>
                  <p className="text-sm font-normal leading-relaxed text-white/60">Direct inventory from financial liquidations and private collections.</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-semibold">Service</p>
                  <p className="text-sm font-normal leading-relaxed text-white/60">Professional acquisition and nationwide transportation.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Data + Visual */}
          <div className="relative group">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative aspect-3/4 w-full bg-neutral-900 rounded-lg overflow-hidden"
            >
              <img 
                src="https://static.wixstatic.com/media/dfb3c4_0fd7d8ad30e046cd8149d8b77cd62c79~mv2.jpeg/v1/fill/w_590,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Roller%20Pics_JPEG.jpeg" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-standard"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-3xl font-bold tracking-tight">BANK STOCK</p>
                <p className="text-[10px] uppercase tracking-widest text-white/60 font-medium">Direct Acquisition Only</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Specs - HUD Strips */}
        <div className="w-full max-w-[1600px] mt-24 border-y border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {specs.map((spec, i) => (
            <div key={i} className="px-10 py-12 flex flex-col gap-1 group hover:bg-white/5 transition-colors">
              <span className="text-[10px] font-medium text-white/30 tracking-widest uppercase">{spec.label}</span>
              <span className="text-3xl font-bold tracking-tight uppercase">{spec.val}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SHOWCASE SECTION */}
      <div id="fleet" className="relative z-10">
        <Showcase />
      </div>

      {/* SERVICES: BENTO DATA GRID */}
      <section id="services" className="relative z-20 py-40 bg-black px-10 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.43em] text-white/40 mb-6 block">Our Capabilities</span>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight uppercase leading-[0.85]">Professional <br/> Services.</h2>
            </div>
            <div className="flex flex-col items-end text-right">
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8 uppercase tracking-widest">
                Verification / Logistics / Procurement
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
            {/* Featured Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative bg-neutral-900 rounded-lg overflow-hidden border border-white/5"
            >
              <img src="https://static.wixstatic.com/media/dfb3c4_c0a36ab317df453aa2e9e293710567a1~mv2.jpg" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-standard grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent h-full" />
              <div className="absolute bottom-12 left-12">
                <h3 className="text-3xl font-bold mb-4 uppercase">Direct Inspections</h3>
                <p className="text-white/40 text-sm max-w-xs uppercase tracking-widest leading-loose font-medium">Detailed visual and mechanical documentation for every asset.</p>
              </div>
            </motion.div>

            {/* Square Bento Item */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-4 group bg-white p-12 rounded-lg flex flex-col justify-between hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <div className="text-black">
                <h3 className="text-4xl font-bold mb-6 uppercase">Asset Access</h3>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-black/60 text-xs uppercase tracking-[0.1em] leading-relaxed font-bold">Simplified acquisition process with direct financial institution links.</p>
                <ArrowUpRight size={48} className="text-black/20 group-hover:text-black transition-all transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </div>
            </motion.div>

            {/* Small Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-4 bg-neutral-900 p-10 border border-white/5 rounded-lg"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 uppercase">Direct Support</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest leading-relaxed">Personal concierge for all liquidation transactions.</p>
                </div>
              </div>
            </motion.div>

            {/* Horizontal Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative bg-neutral-900 rounded-lg overflow-hidden border border-white/5 flex items-center p-12"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center w-full">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 uppercase">Direct logistics</h3>
                  <p className="text-white/40 text-sm uppercase tracking-widest leading-loose">Secure, enclosed transportation and title handling nationwide.</p>
                </div>
                <button className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors shrink-0 rounded-full">Contact Team</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT: INDUSTRIAL STYLE */}
      <section id="about" className="relative z-20 py-48 bg-black">
        <div className="max-w-[1400px] mx-auto px-10 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Our Mission</span>
              </div>
              <h2 className="text-7xl md:text-9xl font-bold tracking-tight uppercase leading-[0.85] mb-12">Direct <br/> <span className="text-outline">Access.</span></h2>
              <div className="space-y-8 text-white/60 text-lg leading-relaxed font-normal">
                <p>
                  Bank Cars For Sale simplifies the acquisition of high-end automotive assets. We bridge the gap between financial institutions and the public.
                </p>
                <p className="text-base text-white/40 uppercase tracking-widest font-medium">
                  We specialize in the liquidation of luxury and exotic vehicles, offering a transparent, efficient sales process based on real market value.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
                <div>
                  <p className="text-5xl font-bold mb-2">04</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">State Coverage</p>
                </div>
                <div>
                  <p className="text-5xl font-bold mb-2">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Verification</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative aspect-3/4 bg-neutral-900 rounded-lg overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/dfb3c4_b6f26321e375441caaf70f3e26f8cef5~mv2.jpg" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER: TECHNICAL DARK */}
      <footer id="contact" className="relative z-20 bg-luxury-black border-t border-white/10 px-10 pt-40 pb-20 md:px-16 text-white/60 text-xs">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-12">
              <span className="text-xl font-bold tracking-tight text-white uppercase leading-none block">Bank Cars</span>
              <span className="text-[10px] tracking-widest text-white/40 font-bold uppercase mt-2 block">For Sale</span>
            </div>
            <p className="max-w-xs leading-relaxed uppercase tracking-widest font-semibold">
              Premium automotive liquidation services. Direct access to financial assets.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-12 text-white">Menu</h4>
            <div className="flex flex-col gap-6 uppercase tracking-widest font-semibold">
              {["Our Fleet", "Process", "Services", "FAQ"].map(label => (
                <a key={label} href="#" className="hover:text-white transition-colors w-fit">{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-12 text-white">Locations</h4>
            <div className="flex flex-col gap-6 uppercase tracking-widest font-semibold">
              <p>Miami, FL</p>
              <p>Tampa, FL</p>
              <p>Orlando, FL</p>
              <p>New York, NY</p>
            </div>
          </div>

          <div className="p-10 border border-white/10 rounded-lg">
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-white">Contact</h4>
            <button className="w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all rounded-full">
              Send Inquiry
            </button>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto border-t border-white/10 pt-10 flex justify-between items-center">
          <p className="text-[10px] tracking-widest uppercase font-semibold">© 2025 Bank Cars For Sale. All Rights Reserved.</p>
          <div className="hidden md:flex gap-10 font-semibold uppercase tracking-widest">
            {["Terms", "Privacy"].map(link => (
              <a key={link} href="#" className="text-[10px] hover:text-white transition-colors uppercase">{link}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Grid Lines Global Overlay */}
      <div className="fixed inset-0 z-10 pointer-events-none border-x border-white opacity-[0.03] mx-auto max-w-[1400px]" />

      {/* Fleet Overlay Component */}
      <AnimatePresence>
        {showInventory && (
          <Inventory onClose={() => setShowInventory(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}



