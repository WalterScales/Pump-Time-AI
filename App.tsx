import { 
  PhoneCall, 
  Calendar, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  Smartphone,
  BarChart3,
  Users,
  Link,
  Zap,
  Database,
  RefreshCw,
  Mic,
  Phone,
  Settings,
  Layout,
  Edit3,
  Save,
  Plus
} from 'lucide-react';
import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  pricing: {
    basic: { price: string; features: string[] };
    pro: { price: string; features: string[] };
  };
  companyName: string;
}

interface Booking {
  id: string;
  customerName: string;
  company: string;
  phone: string;
  email: string;
  address: string;
  volume: string;
  pumpType: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

const initialBookings: Booking[] = [
  { 
    id: '1', 
    customerName: 'John Doe', 
    company: 'JD Concrete', 
    phone: '(555) 111-2222',
    email: 'john@jdconcrete.com',
    address: '123 Foundation Way, Dallas, TX',
    volume: '45 yards',
    pumpType: '38m Boom',
    date: '2026-03-15', 
    time: '07:00 AM', 
    status: 'confirmed' 
  },
  { 
    id: '2', 
    customerName: 'Jane Smith', 
    company: 'Smith Pumping', 
    phone: '(555) 333-4444',
    email: 'jane@smithpumping.com',
    address: '456 Slab St, Fort Worth, TX',
    volume: '20 yards',
    pumpType: 'Line Pump',
    date: '2026-03-16', 
    time: '01:00 PM', 
    status: 'pending' 
  },
  { 
    id: '3', 
    customerName: 'Bob Builder', 
    company: 'Bob\'s Construction', 
    phone: '(555) 555-6666',
    email: 'bob@bobsbuilds.com',
    address: '789 Beam Blvd, Arlington, TX',
    volume: '100 yards',
    pumpType: '47m Boom',
    date: '2026-03-17', 
    time: '07:00 AM', 
    status: 'cancelled' 
  },
];

const defaultContent: SiteContent = {
  companyName: "Pump Time AI",
  hero: {
    title: "Never Miss a Concrete Pour Again.",
    subtitle: "The AI Voice Receptionist built specifically for Concrete Pumping companies. We handle your bookings while you're on the job site.",
    cta: "Get Started Free"
  },
  pricing: {
    basic: {
      price: "299",
      features: ["Up to 50 calls/mo", "Basic Scheduling", "Email Support", "1 AI Voice Agent"]
    },
    pro: {
      price: "599",
      features: ["Unlimited calls", "Advanced CRM Sync", "Priority Support", "Custom Voice Training"]
    }
  }
};

// --- Components ---

const Navbar = ({ onOpenModal, companyName }: { onOpenModal: () => void; companyName: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-orange-600 p-1.5 rounded-lg">
            <TrendingUp className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">{companyName.split(' ')[0]} <span className="text-orange-600">{companyName.split(' ').slice(1).join(' ')}</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Problem</a>
          <a href="#solution" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Solution</a>
          <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">How It Works</a>
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Features</a>
          <a href="#integrations" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Integrations</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Pricing</a>
          <button 
            onClick={onOpenModal}
            className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
          >
            Book a Demo
          </button>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <a href="#problem" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Problem</a>
              <a href="#solution" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Solution</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">How It Works</a>
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Features</a>
              <a href="#integrations" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">Integrations</a>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="bg-orange-600 text-white px-5 py-3 rounded-xl text-center font-semibold"
              >
                Book a Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenModal, content }: { onOpenModal: () => void; content: SiteContent['hero'] }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-200 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
              <BarChart3 className="w-3.5 h-3.5" />
              Built for Concrete Pumping Companies
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              {content.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpenModal}
                className="bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-2"
              >
                {content.cta} <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Hear the Demo
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                    alt="User"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <span>Trusted by 50+ Concrete Contractors</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 lg:p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Today's Schedule</h3>
                  <p className="text-sm text-slate-500">Monday, March 9, 2026</p>
                </div>
                <div className="bg-orange-50 text-orange-600 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                  Live Feed
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold">7A</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">Residential Pour - 45 Yards</h4>
                    <p className="text-sm text-slate-600">123 Construction Way, Dallas</p>
                  </div>
                  <CheckCircle2 className="text-orange-600 w-6 h-6" />
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 opacity-60">
                  <div className="w-12 h-12 bg-slate-400 rounded-xl flex items-center justify-center text-white font-bold">1P</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">Driveway Extension</h4>
                    <p className="text-sm text-slate-600">456 Suburban Lane, Plano</p>
                  </div>
                  <Clock className="text-slate-400 w-6 h-6" />
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-900">New Booking via AI Receptionist</span>
                    <span className="text-xs text-slate-400">2 mins ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <PhoneCall className="w-4 h-4 text-green-500" />
                    <span>Incoming call from (555) 012-3456</span>
                  </div>
                  <div className="mt-2 bg-slate-900 text-white p-3 rounded-xl text-xs font-mono">
                    AI: "I have a 7:00 AM slot available this Wednesday. Would you like to book that for your 30-yard pour?"
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-600 rounded-full -z-10 opacity-10 blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-900 rounded-full -z-10 opacity-5 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      icon: <PhoneCall className="w-6 h-6 text-red-500" />,
      title: "Missed Calls on Site",
      desc: "You're on the pump or in the truck. You can't answer every call, and customers won't leave a voicemail—they'll just call your competitor."
    },
    {
      icon: <Calendar className="w-6 h-6 text-red-500" />,
      title: "Manual Scheduling Headaches",
      desc: "Trying to remember who called for what day while you're covered in concrete leads to double-bookings and forgotten jobs."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      title: "Lost Revenue",
      desc: "Every missed call is a missed $500 to $1,500+ job. Over a month, that's thousands of dollars leaking out of your business."
    },
    {
      icon: <Star className="w-6 h-6 text-red-500" />,
      title: "Weak Online Presence",
      desc: "Busy crews forget to ask for reviews. Without a steady stream of 5-star Google reviews, you're losing the trust of new local customers."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">The Problem</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">Concrete Pumping is Hard Enough.</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't let missed phone calls and manual scheduling be the reason your business stops growing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="bg-red-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h4>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  return (
    <section id="solution" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://picsum.photos/seed/concrete-pump/800/600" 
              className="rounded-3xl shadow-2xl" 
              alt="Concrete Pumping Solution"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">The Solution</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Your 24/7 AI Receptionist That Actually Knows Concrete.</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Pump Time AI isn't just a generic answering service. It's a specialized system built to handle the unique needs of concrete contractors.
            </p>
            
            <ul className="space-y-4">
              {[
                "Answers every call instantly, 24/7",
                "Asks for address, pour type, and yardage",
                "Offers 7:00 AM or 1:00 PM slots automatically",
                "Sends instant SMS confirmations to you and the customer",
                "Automatically requests Google reviews after the job"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-orange-100 p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-10 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
              See the Full Feature List <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Customer Calls",
      desc: "A prospect calls your business line. If you don't answer within 2 rings, Pump Time AI picks up professionally."
    },
    {
      num: "02",
      title: "AI Collects Details",
      desc: "The AI asks for the job address, type of pour (residential/commercial), and estimated yardage."
    },
    {
      num: "03",
      title: "Job is Booked",
      desc: "The AI checks your schedule and offers a 7 AM or 1 PM slot. Once confirmed, it's added to your calendar."
    },
    {
      num: "04",
      title: "You Get Notified",
      desc: "You receive an instant SMS with all the job details. No more scribbling on napkins or checking call logs."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-3">Process</h2>
          <h3 className="text-4xl font-bold mb-4">How It Works</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Four simple steps to automate your booking and stop missing revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4 select-none">{s.num}</div>
              <h4 className="text-xl font-bold mb-4 relative z-10">{s.title}</h4>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-6 w-12 h-[1px] bg-slate-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <PhoneCall className="w-6 h-6" />,
      title: "24/7 AI Receptionist",
      desc: "Never let a call go to voicemail again. Our AI is always awake and ready to book."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Concrete-Specific Intake",
      desc: "We ask the right questions: mix type, yardage, pump distance, and site access."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Smart Booking Logic",
      desc: "Optimized for 7 AM and 1 PM slots to maximize your crew's efficiency."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "SMS Confirmations",
      desc: "Instant texts to you and your customer so everyone is on the same page."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Review Automation",
      desc: "Automatically text customers for a Google review 2 hours after the job is done."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Google Business Support",
      desc: "We help optimize your profile to ensure you're the first choice in local search."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Features</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">Everything You Need to Scale.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all group">
              <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Integrations = () => {
  const integrations = [
    { name: "Jobber", category: "Field Service Management" },
    { name: "ServiceTitan", category: "Operations Software" },
    { name: "Housecall Pro", category: "Scheduling & CRM" },
    { name: "Google Calendar", category: "Scheduling" },
    { name: "Outlook", category: "Scheduling" },
    { name: "QuickBooks", category: "Accounting" }
  ];

  return (
    <section id="integrations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Integrations</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Connects with the Tools You Already Use.</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Pump Time AI doesn't live on an island. It connects directly to your existing CRM and scheduling software to ensure your data is always unified and your workflows are automated.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl h-fit">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Automated Workflows</h4>
                  <p className="text-slate-600">Jobs booked by AI are instantly pushed to your field service software, triggering your existing dispatch workflows.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl h-fit">
                  <Database className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Unified Customer Data</h4>
                  <p className="text-slate-600">Customer details, job history, and site notes are synced across platforms, eliminating manual data entry errors.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl h-fit">
                  <RefreshCw className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Real-Time Sync</h4>
                  <p className="text-slate-600">Our system checks your live calendar availability before offering slots, ensuring you never get double-booked.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {integrations.map((int, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:border-orange-200 hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl mb-4 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                    <Link className="w-6 h-6 text-slate-400 group-hover:text-orange-600" />
                  </div>
                  <h5 className="font-bold text-slate-900">{int.name}</h5>
                  <p className="text-xs text-slate-500 mt-1">{int.category}</p>
                </motion.div>
              ))}
            </div>
            {/* Connection lines visual effect */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-full h-full border-2 border-dashed border-slate-200 rounded-full opacity-20 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="mt-20 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm text-center">
          <h4 className="text-xl font-bold text-slate-900 mb-4">Simple Integration Process</h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold mb-3">1</div>
              <span className="text-sm font-medium text-slate-600">Connect Account</span>
            </div>
            <ArrowRight className="hidden md:block w-5 h-5 text-slate-300" />
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold mb-3">2</div>
              <span className="text-sm font-medium text-slate-600">Map Fields</span>
            </div>
            <ArrowRight className="hidden md:block w-5 h-5 text-slate-300" />
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold mb-3">3</div>
              <span className="text-sm font-medium text-slate-600">Go Live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ROI = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-24 bg-orange-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6 leading-tight">One Missed Call is a <span className="underline decoration-orange-300">$1,000</span> Mistake.</h3>
            <p className="text-xl text-orange-100 mb-10 leading-relaxed">
              For most concrete pumping companies, booking just ONE extra job per week pays for Pump Time AI for the entire year.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold mb-1">$52,000+</div>
                <p className="text-orange-100 text-sm">Potential annual revenue from just 1 extra job/week</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="text-3xl font-bold mb-1">100%</div>
                <p className="text-orange-100 text-sm">Of calls answered, even when you're covered in concrete</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">The Math is Simple</h4>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">Average Job Value</span>
                <span className="font-bold">$850</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">Missed Calls Per Week</span>
                <span className="font-bold text-red-500">3 - 5</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600">Lost Revenue Per Month</span>
                <span className="font-bold text-red-600">$10,000+</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-orange-50 px-4 rounded-xl">
                <span className="font-bold text-orange-900">Pump Time AI Cost</span>
                <span className="font-bold text-orange-600">Fraction of 1 Job</span>
              </div>
            </div>
            <button 
              onClick={onOpenModal}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100"
            >
              Calculate Your ROI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const UseCase = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Real Scenario</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">A Typical Booking with Pump Time AI</h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center font-bold">C</div>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
              <p className="text-slate-700 italic">"Hey, I need a pump for a residential pour this Wednesday. Do you have anything open?"</p>
            </div>
          </div>

          <div className="flex gap-4 items-start flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex-shrink-0 flex items-center justify-center font-bold">AI</div>
            <div className="bg-orange-600 p-4 rounded-2xl rounded-tr-none shadow-md text-white">
              <p>"I can certainly help with that. What's the address for the pour, and roughly how many yards are we looking at?"</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center font-bold">C</div>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
              <p className="text-slate-700 italic">"It's 742 Evergreen Terrace. About 25 yards for a back patio."</p>
            </div>
          </div>

          <div className="flex gap-4 items-start flex-row-reverse">
            <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex-shrink-0 flex items-center justify-center font-bold">AI</div>
            <div className="bg-orange-600 p-4 rounded-2xl rounded-tr-none shadow-md text-white">
              <p>"Perfect. I have a 7:00 AM slot available this Wednesday, March 11th. Would you like to lock that in?"</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center font-bold">C</div>
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
              <p className="text-slate-700 italic">"Yes, let's do it."</p>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-100 p-6 rounded-3xl flex items-center gap-4">
            <div className="bg-green-500 p-2 rounded-xl text-white">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-green-900">Job Booked & Confirmed</h4>
              <p className="text-green-700 text-sm">SMS sent to customer and owner instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProspectSpecific = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full blur-[120px] opacity-20" />
          
          <div className="max-w-3xl relative z-10">
            <h3 className="text-4xl font-bold mb-8">Why This Works for Small Concrete Pumping Companies</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3 text-orange-400">No Receptionist Needed</h4>
                <p className="text-slate-400 leading-relaxed">
                  Most small operators can't justify a full-time office person. Pump Time AI gives you that professional front for a fraction of the cost.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-orange-400">Focus on the Pour</h4>
                <p className="text-slate-400 leading-relaxed">
                  Stop pulling your phone out while you're operating the boom. Focus on safety and quality while the AI handles the logistics.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-orange-400">Professional Image</h4>
                <p className="text-slate-400 leading-relaxed">
                  Customers trust companies that answer the phone and send professional confirmations. Stand out from the "one-man-show" competitors.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 text-orange-400">Scale Without Stress</h4>
                <p className="text-slate-400 leading-relaxed">
                  As you add more trucks, the AI scales with you. It handles multiple calls at once, something a human receptionist struggles with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onOpenModal, content }: { onOpenModal: () => void; content: SiteContent['pricing'] }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Pricing</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing.</h3>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Positioned as a business solution that pays for itself, not just another software tool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-10 text-center border-b border-slate-100">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">The Starter Plan</h4>
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-bold text-slate-900">${content.basic.price}</span>
                <span className="text-slate-500">/month</span>
              </div>
            </div>
            <div className="p-10 bg-slate-50/50">
              <ul className="space-y-4 mb-10">
                {content.basic.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onOpenModal}
                className="w-full bg-white border-2 border-orange-600 text-orange-600 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all"
              >
                Choose Starter
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-slate-900 rounded-3xl shadow-xl border border-slate-800 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">
              Popular
            </div>
            <div className="p-10 text-center border-b border-slate-800">
              <h4 className="text-2xl font-bold text-white mb-2">The Pumper Plan</h4>
              <div className="flex items-center justify-center gap-1">
                <span className="text-4xl font-bold text-white">${content.pro.price}</span>
                <span className="text-slate-400">/month</span>
              </div>
            </div>
            <div className="p-10 bg-slate-800/50">
              <ul className="space-y-4 mb-10">
                {content.pro.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onOpenModal}
                className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/20"
              >
                Choose Pumper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-orange-600 -z-10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Hear Pump Time AI in Action?</h3>
        <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Stop wondering how many jobs you're missing. See how our AI can transform your concrete pumping business today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onOpenModal}
            className="bg-white text-orange-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-orange-50 transition-all shadow-2xl"
          >
            Book a Demo
          </button>
          <button className="bg-orange-700 text-white border border-orange-400 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-orange-800 transition-all">
            Call the Demo Line
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-600 p-1.5 rounded-lg">
                <TrendingUp className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Pump Time <span className="text-orange-600">AI</span></span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              The AI-powered growth engine for concrete pumping companies. We answer the calls you miss, book the jobs you want, and automate the reviews you need.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-all cursor-pointer">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 transition-all cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#problem" className="hover:text-white transition-colors">Problem</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Solution</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-orange-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-orange-500" />
                <span>hello@pumptime.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Pump Time AI. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const LeadModal = ({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: (data: any) => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    trucks: '',
    currentMethod: '',
    biggestPain: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      onSuccess(formData);
      onClose();
      setStep(1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <div className="flex gap-2 mb-4">
                  <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-orange-600' : 'bg-slate-100'}`} />
                  <div className={`h-1.5 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-orange-600' : 'bg-slate-100'}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {step === 1 ? "Tell us about your company" : "Almost there..."}
                </h3>
                <p className="text-slate-500 mt-2">
                  {step === 1 ? "Help us understand your current setup." : "What's the biggest challenge you're facing?"}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 ? (
                  <>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Company Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Dallas Concrete Pumping"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Number of Trucks</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                        value={formData.trucks}
                        onChange={(e) => setFormData({...formData, trucks: e.target.value})}
                      >
                        <option value="">Select fleet size</option>
                        <option value="1-2">1-2 Trucks</option>
                        <option value="3-5">3-5 Trucks</option>
                        <option value="6-10">6-10 Trucks</option>
                        <option value="10+">10+ Trucks</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">How do you book jobs now?</label>
                      <select 
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                        value={formData.currentMethod}
                        onChange={(e) => setFormData({...formData, currentMethod: e.target.value})}
                      >
                        <option value="">Select method</option>
                        <option value="phone">Mostly phone calls/voicemail</option>
                        <option value="receptionist">Full-time receptionist</option>
                        <option value="software">Scheduling software</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Work Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">What's your biggest pain point?</label>
                      <textarea 
                        required
                        placeholder="e.g. Missing calls while on-site, double bookings..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all h-24 resize-none"
                        value={formData.biggestPain}
                        onChange={(e) => setFormData({...formData, biggestPain: e.target.value})}
                      />
                    </div>
                  </>
                )}

                <button 
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 mt-4"
                >
                  {step === 1 ? "Next Step" : "Get My Custom Demo"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const TestCallModal = ({ isOpen, onClose, userData }: { isOpen: boolean; onClose: () => void; userData: any }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'active' | 'ended'>('idle');
  const [transcript, setTranscript] = useState<{ role: 'ai' | 'user'; text: string }[]>([]);

  // This is where you would plug in Vapi or another AI Voice SDK
  const startCall = async () => {
    setCallStatus('connecting');
    setIsCalling(true);
    
    // Simulate connection delay
    setTimeout(() => {
      setCallStatus('active');
      setTranscript([{ role: 'ai', text: `Hello! Thanks for calling ${userData?.company || 'us'}. How can I help you with your concrete pumping needs today?` }]);
    }, 1500);
  };

  const endCall = () => {
    setCallStatus('ended');
    setTimeout(() => {
      setIsCalling(false);
      setCallStatus('idle');
      setTranscript([]);
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10"
          >
            <div className="p-8 flex flex-col items-center text-center">
              {/* Call Header */}
              <div className="mb-8">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-orange-500/20">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Test Call</h3>
                <p className="text-slate-400 text-sm mt-1 capitalize">{callStatus === 'idle' ? 'Ready to test' : callStatus}</p>
              </div>

              {/* Transcript Area */}
              <div className="w-full bg-white/5 rounded-3xl p-6 mb-8 h-64 overflow-y-auto flex flex-col gap-4 text-left border border-white/5">
                {transcript.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-2">
                    <Mic className="w-8 h-8 opacity-20" />
                    <p className="text-xs font-medium">Click the button below to start the conversation</p>
                  </div>
                ) : (
                  transcript.map((msg, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: msg.role === 'ai' ? -10 : 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                        msg.role === 'ai' 
                          ? 'bg-orange-600 text-white self-start rounded-tl-none' 
                          : 'bg-white/10 text-slate-200 self-end rounded-tr-none'
                      }`}
                    >
                      {msg.text}
                    </motion.div>
                  ))
                )}
              </div>

              {/* Controls */}
              <div className="w-full flex gap-4">
                {callStatus === 'idle' ? (
                  <button 
                    onClick={startCall}
                    className="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-bold hover:bg-orange-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Start Call
                  </button>
                ) : (
                  <button 
                    onClick={endCall}
                    className="flex-1 bg-red-500 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition-all flex items-center justify-center gap-2"
                  >
                    <X className="w-5 h-5" />
                    End Call
                  </button>
                )}
              </div>

              <p className="text-[10px] text-slate-500 mt-6 uppercase tracking-widest font-bold">
                Powered by Pump Time AI Engine
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const BookingForm = ({ onSubmit, onCancel }: { onSubmit: (booking: Omit<Booking, 'id' | 'status'>) => void; onCancel: () => void }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    volume: '',
    pumpType: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Plus className="w-5 h-5 text-orange-600" />
          Add New Booking
        </h3>
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Client Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
              value={formData.customerName}
              onChange={(e) => setFormData({...formData, customerName: e.target.value})}
              placeholder="e.g. John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              placeholder="e.g. JD Concrete"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
              <input 
                required
                type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="(555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <input 
                required
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Job Site Address</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              placeholder="123 Foundation Way, Dallas, TX"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Concrete Volume</label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
                value={formData.volume}
                onChange={(e) => setFormData({...formData, volume: e.target.value})}
                placeholder="e.g. 45 yards"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Pump Type</label>
              <select 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none bg-white"
                value={formData.pumpType}
                onChange={(e) => setFormData({...formData, pumpType: e.target.value})}
              >
                <option value="">Select Pump</option>
                <option value="Line Pump">Line Pump</option>
                <option value="28m Boom">28m Boom</option>
                <option value="32m Boom">32m Boom</option>
                <option value="38m Boom">38m Boom</option>
                <option value="47m Boom">47m Boom</option>
                <option value="52m Boom">52m Boom</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Desired Date</label>
              <input 
                required
                type="date" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Desired Time</label>
              <select 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none bg-white"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              >
                <option value="">Select Time</option>
                <option value="07:00 AM">07:00 AM</option>
                <option value="08:00 AM">08:00 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
              </select>
            </div>
          </div>
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Create Booking
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const AdminDashboard = ({ 
  content, 
  onUpdate, 
  onLogout,
  bookings,
  onUpdateBookings
}: { 
  content: SiteContent; 
  onUpdate: (content: SiteContent) => void; 
  onLogout: () => void;
  bookings: Booking[];
  onUpdateBookings: (bookings: Booking[]) => void;
}) => {
  const [localContent, setLocalContent] = useState(content);
  const [activeSection, setActiveSection] = useState<'hero' | 'pricing' | 'bookings'>('hero');
  const [isAddingBooking, setIsAddingBooking] = useState(false);

  const handleSave = () => {
    onUpdate(localContent);
    alert('Site content updated successfully!');
  };

  const handleAddBooking = (newBookingData: Omit<Booking, 'id' | 'status'>) => {
    const newBooking: Booking = {
      ...newBookingData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending'
    };
    onUpdateBookings([newBooking, ...bookings]);
    setIsAddingBooking(false);
    alert('New booking added successfully!');
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    onUpdateBookings(updated);
  };

  const deleteBooking = (id: string) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      const updated = bookings.filter(b => b.id !== id);
      onUpdateBookings(updated);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <Settings className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight">Site Admin</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <button
            onClick={() => {
              setActiveSection('hero');
              setIsAddingBooking(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'hero' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Layout className="w-5 h-5" />
            Hero Section
          </button>
          <button
            onClick={() => {
              setActiveSection('pricing');
              setIsAddingBooking(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'pricing' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            Pricing Plans
          </button>
          <button
            onClick={() => {
              setActiveSection('bookings');
              setIsAddingBooking(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'bookings' ? 'bg-orange-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Calendar className="w-5 h-5" />
            Manage Bookings
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-400 hover:text-red-400 transition-all"
          >
            <X className="w-5 h-5" />
            Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {activeSection === 'bookings' ? 'Booking Management' : 'Site Editor'}
              </h1>
              <p className="text-slate-500 mt-1">
                {activeSection === 'bookings' 
                  ? 'View and manage all incoming job bookings.' 
                  : 'Update your landing page content in real-time.'}
              </p>
            </div>
            <div className="flex gap-4">
              {activeSection === 'bookings' && !isAddingBooking && (
                <button 
                  onClick={() => setIsAddingBooking(true)}
                  className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all flex items-center gap-2 shadow-lg shadow-orange-200"
                >
                  <Plus className="w-5 h-5" />
                  Add Booking
                </button>
              )}
              {activeSection !== 'bookings' && (
                <button 
                  onClick={handleSave}
                  className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all flex items-center gap-2 shadow-lg shadow-orange-200"
                >
                  <Save className="w-5 h-5" />
                  Save Changes
                </button>
              )}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            {isAddingBooking ? (
              <BookingForm onSubmit={handleAddBooking} onCancel={() => setIsAddingBooking(false)} />
            ) : (
              <>
                {activeSection === 'hero' && (
                  <div className="p-8 space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Edit3 className="w-5 h-5 text-orange-600" />
                      Hero Section Content
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Main Title</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
                          value={localContent.hero.title}
                          onChange={(e) => setLocalContent({...localContent, hero: {...localContent.hero, title: e.target.value}})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Subtitle</label>
                        <textarea 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none h-32 resize-none"
                          value={localContent.hero.subtitle}
                          onChange={(e) => setLocalContent({...localContent, hero: {...localContent.hero, subtitle: e.target.value}})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">CTA Button Text</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
                          value={localContent.hero.cta}
                          onChange={(e) => setLocalContent({...localContent, hero: {...localContent.hero, cta: e.target.value}})}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'pricing' && (
                  <div className="p-8 space-y-8">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Edit3 className="w-5 h-5 text-orange-600" />
                      Pricing Configuration
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-700 border-b pb-2">Starter Plan</h4>
                        <div>
                          <label className="block text-sm font-bold text-slate-600 mb-1">Monthly Price ($)</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
                            value={localContent.pricing.basic.price}
                            onChange={(e) => setLocalContent({
                              ...localContent, 
                              pricing: {
                                ...localContent.pricing, 
                                basic: {...localContent.pricing.basic, price: e.target.value}
                              }
                            })}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-700 border-b pb-2">Pumper Plan</h4>
                        <div>
                          <label className="block text-sm font-bold text-slate-600 mb-1">Monthly Price ($)</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 outline-none"
                            value={localContent.pricing.pro.price}
                            onChange={(e) => setLocalContent({
                              ...localContent, 
                              pricing: {
                                ...localContent.pricing, 
                                pro: {...localContent.pricing.pro, price: e.target.value}
                              }
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'bookings' && (
                  <div className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Job Details</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date/Time</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {bookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                              <td className="px-6 py-4">
                                <p className="font-bold text-slate-900">{booking.customerName}</p>
                                <p className="text-xs text-slate-600 font-medium">{booking.company}</p>
                                <p className="text-[10px] text-slate-400">{booking.phone}</p>
                              </td>
                              <td className="px-6 py-4">
                                <p className="text-xs text-slate-900 font-bold">{booking.pumpType}</p>
                                <p className="text-[10px] text-slate-500">{booking.volume}</p>
                                <p className="text-[10px] text-slate-400 truncate max-w-[150px]">{booking.address}</p>
                              </td>
                              <td className="px-6 py-4">
                                <p className="text-sm text-slate-900 font-medium">{booking.date}</p>
                                <p className="text-xs text-slate-500">{booking.time}</p>
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  booking.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : 
                                  booking.status === 'pending' ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
                                }`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right space-x-2">
                                <select 
                                  className="text-xs border border-slate-200 rounded px-2 py-1 outline-none focus:border-orange-600 bg-white"
                                  value={booking.status}
                                  onChange={(e) => updateBookingStatus(booking.id, e.target.value as Booking['status'])}
                                >
                                  <option value="pending">Pending</option>
                                  <option value="confirmed">Confirmed</option>
                                  <option value="cancelled">Cancelled</option>
                                </select>
                                <button 
                                  onClick={() => deleteBooking(booking.id)}
                                  className="text-red-500 hover:text-red-700 p-1"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {bookings.length === 0 && (
                      <div className="p-12 text-center">
                        <Calendar className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                        <p className="text-slate-500">No bookings found.</p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

const Dashboard = ({ userData, onLogout }: { userData: any; onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const stats = [
    { label: 'Total Calls Handled', value: '142', icon: PhoneCall, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Jobs Booked', value: '38', icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Revenue Generated', value: '$26,400', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Hours Saved', value: '12.5', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const recentCalls = [
    { id: 1, caller: '(214) 555-0123', status: 'Booked', type: '7:00 AM Slot', time: '10 mins ago', duration: '2:14' },
    { id: 2, caller: '(817) 555-9876', status: 'Inquiry', type: 'Pricing Info', time: '45 mins ago', duration: '1:05' },
    { id: 3, caller: '(972) 555-4321', status: 'Booked', type: '1:00 PM Slot', time: '2 hours ago', duration: '3:22' },
    { id: 4, caller: '(214) 555-8888', status: 'Missed', type: 'Out of Hours', time: '4 hours ago', duration: '0:00' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col">
        <div className="p-6 border-bottom border-slate-100">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1.5 rounded-lg">
              <TrendingUp className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Pump Time <span className="text-orange-600">AI</span></span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'calls', label: 'Call Logs', icon: PhoneCall },
            { id: 'bookings', label: 'Bookings', icon: Calendar },
            { id: 'settings', label: 'AI Settings', icon: Zap },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === item.id 
                  ? 'bg-orange-50 text-orange-600' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-slate-900 rounded-2xl p-4 text-white">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Current Plan</p>
            <p className="font-bold text-sm mb-3">The Pumper Plan</p>
            <button className="w-full bg-orange-600 py-2 rounded-lg text-xs font-bold hover:bg-orange-700 transition-all">
              Upgrade
            </button>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 mt-4 text-sm font-semibold text-slate-500 hover:text-red-600 transition-all"
          >
            <X className="w-5 h-5" />
            Exit Demo
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <h2 className="text-lg font-bold text-slate-900 capitalize">{activeTab}</h2>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900">{userData?.name || 'Demo User'}</p>
              <p className="text-xs text-slate-500">{userData?.company || 'Concrete Pumping Co.'}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 font-bold">
              {(userData?.name || 'D')[0]}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome to your Dashboard</h1>
              <p className="text-slate-500 mt-1">Here's how Pump Time AI is performing for {userData?.company || 'your company'}.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
                >
                  <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="font-bold text-slate-900">Recent Call Activity</h3>
                  <button className="text-sm font-bold text-orange-600 hover:text-orange-700">View All</button>
                </div>
                <div className="divide-y divide-slate-50">
                  {recentCalls.map((call) => (
                    <div key={call.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          call.status === 'Booked' ? 'bg-emerald-100 text-emerald-600' : 
                          call.status === 'Missed' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                        }`}>
                          <PhoneCall className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{call.caller}</p>
                          <p className="text-xs text-slate-500">{call.time} • {call.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          call.status === 'Booked' ? 'bg-emerald-100 text-emerald-800' : 
                          call.status === 'Missed' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                        }`}>
                          {call.status}
                        </span>
                        <p className="text-xs font-bold text-slate-900 mt-1">{call.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Demo Widget */}
              <div className="bg-orange-600 rounded-3xl p-8 text-white shadow-xl shadow-orange-200 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Zap className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Test Your AI Agent</h3>
                  <p className="text-orange-100 text-sm mb-6">Experience how the AI handles a call for {userData?.company || 'your company'}.</p>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider">AI Agent Online</span>
                    </div>
                    <p className="text-sm font-medium italic">"Hello! Thanks for calling {userData?.company || 'us'}. Are you looking to book a pump for a 7 AM or 1 PM slot?"</p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsCallModalOpen(true)}
                  className="w-full bg-white text-orange-600 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all shadow-lg relative z-10 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" />
                  Trigger Test Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TestCallModal 
        isOpen={isCallModalOpen} 
        onClose={() => setIsCallModalOpen(false)} 
        userData={userData}
      />
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState<'landing' | 'dashboard' | 'admin'>('landing');
  const [userData, setUserData] = useState<any>(null);
  const [siteContent, setSiteContent] = useState<SiteContent>(defaultContent);
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);

  const handleLeadSuccess = (data: any) => {
    setUserData(data);
    if (data.email === 'admin@pumptime.ai') {
      setView('admin');
    } else {
      setView('dashboard');
    }
    window.scrollTo(0, 0);
  };

  if (view === 'admin') {
    return (
      <AdminDashboard 
        content={siteContent} 
        onUpdate={setSiteContent} 
        onLogout={() => setView('landing')} 
        bookings={bookings}
        onUpdateBookings={setBookings}
      />
    );
  }

  if (view === 'dashboard') {
    return <Dashboard userData={userData} onLogout={() => setView('landing')} />;
  }

  return (
    <div className="min-h-screen font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar onOpenModal={() => setIsModalOpen(true)} companyName={siteContent.companyName} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} content={siteContent.hero} />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Integrations />
        <ROI onOpenModal={() => setIsModalOpen(true)} />
        <UseCase />
        <ProspectSpecific />
        <Pricing onOpenModal={() => setIsModalOpen(true)} content={siteContent.pricing} />
        <CTA onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={handleLeadSuccess}
      />
    </div>
  );
}
