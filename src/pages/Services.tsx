import {
  CreditCard,
  Building2,
  ScanBarcode,
  Calculator,
  Globe,
  MessageSquare,
  GraduationCap,
  Users,
  LineChart,
  ArrowRight,
  Sparkles,
  Rocket
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: CreditCard,
      title: 'Easy Billing Software',
      description: 'Software designed to handle time and billing tracking also as invoicing customers for services and products.',
      color: 'from-brand-green to-brand-accent',
    },
    {
      icon: Building2,
      title: 'Hospital Management Software',
      description: 'The clinical, back office and generic management of all activities. It integrates the whole resources of a hospital.',
      color: 'from-brand-dark to-brand-mid',
    },
    {
      icon: ScanBarcode,
      title: 'Barcode Billing Software',
      description: 'Barcode systems are wont to automate data collection where hand recording is neither timely or cost effective.',
      color: 'from-brand-accent to-brand-green',
    },
    {
      icon: Calculator,
      title: 'Accounting Software',
      description: 'Accounting software that records and processes accounting transactions within functional modules.',
      color: 'from-brand-green-hover to-brand-green',
    },
    {
      icon: Globe,
      title: 'Web Application',
      description: 'Modern web applications with cross-platform compatibility and responsive design for all devices.',
      color: 'from-brand-mid to-brand-dark',
    },
    {
      icon: MessageSquare,
      title: 'Bulk SMS',
      description: 'Bulk Messaging is the dissemination of large numbers of SMS messages for delivery to mobile phone terminals.',
      color: 'from-brand-green to-brand-green-hover',
    },
    {
      icon: GraduationCap,
      title: 'E Learning',
      description: 'We help organizations cater to the varied learning needs of diverse learners with interactive platforms.',
      color: 'from-brand-accent to-brand-green',
    },
    {
      icon: Users,
      title: 'Training & Assessment',
      description: 'Our ILT services can create and/or renovate Presentations, Instructor and Participant Guides.',
      color: 'from-brand-dark to-brand-mid',
    },
    {
      icon: LineChart,
      title: 'Data Analytics',
      description: 'We trust that an analytics-driven enterprise is also able to uncover the potential that data possesses.',
      color: 'from-brand-green to-brand-accent',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-mid to-brand-dark text-white py-20 px-4 overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <Sparkles size={16} className="mr-2 text-brand-green" />
                <span className="text-sm font-medium">Our Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                What We Offer?
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                We provide application development services for implementing the IT strategy which will keep you before your competitors.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="group px-6 py-3 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-hover hover:shadow-lg hover:shadow-brand-green/25 transition-all duration-300 flex items-center space-x-2">
                <Rocket size={18} />
                <span>Get a Quote</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-brand-dark/5"
              >
                {/* Top Gradient Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />
                
                <div className="p-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/10 rounded-2xl mb-6 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                    <service.icon className="text-brand-green group-hover:text-white transition-colors" size={32} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-brand-dark/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <button className="inline-flex items-center text-brand-green font-semibold hover:text-brand-accent transition-colors group/btn">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-green/10 to-brand-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-brand-dark/70 mb-8">
            We specialize in building tailored software solutions that fit your unique business needs.
          </p>
          <button className="group px-8 py-4 bg-brand-dark text-white font-semibold rounded-full hover:bg-brand-mid hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Contact Our Team</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
