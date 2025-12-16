import { Briefcase, Clock, DollarSign, Rocket, Users, Award, Heart, Globe, ArrowRight, GraduationCap, Cpu, Brain, Zap } from 'lucide-react';

export default function JobsInterns() {
  const benefits = [
    { icon: Heart, title: 'Workplace Flexibility', description: 'Work-life balance with flexible hours' },
    { icon: Award, title: 'Health & Wellness', description: 'Comprehensive health initiatives' },
    { icon: Zap, title: 'Recognition Awards', description: 'Service & Spot awards program' },
    { icon: Globe, title: 'Global Opportunities', description: 'International assignments available' },
  ];

  const openings = [
    { title: 'Project Manager', experience: '3-7 Years Exp', type: 'Full-time', location: 'Guntur, AP' },
    { title: 'Associate Software Engineer', experience: '3+ Years', type: 'Full-time', location: 'Guntur, AP' },
    { title: 'Graduate Engineer Trainee', experience: '0-3 Years', type: 'Full-time', location: 'Guntur, AP' },
    { title: 'Sales and Marketing Manager', experience: 'Experienced', type: 'Full-time', location: 'Guntur, AP' },
  ];

  const internships = [
  {
    title: 'Backend & Cloud Engineering Intern',
    duration: '4–6 Months',
    stipend: 'Paid (Performance-based)',
    icon: Cpu,
    skills: [
      'Java / Python / Go',
      'Spring Boot / FastAPI',
      'PostgreSQL / MongoDB / Redis',
      'Apache Kafka',
      'Docker & Kubernetes',
      'AWS / Azure / GCP',
      'CI/CD (GitHub Actions)'
    ],
  },
  {
    title: 'AI / ML & Data Engineering Intern',
    duration: '4–6 Months',
    stipend: 'Paid',
    icon: Brain,
    skills: [
      'Python',
      'Scikit-learn',
      'TensorFlow / PyTorch',
      'Pandas & NumPy',
      'Apache Kafka',
      'ML Model Deployment (FastAPI)',
      'Docker'
    ],
  },
  {
    title: 'DevOps & Platform Engineering Intern',
    duration: '3–5 Months',
    stipend: 'Certificate + Incentives',
    icon: Zap,
    skills: [
      'Linux & Shell Scripting',
      'Docker',
      'Kubernetes',
      'CI/CD (Jenkins / GitHub Actions)',
      'Nginx',
      'Prometheus & Grafana',
      'Cloud Security Basics'
    ],
  },
];
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-mid to-brand-dark text-white py-24 px-4 overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-brand-green/20 rounded-full blur-xl" />
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-[15%] animate-float opacity-20">
          <Rocket size={48} />
        </div>
        <div className="absolute bottom-32 left-[10%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Users size={40} />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Briefcase size={16} className="mr-2 text-brand-green" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Build Your <span className="text-brand-green">Career</span> With Us
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            It's all about identifying your TRUE potential. At Aadhav Infotech, we strongly believe that our people are our greatest asset.
          </p>
          
          <button className="group px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-hover hover:shadow-2xl hover:shadow-brand-green/30 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <Rocket size={20} />
            <span>Explore Opportunities</span>
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green text-sm font-semibold rounded-full mb-4">
              Why Join Us?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Benefits & Perks
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 border border-brand-dark/5 hover:border-brand-green/20"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-green/10 rounded-2xl mb-4 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="text-brand-green group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{benefit.title}</h3>
                <p className="text-sm text-brand-dark/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-brand-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Current Openings */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark">Current Openings</h2>
                  <p className="text-brand-dark/60">Join our growing team</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {openings.map((job, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 border border-brand-dark/5 hover:border-brand-green/20"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="flex items-center text-brand-dark/70">
                            <Clock size={14} className="mr-1 text-brand-green" />
                            {job.experience}
                          </span>
                          <span className="flex items-center text-brand-dark/70">
                            <Briefcase size={14} className="mr-1 text-brand-green" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <a 
                        href={`mailto:services@aadhavinfotech.in?subject=Job Application - ${job.title}`}
                        className="px-4 py-2 rounded-full bg-brand-green text-white font-semibold hover:bg-brand-green-hover hover:shadow-lg hover:shadow-brand-green/25 transition-all duration-300 flex items-center space-x-1 text-sm"
                      >
                        <span>Apply</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internships */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-dark">Internships</h2>
                  <p className="text-brand-dark/60">Kickstart your career</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {internships.map((internship, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 border border-brand-dark/5 hover:border-brand-green/20"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                          <internship.icon className="text-brand-accent" size={24} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-green transition-colors">
                            {internship.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-brand-dark/70 mt-1">
                            <span className="flex items-center">
                              <Clock size={14} className="mr-1 text-brand-green" />
                              {internship.duration}
                            </span>
                            <span className="flex items-center">
                              <DollarSign size={14} className="mr-1 text-brand-green" />
                              {internship.stipend}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {internship.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={`mailto:services@aadhavinfotech.in?subject=Internship Application - ${internship.title}`}
                      className="mt-4 w-full py-3 rounded-full bg-brand-green text-white font-semibold hover:bg-brand-green-hover hover:shadow-lg hover:shadow-brand-green/25 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-dark to-brand-mid text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a 
            href="mailto:services@aadhavinfotech.in?subject=Resume Submission"
            className="group px-8 py-4 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-hover hover:shadow-2xl hover:shadow-brand-green/30 transition-all duration-300 flex items-center space-x-2 mx-auto inline-flex"
          >
            <span>Send Your Resume</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
