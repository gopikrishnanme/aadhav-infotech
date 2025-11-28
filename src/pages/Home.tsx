import { Target, Lightbulb, Award, Code, Cpu, Globe, Users, Briefcase, CheckCircle, Star, Quote, Rocket, ArrowRight } from 'lucide-react';

export default function Home() {
  const stats = [
    { value: '50+', label: 'Happy Clients', icon: Users },
    { value: '100+', label: 'Projects Completed', icon: Briefcase },
    { value: '10+', label: 'Years Experience', icon: Award },
    { value: '24/7', label: 'Support Available', icon: CheckCircle },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart Solutions',
      content: 'Aadhav Infotech delivered our hospital management system on time and exceeded our expectations. Their team is professional and highly skilled.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Director, EduLearn Academy',
      content: 'The e-learning platform they built for us has transformed how we deliver education. Outstanding work and excellent support!',
      rating: 5,
    },
    {
      name: 'Anil Reddy',
      role: 'Owner, QuickMart Retail',
      content: 'Their billing software has streamlined our operations completely. The barcode integration works flawlessly. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-mid to-brand-dark text-white py-24 px-4 overflow-hidden">
        {/* Abstract Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-brand-green/20 rounded-full blur-xl" />
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-[10%] animate-float opacity-20">
          <Code size={48} />
        </div>
        <div className="absolute top-32 right-[15%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Cpu size={40} />
        </div>
        <div className="absolute bottom-32 left-[20%] animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <Globe size={36} />
        </div>
        <div className="absolute bottom-20 right-[25%] animate-float opacity-20" style={{ animationDelay: '0.5s' }}>
          <Lightbulb size={44} />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 bg-brand-green rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium">Welcome to Aadhav Infotech</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            A Smarter Way to
            <span className="block text-brand-green">IT Services</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
            Reaching Technology To Common Man — Empowering businesses with innovative software solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-hover hover:shadow-2xl hover:shadow-brand-green/30 transition-all duration-300 flex items-center justify-center space-x-2">
              <Rocket size={20} />
              <span>Get Started</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 bg-white relative z-10 -mt-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-green/10 rounded-2xl mb-4 group-hover:bg-brand-green/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="text-brand-green" size={28} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-1">{stat.value}</div>
                <div className="text-sm text-brand-dark/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-brand-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
              How We Do It?
            </h2>
            <p className="text-lg text-brand-dark/70 max-w-3xl mx-auto">
              Our vision is to develop in a constant manner and grow as a major IT service provider, delivering quality Web and Software Development solutions in the competitive global marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: 'Our Philosophy',
                description: 'For us, software development is an engineering task with clearly defined goals, thought-through processes and high quality standards yielding individual and cost-conscious results.',
                color: 'from-brand-green to-brand-accent',
              },
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To provide a solution suite that will enable everyone involved in the development and implementation of new or enhanced applications to participate in the software quality process.',
                color: 'from-brand-accent to-brand-green',
              },
              {
                icon: Award,
                title: 'Our Values',
                description: 'We believe in a culture that strongly transmits the values of integrity, customer focus, and results. Software can best be produced by talented, creative individuals who function as true teams.',
                color: 'from-brand-green-hover to-brand-green',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Accent Bar */}
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${item.color}`} />
                
                <div className="p-8 pl-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/10 rounded-2xl mb-6 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                    <item.icon className="text-brand-green group-hover:text-white transition-colors" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-green transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-brand-dark/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
                Who We Are?
              </h2>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-xl font-semibold text-brand-green">Efficient</span>
                <span className="w-2 h-2 bg-brand-dark/30 rounded-full" />
                <span className="text-xl font-semibold text-brand-green">Secure</span>
                <span className="w-2 h-2 bg-brand-dark/30 rounded-full" />
                <span className="text-xl font-semibold text-brand-green">Reliable</span>
              </div>
              <p className="text-lg text-brand-dark/70 leading-relaxed mb-8">
                Aadhav Infotech is one among the leading Software Developers, has elevated the quality of excellence by offering quality products. With the breadth and depth of experience, we supply highest quality products. Our professional attitude and pro-active client services has helped us to emerge as the indubitable winner within the industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Custom Software', 'Web Applications', 'Mobile Solutions', 'Cloud Services'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-brand-green" size={20} />
                    <span className="text-brand-dark/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Abstract Illustration */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Main Circle */}
                <div className="absolute inset-8 bg-gradient-to-br from-brand-green/20 to-brand-accent/20 rounded-full" />
                <div className="absolute inset-16 bg-gradient-to-br from-brand-dark/10 to-brand-mid/10 rounded-full" />
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-12 w-20 h-20 bg-brand-green rounded-2xl flex items-center justify-center shadow-xl animate-float">
                  <Code className="text-white" size={36} />
                </div>
                <div className="absolute bottom-12 left-8 w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <Globe className="text-white" size={28} />
                </div>
                <div className="absolute top-1/2 right-4 w-14 h-14 bg-brand-accent rounded-xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                  <Cpu className="text-white" size={24} />
                </div>
                <div className="absolute bottom-4 right-1/4 w-12 h-12 bg-brand-green-hover rounded-xl flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <Lightbulb className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-brand-green/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={48} className="text-brand-green" />
                </div>
                
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-brand-dark/70 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">{testimonial.name}</div>
                    <div className="text-sm text-brand-dark/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-dark to-brand-mid text-white relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Let's build something amazing together. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-hover hover:shadow-2xl hover:shadow-brand-green/30 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
