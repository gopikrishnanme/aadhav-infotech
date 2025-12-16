import { MapPin, Mail, Send, Phone, Clock, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: ['#5, 4th cross, Shetty Building, GS Palaya Road, Electronics City Phase 2, Bangalore 560100, Karnataka 560100, INDIA'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: ['services@aadhavinfotech.in'],
      link: 'mailto:services@aadhavinfotech.in',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: ['+91 9092552525'],
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
        </div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 right-[15%] animate-float opacity-20">
          <MessageCircle size={48} />
        </div>
        <div className="absolute bottom-32 left-[10%] animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Mail size={40} />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <MessageCircle size={16} className="mr-2 text-brand-green" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Contact <span className="text-brand-green">Us</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for any queries, partnerships, or project discussions.
          </p>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-white -mt-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 transition-all duration-300 border border-brand-dark/5 hover:border-brand-green/20 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-green/10 rounded-2xl mb-4 group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                  <info.icon className="text-brand-green group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="font-bold text-brand-dark mb-3">{info.title}</h3>
                {info.content.map((line, i) => (
                  info.link ? (
                    <a key={i} href={info.link} className="block text-brand-green hover:text-brand-accent transition-colors">
                      {line}
                    </a>
                  ) : (
                    <p key={i} className="text-brand-dark/70 text-sm">{line}</p>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-brand-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Map & Hours */}
            <div className="space-y-8">
              {/* Google Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-4 border-b border-brand-dark/5">
                  <h3 className="font-bold text-brand-dark flex items-center">
                    <MapPin size={18} className="mr-2 text-brand-green" />
                    Our Location
                  </h3>
                </div>
                <div className="aspect-video">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1353.0751080181797!2d80.56028443819321!3d16.421050575767342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765898428358!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aadhav Infotech Location"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-brand-dark mb-4 flex items-center">
                  <Clock size={18} className="mr-2 text-brand-green" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', active: true },
                  ].map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-brand-dark/5 last:border-0">
                      <span className="text-brand-dark/80">{schedule.day}</span>
                      <span className={`font-medium ${schedule.active ? 'text-brand-green' : 'text-brand-dark/50'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-brand-dark mb-2">
                  Send us a Message
                </h2>
                <p className="text-brand-dark/60 mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="bg-brand-green/10 border border-brand-green/20 rounded-2xl p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
                        <CheckCircle className="text-white" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-brand-dark/70">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-dark/80 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-brand-dark/10 rounded-xl focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green outline-none transition-all bg-brand-dark/[0.02]"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-dark/80 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-brand-dark/10 rounded-xl focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green outline-none transition-all bg-brand-dark/[0.02]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-brand-dark/80 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 border border-brand-dark/10 rounded-xl focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green outline-none transition-all bg-brand-dark/[0.02]"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brand-dark/80 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full px-4 py-3 border border-brand-dark/10 rounded-xl focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green outline-none transition-all resize-none bg-brand-dark/[0.02]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-green text-white py-4 rounded-xl font-semibold hover:bg-brand-green-hover hover:shadow-lg hover:shadow-brand-green/25 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
