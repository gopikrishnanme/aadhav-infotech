import { Calendar, ChevronRight, Lightbulb, Brain, Cpu, Wifi, ArrowRight, Sparkles, Rocket, BookOpen } from 'lucide-react';

export default function Innovation() {
  const articles = [
    {
      title: 'Fuel your journey to AI with data science',
      date: 'May 2, 2021',
      snippet: 'Build and scale AI with trust and transparency. Discover how data science forms the foundation of artificial intelligence and machine learning.',
      icon: Brain,
      tag: 'AI & ML',
    },
    {
      title: 'Why machine learning over artificial intelligence?',
      date: 'Apr 2, 2021',
      snippet: 'With machine learning, it is possible for the machine to learn from experience and improve its performance over time.',
      icon: Cpu,
      tag: 'Machine Learning',
    },
    {
      title: 'Explore our IoT solutions for healthcare',
      date: 'Mar 5, 2021',
      snippet: "One of healthcare's most extraordinary feats is keeping people safe and healthy through connected devices.",
      icon: Wifi,
      tag: 'IoT',
    },
  ];

  const researchAreas = [
    { title: 'Artificial Intelligence', icon: Brain, description: 'Cutting-edge AI solutions for business automation' },
    { title: 'Internet of Things', icon: Wifi, description: 'Connected devices and smart systems' },
    { title: 'Machine Learning', icon: Cpu, description: 'Data-driven predictive models' },
    { title: 'Innovation Labs', icon: Lightbulb, description: 'Experimental R&D projects' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-mid to-brand-dark text-white py-24 px-4 overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-brand-green/20 rounded-full blur-xl" />
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-[15%] animate-float opacity-20">
          <Lightbulb size={48} />
        </div>
        <div className="absolute bottom-32 left-[10%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Brain size={40} />
        </div>
        <div className="absolute top-1/2 right-[5%] animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <Cpu size={36} />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Sparkles size={16} className="mr-2 text-brand-green" />
            <span className="text-sm font-medium">Research & Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            IT Research & <span className="text-brand-green">Innovation</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Don't settle for less than the best. We bring cutting-edge technology solutions that drive innovation and accelerate your business growth.
          </p>
          
          <button className="group px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-hover hover:shadow-2xl hover:shadow-brand-green/30 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <Rocket size={20} />
            <span>Explore Our Research</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* About R&D Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                World-Class R&D Capabilities
              </h2>
              <p className="text-lg text-brand-dark/70 leading-relaxed mb-6">
                Setting up or scaling an in-house software engineering operation can be costly and time-consuming. From recruiting and training to infrastructure and management, the challenges are significant. That's where we come in.
              </p>
              <p className="text-lg text-brand-dark/70 leading-relaxed mb-8">
                We have the talent, processes, labs and global delivery model to make your software research and development world class.
              </p>
              <button className="group px-6 py-3 bg-brand-dark text-white font-semibold rounded-full hover:bg-brand-mid transition-all duration-300 flex items-center space-x-2">
                <span>Learn More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Research Areas Grid */}
            <div className="grid grid-cols-2 gap-4">
              {researchAreas.map((area, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 border border-brand-dark/5 hover:border-brand-green/20"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-green/10 rounded-xl mb-4 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                    <area.icon className="text-brand-green group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-brand-dark/60">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-brand-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
              From Our Research Lab
            </h2>
            <p className="text-lg text-brand-dark/70 max-w-2xl mx-auto">
              Stay updated with the latest trends and insights in technology and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-brand-dark/5"
              >
                {/* Gradient Header with Icon */}
                <div className="h-48 bg-gradient-to-br from-brand-dark to-brand-mid relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <article.icon className="text-white/20" size={80} />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-green text-white text-xs font-semibold rounded-full">
                      {article.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-brand-dark/60 mb-3">
                    <Calendar size={14} className="mr-2 text-brand-green" />
                    {article.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-brand-dark/70 mb-6 line-clamp-3">
                    {article.snippet}
                  </p>
                  
                  <button className="inline-flex items-center text-brand-green font-semibold hover:text-brand-accent transition-colors group/btn">
                    <BookOpen size={16} className="mr-2" />
                    <span>Read Article</span>
                    <ChevronRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-dark to-brand-mid text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Our R&D Team
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's innovate together and build the future of technology.
          </p>
          <a 
            href="mailto:services@aadhavinfotech.in?subject=Start a Project"
            className="group px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-hover hover:shadow-2xl hover:shadow-brand-green/30 transition-all duration-300 flex items-center space-x-2 mx-auto inline-flex"
          >
            <span>Start a Project</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
