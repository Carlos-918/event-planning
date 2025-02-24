import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Briefcase, PartyPopper, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#A3BFD9]/95 shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-white">Event Planners</div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Testimonials', 'About Us', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-[#FFD7B5] transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-[#FFD7B5] text-gray-800 px-6 py-2 rounded-full hover:bg-[#FFE7D5] transition-colors">
              Get a Quote
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4">
            {['Home', 'Services', 'Testimonials', 'About Us', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block py-2 text-gray-800 hover:text-[#A3BFD9] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            /*
            <button className="w-full mt-4 bg-[#FFD7B5] text-gray-800 px-6 py-2 rounded-full hover:bg-[#FFE7D5] transition-colors">
              Get a Quote
            </button>
            */
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80")',
        }}
      />
      <div className="absolute inset-0 bg-[#F8F4F0] bg-opacity-80" />
      
      <div className="relative container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-[#A3BFD9] mb-6"
        >
          Creating Unforgettable Moments,<br />One Event at a Time
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
        >
          Luxury event planning tailored to your vision – from dream weddings to seamless corporate events, we perfect every detail.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#FFD7B5] text-gray-800 px-8 py-3 rounded-full text-lg hover:bg-[#FFE7D5] transition-colors"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}

function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: <Heart className="w-12 h-12 text-[#A3BFD9]" />,
      title: "Wedding Planning",
      description: "From the initial consultation to the final dance, we manage every detail to create a magical wedding day."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-[#A3BFD9]" />,
      title: "Corporate Events",
      description: "Professional planning and flawless execution for conferences, galas, and corporate gatherings that leave a lasting impression."
    },
    {
      icon: <PartyPopper className="w-12 h-12 text-[#A3BFD9]" />,
      title: "Social Celebrations",
      description: "Customized solutions for birthdays, anniversaries, and private parties that bring joy and elegance to every occasion."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Expertise, Your Perfect Event</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          At Event Planners, we specialize in creating customized experiences that reflect your unique vision. Whether you're planning an intimate wedding, a high-profile corporate event, or a vibrant social celebration, our team ensures every detail is flawlessly executed.
        </p>
        
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F6F6F6] p-8 rounded-lg hover:shadow-lg transition-all hover:bg-[#FADCD9]/10"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Event Planners turned our dream wedding into a reality – every detail was handled with care and creativity.",
      author: "Sarah & Michael",
      event: "Wedding",
      image: "https://images.unsplash.com/photo-1623091411395-09e79fdbfcf5?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      quote: "The corporate gala they organized exceeded all expectations. Truly professional service.",
      author: "James Wilson",
      event: "Corporate Event",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      quote: "They made my daughter's sweet sixteen absolutely magical. Every guest was impressed!",
      author: "Emily Thompson",
      event: "Social Celebration",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="testimonials" className="py-20 bg-[#F8F4F0]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Hear From Our Happy Clients</h2>
        
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-800">{testimonial.author}</p>
              <p className="text-[#A3BFD9]">{testimonial.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Vision, Our Passion</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Event Planners, we believe every event is a unique story waiting to be told. With years of experience and a keen eye for detail, our dedicated team transforms your ideas into an unforgettable experience. We pride ourselves on creativity, meticulous planning, and personalized service that ensures every event is a true reflection of your dreams.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=300"
              alt="Event planning"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=300"
              alt="Wedding setup"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=300"
              alt="Corporate event"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=300"
              alt="Social celebration"
              className="rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 bg-[#F8F4F0]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Let's Start Planning!</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3BFD9]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3BFD9]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3BFD9]"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="event-type">Event Type</label>
                <select
                  id="event-type"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3BFD9]"
                  required
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate</option>
                  <option value="social">Social</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="event-date">Event Date</label>
                <input
                  type="date"
                  id="event-date"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3BFD9]"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3BFD9]"
                  required
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#FFD7B5] text-gray-800 px-6 py-3 rounded-full hover:bg-[#FFE7D5] transition-colors"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-[#A3BFD9] mb-4" />
              <p className="text-gray-800">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-[#A3BFD9] mb-4" />
              <p className="text-gray-800">contact@eventplanners.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-[#A3BFD9] mb-4" />
              <p className="text-gray-800">123 Event Street, City, State</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Event Planners</h3>
            <p className="text-gray-400">Creating unforgettable moments and bringing your dreams to life.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Testimonials', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wedding Planning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Celebrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© 2025 Event Planners. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FFD7B5] transform-origin-0"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
